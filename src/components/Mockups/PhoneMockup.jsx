import React from 'react';

export function PhoneMockup({ children }) {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-black rounded-[36px] border-[8px] border-[#111] shadow-[0_0_0_1px_#333,inset_0_0_0_1px_#222]">
      {/* Notch */}
      <div className="shrink-0 flex justify-center pt-[8px] pb-[4px] bg-black relative z-10">
        <div className="bg-black rounded-full w-[90px] h-[24px]" />
      </div>

      {/* Screen content */}
      <div className="flex-1 overflow-hidden min-h-0 bg-white relative [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:object-top [&>img]:block [&>img]:rounded-none">
        {children}
      </div>

      {/* Home indicator */}
      <div className="shrink-0 flex justify-center items-center bg-black pb-[8px] pt-[4px]">
        <div className="bg-[#525252] rounded-full w-[100px] h-[4px]" />
      </div>
    </div>
  );
}
