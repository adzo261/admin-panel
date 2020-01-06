import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dbRouter from '../routes/index';
import mentorsRouter from '../routes/mentors';
import tasksRouter from '../routes/tasks';

import Database from '../database/database';

const app = express();

const DIST_DIR = path.join(__dirname, '../../../', 'client', 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

Database.connect();
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});
app.use('/api', dbRouter);
app.use('/api/mentors', mentorsRouter);
app.use('/api/tasks', tasksRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port: ${port}`));
