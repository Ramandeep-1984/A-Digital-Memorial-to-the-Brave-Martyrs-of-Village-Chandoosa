# ☬ Chandoosa Memorial — The Immortals of 1947

A digital memorial website dedicated to the brave Sikh martyrs of **Village Chandoosa, Baramulla, Kashmir** who sacrificed their lives during the **1947 Kabali raids**.

> *"Those who died for truth shall never be forgotten."*

---

## 🪔 About This Project

This is a **QR-code accessible memorial website** designed to be placed at the physical memorial site in Chandoosa. Visitors can scan the QR code and instantly access the history, photos, and names of the shaheeds on their smartphones.

On **22 October 1947**, tribal raiders (Kabalis) entered Kashmir through Muzaffarabad and Uri. The Sikh community of Chandoosa faced immense persecution but refused to abandon their faith. Many brave men, women, and children embraced shaheedi with honor and unwavering devotion to Sikhi.

<centre><img src="Website-Qr.png" alt="Alt Text" width="300"></centre>

---

## ✨ Features

- **🌐 Trilingual Support** — English, ਪੰਜਾਬੀ (Punjabi/Gurmukhi), اردو (Urdu) with RTL support
- **📱 Mobile-First Design** — Optimized for smartphones (QR code access)
- **🖼️ Martyrs' Gallery** — Photo gallery with lightbox viewing
- **📜 Names Section** — Complete list of 24 shaheeds with serial numbers
- **⚔️ JAIKARA Tribute** — Interactive tribute button with falling swords & Khanda animation
- **🔊 Sacred Audio** — Sound plays when tribute is offered
- **🎨 Sikh Heritage Theme** — Deep Saffron, Charcoal Black, Antique Gold color palette
- **⚡ Fast Loading** — Single-file build, optimized for mobile data

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **Tailwind CSS 4** | Styling |
| **Google Fonts** | Cinzel, Lora, Noto Sans Gurmukhi, Noto Nastaliq Urdu |

---

## 📂 Project Structure

```
├── src/
│   ├── App.tsx                 # Main app component
│   ├── translations.ts         # All text in 3 languages + martyrs data
│   ├── index.css               # Global styles & animations
│   └── components/
│       ├── Navbar.tsx          # Navigation with language switcher
│       ├── HeroSection.tsx     # Hero with title & quote
│       ├── HistorySection.tsx  # The Sacrifice - historical narrative
│       ├── GallerySection.tsx  # Photo gallery of martyrs
│       ├── NamesSection.tsx    # Complete list of shaheed names
│       ├── TributeSection.tsx  # JAIKARA interactive tribute
│       ├── FallingPetals.tsx   # Falling swords & Khanda animation
│       ├── Lightbox.tsx        # Full-screen image viewer
│       └── Footer.tsx          # Village name & Gurbani quote
├── public/
│   └── images/                 # Local images (if any)
├── index.html                  # Entry HTML
└── README.md                   # This file
```

---

## 🚀 How to Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The production build generates a single `dist/index.html` file.

---

## 🌐 Deployment

### Recommended: Vercel (Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy ✅

Your site will be live at: `https://your-project.vercel.app`

### Other Options

- **Netlify** — [netlify.com](https://netlify.com)
- **GitHub Pages** — [pages.github.com](https://pages.github.com)

---

## 📱 QR Code Tips

1. Use a **Dynamic QR Code** generator (allows URL changes without reprinting)
2. Recommended: [qrcode-monkey.com](https://www.qrcode-monkey.com/)
3. Add Khanda ☬ symbol as logo in the QR center
4. Test on multiple phones before printing on the physical memorial

---

## 📜 Shaheeds of Chandoosa (1947)

### ⚔️ Brave Warriors
1. S. Sacha Singh
2. S. Gurbaksh Singh
3. S. Aya Singh
4. S. Saran Singh
5. S. Raja Singh
6. S. Maeya Singh
7. S. Dheeraj Singh
8. S. Kapoor Singh
9. S. Ujagar Singh
10. S. Rangeel Singh
11. S. Hajar Singh
12. S. Mohan Singh
13. S. Ramaya Singh

### 🙏 Brave Mothers & Sisters
14. Smt. Bholi Kour
15. Smt. Haro Kour
16. Smt. Thakar Kour
17. Smt. Gopi Kour
18. Kaki Pritam Kour

### 🕊️ Young Innocents
19. Kaka Jeet Singh
20. Kaka Dhayan Singh
21. Kaka Deedhar Singh

*...and three young children whose names remain unknown.*

---

## 🙏 Credits

**Website Sewa by Ramandeep Singh**

---

## 📖 Annual Remembrance

Every year, the people and Sikh families of Chandoosa organize an **Akhand Path Sahib** in the sacred memory of the shaheeds of 1947. Through Ardaas, Kirtan, and prayers, the community pays tribute to those brave souls who chose shaheedi over abandoning their religion.

---

## ☬ Gurbani

> *"One who dies while fighting for righteousness, attains the highest glory."*
> 
> — Sri Guru Granth Sahib Ji

---

## 📄 License

This project is created with love and reverence for the shaheeds of Chandoosa. Feel free to use this as a template for other memorial projects.

---

**ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ ॥**
