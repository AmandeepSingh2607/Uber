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
### Get User Profile

#### Description

Retrieve the profile of the authenticated user.

#### Endpoint

`GET /user/profile`

#### Request Headers

* `Authorization`: The JSON Web Token (JWT) obtained during login (required)

## Request Example

```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg4ZGNmNDliZWFkOTY4ZWEzYWRmNjYiLCJpYXQiOjE3MzcwOTIxOTd9.DaC6iRZJGTuTQgV6bwn9uBP5JWPgruA42EoJk_WkE6w
````
#### Response Body
````json
 {
  "_id": "6788dcf49bead968ea3adf66",
  "firstname": "username",
  "email": "user@gmail.com",
  "__v": 0
}
````


### Logout User

#### Description

Logout the authenticated user.

#### Endpoint

`GET /user/logout`

#### Request Headers

* `Authorization`: The JSON Web Token (JWT) obtained during login (required)
* `Token`: user already login on the /user/login page and they have own token

## Request Example

````
{
  "message": "logout successfully"
}
````

# Captain Registration API

## POST /captain/register

Registers a new captain.

### Request Body

* `firstname`: The first name of the captain. (string, required)
* `email`: The email address of the captain. (string, required)
* `password`: The password for the captain's account. (string, required)
* `vehicle`: An object containing information about the captain's vehicle.
	+ `color`: The color of the vehicle. (string, required)
	+ `plate`: The license plate number of the vehicle. (string, required)
	+ `capacity`: The capacity of the vehicle (e.g., number of passengers). (number, required)
	+ `vehicleType`: The type of vehicle (e.g., car, bus, truck). (string, required)

### Request Headers

* `Content-Type`: `application/json`

### Response

* `token`: A JSON Web Token (JWT) for authentication. (string)
* `captain`: An object containing the newly created captain's information.
	+ `_id`: The ID of the captain. (string)
	+ `firstname`: The first name of the captain. (string)
	+ `email`: The email address of the captain. (string)
	+ `vehicle`: An object containing information about the captain's vehicle.
		- `color`: The color of the vehicle. (string)
		- `plate`: The license plate number of the vehicle. (string)
		- `capacity`: The capacity of the vehicle (e.g., number of passengers). (number)
		- `vehicleType`: The type of vehicle (e.g., car, bus, truck). (string)
	+ `createdAt`: The date and time the captain was created. (string)
	+ `updatedAt`: The date and time the captain was last updated. (string)
	+ `__v`: The version number of the captain document. (number)

### Example Request

```json
{
    "firstname": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123",
    "vehicle": {
        "color": "red",
        "plate": "RJ XX 1222",
        "capacity": 3,
        "vehicleType": "car"
    }
}

```
### Example Response
````json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "_id": "64f1a2b3c4b5d6e7f8g9h0i1",
        "firstname": "John Doe",
        "email": "johndoe@example.com",
        "vehicle": {
            "color": "red",
            "plate": "RJ XX 1222",
            "capacity": 3,
            "vehicleType": "car"
        },
        "createdAt": "2023-10-01T12:34:56.789Z",
        "updatedAt": "2023-10-01T12:34:56.789Z",
        "__v": 0
    }
}
````

## POST /captain/login

### Description

Logs in an existing captain account.

### Request Body

* `email`: The captain's email address.
* `password`: The captain's password.

### Response

* `token`: The JWT token for the logged-in captain account.
* `captain`: The logged-in captain object.

### Status Codes

* 200 OK: The captain account was logged in successfully.
* 400 Bad Request: The request body is invalid or the captain account does not exist.
* 404 Not Found: The captain account does not exist.


### Example Request
```json
{
     "email": "johndoe@example2.com",
    "password": "password123"
}
```
### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzhmM2IzNWU3MTk1NmQ1MWNjYjVlMzgiLCJpYXQiOjE3Mzc0NDQyNzQsImV4cCI6MTczNzUzMDY3NH0.n-MowfogV-OIRAm9JzUYqvCVEMjod7q5yqFED6R83Lg",
    "captain": {
        "vehicle": {
            "color": "red",
            "plate": "RJ XX 1222",
            "capacity": 3,
            "vehicleType": "car"
        },
        "_id": "678f3b35e71956d51ccb5e38",
        "firstname": "John Doe",
        "email": "johndoe@example2.com",
        "password": "$2b$10$Y31fp8kQPWPBSXraIecc/eGT1Yr/DzrfeNdUi9qi0qKwCDCOGh40W",
        "status": "inactive",
        "__v": 0
    }
```

## GET /captain/profile

### Description

Retrieves the logged-in captain's profile.

### Request Headers

* `Authorization`: The JWT token for the logged-in captain account.

### Response

* `captain`: The logged-in captain object.

### Status Codes

* 200 OK: The captain's profile was retrieved successfully.

## POST /captain/logout

### Description

Logs out the logged-in captain account.

### Request Headers

* `Authorization`: The JWT token for the logged-in captain account.

### Response

* `message`: A success message indicating that the captain account was logged out.

### Status Codes

* 200 OK: The captain account was logged out successfully.
* 401 Unauthorized: The JWT token is invalid or missing.