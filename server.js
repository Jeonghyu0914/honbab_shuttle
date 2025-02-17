import express from "express";
import cors from "cors";
import Coolsms from "coolsms-node-sdk";
import "dotenv/config";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors()); // CORS 정책 허용

const sms = new Coolsms.default(process.env.COOLSMS_API_KEY, process.env.COOLSMS_API_SECRET);

app.use(
  cors({
    origin: "*", // 모든 도메인 허용 (보안상 필요하면 특정 도메인만 허용)
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.post("/send-sms", async (req, res) => {
  const { name, location, phone } = req.body;

  console.log("[요청 도착] 문의 정보:", { name, location, phone });

  if (!name || !location || !phone) {
    return res.status(400).json({ error: "모든 필드를 입력해야 합니다." });
  }

  const messageBody = `문의 요청\n이름: ${name}\n지역: ${location}\n연락처: ${phone}`;

  try {
    const response = await sms.sendOne({
      to: "01057882282", // 관리자의 전화번호
      from: "01040037751", // CoolSMS에 등록된 발신번호
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
