import express from 'express';
import path from 'path';
import * as http from 'http';
import apiRouter from '../routes/index';

const app = express();

export const publicFolderPath = path.resolve(__dirname, '../../public');
export const publicFolderarch = path.resolve(__dirname, '../../dist/persistence/products.json');
export const publicFoldercar = path.resolve(__dirname, '../../dist/persistence/productscar.json');

app.use(express.static(publicFolderPath));

app.use(express.json());
app.use('/', apiRouter)

const myServer = new http.Server(app);

export default myServer;