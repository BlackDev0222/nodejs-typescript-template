import express from "express";

import { testController } from "controllers";

const testRouter = express.Router();

// Create Test
testRouter.get("/", testController.getTestValidator(), testController.getTest);

export default testRouter;
