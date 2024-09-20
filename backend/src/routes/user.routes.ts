import { Router } from 'express';

const routes = Router();

import userCreateController from '../controllers/users/userCreate.controller';
import userLoginController from '../controllers/users/userLogin.controller';
import userListOneController from '../controllers/users/userListOne.controller';
import userDeleteSelfController from '../controllers/users/userDeleteSelf.controller';
import userUpdatePasswordController from '../controllers/users/userUpdatePassword.controller';

import { authUser } from '../middlewares/authUser.middleware';

routes.post('/users', userCreateController);
routes.get('/users/me', authUser, userListOneController);
routes.delete('/users/me', authUser, userDeleteSelfController);
routes.patch('/users/me/updatePassword', authUser, userUpdatePasswordController);
routes.post('/users/login', userLoginController);

export default routes;