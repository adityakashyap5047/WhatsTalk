import express from 'express';

const route = express.Router();

import { addUser, getUser } from '../controller/userController.js';
import { newConversation } from '../controller/conversation.js';

route.post("/add", addUser);
route.get("/users", getUser);
route.post("/conversation/add", newConversation);

export default route; 