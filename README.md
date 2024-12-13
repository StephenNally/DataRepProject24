# Game Review App

## Overview
The Game Review App is a full-stack web application where users can add, view, edit, and delete reviews for their favorite games. The app uses MongoDB for the database, Express for the backend, and React for the frontend.

## Features
- Add new game reviews with a title, release year, review, and username.
- Edit and delete existing game reviews.
- Display game reviews with metadata (release year, review content, and username).
- Timestamps for when reviews are created.

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14.x or higher)
- **MongoDB** (either locally or hosted)
- **React** (for frontend development)

### Installation

1. **Clone the repository:**
   git clone https://github.com/StephenNally/DataRepProject24

2. **Install dependencies for both backend and frontend:**

- **Backend (Express):**
npm install

- **Frontend (React):**
npm install

Run the app locally:

3. **Start the backend server:**
cd Backend
nodemon server.js

- **Start the frontend application:**
cd src
npm start

The app should now be running locally at http://localhost:3000 (frontend) and http://localhost:4000 (backend).

### **Usage**
Once the app is running, you can:

Add a Game Review: Use the form to submit a game title, year, review, and username.
Edit Reviews: Modify any existing game review by selecting the edit button.
Delete Reviews: Remove a game review by clicking the delete button.

### **API Endpoints**
The backend exposes the following API routes for interacting with the game reviews:

- GET /api/games: Fetch all game reviews.
- POST /api/games: Add a new game review.
- PUT /api/game/:id: Update a specific game review.
- DELETE /api/game/:id: Delete a specific game review.

### **Frontend (React Components)**
Key Components:
- Create: Form to add new game reviews.
- Card: Displays individual game reviews.
- Edit: Form to edit an existing review.
