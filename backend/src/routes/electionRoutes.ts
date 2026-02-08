import { Router } from 'express';
import { createElection, getElections, addCandidate, castVote, getResults } from '../controllers/electionController';
import { authenticate, authorize } from '../middlewares/auth';

const router = Router();

// Public routes
router.get('/', getElections);
router.get('/:electionId/results', getResults);

// Private routes (Students can vote)
router.post('/vote', authenticate, castVote);

// Admin/Executive routes
router.post('/', authenticate, authorize(['ADMIN', 'EXECUTIVE']), createElection);
router.post('/:electionId/candidates', authenticate, authorize(['ADMIN', 'EXECUTIVE']), addCandidate);

export default router;
