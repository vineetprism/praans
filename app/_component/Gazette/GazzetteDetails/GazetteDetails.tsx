"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import SanitizedHtmlContent from "@/app/SanitizedHtmlContent/page";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

export type GazetteVM = {
  title: string;
  stateName: string;
  shortDescription: string;
  updatedLabel: string;
  effectiveLabel: string;
  safeHtml: string;
  downloadUrl: string | null;
};

export default function GazetteView({ vm }: { vm: GazetteVM }) {
  const router = useRouter();

  // Auto-download after returning from login with ?dl=...
  useEffect(() => {
    const path =
      typeof window !== "undefined" ? window.location.pathname : "/gazette-details";
    const search =
      typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <div className="w-full px-0 py-3 sm:py-4 lg:py-5">
        <div className="grid gap-4 lg:gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* PopularSearch on small screens */}
          <div className="md:hidden px-3 sm:px-4 lg:px-6">
            <Card>
              <CardContent className="p-4 md:p-3 lg:p-3 xl:p-3 2xl:p-6">
                <PopularSearch className="mb-0" />
              </CardContent>
            </Card>
          </div>

          {/* Main */}
          <main className="min-w-0 px-3 sm:px-4 lg:px-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-l-4 border-l-orange-500 p-3 sm:p-4 lg:p-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1 min-w-0">
                  <h1 className="font-bold text-gray-900 leading-tight mb-1 text-base sm:text-lg lg:text-sm xl:text-lg">
                    {vm?.title}
                  </h1>
                  <div className="text-xs sm:text-sm text-gray-500 mb-2 space-y-1">
                    {(vm?.updatedLabel || vm?.effectiveLabel) && (
                      <div>
                        {vm?.updatedLabel && (
                          <>
                            <span className="font-medium text-gray-700">
                              Updated Date:
                            </span>{" "}
                            {vm?.updatedLabel}{" "}
                          </>
                        )}
                        {vm?.effectiveLabel && (
                          <>
                            <span className="font-medium text-gray-700">
                              / Effective Date:
                            </span>{" "}
                            {vm?.effectiveLabel}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-xs sm:text-sm px-2 py-1 flex-shrink-0">
                  {vm?.stateName}
                </Badge>
              </div>

              {vm?.safeHtml && <SanitizedHtmlContent html={vm?.safeHtml} />}

              <div className="flex justify-start mt-3">
                {vm?.downloadUrl ? (
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-5 sm:py-2 text-sm sm:text-base rounded-md font-medium inline-flex items-center gap-2 hover:cursor-pointer"
                    aria-label="Download Gazette"
                    onClick={() => openProtectedDownload(router, vm.downloadUrl!)}
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                ) : null}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="min-w-0 px-3 sm:px-4 lg:px-6 hidden md:block">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-4 md:p-3 lg:p-3 xl:p-3 2xl:p-6">
                  <PopularSearch className="mb-0" />
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
