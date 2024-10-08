import { Request, Response } from 'express'
import userUpdatePasswordService from '../../services/users/userUpdatePassword.service'
import { AppError, handleError } from "../../errors/appError";

const userUpdatePasswordController = async (req: Request, res: Response) => {

    try {
      const email = (req as Request & { userEmail: string }).userEmail;

      const {password} = req.body

      if (!password) {
          throw new Error("No password informed")
      }

      const user =  await userUpdatePasswordService(email, password)

      return res.status(201).json({message: "Password updated!"})

    } catch(error) {
      if( error instanceof AppError){
        handleError(error, res)
      }
    }
}

export default userUpdatePasswordController