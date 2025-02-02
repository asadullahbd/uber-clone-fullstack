import express from 'express';
import { createDriverController, loginDriverController, profileDriverController } from '../controllers/driver.controller.js';
import {  authDriverMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup',createDriverController)
router.post('/login',loginDriverController)
router.get('/profile',authDriverMiddleware,profileDriverController)

router.get('/check',(req,res)=>{
    res.send('Driver route is working fine check check')
})

export default router