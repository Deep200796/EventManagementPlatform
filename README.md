# Event Management Platform (EMP) - Node.js & TypeScript

This repository contains a basic Event Management Platform (EMP) implemented using Node.js and TypeScript. The EMP allows for managing events with operations such as creating, updating, deleting, retrieving by ID, and listing events with optional filters.

## Features

- **Create Event**: Add a new event with details such as event name, date, organizer info, and location.
- **Update Event**: Modify existing event details.
- **Delete Event**: Remove an event from the platform.
- **Retrieve Event**: Get event details by its unique identifier (ID).
- **List Events**: Fetch all events with optional filters (event name, organizer, date range).

## Prerequisites

Before running this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to get the project up and running on your local machine.

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd event-management-platform
   git clone <repository-url>
   cd event-management-platform

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Set up environment variables:**

Create a .env file in the root directory and define any necessary environment variables. For example:

plaintext
Copy code
PORT=3000 

4. **Compile TypeScript:**

Compile TypeScript files to JavaScript (if not using ts-node):

bash
Copy code
npm run build 

5. **Run the server:**

Start the server:

bash
Copy code
npm start
The server should now be running at http://localhost:3000 (or another port specified in your .env file).

**API Endpoints**
POST /events: Create a new event.
GET /events/
: Retrieve an event by its ID.
PUT /events/
: Update an existing event.
DELETE /events/
: Delete an event by its ID.
GET /events: List all events with optional filters (eventName, organizer, eventDate).
