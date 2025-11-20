# 🌐 Developer Portfolio — 2025  
A modern, clean, and fast personal developer portfolio built with **HTML, CSS, JavaScript**, smooth scroll animations, SVG masking effects, dynamic profile image rotation, and a minimal Nginx Docker setup ready for deployment.

---

## 🚀 Features

- **Modern clean UI** with glassmorphism & smooth gradients  
- **Hero section** with animated glowing border  
- **Auto-rotating profile image** (JS fade transition)  
- **Scroll animations** using IntersectionObserver  
- **Floating glass navigation bar** with active-section tracking  
- **Tech marquee** with seamless looping and motion-reduction support  
- **Skills section** with animated progress bars  
- **Timeline-style experience section**  
- **Fully responsive layout**  
- **Docker-ready** — run anywhere with one command  
- **Accessible** (prefers-reduced-motion, semantic HTML)

---

## 🛠️ Tech Stack

**Frontend:**  
- HTML5  
- CSS3 (Flexbox, Grid, gradients, animations)  
- Vanilla JavaScript (ES6+)  
- SVG masking & filters  

**Tooling:**  
- Docker (Nginx production image)

---

## 📁 Folder Structure

```
/
├── assets/
│   ├── images/
│   └── resume.pdf
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── index.html
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
└── README.md
```

---

## 🐳 Running with Docker

### **Build the image And Run the container in one cli**
```bash
docker-compose up -d --build
```
Your portfolio is now available at:

👉 **http://localhost:8080**

---

## ✨ Customization

In `js/main.js`, you can customize:

```js
const images = [
  'assets/images/avatar.jpeg',
  'assets/images/DSC_5698.jpg'
];
```

You can add as many images as you want — the profile image rotation will handle them automatically.

---

## 📬 Contact

**Yassine Chouyoukh**  
Full Stack Developer — Morocco  
📧 yassinechouyoukh33@email.com  
🔗 LinkedIn: https://www.linkedin.com/in/yassine-chouyoukh/  
🔗 GitHub: https://github.com/yassinechouyoukh

---

## ⭐ Feedback

If you like this project, feel free to **star the repo** ⭐  
If you want improvements or extra animations, feel free to ask!
