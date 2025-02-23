import express from "express";
import cors from "cors";
import Coolsms from "coolsms-node-sdk";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(
  cors({
    origin: "*", // 모든 도메인 허용 (보안상 필요하면 특정 도메인만 허용)
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

const sms = new Coolsms.default(process.env.COOLSMS_API_KEY, process.env.COOLSMS_API_SECRET);

app.post("/send-sms", async (req, res) => {
  const { name, phone, email, location } = req.body;

  console.log("[요청 도착] 문의 정보:", { name, email, phone, location });

  if (!name || !location || !phone || !email) {
    return res.status(400).json({ error: "모든 필드를 입력해야 합니다." });
  }

  const messageBody = `문의 요청\n이름: ${name}\n연락처: ${phone}\n이메일: ${email}\n지역: ${location}\n`;

  try {
    const response = await sms.sendOne({
      to: "01040037751", // 관리자의 전화번호
      from: process.env.SMS_SENDER_NUMBER, // CoolSMS에 등록된 발신번호
      text: messageBody, // 보낼 메시지 내용
    });

    console.log("[성공] 문자 전송 완료:", response);
    res.status(200).json({ success: true, message: "문자가 성공적으로 전송되었습니다!" });
  } catch (error) {
    console.error("[CoolSMS 오류]", error);
    res.status(500).json({ error: "문자 전송에 실패했습니다.", details: error.message });
  }
});

// 서버 실행
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
