import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    userEmail: string;
}

export const authUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Authorization token missing" });
        }

        jwt.verify(
            token as string,
            process.env.JWT_SECRET as string,
            (err: any, decoded: any) => {
                if (err) {
                    return res.status(401).json({ message: "Invalid Token" });
                }

                (req as CustomRequest).userEmail = (decoded as { email: string }).email;

                next();
            }
        );
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};