# 🩺 MediSched – Doctor Appointment Booking System

MediSched is a full-stack doctor appointment booking system developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides separate dashboards and functionalities for Admins, Doctors, and Patients. This platform simplifies the appointment scheduling process while maintaining proper authentication and user management.

---

## 🔍 Project Summary

### 👨‍⚕️ Admin Features
- Add, update, and manage doctor profiles
- View and manage all registered patients
- Oversee all appointments

### 🩺 Doctor Features
- Manage personal schedule and availability
- View upcoming appointments
- Review patient details and history

### 👤 Patient Features
- Register/login to book appointments
- Search and filter doctors
- View appointment history

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **API Testing**: Postman

---

## 🧑‍💻 Installation Instructions

### Prerequisites
- Node.js installed (v14 or above)
- MongoDB running locally or via cloud (MongoDB Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/nikhilkorada/doctor-appointment-bookingsystem-medisched.git
cd doctor-appointment-bookingsystem-medisched
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Set up .env file in backend folder

- MONGODB_URI = 'mongo url'
- CLOUDINARY_NAME ='xxxxxxxxx'
- CLOUDINARY_API_KEY = 'xxxxxxxxxx'
- CLOUDINARY_SECRET_KEY ='xxxxxxxxxxxx'
- ADMIN_EMAIL= 'email@gmail.com'
- ADMIN_PASSWORD='xxxxxxxxxx'
- JWT_SECRET='xxxxxxxxxx'
- RAZORPAY_KEY_ID='xxxxxxxxxx'
- RAZORPAY_KEY_SECRET='xxxxxxxxxxxx'
- CURRENCY='INR'

### 4. Start Backend Server

```bash
npm start
```

### 5. Install Frontend Dependencies

```bash
cd frontend
npm install
```
### 6. Start Frontend Server

```bash
npm run dev
```

---

## 🚀 Deployment

The project is deployed and accessible online. You can explore the live application here:

🔗 **Live Link:** [User Login](https://medisched-pfju.onrender.com) 

🔗 **Live Link:** [Admin login/Doctor login](https://medisched-panel.onrender.com) 


## 📸 Screenshots

![image](https://github.com/user-attachments/assets/6e7ce63e-5e83-4990-a357-eed44ee9eee0)

![image](https://github.com/user-attachments/assets/83fe50fe-7733-4a0d-bb00-aa46d2558aae)

![image](https://github.com/user-attachments/assets/c69e6ea7-e110-4115-881c-aa9e85fc3cf9)

## 🤝 Contact

- For queries: nikhilkorada7@gmail.com
