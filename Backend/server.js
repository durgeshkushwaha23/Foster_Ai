import 'dotenv/config';
import morgan from "morgan";
import http from "http";
import app from "./app.js";
app.use(morgan('dev'));
const port = process.env.PORT || 3000; // Use environment variable PORT, if not set, default to 3000.  The PORT variable is set in the.env file.  Ensure to create a.env file in your project root directory and add the line `PORT=3000` to it.  You can also set the port in your terminal by running `export PORT=3000` before starting your server

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server is running ${port}`);
});
