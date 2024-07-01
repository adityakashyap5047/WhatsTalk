import express from 'express';

const route = express.Router();

import { addUser} from '../controller/userController.js';

route.post("/add", addUser);

export default route;