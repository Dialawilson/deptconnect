import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import authRoutes from './routes/authRoutes';
import electionRoutes from './routes/electionRoutes';
import ecommerceRoutes from './routes/ecommerceRoutes';
import eventRoutes from './routes/eventRoutes';
import cvRoutes from './routes/cvRoutes';
import { errorHandler } from './middlewares/error';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/elections', electionRoutes);
app.use('/api/ecommerce', ecommerceRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/cv', cvRoutes);

app.get('/', (req, res) => {
  res.send('DeptConnect Backend is running');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
