// src/routes/eventRoutes.ts

import express from "express";
import * as eventController from "../controllers/eventController";

const router = express.Router();

router.post("/", eventController.createEvent);
router.get("/:id", eventController.getEventById);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);
router.get("/", eventController.getAllEvents);

export default router;
