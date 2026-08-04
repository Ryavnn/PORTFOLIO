import React from 'react';

export function BrowserMockup({ url = "localhost", children }) {
  return (
    <div className="w-full h-auto flex flex-col overflow-hidden rounded-[4px] border border-[#e5e5e5] bg-white">
      {/* Chrome bar */}
      <div className="shrink-0 flex items-center gap-[12px] px-[12px] bg-[#fafafa] border-b border-[#e5e5e5] h-[32px]">
        {/* Traffic lights */}
        <div className="flex items-center gap-[6px]">
          <span className="block w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
          <span className="block w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
          <span className="block w-[10px] h-[10px] rounded-full bg-[#28C840]" />
        </div>

        {/* URL bar */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-[6px] bg-[#e5e5e5] rounded-[4px] p-[2px_10px] max-w-[200px] w-full">
            {/* Lock icon */}
            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 opacity-50">
              <rect x="1" y="4" width="6" height="5" rx="0.5" fill="#6B7280"/>
              <path d="M2 4V2.5a2 2 0 114 0V4" stroke="#6B7280" strokeWidth="1" fill="none"/>
            </svg>
            <span className="text-[#737373] whitespace-nowrap overflow-hidden text-ellipsis text-[9px] font-mono tracking-[0.01em]">
              {url}
            </span>
          </div>
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="w-[37px]" />
      </div>

      {/* Screenshot content */}
      <div className="flex-1 overflow-hidden min-h-0 [&>img]:w-full [&>img]:h-auto [&>img]:object-contain [&>img]:block [&>img]:rounded-none">
        {children}
      </div>
    </div>
  );
}
