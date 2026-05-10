# Wanderlust - AI Powered Travel Listing Platform

## Overview

Wanderlust is a full-stack travel listing web application inspired by Airbnb where users can:

* Explore travel stays and hotel listings
* Create and manage listings
* Upload listing images
* Add reviews and ratings
* View locations on maps
* Use an AI-powered travel assistant integrated with Google Gemini and LangChain

The project is built using the MERN stack concepts with server-side rendering and integrates modern AI capabilities for smarter travel recommendations.

---

# Features

## User Features

* User authentication and authorization
* Create, edit, and delete listings
* Upload listing images using Cloudinary
* Add reviews and ratings
* Interactive maps integration
* Responsive UI
* AI travel assistant chatbot

---

# AI Assistant Features

The application includes an AI chatbot powered by:

* Google Gemini API
* LangChain

The chatbot can:

* Answer questions about listings
* Recommend stays based on categories
* Suggest budget-friendly options
* Help users discover locations
* Remember conversation context

Example prompts:

```bash
Suggest mountain stays
```

```bash
Find cheap rooms under ₹3000
```

```bash
Recommend amazing pool listings
```

---

# Tech Stack

## Frontend

* HTML
* CSS
* JavaScript
* Bootstrap
* EJS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* Passport.js

## Cloud Services

* Cloudinary
* Render

## AI Integration

* Google Gemini API
* LangChain

---

# Project Structure

```bash
PROJECT/
│
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/FullStack-webDevloper/PROJECT.git
```

## Move into Project Folder

```bash
cd PROJECT
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_url
SECRET=your_secret_key
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret
MAP_TOKEN=your_mapbox_token
GEMINI_API_KEY=your_gemini_api_key
```

---

# Running the Project

## Start Development Server

```bash
node app.js
```

or

```bash
nodemon app.js
```

The application will run on:

```bash
http://localhost:8080
```

---

# AI Chatbot Integration

The chatbot is integrated using:

* LangChain
* Google Gemini API
* MongoDB listing context injection

The chatbot dynamically reads listing data from MongoDB and sends contextual prompts to Gemini for intelligent recommendations.

---

# Deployment

The project is deployed using Render.

## Deployment Steps

1. Push project to GitHub
2. Connect repository to Render
3. Add environment variables
4. Deploy the application

---

# Future Improvements

* Vector database integration
* Semantic search
* Recommendation engine
* AI memory persistence
* Voice assistant
* Booking system
* Payment gateway integration
* RAG-based travel assistant

---

# Author

Altamash Ahmad

---

# License

This project is developed for learning and educational purposes.
