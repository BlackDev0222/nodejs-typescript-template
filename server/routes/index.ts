import express from "express";

import testRouter from "./test.route";

const appRoutes = express.Router();

appRoutes.use("/test", testRouter);

export default appRoutes;
