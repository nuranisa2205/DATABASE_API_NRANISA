const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const authMiddleware = require("./middleware/auth");

const userRoute = require("./routes/userRoute");

app.use(express.json());

// Logger Middleware (GLOBAL)
app.use(logger);

// Auth Middleware hanya untuk route tertentu
app.use("/api/users", authMiddleware, userRoute);

app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
