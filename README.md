# Mock API + Frontend Dashboard

This project is a simple yet complete **CRUD** (Create, Read, Update, Delete) setup demonstrating how to:

- Simulate a backend API using **Mockoon**
- Build a user dashboard using **HTML**, **JavaScript**, and **Bootstrap**
- Perform real-time operations on users: add, edit, and delete

> Created by [@shaunmaselela25](https://github.com/shaunmaselela25)

---

## Demo

A local environment setup to:
- Spin up a fake API with endpoints
- Serve a frontend dashboard consuming the API

---

## Features

- Mock API with full CRUD functionality using Mockoon
- User-friendly frontend interface with Bootstrap styling
- Editable user data via modal
- Real-time alert messages
- Fully client-side (no backend required)

---

## 1. Project Structure

```
mock-api-frontend/
├── index.html           # Main HTML file for the user dashboard
├── script.js            # JavaScript for API interaction 
├── style.css          # Optional custom styles (additional to Bootstrap)
└── README.md            # Project documentation



````

---

## 2. API Endpoints

**Base URL:** `http://localhost:4000`

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | /users         | Get all users        |
| GET    | /users/:id     | Get user by ID       |
| POST   | /users         | Add a new user       |
| PUT    | /users/:id     | Update user by ID    |
| DELETE | /users/:id     | Delete user by ID    |

---

## 3. Getting Started

### A. Mock API Setup (with Mockoon)

#### 1. Install Mockoon

- **GUI**: [Download from official site](https://mockoon.com)
- **CLI**:  
  ```bash
  npm install -g @mockoon/cli
````

#### 2. Create Environment

* Set port to `4000`
* Define these routes:

  * `GET /users`
  * `GET /users/:id`
  * `POST /users`
  * `PUT /users/:id`
  * `DELETE /users/:id`

You can also import a pre-filled environment JSON (see below).

#### 3. Start Mock Server

In Mockoon, click **Start** or run via CLI:

```bash
mockoon-cli start --data ./your-mockoon-environment.json --port 4000
```

---

### B. Frontend Setup

#### 1. Create a project folder and add the frontend

```bash
mkdir user-dashboard && cd user-dashboard
nano index.html
```

Paste the code from `index.html` (included in this repository).

#### 2. Run a Local Server

```bash
python3 -m http.server 8080
```

#### 3. Open in Your Browser

```
http://localhost:8080
```

---

## 4. Example API Usage

### `GET /users`

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
]
```

### `GET /users/1`

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

### `POST /users`

**Request:**

```json
{
  "name": "New User",
  "email": "new@example.com"
}
```

**Response:**

```json
{
  "id": 3,
  "name": "New User",
  "email": "new@example.com"
}
```

### `PUT /users/1`

**Request:**

```json
{
  "name": "Updated User",
  "email": "updateduser@example.com"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "Updated User",
  "email": "updateduser@example.com"
}
```

### `DELETE /users/1`

**Response:**

```json
{
  "message": "User deleted"
}
```

---

## 5. Technologies Used

* [Mockoon](https://mockoon.com) - For simulating a REST API
* [Bootstrap 5](https://getbootstrap.com) - UI styling
* Vanilla JavaScript - For DOM interaction and HTTP requests

---

## 6. Credits

Created by **Shaun Maselela**
GitHub: [@shaunmaselela25](https://github.com/shaunmaselela25)

---
