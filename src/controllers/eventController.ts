import { Request, Response } from "express";
import { Event } from "../models/event";
import { v4 as uuidv4 } from "uuid";

let events: Event[] = [];

const generateEventId = () => {
  return uuidv4();
};

export const createEvent = (req: Request, res: Response) => {
  const event: Event = req.body;
  event.id = generateEventId();
  event.eventName = "New Event   " + event.id;
  event.eventDate = new Date();
  event.email = event.id + "@gmail.com";
  event.createdAt = new Date();
  event.updatedAt = new Date();
  events.push(event);
  res.status(201).json(event);
};

export const getEventById = (req: Request, res: Response) => {
  const id = req.params.id;
  const event = events.find((event) => event.id === id);
  if (!event) {
    res.status(404).json({ message: "Event not found" });
  } else {
    res.json(event);
  }
};

export const updateEvent = (req: Request, res: Response) => {
  const id = req.params.id;
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Event not found" });
  } else {
    const updatedEvent = events[index];
    updatedEvent.organizer = "updated";
    updatedEvent.updatedAt = new Date();
    res.json(updatedEvent);
  }
};

export const deleteEvent = (req: Request, res: Response) => {
  const id = req.params.id;
  const index = events.findIndex((event) => event.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Event not found" });
  } else {
    const deletedEvent = events.splice(index, 1)[0];
    res.json(deletedEvent);
  }
};

export const getAllEvents = (req: Request, res: Response) => {
  const { eventName, organizer, eventDate } = req.query;
  let filteredEvents = [...events];

  if (eventName) {
    filteredEvents = filteredEvents.filter((event) =>
      event.eventName.toLowerCase().includes(eventName.toString().toLowerCase())
    );
  }
  if (organizer) {
    filteredEvents = filteredEvents.filter((event) =>
      event.organizer.toLowerCase().includes(organizer.toString().toLowerCase())
    );
  }
  if (eventDate) {
    filteredEvents = filteredEvents.filter(
      (event) =>
        new Date(event.eventDate).toDateString() ===
        new Date(eventDate.toString()).toDateString()
    );
  }

  res.json(filteredEvents);
};
