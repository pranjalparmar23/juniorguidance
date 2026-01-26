# Junior Guidance Platform

A full-stack web application designed to help users read, publish, and manage articles with proper categorization and role-based access.

---

## Project Structure

```
juniorguidance/
│
├── backend/        → Spring Boot (Java, Maven)
├── frontend/       → Angular application
└── .gitignore
```

---

## Tech Stack

### Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Angular Material

### Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Spring Security (JWT)
* Maven
* MySQL

---

## Features

* User authentication (JWT based)
* Role-based access (Admin / User)
* Article creation with paragraphs
* Article publishing & updating
* Category-based articles
* View all published articles
* Secure REST APIs
* Clean UI with Angular

---

# Backend Setup (Spring Boot)

### Prerequisites

Install the following:

* Java JDK 21
* Maven
* MySQL
* IDE (IntelliJ / Eclipse / VS Code)

---

### Backend Location

```
juniorguidance/backend
```

---

### Database Configuration

Create database in MySQL:

```sql
CREATE DATABASE junior_guidance;
```

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/junior_guidance
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

### Database Entities 

<img width="1040" height="602" alt="article db" src="https://github.com/user-attachments/assets/60ba4276-b90d-4a3d-b232-e25596999003" />

### Run Backend

Since this is a **Maven project**, backend can be started directly from:

```
src/main/java
└── Application.java
```

#### Option 1 — Using IDE

* Open backend folder
* Run `Application.java`

#### Option 2 — Using terminal

```bash
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

# Frontend Setup (Angular)

### Prerequisites

Install:

* Node.js (18+ recommended)
* npm
* Angular CLI

```bash
npm install -g @angular/cli
```

---

### Frontend Location

```
juniorguidance/frontend/juniorguidance
```

---

### Install Dependencies

```bash
npm install
```

---

### Run Frontend

```bash
ng serve
```

Frontend runs on:

```
http://localhost:4200
```

---

## API Communication

Frontend communicates with backend using REST APIs:

```
Frontend → http://localhost:4200
Backend  → http://localhost:8080
```

Make sure backend is running before starting frontend.

---
