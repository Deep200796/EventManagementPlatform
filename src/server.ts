// src/server.ts

import express from "express";
import bodyParser from "body-parser";
import eventRoutes from "./routes/eventRoutes";
import { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use("/events", eventRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
