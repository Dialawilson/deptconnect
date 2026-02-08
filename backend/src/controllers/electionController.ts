import { Request, Response } from 'express';
import prisma from '../config/db';
import { AuthRequest } from '../middlewares/auth';

export const createElection = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, startDate, endDate } = req.body;
    const election = await prisma.election.create({
      data: {
        title,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      },
    });
    res.status(201).json(election);
  } catch (error) {
    res.status(500).json({ message: 'Error creating election', error });
  }
};

export const getElections = async (req: Request, res: Response) => {
  try {
    const elections = await prisma.election.findMany({
      include: { candidates: true },
    });
    res.json(elections);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching elections', error });
  }
};

export const addCandidate = async (req: AuthRequest, res: Response) => {
  try {
    const { electionId } = req.params;
    const { name, manifesto } = req.body;
    const candidate = await prisma.candidate.create({
      data: {
        name,
        manifesto,
        electionId,
      },
    });
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ message: 'Error adding candidate', error });
  }
};

export const castVote = async (req: AuthRequest, res: Response) => {
  try {
    const { electionId, candidateId } = req.body;
    const userId = req.user?.userId;

    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const election = await prisma.election.findUnique({ where: { id: electionId } });
    if (!election || !election.isActive) {
      return res.status(400).json({ message: 'Election is not active' });
    }

    const existingVote = await prisma.vote.findUnique({
      where: { userId_electionId: { userId, electionId } },
    });

    if (existingVote) {
      return res.status(400).json({ message: 'You have already voted in this election' });
    }

    await prisma.vote.create({
      data: {
        userId,
        electionId,
        candidateId,
      },
    });

    res.status(201).json({ message: 'Vote cast successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error casting vote', error });
  }
};

export const getResults = async (req: Request, res: Response) => {
  try {
    const { electionId } = req.params;
    const candidates = await prisma.candidate.findMany({
      where: { electionId },
      include: {
        _count: {
          select: { votes: true },
        },
      },
    });

    const results = candidates.map((c: any) => ({
      id: c.id,
      name: c.name,
      votes: c._count.votes,
    }));

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching results', error });
  }
};
