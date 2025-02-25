import { Request, Response } from 'express';
import { ApiResponse } from '../utils/ApiResponse';

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // No need for try/catch when using asyncHandler
  return res.status(200).json(new ApiResponse('', 200));
};
