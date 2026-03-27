# Dishank Agrawal - Portfolio

A modern, high-performance portfolio website built with React, Node.js, and SQLite.

## Features
- **Modern UI**: High-end minimalist design with glassmorphism and smooth animations.
- **Dynamic Projects**: Projects are fetched from a SQLite database via a Node.js API.
- **Interactive Command Palette**: Quickly navigate the site using `Ctrl + K`.
- **Contact Form**: Integrated with Nodemailer for direct email delivery.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Light/Dark Mode**: Native theme support with a premium "Liquid Glass" look in light mode.

## Project Structure
- `/frontend`: React + Vite application.
- `/backend`: Node.js + Express API with SQLite.

## 🚀 Deployment Guide

### 1. Backend (Render.com)
1. **New Web Service**: Connect your GitHub repo.
2. **Root Directory**: `backend`
3. **Environment Variables**:
   - `PORT`: `5000`
   - `EMAIL_USER`: Your Gmail
   - `EMAIL_PASS`: Your Google App Password
   - `DATABASE_PATH`: `/var/lib/data/portfolio.db`
4. **Persistent Disk (Crucial for SQLite)**:
   - Go to **Advanced** > **Add Disk**.
   - Name: `data`
   - Mount Path: `/var/lib/data`
   - Size: `1GB` (Minimum)
5. **Auto-Seed**: The `build` script (`node seed.js`) runs automatically on every deploy, keeping the database in sync with your `seed.js` data.

### 2. Frontend (Vercel)
1. **New Project**: Connect your GitHub repo.
2. **Framework Preset**: `Vite`
3. **Root Directory**: `frontend`
4. **Environment Variables**:
   - `VITE_API_BASE_URL`: Your Render Web Service URL (e.g., `https://portfolio-api.onrender.com`)
5. **Deploy**: Vercel handles the rest!

## Getting Started Locally

### Backend
1. `cd backend`
2. `npm install`
3. Create a `.env` file with your email credentials.
4. `node seed.js`
5. `npm start`

### Frontend
1. `cd frontend`
2. `npm install`
3. Create a `.env` with `VITE_API_BASE_URL=http://localhost:5000`
4. `npm run dev`

Portfolio Link - 
https://portfolio-orcin-iota-ihbotfulv2.vercel.app/

## License
MIT
