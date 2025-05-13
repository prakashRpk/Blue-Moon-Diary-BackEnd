# Blue Moon Diary – Backend

This is the backend application for **Blue Moon Diary**, a secure online diary system where users can create, manage, and protect their personal notes. Built with Node.js and MongoDB, this backend handles user authentication, diary entry storage, and API communication with the frontend.

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Token)** for authentication
- **bcrypt** for password hashing
- **dotenv** for environment configuration
- **CORS** and **Morgan** middleware

## 📦 Features

- 🔐 User registration and login with JWT authentication
- 📝 Create, read, update, and delete diary entries
- 🔒 Secure password handling using bcrypt
- 🔄 RESTful API structure for frontend integration
- 📁 Environment variable management with dotenv

## 📁 Folder Structure

Blue-Moon-Diary-BackEnd/
├── config/ # MongoDB connection
├── controllers/ # Request logic for APIs
├── models/ # Mongoose schemas
├── routes/ # Express routes for user and diary
├── middleware/ # Authentication middlewares
├── .env # Environment variables
├── server.js # Entry point
└── package.json


## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance or MongoDB Atlas connection string

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/prakashRpk/Blue-Moon-Diary-BackEnd.git
cd Blue-Moon-Diary-BackEnd
npm install
node server.js
```

##📬 API Endpoints

###Authentication
Method	Endpoint	Description
POST	/api/register	Register a new user
POST	/api/login	Login and get token

###Diary Entries (requires JWT token)
Method	Endpoint	Description
GET	/api/diary	Get all entries
GET	/api/diary/:id	Get entry by ID
POST	/api/diary	Create new diary entry
PUT	/api/diary/:id	Update existing entry
DELETE	/api/diary/:id	Delete entry

##🔐 Security Notes

Passwords are hashed using bcrypt.

JWT is used to manage authentication.

CORS is enabled for frontend interaction.

##📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

