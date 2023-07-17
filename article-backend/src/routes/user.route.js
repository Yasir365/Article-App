import express from 'express'
import UserController from '../controller/user.controller.js'
import checkUserAuth from '../middlewares/user.middleware.js'
const userRoute=express.Router()

//public routes
userRoute.post('/register',UserController.userRegistration)
userRoute.post('/login',UserController.userLogin)


// protected routes
userRoute.post('/changepassword',checkUserAuth,UserController.userChangePassword)
userRoute.get('/loggeduser',checkUserAuth,UserController.loggedUser)

export default userRoute