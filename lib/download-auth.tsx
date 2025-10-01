import { isAuthenticated } from "./auth";

const MAX_DOWNLOADS = 40;
const DL_COUNT_KEY = "dl_count";
const DL_RESET_KEY = "dl_reset_key";
const LAST_TRY_DL_URL_KEY = "post_login_dl";

function buildResetKey(date = new Date(), tz = "Asia/Kolkata") {
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return fmt.format(date);
}

function readState() {
  try {
    const count = Number(localStorage.getItem(DL_COUNT_KEY) || "0");
    const key = localStorage.getItem(DL_RESET_KEY) || "";
    return { count, key };
  } catch {
    return { count: 0, key: "" };
  }
}

function writeState(count: number, key: string) {
  try {
    localStorage.setItem(DL_COUNT_KEY, String(count));
    localStorage.setItem(DL_RESET_KEY, key);
  } catch {}
}

function resetIfNeeded() {
  const todayKey = buildResetKey();
  const { count, key } = readState();
  if (key !== todayKey) {
    writeState(0, todayKey);
    return { count: 0, key: todayKey };
  }
  return { count, key };
}

export function getRemainingDownloads() {
  const { count } = resetIfNeeded();
  return Math.max(0, MAX_DOWNLOADS - count);
}

function increment() {
  const { count, key } = resetIfNeeded();
  writeState(Math.min(MAX_DOWNLOADS, count + 1), key);
}

export function savePendingDownload(url: string) {
  try {
    sessionStorage.setItem(LAST_TRY_DL_URL_KEY, url);
  } catch {}
}

export function consumePendingDownload(): string | null {
  try {
    const v = sessionStorage.getItem(LAST_TRY_DL_URL_KEY);
    if (v) sessionStorage.removeItem(LAST_TRY_DL_URL_KEY);
    return v;
  } catch {
    return null;
  }
}

export function openProtectedDownload(
  router: { push: (url: string) => void },
  downloadUrl: string
) {
  if (!downloadUrl) return;

  if (!isAuthenticated()) {
    const here =
      typeof window !== "undefined"
        ? window.location.pathname + window.location.search
        : "/";
    const nextWithDl =
      here + (here.includes("?") ? "&" : "?") + `dl=${encodeURIComponent(downloadUrl)}`;

    savePendingDownload(downloadUrl);
    router.push(`/login?next=${encodeURIComponent(nextWithDl)}`);
    return;
  }

  const remaining = getRemainingDownloads();
  if (remaining <= 0) {
    alert("Download limit reached (40/day). Please try again tomorrow.");
    return;
  }
  increment();
  window.open(downloadUrl, "_blank", "noopener,noreferrer");
}

export function handleAutoDownloadOnReturn(
  router: { replace: (url: string) => void },
  currentPath: string,
  currentSearch: string
) {
  const usp = new URLSearchParams(currentSearch.replace(/^\?/, ""));
  const dl = usp.get("dl");
  const maybeFromSession = consumePendingDownload();

  const target = maybeFromSession || (dl ? decodeURIComponent(dl) : null);

  if (target && isAuthenticated()) {
    const remaining = getRemainingDownloads();
    if (remaining > 0) {
      increment();
      window.open(target, "_blank", "noopener,noreferrer");
    } else {
      alert("Download limit reached (40/day). Please try again tomorrow.");
    }

    usp.delete("dl");
    const cleaned = usp.toString();
    router.replace(`${currentPath}${cleaned ? `?${cleaned}` : ""}`);
  }
}
