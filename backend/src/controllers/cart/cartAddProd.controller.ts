import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/appError'
import cartAddProdService from '../../services/cart/cartAddProd.service'

const cartAddProdController = async (req: Request, res: Response) => {

    try {

        const email = (req as Request & { userEmail: string }).userEmail;

        const { product_id } = req.body

        const cartAdd = await cartAddProdService(product_id, email)

        res.json(cartAdd)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }

    }

}

export default cartAddProdController