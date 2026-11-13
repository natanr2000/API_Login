# User Registration API

A backend REST API built with [NestJS](https://nestjs.com/) and [Prisma ORM](https://www.prisma.io/), featuring data validation, error handling, and a local SQLite database.

## Prerequisites

Before running this project, ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (v16 or higher)
* npm (comes with Node.js)
* [Postman](https://www.postman.com/) (for testing the API)

## Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd API_Login
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

## Database Setup

1. Create a new file named .env in the root directory of the project and add the following SQLite database connection string:

    ```bash
    DATABASE_URL="file:./dev.db"
    ```

2. Run the following commands to generate the Prisma client and build the local SQLite database tables. This will automatically create the dev.db file based on the schema:
    ```bash
    npx prisma migrate dev
    npx prisma generate
    ```

## Running the Application

Start the NestJS server in development mode:

```bash
npm run start:dev
```

The server will start and listen for requests on `http://localhost:3000`.

## Testing the API

A Postman collection is included in the repository to easily test the endpoints and observe the validation rules.

1. Open Postman.
2. Click **Import** in the top left corner.
3. Select the `User_API.postman_collection.json` file located in the root of this project.
4. The collection includes the following pre-configured requests:
    * **Create Valid User**: Returns a `201 Created` status with a structured JSON success message.
    * **Create Duplicate User**: Returns a `409 Conflict` if the email already exists in the database.
    * **Invalid Email Format**: Returns a `400 Bad Request` if the input fails NestJS validation pipes.

## Architecture Notes

* **Controllers**: Handle incoming HTTP requests and format the JSON responses.
* **Services**: Contain the core business logic and interact with the database.
* **Prisma**: Serves as the ORM, enforcing strict typing and database schemas.