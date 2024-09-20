import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import cartDelProdService from '../../services/cart/cartDelProd.service'

const cartDelProdController = async (req: Request, res: Response) => {

    try {

        const { product_id } = req.params

        const email = (req as Request & { userEmail: string }).userEmail;

        const cartDel = cartDelProdService(email, product_id)

        return res.sendStatus(204)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default cartDelProdController