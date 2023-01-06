import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import path from 'path';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { fileURLToPath } from 'url';
import 'dotenv/config';
import allRoutes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const PORT = process.env.PORT || 8080;
const app = express();

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({encoded: true}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
  next();
});

app.use(morgan('tiny'));
app.use(cookieParser());

const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://my-todo-deploy.herokuapp.com/'];
const corsOptions = {
  origin(origin, callback) {
    console.log(`** Origin of request ${origin}`);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin acceptable');
      callback(null, true);
    } else {
      console.log('Origin rejected');
      callback(new Error('Not allowed by CORS'));
    }
  },
};
// app.use(helmet())
app.use(cors(corsOptions));

// routes
app.use('/api', allRoutes);

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(status).json({ message, stack: err.stack });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}

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
