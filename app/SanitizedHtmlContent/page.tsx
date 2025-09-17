"use client";

import DOMPurify from "dompurify";

interface SanitizedHtmlContentProps {
  html: string;
}

export default function SanitizedHtmlContent({ html }: SanitizedHtmlContentProps) {
  const sanitizeHTML = (htmlContent: string) => {
    if (typeof window !== "undefined") {
      return DOMPurify.sanitize(htmlContent, {
        ALLOWED_TAGS: [
          "p", "br", "strong", "em", "u", "b", "i",
          "h1", "h2", "h3", "h4", "h5", "h6",
          "ul", "ol", "li", "blockquote", "div", "span", "a",
          "pre", "code", "mark", "strike",
        ],
        ALLOWED_ATTR: ["href", "target", "class", "id", "type", "start", "reversed", "style", "color", "data-as-button"],
        KEEP_CONTENT: true,
        ADD_ATTR: ["type", "start"],
      });
    }
    return htmlContent; 
  };

  return (
    <div 
      className="
        prose prose-sm max-w-none text-gray-700 leading-relaxed
        [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:text-[15px]
        [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-4 [&_h1]:mt-6
        [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_h2]:mt-5
        [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mb-3 [&_h3]:mt-4
        [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-slate-700 [&_h4]:mb-2 [&_h4]:mt-3
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
        [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:text-[14px]
        [&_ul>li]:marker:text-orange-500 
        [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold
        [&_ul_ul]:list-circle [&_ul_ul]:mt-2 [&_ul_ul]:pl-4
        [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2 [&_ol_ol]:pl-4
        [&_strong]:font-semibold [&_strong]:text-slate-900
        [&_b]:font-semibold [&_b]:text-slate-900
        [&_a]:text-orange-600 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium
        [&_mark]:bg-yellow-200 [&_mark]:px-1 [&_mark]:rounded [&_mark]:text-gray-800
        [&_strike]:line-through [&_strike]:text-gray-500
        [&_u]:underline [&_u]:decoration-orange-400
        [&_em]:italic [&_em]:text-gray-600
        [&_i]:italic [&_i]:text-gray-600
        [&_pre]:bg-gray-100 [&_pre]:p-3 [&_pre]:rounded [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:mb-4
        [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
        [&_blockquote]:border-l-4 [&_blockquote]:border-orange-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-4
        p-3 sm:p-4 rounded-md lg:rounded-lg
      "
      dangerouslySetInnerHTML={{ __html: sanitizeHTML(html) }}
    />
  );
}
