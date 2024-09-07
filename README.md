# React Netflix

A web application mimicking the Netflix interface, built using **React**, **Tailwind CSS**, and **Vite**. This app allows users to browse movies and TV shows, add them to favorites, and manage their profile. It includes **Firebase** authentication and protected routes for secure access.

## Features

- 🌟 **Browse movies and TV shows** using the [TMDb API](https://www.themoviedb.org/documentation/api).
- ❤️ **Add and remove movies** from the favorites list.
- 👤 **View list of your favorite shows** on the user profile page.
- 🔐 **User registration and authentication** via Firebase Authentication.
- 🚪 **Protected routes** with `ProtectedRoute` for managing access to the profile page.

## Technologies and Tools

### Frontend

- **React:** Library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Vite:** Fast build tool and development server.
- **React Router DOM:** For routing and navigation.
- **Firebase:** User authentication and data storage.
- **Axios:** For making HTTP requests to APIs.
- **Custom Fonts:** Enhanced visual design.

### Backend

- **The Movie Database (TMDb) API:** Source of movie and TV show data.

## Configuration

- **`.env`:** Configuration file for storing API keys and tokens.

## Deployment

The app is deployed on **Firebase Hosting**.

## How to Run Locally
1. Clone the Repository
Start by cloning the repository from GitHub to your local machine:

**git clone https://github.com/rubaka-pl/react-netflix.git**

2. Navigate to the Project Directory
Move into the project directory:

**cd react-netflix**

3. Install Dependencies
Install the required dependencies using npm:

**npm install**

4. Set Up Environment Variables 
Create a **.env** file in the root of the project directory if it doesn't already exist. Add the following environment variables to the **.env** file:

**VITE_TMDB_KEY=your_tmdb_api_key_here**


**Optional: Firebase configuration (only if using Firebase)**


VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_firebase_app_id_here

Firebase keys: If you want to deploy your own instance of the app, you will need to set up Firebase and obtain your API keys. Replace these values with your Firebase project credentials if you're configuring your own deployment.

#### 5. Start the Development Server 
Run the following command to start the development server:


**npm run dev**


This will start the Vite development server and open your application in the default web browser.

