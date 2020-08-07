import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesContollers = new ClassesController();
const connetionsController = new ConnectionsController();


routes.get('/classes', classesContollers.index);
routes.post('/classes', classesContollers.create);
routes.get('/connetions', connetionsController.index);
routes.post('/connetions', connetionsController.create);

export default routes