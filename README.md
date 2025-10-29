# 🛍️ **E-Commerce Lite**

### *Modern React E-Commerce Platform*

---

## 📋 **Overview**

**E-Commerce Lite** adalah platform e-commerce modern berbasis **React**, **TypeScript**, dan **Tailwind CSS**.
Aplikasi ini dirancang untuk memberikan pengalaman belanja online yang lengkap — mulai dari katalog produk, sistem login dengan role, hingga dashboard admin.
Dilengkapi **dark mode**, **responsif di semua perangkat**, dan **manajemen state yang kuat**.

**Tech Badges:**
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

---

## ✨ **Features**

### 🎯 **Core Features**

* 🛍️ **Product Catalog** – Lihat produk dengan fitur **filtering** & **sorting**
* 🔐 **Authentication System** – Login dengan role **User** & **Admin**
* 🛒 **Shopping Cart** – Manajemen keranjang belanja **real-time**
* 💳 **Checkout Process** – Proses checkout **aman dan mudah**
* 📊 **Admin Dashboard** – Analitik & manajemen produk
* 🌙 **Dark Mode** – Toggle tema gelap & terang
* 📱 **Responsive Design** – Optimized untuk semua perangkat

---

### 🛠️ **Technical Features**

* ✅ **Type Safety** – Full implementasi **TypeScript**
* ⚙️ **State Management** – Menggunakan **React Context + Local Storage**
* 🌐 **API Integration** – Terhubung dengan **FakeStore API**
* 🧱 **Error Handling** – Menggunakan **error boundaries**
* ⏳ **Loading States** – Transisi halus & UX yang lancar

---

## 🚀 **Quick Start**

### **Prerequisites**

* Node.js 16+
* npm atau yarn

### **Installation**

```bash
# Clone repository
git clone <repository-url>
cd ecommerce-lite

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

---

## 🏗️ **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── UI/              # Button, Loading, dsb
│   ├── Layout/          # Navbar, PrivateRoute
│   ├── Product/         # Komponen produk
│   ├── Cart/            # Komponen keranjang belanja
│   └── Checkout/        # Komponen proses checkout
├── contexts/            # Context Providers
├── hooks/               # Custom React Hooks
├── pages/               # Komponen halaman
├── types/               # Definisi tipe TypeScript
└── App.tsx              # Root component
```

---

## 🔧 **Core Components**

### 🔐 **Authentication System**

* **User:** dapat melihat & membeli produk
* **Admin:** akses ke dashboard dan semua fitur user

> **Admin Credentials:**
> Username: *any*
> Password: `Admin1234#`

---

### 🛍️ **Product Management**

* Product Listing: dengan **search**, **filter**, dan **sort**
* Product Details: lengkap dengan **rating system**
* Real-time Cart: dengan **data persistence**

---

### ⚙️ **State Management**

```tsx
<ThemeProvider>   // Dark/Light theme
<AuthProvider>    // User authentication  
<CartProvider>    // Shopping cart
<ToastProvider>   // Notifications
```

---

## 🎨 **Design System**

### 🎨 **Color Palette**

| Element    | Color                | Hex     |
| ---------- | -------------------- | ------- |
| Primary    | Blue 600             | #2563eb |
| Secondary  | Emerald 600          | #059669 |
| Background | Gradient gray → blue |         |
| Dark Mode  | Gray 900             | #111827 |

### ✍️ **Typography**

* **Headers:** Bold + gradient text
* **Body:** System fonts dengan readability optimal
* **Responsive:** Scalable di semua ukuran layar

---

## 📱 **Pages Overview**

### 🏠 **Home Page**

* Hero section dengan CTA
* Feature highlights
* Company statistics
* Responsive grid layout

### 🛍️ **Products Page**

* Product grid + filtering
* Search by name/description
* Category filters
* Price & rating sorting

### 🔐 **Authentication**

* Login form dengan role selection
* Protected routes
* Auto redirect setelah login

### 📊 **Admin Dashboard**

* Financial summaries
* Sales charts
* Revenue analytics
* Quick actions panel

---

## 🔒 **Security Features**

* Route protection (Admin Only)
* Input validation (form)
* Local storage encryption
* XSS protection

---

## 🚀 **Performance**

* ⚡ **Code Splitting** – React lazy loading
* 🖼️ **Image Optimization** – Responsive images
* 📦 **Bundle Optimization** – Tree shaking
* 💾 **Caching Strategy** – Local storage persistence

---

## 🛠️ **Development Scripts**

```bash
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview hasil build
npm run lint      # Cek linting
```

**Code Style:**

* ESLint + Prettier setup
* TypeScript strict mode
* Component-based architecture
* Custom hooks untuk business logic

---

## 🌐 **API Integration**

```ts
// FakeStore API - Product Data
API Endpoint: https://fakestoreapi.com/products
// Features: Products, Categories, Ratings, Images
```

---

## 📈 **Deployment**

### **Build Process**

```bash
npm run build
# Output: /dist folder (optimized assets)
```

### **Environment Variables**

```
VITE_API_URL=https://fakestoreapi.com
VITE_APP_TITLE=E-Commerce Lite
```

---

## 🤝 **Contributing**

1. Fork project
2. Buat branch baru

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit perubahan

   ```bash
   git commit -m 'Add AmazingFeature'
   ```
4. Push ke branch

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Buat **Pull Request**

---

## 📄 **License**

Proyek ini dilisensikan di bawah **MIT License**
Lihat file `LICENSE` untuk detail.

---

## 🏆 **Highlights**

### 🎯 **User Experience**

* Navigasi intuitif & cepat
* Performa tinggi
* Aksesibilitas (WCAG Compliant)
* Mobile-first responsive design

### 🔧 **Developer Experience**

* Type safety penuh
* Arsitektur modular & reusable
* Tailwind CSS untuk kustomisasi cepat
* Dokumentasi jelas & terstruktur

### 🚀 **Business Value**

* Arsitektur scalable
* Kode maintainable & clean
* Menggunakan teknologi modern
* Siap untuk produksi 🚀

---

> 💡 **Built with ❤️ using React, TypeScript, and Tailwind CSS**

