import express from 'express';

const route = express.Router();

import { addUser, getUser } from '../controller/userController.js';
import { newConversation, getConversation } from '../controller/conversation.js';
import { getMessage, newMessage } from '../controller/message.js';

route.post("/add", addUser);
route.get("/users", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

export default route; 