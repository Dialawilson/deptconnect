import { Router } from 'express';
import { createEvent, getEvents, rsvpEvent } from '../controllers/eventController';
import { authenticate, authorize } from '../middlewares/auth';

const router = Router();

// Public routes
router.get('/', getEvents);

// Private routes
router.post('/rsvp', authenticate, rsvpEvent);

// Admin/Executive routes
router.post('/', authenticate, authorize(['ADMIN', 'EXECUTIVE']), createEvent);

export default router;
