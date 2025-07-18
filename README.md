# 📧 Email Writter With Spring AI

A full-stack, AI-powered email writing assistant built using **Spring Boot + Spring AI** for the backend and **React + Vite + Tailwind CSS** for the frontend.  
It features a modern, animated, and icon-enhanced UI for a seamless writing experience.

---

## 📁 Project Structure
Email-Writter-With-Spring-AI/
├── backend/ # Spring Boot backend (email-writter-sb)
│ └── ...
├── frontend/ # React + Vite + Tailwind frontend (email-writter-react)
│ └── src/
│ ├── components/
│ ├── pages/
│ └── ...
├── README.md
---

## 🚀 Live Preview (Optional)

🔗 Coming soon...

---

## 💻 Tech Stack

### 🔙 Backend (`email-writter-sb`)
- Java 17
- Spring Boot 3
- Spring AI (Gemini/ChatGPT integration)

### 🌐 Frontend (`email-writter-react`)
- React 18
- Vite
- materialui library used
---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Altrin2001/Email-Writter-With-Spring-AI.git
cd Email-Writter-With-Spring-AI

cd email-writter-sb
./mvnw spring-boot:run
📍 Backend runs on: http://localhost:8080

3️⃣ Run the Frontend
bash
Copy
Edit
cd ../email-writter-react
npm install
npm run dev
🌐 Frontend runs on: http://localhost:3000

🔐 Environment Setup
📦 Backend: application.properties
yaml
Copy
Edit
spring:
  gemini:
    api:
      url: ${GEMINI_URL}
      key: ${GEMINI_KEY}
📦 Frontend: .env
env
Copy
Edit
VITE_API_URL=http://localhost:9191
📌 Features

✅ Fully responsive, mobile-friendly design

🤝 Contributing
Fork this repo

Create a new branch: git checkout -b feature/my-feature

Make your changes

Commit and push: git push origin feature/my-feature

Open a pull request ✅

💬 Feedback
Feel free to submit issues or feature requests.
Made with ❤️ by Altrin2001
---

### ✅ To use:
1. Paste this into your `README.md`.
2. Replace `"Coming soon..."` with your deployed frontend link (if available).
3. Add screenshots by dragging and dropping into GitHub or linking uploaded images.
4. Adjust `.env` and `application.properties` paths if different.













