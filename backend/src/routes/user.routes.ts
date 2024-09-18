import { Router } from "express";

const routes = Router()

import userCreateController from "../controllers/users/userCreate.controller"
import userLoginController from "../controllers/users/userLogin.controller";

routes.post('/users', userCreateController)
routes.post('/users/login', userLoginController)

export default routes