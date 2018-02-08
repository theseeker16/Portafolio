import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import { UserRoutes } from './modules';

const app = express();

/**
 * Database
 */
dbConfig();
/**
 * Middlewares
 */
middlewareConfig(app);

app.use('/api', [UserRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
