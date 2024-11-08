# SoinHealth

---
SoinHealth is a women-focused digital healthcare platform designed to empower women by providing access to health resources, support groups, and community features in a safe and inclusive environment. This platform also integrates advanced cryptocurrency wallet features and secure user authentication.

![SoinHealth Banner](src/assets/soinpic.PNG)

---
## Table of Contents
#### 1. Overview
#### 2. Features
#### 3. Technologies Used
#### 4. Getting Started
#### 5. Usage Guide
#### 6. Configuration Details
#### 7. Acknowledgements

---
### Features
- Women-Centric Community: Designed specifically for women’s health, creating a safe space for discussion and support.
- Secure Authentication: Allows users to sign in using Google OAuth and Okto, ensuring a secure and convenient login experience.
- User-Friendly Navbar: Easy navigation to key sections like Home, Community, Support Groups, Resources, and Pricing.
- Personalized Experience: Welcomes returning users with a personalized greeting that displays their username if logged in.
- Mobile-Responsive Design: Provides a seamless experience on all devices with a collapsible menu for mobile navigation.
- Support and Resources: Access to resources and support groups to foster connection and provide guidance on health-related topics.

---
### Technologies Used
Frontend: React, TypeScript, CSS
Authentication: Google OAuth, Okto SDK
Integration : Particle Wallet
AI Chatbot : Google Gemini API
Icons: Lucide Icon

---

## Installation

### Prerequisites
- **Node.js** installed
- **Google Cloud Console** account for Google OAuth `Client ID`
- **Okto** account for `Client ID`
- **Particle Network** account for `Project ID`, `Client ID`, and `App ID`

### Steps

1. Clone the repository:

   ```bash
   https://github.com/Fatumayattani/soin_particle_network.git
   cd soinhealth
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
   REACT_APP_OKTO_CLIENT_ID=your-okto-client-id
   REACT_APP_PARTICLE_PROJECT_ID=your-particle-project-id
   REACT_APP_PARTICLE_CLIENT_ID=your-particle-client-id
   REACT_APP_PARTICLE_APP_ID=your-particle-app-id
   ```

   - Replace `your-google-client-id` with your **Google Cloud OAuth Client ID**.
   - Replace `your-okto-client-id` with your **Okto Client ID**.
   - Replace `your-particle-project-id`, `your-particle-client-id`, and `your-particle-app-id` with your **Particle Network Project ID**, **Client ID**, and **App ID**, respectively.

## Usage

To run the project locally, use:

```bash
npm start
```

This will start the app on [http://localhost:5173](http://localhost:5173).

## User Guide

### Navigation

- Use the top navbar to navigate through various sections: **Home**, **Community**, **Support Groups**, **Resources**, and **Pricing**.
- The **"Sign In"** button offers secure access via Google OAuth, Okto, or Particle Wallet, allowing users to safely manage their health information and wallet integrations.

### Responsive Design

- A mobile menu icon appears on smaller screens, allowing easy access to navigation links.
- Users can log in or sign up seamlessly across devices.

