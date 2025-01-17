# Uber API Documentation

## User Endpoints

### Register User

#### Description

Registers a new user with the provided details.

#### Endpoint
 
`POST /user/register`

#### Request Body

The following fields are required in the request body:

* `firstname`: The user's first name (string, minimum length 3)
* `email`: The user's email address (string, must be a valid email address)
* `password`: The user's password (string, minimum length 3)

#### Request Example

```json
{
  "firstname": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}

````

#### Response Body
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM3MjU4MjM4MjM4MjM4MjMiLCJpYXQiOjE2MjM3MjU4MjM4MjM4MjM4MjMiLCJleHAiOjE2MjM3MjU4MjM4MjM4MjM4MjMifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "user": {
    "firstname": "John Doe",
    "email": "johndoe@example.com",
    "password": "$2b$10$nEv4q30.oYBuEfFC8jA67eMV6/uONaLu5Vt2IUAODXqHjVsYNGBcm",
        "_id": "6788dcf49bead968ea3adf66",
        "__v": 0
  }
}
````

### Login User

#### Description

Login a register user with the provided details.

#### Endpoint
 
`POST /user/login`

#### Request Body

* **Purpose:** Authenticate an existing user and return a JSON Web Token (JWT) for future requests.
 
   + `email`: The user's email address (required)
	+ `password`: The user's password (required)

* **Response:**
	+ `token`: A JSON Web Token (JWT) for the authenticated user
	+ `user`: The authenticated user's data (e.g., `firstname`, `email`)
* **Error Handling:**
	+ 400 Bad Request: Invalid request body or missing required fields
	+ 401 Unauthorized: Invalid email or password
	+ 500 Internal Server Error: Unexpected server error


#### Request Example

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}

````

#### Response Body
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg4ZGNmNDliZWFkOTY4ZWEzYWRmNjYiLCJpYXQiOjE3MzcwOTIxOTd9.DaC6iRZJGTuTQgV6bwn9uBP5JWPgruA42EoJk_WkE6w",
    "user": {
        "_id": "6788dcf49bead968ea3adf66",
        "firstname": "username",
        "email": "user@gmail.com",
        "password": "$2b$10$nEv4q30.oYBuEfFC8jA67eMV6/uONaLu5Vt2IUAODXqHjVsYNGBcm",
        "__v": 0
    }
}
````

 