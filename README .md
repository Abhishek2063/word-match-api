# Word Match API

A Node.js API to search and filter JSON data based on word match criteria in the title field.

## Technologies Used

- Node.js
- Express.js
- Nodemon (for automatic server restarts during development)
- dotenv (for managing environment variables)

## Environment Variables

Create a `.env` file in the root directory of the project with the following environment variables:


PORT=3000


**Note:** You can change the `PORT` value as needed.

Example `.env.example` file:


PORT=3000


## API Endpoints

### Search
- **URL:** `/search`
- **Method:** GET
- **Query Parameters:**
  - `q`: The search query string. Multiple words can be separated by spaces.
- **Response:**
  - `status`: HTTP status code according to the response.
  - `data`: Array of matching records.
  - `success`: Boolean indicating if the request was successful.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Abhishek2063/word-match-api.git
cd word-match-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and set your environment variables.

4. Start the development server:

```bash
npm run dev
```
or

```bash
npm start
```
The server will start on the specified PORT (default is 3000).

## Testing the API

You can use tools like Postman or cURL to test the API endpoints:

- Search for records:
  - Example request:
    ```
    GET http://localhost:3000/search?q=hello world
    ```
  - Example response:
    ```json
    {
      "status": 200,
      "data": [
        {
          "title": "Hello World",
          "description": "",
          "price": 100
        },
        {
          "title": "Hello World New",
          "description": "",
          "price": 100
        }
      ],
      "success": true
    }
    ```

## Production Deployment

For production deployment, make sure to set the appropriate environment variables and use a process manager like PM2 to manage the Node.js application.

## License

This project is licensed under the [MIT License](LICENSE).

