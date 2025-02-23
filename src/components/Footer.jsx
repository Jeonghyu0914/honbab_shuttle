import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-10 border-t border-black text-xs sm:text-sm">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col sm:flex-row justify-between items-center sm:items-start flex-wrap gap-6 sm:gap-4">
        {/* 좌측 (로고 및 대표 전화) */}
        <div className="flex flex-col items-center sm:items-start min-w-[180px] w-full sm:w-auto text-center sm:text-left">
          <img src="logo.jpeg" alt="혼밥셔틀 로고" className="w-20 sm:w-28 h-auto mb-2" />
          <p className="text-gray-500 text-[10px] sm:text-xs">밥구정로데오 성공 창업문의</p>
          <p className="text-gray-500 text-[10px] sm:text-xs">(평일 09:30 ~ 18:00)</p>
          <p className="text-lg sm:text-xl font-bold text-yellow-500">02-533-1573</p>
        </div>

        {/* 우측 (회사 정보) */}
        <div className="text-center sm:text-xs sm:text-right flex-grow w-full sm:w-auto">
          <p>상호명: (주)산들그린</p>
          <p>대표자: 이용석 | 사업자등록번호: 204-86-12397</p>
          <p>E-MAIL: sandeulgreen@sandeulgreen</p>
          <p>주소: 서울 강남구 논현로30길 25, 성장빌딩 2층 산들그린</p>
          <p className="mt-2 text-gray-500 text-[10px] sm:text-xs">ⓒ 밥구정로데오. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
