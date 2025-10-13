export const TOKEN_KEY = "auth_token";
export const EXPIRES_AT_KEY = "auth_expires_at"; // ms epoch

export function getCookie(name: string): string | null {
  try {
    const raw = document.cookie;
    if (!raw) return null;
    const parts = raw.split(";");
    for (const part of parts) {
      const [k, ...rest] = part.trim().split("=");
      if (k === name) {
        const v = rest.join("=").trim();
        return v ? decodeURIComponent(v) : "";
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function clearAuth() {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRES_AT_KEY);
  } catch {}
  document.cookie = `${TOKEN_KEY}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export function getValidLocalToken(): string | null {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return null;
    const expMs = Number(localStorage.getItem(EXPIRES_AT_KEY) || 0);
    if (!expMs) return token;
    if (Date.now() < expMs) return token;
    clearAuth();
    return null;
  } catch {
    return null;
  }
}

export function getAuthToken(): string | null {
  const ls = getValidLocalToken();
  if (ls) return ls;

  const ck = getCookie(TOKEN_KEY);
  return ck && ck.trim() ? ck : null;
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}

export function setAuthFromLoginResponse(json: any) {
  const token =
    typeof json?.token === "string"
      ? json.token
      : typeof json?.access_token === "string"
      ? json.access_token
      : json?.data?.token;

  if (!token) return { ok: false as const, reason: "missing_token" };

  const expiresInSec =
    typeof json?.expires_in === "number" ? Number(json.expires_in) : undefined;

  const now = Date.now();
  const expiresAtMs = expiresInSec ? now + expiresInSec * 1000 : undefined;

  try {
    localStorage.setItem(TOKEN_KEY, token);
    if (expiresAtMs) localStorage.setItem(EXPIRES_AT_KEY, String(expiresAtMs));
    else localStorage.removeItem(EXPIRES_AT_KEY);
  } catch {
  }

  const secure = location.protocol === "https:" ? "; Secure" : "";
  const maxAge = expiresInSec ? `; Max-Age=${expiresInSec}` : "";
  document.cookie = `${TOKEN_KEY}=${token}; Path=/; SameSite=Lax${secure}${maxAge}`;

  return { ok: true as const, token, expiresAtMs };
}
