import { Request, Response } from 'express';

/**
 * Retrieves all users and sends a JSON response with a message.
 * 
 * @param _req - The incoming request object (unused in this implementation).
 * @param res - The response object used to send the JSON reply.
 */
const getUsers = (_req: Request, res: Response) => {
  res.json({ message: "Get all users" });
}

const createUser = (_req: Request, res:Response) => {
  res.json({ message: "Create user" });
}

const updateUser = (_req: Request, res: Response) => {
  res.json({ message: "Update user" });
}

const deleteUser = (_req: Request, res: Response) => {
  res.json({ message: "Delete user" });
}


export {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}