import { Request, Response } from 'express';
import prisma from '../config/db';
import { AuthRequest } from '../middlewares/auth';

export const createEvent = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, date, location } = req.body;
    const organizerId = req.user?.userId;

    if (!organizerId) return res.status(401).json({ message: 'Unauthorized' });

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        location,
        organizerId,
      },
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        _count: {
          select: { rsvps: true },
        },
      },
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
};

export const rsvpEvent = async (req: AuthRequest, res: Response) => {
  try {
    const { eventId } = req.body;
    const userId = req.user?.userId;

    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const existingRSVP = await prisma.rSVP.findUnique({
      where: { userId_eventId: { userId, eventId } },
    });

    if (existingRSVP) {
      return res.status(400).json({ message: 'You have already RSVPed' });
    }

    await prisma.rSVP.create({
      data: {
        userId,
        eventId,
      },
    });

    res.status(201).json({ message: 'RSVP successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing RSVP', error });
  }
};
