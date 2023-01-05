import { MongoClient } from 'mongodb';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import allRoutes from './routes/index.js';

const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
  next();
});
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api', allRoutes);

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(status).json({ message, stack: err.stack });
});

const connectDB = async () => {
  const connectionString = process.env.ATLAS_URI;
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(connectionString);
    console.log('mongodb connected');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at ${PORT}`);
});
