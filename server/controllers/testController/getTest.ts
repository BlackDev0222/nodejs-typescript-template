import { Response, Request } from "express";
import httpStatus from "http-status";

import { NotFoundError } from "errors";

import { testService } from "services";

import { errorHandlerWrapper } from "utils";
import { query } from "express-validator";

type Params = unknown;
type ResBody = unknown;
type ReqBody = unknown;
type ReqQuery = {
	name: string;
};

export const getTestValidator = () => {
	return [
		query("name").isString().notEmpty().withMessage("Test name is required!"),
	];
};

const getTestHandler = async (
	req: Request<Params, ResBody, ReqBody, ReqQuery>,
	res: Response
) => {
	const { name } = req.query;

	const result = await testService.getTest({ name });

	if (!result) {
		throw new NotFoundError("Test is not exist!");
	}

	res.status(httpStatus.OK).json(result);
};

export const getTest = errorHandlerWrapper(getTestHandler);
