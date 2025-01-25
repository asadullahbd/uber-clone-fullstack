import express from 'express';
import {createPassenger, loginPassenger, profilePassenger} from '../controllers/passenger.controller.js';
import { authPassengerMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup',async (req,res)=>{
    await createPassenger(req,res);
})



router.post('/login',async (req,res)=>{
    await loginPassenger(req,res);
})

router.get('/profile',authPassengerMiddleware,async (req,res)=>{
    await profilePassenger(req,res);
})

export default router