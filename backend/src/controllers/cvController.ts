import { Request, Response } from 'express';
import prisma from '../config/db';
import { AuthRequest } from '../middlewares/auth';

// Job Controllers
export const createJob = async (req: AuthRequest, res: Response) => {
  try {
    const { title, company, description, location, salary, expiresAt } = req.body;
    const job = await prisma.job.create({
      data: {
        title,
        company,
        description,
        location,
        salary,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
      },
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { postedAt: 'desc' },
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
};

// CV Controllers
export const uploadCV = async (req: AuthRequest, res: Response) => {
  try {
    const { fileUrl } = req.body; // Mock upload, expects URL
    const userId = req.user?.userId;

    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    // Check if CV exists
    const existingCV = await prisma.cV.findUnique({ where: { userId } });

    if (existingCV) {
      const updatedCV = await prisma.cV.update({
        where: { userId },
        data: { fileUrl },
      });
      return res.json(updatedCV);
    }

    const cv = await prisma.cV.create({
      data: {
        userId,
        fileUrl,
      },
    });
    res.status(201).json(cv);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading CV', error });
  }
};
