# MERN Social Media

This is the server side of a MERN (MongoDB, Express, React, Node.js) project.

## Technologies Used

- MongoDB: a NoSQL database used to store data for the project
- Express: a web framework for Node.js used for building the server-side logic and API routes
- Node.js: a JavaScript runtime used for running the server and handling server-side logic

## Setting Up the Server

1. Make sure you have MongoDB and Node.js installed on your system.
2. Clone this repository to your local machine.
3. Run `npm install` to install the necessary dependencies.
4. Create a `.env` file in the root directory and set up the necessary environment variables (e.g. `DATABASE_URL`, `PORT`)
5. Run `npm start` to start the server.

## API Routes

The server exposes the following API routes:

- `GET /api/items`: Retrieves a list of all items in the database
- `POST /api/items`: Creates a new item in the database
- `PUT /api/items/:id`: Updates an existing item in the database
- `DELETE /api/items/:id`: Deletes an existing item in the database

## License

This project is licensed under the MIT License.
