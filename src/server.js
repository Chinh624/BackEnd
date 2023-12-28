require('dotenv').config()
const express = require("express");
const app = express();
const viewEngine = require("./config/viewEngine");
const webRouter = require("./routers/web");
const connection = require("./config/database");

// Ensure environment variables are set
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

if (!hostname) {
    throw new Error("HOST_NAME environment variable is not set.");
}

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
viewEngine(app);
app.use(webRouter);

// Sample route for database query
app.get('/', async (req, res) => {
        const [results, fields] = await connection.query('SELECT * FROM Users');
        console.log(results)
})
// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
