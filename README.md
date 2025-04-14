# 🧠✨ Task Manager System Backend ✨🧠

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=F7F7F7&center=true&width=435&lines=Node.js+Task+Manager+API+%F0%9F%9A%80;Admin+%2F+User+Based+Features+%F0%9F%94%91;Secure+JWT+Authentication+%F0%9F%9B%A1%EF%B8%8F;Excel+Report+Export+%F0%9F%93%9B;Mongoose+%2F+MongoDB+Integration+%F0%9F%92%BE" alt="Typing SVG" />
</p>

---

## 🚀 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Multer](https://img.shields.io/badge/Multer-ff69b4?style=for-the-badge)
![Bcrypt](https://img.shields.io/badge/Bcryptjs-33aadd?style=for-the-badge)
![CORS](https://img.shields.io/badge/CORS-ffcc00?style=for-the-badge)
![Dotenv](https://img.shields.io/badge/Dotenv-8e44ad?style=for-the-badge)
![ExcelJS](https://img.shields.io/badge/ExcelJS-217346?style=for-the-badge)

---

## 🌐 API Features

### 👥 User Features
- 🔐 Register user (Admin code check for admin access)
- 🔑 Login user with secure JWT auth
- 🙍‍♂️ Get current user
- 🔄 Update user info
- 🖼️ Update user profile image (Multer)
- 👀 Get a specific user (Admin only)
- 📋 Get all users (Admin only)

### ✅ Task Features
- 📝 Create task (Admin only)
- 📂 Get all tasks
- 🔍 Get task by ID
- ✏️ Update task details
- 🔄 Update task status
- ☑️ Update task checklist
- 🗑️ Delete task (Admin only)

### 📊 Dashboard & Reports
- 📈 Admin dashboard stats
- 👤 User dashboard overview
- 📤 Export Task Report (.xlsx)
- 📥 Export User Report (.xlsx)

---

## 📁 Project Structure
```bash
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── uploads/
├── .env
├── server.js
```

---

## 🔒 Authentication & Authorization

- JWT-based secure login
- Admin-only routes protected with role-based middleware
- Passwords encrypted using Bcrypt

---

## 📸 Profile Image Upload

- File uploads handled by Multer
- Stored locally in `/uploads/` folder

---

## 📦 Excel Report Exports

- Generate dynamic Excel reports using `exceljs`
- Available for both tasks and user data

---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/itz-Hiru/Task-Manager-Backend.git
cd Task-Manager-Backend
npm install
```

Create a `.env` file and add:

```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ADMIN_INVITE_TOKEN=your_admin_code
```

Then run the server:

```bash
npm run dev
```

---

## 📬 API Testing

You can use [Postman](https://www.postman.com/) to test API endpoints.

---

## 📊 Dashboard Sneak Peek

> Admin & user dashboards return JSON data like:
```json
{
    "statistics": {
        "totalTasks": 0,
        "pendingTasks": 0,
        "completedTasks": 0,
        "overDueTasks": 0
    },
    "charts": {
        "taskDistribution": {
            "Pending": 0,
            "Inprogress": 0,
            "Completed": 0,
            "All": 0
        },
        "taskPriorityLevels": {
            "Low": 0,
            "Medium": 0,
            "High": 0
        }
    },
    "recentTasks": []
}
```
---

## 🙌 Author

Made with 💙 by [Hirumitha](https://hirumitha-portfolio.vercel.app)

---

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=itz-Hiru&theme=tokyonight&margin-w=15&no-bg=true&no-frame=true" />
</p>
