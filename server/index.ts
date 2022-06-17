import express from "express";
import { backendSetup } from "setups";

const app = express();

backendSetup(app);
