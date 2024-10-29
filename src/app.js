import express from 'express';
import "dotenv/config";
import especieRouter from './routers/especie-router.js';
import expeditionRouter from './routers/expedition-router.js';
import explorerRouter from './routers/explorer-router.js';

const app = express();
app.use(express.json());

app.use('/especie', especieRouter);
app.use('/expedition', expeditionRouter);
app.use('/explorer', explorerRouter);

app.listen(process.env.API_PORT, () => console.log('Server is running on port ' + process.env.API_PORT));