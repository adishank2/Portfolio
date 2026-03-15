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

## Getting Started

### Backend
1. `cd backend`
2. `npm install`
3. Create a `.env` file (see `.env.example`)
4. `node seed.js` (Optional: Seeds the DB with initial data)
5. `npm start` or `npm run dev`

### Frontend
1. `cd frontend`
2. `npm install`
3. Create a `.env` file with `VITE_API_BASE_URL=http://localhost:5000`
4. `npm run dev`

## License
MIT
