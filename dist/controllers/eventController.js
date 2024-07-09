"use strict";
// src/controllers/eventController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEvents = exports.deleteEvent = exports.updateEvent = exports.getEventById = exports.createEvent = void 0;
let events = [];
const createEvent = (req, res) => {
    const event = req.body;
    // event.id = generateEventId(); // You'll need to implement this function
    event.createdAt = new Date();
    event.updatedAt = new Date();
    events.push(event);
    res.status(201).json(event);
};
exports.createEvent = createEvent;
const getEventById = (req, res) => {
    const id = req.params.id;
    const event = events.find(event => event.id === id);
    if (!event) {
        res.status(404).json({ message: 'Event not found' });
    }
    else {
        res.json(event);
    }
};
exports.getEventById = getEventById;
const updateEvent = (req, res) => {
    const id = req.params.id;
    const updatedEvent = req.body;
    updatedEvent.updatedAt = new Date();
    const index = events.findIndex(event => event.id === id);
    if (index === -1) {
        res.status(404).json({ message: 'Event not found' });
    }
    else {
        events[index] = updatedEvent;
        res.json(updatedEvent);
    }
};
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => {
    const id = req.params.id;
    const index = events.findIndex(event => event.id === id);
    if (index === -1) {
        res.status(404).json({ message: 'Event not found' });
    }
    else {
        const deletedEvent = events.splice(index, 1)[0];
        res.json(deletedEvent);
    }
};
exports.deleteEvent = deleteEvent;
const getAllEvents = (req, res) => {
    const { eventName, organizer, eventDate } = req.query;
    let filteredEvents = [...events];
    if (eventName) {
        filteredEvents = filteredEvents.filter(event => event.eventName.toLowerCase().includes(eventName.toString().toLowerCase()));
    }
    if (organizer) {
        filteredEvents = filteredEvents.filter(event => event.organizer.toLowerCase().includes(organizer.toString().toLowerCase()));
    }
    if (eventDate) {
        filteredEvents = filteredEvents.filter(event => new Date(event.eventDate).toDateString() === new Date(eventDate.toString()).toDateString());
    }
    res.json(filteredEvents);
};
exports.getAllEvents = getAllEvents;
