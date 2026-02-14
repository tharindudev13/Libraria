# 📚 Libraria - Smart Library Management System

Libraria is a modern, full-stack library management system designed to categorize and manage book collections efficiently. It features a responsive React frontend with a "Midnight Slate" aesthetic and a robust Spring Boot REST API.

---

## 🚀 Key Features

* **Categorized Gallery:** Books are automatically grouped by categories (Technology, Classic, Sci-Fi, etc.).
* **Horizontal Book Cards:** Clean layout displaying high-quality book covers on the left and details on the right.
* **Row-Limited Display:** Shows exactly 3 books per category on the Home page for a clean, professional look.
* **Real-time Availability:** Visual indicators for "Available" vs "Out of Stock" copies based on database counts.
* **Responsive Grid:** Optimized for both mobile and desktop (3-column layout for PC).
* **Language Support:** Added metadata to track and display the language of each book.

---

## 🛠️ Tech Stack

### Backend
* **Java 23**
* **Spring Boot 4.0.2**
* **Spring Data JPA** (MySQL)
* **ModelMapper** (Entity to DTO mapping)
* **Maven** (Dependency Management)

### Frontend
* **React 18** (Vite)
* **Tailwind CSS** (Styling) [I used Gemini to styling because I did this project to practice backend operations]
* **Lucide React** (Icons)
* **Fetch API** (Asynchronous data fetching)

---

## 📦 Installation & Setup

### 1. Database Setup
1. Create a MySQL database named `libraria`.
2. Run the SQL scripts to create the `books` table with the following schema:
   ```sql
   CREATE TABLE books (
     id BIGINT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255),
     author VARCHAR(255),
     isbn VARCHAR(20),
     category VARCHAR(100),
     language VARCHAR(50),
     available_copies INT,
     total_copies INT,
     image_url VARCHAR(500)
   );
   ```
3. Update ```backend/src/main/resources/application.properties``` with your MySQL credentials.

### 2. Frontend Setup (React)
```cmd
    cd frontend
    npm install
    npm run dev
 ```   

  The UI will be available at: ```http://localhost:5173```

---

### 📋 API Endpoints

```cmd
Method     Endpoint                        Description


GET        /api/v1/books/getallbooks       Fetches the full collection of 60+ books
GET        /api/v1/books/book/{isbn}       Fetches the data about a specific book
GET        /api/v1/users/getuser/{email}   Fetches data about a user
GET        /api/v1/users/loginreq          Send the login request to the Backend and validate the user
GET        /api/v1/lends/{email}           Fetches the data about lends of a user
POST       /api/v1/lends/newLends          Post a new lend 
 
```
---

### 💡 Implementation Notes

  **Defensive UI**: The frontend uses optional chaining (```book?.title```) to prevent crashes caused by null or undefined database entries.
  
  **Horizontal Layout**: The ```BookCard``` component uses Flexbox and ```object-contain``` to ensure the "full picture" of the book cover is displayed without cropping.
  
  **Optimized Performance**: The homepage uses ```.slice(0, 3)``` on category arrays to maintain a clean aesthetic despite having a large dataset.

---

### 🤝 Contributing
  1. Fork the project.
  
  2. Create your Feature Branch (```git checkout -b feature/AmazingFeature```).
  
  4. Commit your changes (```git commit -m 'Add some AmazingFeature'```).
  
  5. Push to the branch (```git push origin feature/AmazingFeature```).
  
  6. Open a Pull Request.
