import React, { useEffect, useState } from "react";
import axios from "axios";
import useWindowSize from "../hooks/useWindowSize";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_SMS_SERVER_API_URL;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSendSMS = async () => {
    const { name, phone, email, location, consent } = formData;

    if (!name || !location || !phone || !email || !consent) {
      alert("⚠️ 모든 필드를 입력하고 개인정보 수집에 동의해야 합니다.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(API_URL, { name, phone, email, location }, { headers: { "Content-Type": "application/json" } });

      console.log("[프론트엔드] 서버 응답:", response.data);

      if (response.data.success) {
        alert("문의가 정상적으로 접수되었습니다!");
        setFormData({ name: "", phone: "", email: "", location: "", consent: false }); // 입력 필드 초기화
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

  // html
  const { width, height } = useWindowSize();
  const baseWidth = 550; // 기준 너비 (기준 창 너비를 550px로 가정)
  const baseTop = 7150;
  const dynamicTop = (width / baseWidth) * baseTop; // 비율에 맞춰 top 조정

  return (
    <div
      className="absolute w-full flex justify-center items-center py-10 bg-white"
      style={{
        top: `${dynamicTop}px`, // 창 너비에 따라 자동 조정
        left: "50%",
        transform: "translateX(-50%)", // 중앙 정렬
      }}
    >
      <div className="w-full max-w-4xl px-10 sm:px-16 md:px-20">
        <h2 className="text-2xl text-black font-semibold text-center border-b pb-10">| 가맹문의 |</h2>

        <div className="mt-6 space-y-4">
          {[
            { label: "이름", name: "name", placeholder: "이름" },
            { label: "연락처", name: "phone", placeholder: "연락처" },
            { label: "이메일", name: "email", placeholder: "이메일" },
            { label: "지역", name: "location", placeholder: "지역" },
          ].map(({ label, name, placeholder }) => (
            <div key={name} className="flex items-center flex-nowrap space-x-4 w-full">
              <label className="min-w-[80px] sm:min-w-[100px] whitespace-nowrap text-gray-700 font-medium">
                {label} <span className="text-red-500">*</span>
              </label>
              <input type="text" name={name} placeholder={placeholder} value={formData[name]} onChange={handleChange} className="flex-1 min-w-0 h-10 px-3 border border-gray-300 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
          ))}

          <div className="w-full">
            <label className="block text-gray-700 font-medium">
              개인정보 수집 및 이용동의 <span className="text-red-500">*</span>
            </label>
            <textarea rows="3" className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400" readOnly>
              개인정보 수집 및 이용에 동의합니다.
            </textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="w-5 h-5" />
            <span className="text-gray-700 text-sm">개인정보 수집 및 이용에 동의합니다.</span>
          </div>

          <button onClick={handleSendSMS} className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md shadow hover:bg-orange-600 transition">
            문의하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contect;
