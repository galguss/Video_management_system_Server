# Video Management System (Server)

This repository contains the server-side code for the Video Management System platform. It utilizes a MySQL database to store and manage video information.

## Prerequisites

Before running the server, please ensure you have the following dependencies installed:

- Node.js (version 18.4.0)
- MySQL 

## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project's root directory.

   ```bash
   cd video-management-system-server
   ```

3. Install the required Node.js packages by running the following command:

   ```bash
   npm install
   ```

4. Create an `.env` file in the main folder and provide the necessary environment variables for the database connection:

   ```
   HOST=<database_host>
   USER_DB=<database_username>
   PASSWORD_DB=<database_password>
   DATABASE=<database_name>
   ```

   Replace `<database_host>`, `<database_username>`, `<database_password>`, and `<database_name>` with the actual values for your MySQL database.

## Database Setup

To set up the MySQL database and create the required table, follow these steps:

1. Log in to your MySQL database using your preferred MySQL client or the command line.

2. Create a new database:

   ```sql
   CREATE DATABASE <database_name>;
   ```

   Replace `<database_name>` with the name you provided in the `.env` file.

3. Switch to the newly created database:

   ```sql
   USE <database_name>;
   ```

4. Create the `videos` table with the required fields:

   ```sql
   CREATE TABLE videos (
     id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(255) NOT NULL,
     path VARCHAR(255) NOT NULL,
     abstract TEXT
   );
   ```

5. Your MySQL database is now set up and ready to be used by the Video Management System server.

## Usage

To start the server, run the following command:

```bash
npm start
```

This will launch the server and it will be accessible at `http://localhost:3000`.

## API Endpoints

The server provides the following API endpoints to interact with the Video Management System:

- `GET /` - Retrieves a list of all videos.
- `POST /Add` - Creates a new video.
- `PATCH /Edit` - Updates an existing video.
- `DELETE /Delete` - Deletes a video.

Please refer to the API documentation or the source code for detailed information on how to use these endpoints.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to customize and modify the codebase according to your needs. Contributions are also welcome.

## Acknowledgments

- This server implementation was created as part of the Video Management System platform.
- Thanks to the open-source community for providing useful libraries and tools.
