# intprog_group_repo

This repository contains the group's code for the course **Integrative Programming and Technologies**.

## Project Overview
The objective of this project is to learn how to utilize GitHub’s **branching feature**. Branching allows for easier and more efficient coding by enabling developers to work on separate branches without affecting the main codebase.

The **repository leader** is responsible for managing all activities within the repository, ensuring that only authorized developers can commit to necessary branches, especially the `main` or `master` branch.

---

## Setup Instructions
To get started with this project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/VulpritProoze/intprog_group_repo
   ```
2. Navigate into the project directory:
   ```sh
   cd intprog_group_repo
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

---

## API Documentation
This project provides the following API endpoints:

### User Endpoints
- **Create a User** (POST): `/users`
- **Retrieve Users** (GET): `/users`, `/users/:id`
- **Delete a User** (DELETE): `/users/:id`

---

## Testing API Endpoints
You can use **Thunder Client** or **Postman** to test the API.

### 1. Testing `POST` Route
#### Create a New User
- Set the request type to **POST**.
- Use the following JSON body:
  ```json
  {
    "title": "Mr.",
    "firstName": "Ram Railey",
    "lastName": "Alin",
    "role": "Admin",
    "email": "raileyalin2@gmail.com",
    "password": "asd123456"
  }
  ```
- Set the URL to: `http://localhost:4000/users`
- Click **Send**.

### 2. Testing `GET` Route
#### Retrieve All Users
- Set the request type to **GET**.
- Use the URL: `http://localhost:4000/users`
- Click **Send**.
- The previously created user should be displayed.

### 3. Testing `DELETE` Route
#### Delete a User
- Set the request type to **DELETE**.
- Use the URL: `http://localhost:4000/users/1` (replace `1` with the user ID you want to delete).
- Click **Send**.
- The specified user will be deleted.

---

## Contributors
[List team members here]
-Ram Railey Alin `(main branch)`
-Caleb Micah Guinto `(Guinto-user-creation branch)`
-Pete Andre Licanda `(licanda-user-listing-and-retrieval branch)`
-Vanness Benitez `(benitez-repo branch)`
---


