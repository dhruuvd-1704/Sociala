# 📱 Sociala

**Sociala** is a modern, full-stack social media application that allows users to connect, share posts, chat in real-time, and interact with each other's content.  
Built with **React + Vite** on the frontend, **Node.js + Express** on the backend, and **MongoDB** for data storage, Sociala offers a fast, responsive, and secure user experience.

---

## 🚀 Features

- **User Authentication & Authorization**
  - Sign up, log in, and log out
  - Password hashing with **bcrypt**
  - JWT-based authentication
- **Profile Management**
  - Upload & update profile pictures (Cloudinary storage)
  - Edit profile details
- **Post Creation & Interaction**
  - Create, edit, delete posts
  - Like, comment, and share functionality
  - Image uploads with **Multer** and optimized using **Sharp**
- **Real-Time Chat**
  - One-to-one messaging using **Socket.IO**
  - Online/offline status tracking
- **Responsive UI**
  - Built with **Tailwind CSS** for a clean, adaptive design
- **Persistent State Management**
  - Powered by **Redux Toolkit** and **redux-persist**
- **Dark/Light Mode Support**
  - Theme switching with **next-themes**

---

## 🛠 Tech Stack

### **Frontend**
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Socket.IO Client](https://socket.io/)
- [Axios](https://axios-http.com/)
- [Radix UI](https://www.radix-ui.com/) Components
- [React Router v7](https://reactrouter.com/)

### **Backend**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [Socket.IO](https://socket.io/)
- [Cloudinary](https://cloudinary.com/) for media storage
- [Multer](https://github.com/expressjs/multer) for file uploads
- [Sharp](https://sharp.pixelplumbing.com/) for image optimization
- [JWT](https://jwt.io/) for authentication

---

## 📂 Project Structure

```
Sociala/
│
├── backend/                # Backend API & server code
│   ├── index.js             # Server entry point
│   ├── config/              # DB & other configs
│   ├── controllers/         # Route logic
│   ├── models/              # Mongoose models
│   ├── routes/              # Express route definitions
│   ├── middlewares/         # Auth & other middlewares
│   └── utils/               # Utility functions
│
├── frontend/                # Frontend React code
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/           # Page views
│   │   ├── redux/           # Redux slices & store
│   │   ├── hooks/           # Custom hooks
│   │   └── App.jsx          # App entry
│   └── public/              # Static assets
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dhruuvd-1704/Sociala.git
cd Sociala
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

Run the backend server:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

---

## 🖥 Usage

1. Start the backend and frontend servers.
2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```
3. Sign up or log in to start using the platform.

---

## 📌 API Endpoints (Backend)

| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| POST   | `/api/auth/register`    | Register a new user       |
| POST   | `/api/auth/login`       | Log in a user             |
| GET    | `/api/users/:id`        | Get user profile          |
| PUT    | `/api/users/:id`        | Update user profile       |
| POST   | `/api/posts`            | Create a post             |
| GET    | `/api/posts`            | Get all posts             |
| PUT    | `/api/posts/:id`        | Update a post             |
| DELETE | `/api/posts/:id`        | Delete a post             |
| GET    | `/api/chat/:userId`     | Fetch chat messages       |
| POST   | `/api/chat`             | Send a chat message       |

---

## 🤝 Contributing

Contributions are welcome!  
To contribute:
1. Fork the repo
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 💡 Acknowledgements
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.IO](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
