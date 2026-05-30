# Zoha Qamar: Personal Portfolio Website

An interactive personal portfolio built as a **pixel-art desktop experience** with an integrated AI chatbot.

Designed to showcase my projects, skills, and experience through a unique interactive interface.

## 🚀 Live Demo
👉 [Visit my portfolio](https://zohaq11.github.io/portfolio) 

## ✨ Features

- 🖥️**Interactive Desk UI:** Clickable objects linking to my GitHub, LinkedIn, Resume, and site pages.
- 🎨**Pixel Art Design:** Icons are custom designed and match the color scheme.
- 📱**Responsive Layout:** Works on desktops and adjusts on smaller screens.
- 🔗**React Router:** Client-side navigation for About and Contact pages.
- 🤖**AI Chatbot:** Ask questions about my experience, skills, and projects
- ⚡**Fully deployed:** Hosted via **GitHub Pages** and backend powered by **Vercel** serverless functions.

## 🧠 [AI Chatbot Integration](https://github.com/zohaq11/portfolio-api)

- Powered by a custom Node.js + OpenAI backend
- Uses Retrieval-Augmented Generation (RAG)
- Retrieves structured resume + personal facts
- Maintains short-term conversation context
- Strictly scoped to answering questions about Zoha

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Routing:** React Router DOM
- **Backend (Chatbot):** Node.js serverless functions + OpenAI API (via Vercel)
- **Deployment:** GitHub Pages (frontend) + Vercel (backend)

## 🧩 Architecture

Frontend (React UI)
→ Sends chat request
→ Backend API (Vercel)
→ RAG + OpenAI
→ Response returned to UI