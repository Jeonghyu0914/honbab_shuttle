import React, { useEffect, useState } from "react";
import axios from "axios";

const StickyMenu = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const API_URL = process.env.SMS_SERVER_API_URL;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSendSMS = async () => {
    const { name, location, phone, consent } = formData;

    if (!name || !location || !phone || !consent) {
      alert("⚠️ 모든 필드를 입력하고 개인정보 수집에 동의해야 합니다.");
      return;
    }

    setLoading(true);
    setMessage(""); // 메시지 초기화

    try {
      const response = await axios.post(API_URL, { name, location, phone }, { headers: { "Content-Type": "application/json" }, withCredentials: false });

      console.log("[프론트엔드] 서버 응답:", response.data);

      if (response.data.success) {
        alert("문의가 정상적으로 접수되었습니다!");
        setFormData({ name: "", location: "", phone: "", consent: false }); // 입력 필드 초기화
      } else {
        alert("문자 전송 실패: " + response.data.error);
      }
    } catch (error) {
      console.error("[프론트엔드 오류]", error);
      alert("서버 연결 실패: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="z-100 fixed bottom-0 left-0 w-full bg-red-700 p-4 shadow-lg transition-all duration-300 flex justify-center">
      <div className="flex flex-wrap justify-center items-center max-w-screen-lg w-full gap-3">
        {/* 입력 필드 그룹 */}
        <div className="flex flex-nowrap gap-2 w-full">
          <input type="text" name="name" placeholder="성함" value={formData.name} onChange={handleChange} className="flex-1 min-w-0 p-2 border border-gray-300 rounded bg-white text-gray-700 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
          <input type="text" name="location" placeholder="지역" value={formData.location} onChange={handleChange} className="flex-1 min-w-0 p-2 border border-gray-300 rounded bg-white text-gray-700 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
          <input type="text" name="phone" placeholder="연락처" value={formData.phone} onChange={handleChange} className="flex-1 min-w-0 p-2 border border-gray-300 rounded bg-white text-gray-700 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
        </div>

        {/* 체크박스 및 버튼 */}
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center space-x-2 text-white">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="w-5 h-5" />
            <span>개인정보 수집 및 이용에 동의</span>
          </label>
          <button onClick={handleSendSMS} className="bg-white text-red-600 font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition">
            {loading ? "전송 중..." : "문의하기"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyMenu;
