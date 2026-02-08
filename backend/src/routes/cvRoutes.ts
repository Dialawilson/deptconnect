import { Router } from 'express';
import { createJob, getJobs, uploadCV } from '../controllers/cvController';
import { authenticate, authorize } from '../middlewares/auth';

const router = Router();

// Public routes
router.get('/jobs', getJobs);

// Private routes
router.post('/cv', authenticate, uploadCV);

// Admin/Executive routes
router.post('/jobs', authenticate, authorize(['ADMIN', 'EXECUTIVE']), createJob);

export default router;
