# 🚀 Full-Stack Web Application

A modern, production-ready web application built with **React** (frontend) and **Node.js/Express** (backend).

## 📁 Project Structure

```
fullstack-web-app/
├── frontend/                    # React + Vite application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Page components
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/                     # Express.js API server
│   ├── src/
│   │   ├── routes/             # API routes
│   │   ├── controllers/        # Business logic
│   │   ├── middleware/         # Express middleware
│   │   └── index.js            # Entry point
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Fast build tool & dev server
- **Axios** - HTTP client
- **React Router** - Client-side routing

### Backend
- **Express.js** - Web framework
- **Node.js** - JavaScript runtime
- **CORS** - Cross-origin requests
- **dotenv** - Environment variables

## ⚡ Quick Start

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:5000`

## 📡 API Endpoints

- `GET /api/health` - Health check
- `GET /api/hello` - Test endpoint

## 🌍 Environment Variables

Create `.env` files in both `backend/` and `frontend/` directories:

**backend/.env:**
```
PORT=5000
NODE_ENV=development
```

**frontend/.env:**
```
VITE_API_URL=http://localhost:5000
```

## 📦 Dependencies

**Backend:**
- express (^4.18.2)
- cors (^2.8.5)
- dotenv (^16.3.1)

**Frontend:**
- react (^18.2.0)
- react-router-dom (^6.0.0)
- axios (^1.6.0)

## 🚀 Deployment

Both frontend and backend can be deployed to:
- **Vercel** (Frontend)
- **Render/Railway/Heroku** (Backend)

## 📝 License

MIT

## 👥 Contributing

Feel free to fork and submit pull requests!
