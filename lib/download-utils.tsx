export interface DownloadItem {
  url: string;
  filename: string;
  fileSize?: string;
  format?: string;
}

export const downloadFile = async (item: DownloadItem): Promise<void> => {
  try {
    // For demo purposes, we'll simulate a download
    // In a real app, this would fetch the actual file
    const response = await fetch(item.url).catch(() => {
      // If fetch fails (file doesn't exist), create a mock download
      return new Response(createMockFileContent(item), {
        headers: {
          "Content-Type": getMimeType(item.format || "pdf"),
          "Content-Disposition": `attachment; filename="${item.filename}"`,
        },
      });
    });

    if (!response.ok) {
      throw new Error("Download failed");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = item.filename;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success notification
    showDownloadNotification(item.filename, "success");
  } catch (error) {
    console.error("Download error:", error);
    showDownloadNotification(item.filename, "error");
  }
};

const createMockFileContent = (item: DownloadItem): string => {
  const format = item.format?.toLowerCase() || "pdf";

  if (format === "pdf") {
    return `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
72 720 Td
(${item.filename}) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000206 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
299
%%EOF`;
  } else if (format === "excel") {
    return `Form Name,Description,Status
${item.filename},Sample form content,Active`;
  } else {
    return `This is a sample ${format.toUpperCase()} file for ${item.filename}`;
  }
};

const getMimeType = (format: string): string => {
  const mimeTypes: { [key: string]: string } = {
    pdf: "application/pdf",
    excel: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    word: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    txt: "text/plain",
  };
  return mimeTypes[format.toLowerCase()] || "application/octet-stream";
};

const showDownloadNotification = (
  filename: string,
  type: "success" | "error"
): void => {
  // Create a simple notification
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${
    type === "success"
      ? "bg-green-100 border border-green-200 text-green-800"
      : "bg-red-100 border border-red-200 text-red-800"
  }`;

  notification.innerHTML = `
    <div class="flex items-center gap-2">
      <div class="w-5 h-5">
        ${
          type === "success"
            ? '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
            : '<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>'
        }
      </div>
      <div>
        <div class="font-medium">
          ${type === "success" ? "Download Started" : "Download Failed"}
        </div>
        <div class="text-sm opacity-75">
          ${
            type === "success"
              ? `${filename} is downloading...`
              : `Failed to download ${filename}`
          }
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
};

export const downloadMultipleFiles = async (
  items: DownloadItem[]
): Promise<void> => {
  for (const item of items) {
    await downloadFile(item);
    // Add small delay between downloads
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
};
