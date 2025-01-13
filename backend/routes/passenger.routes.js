import express from 'express';
import {createPassenger, loginPassenger} from '../controllers/passenger.controller.js';

const router = express.Router();

router.post('/signup',async (req,res)=>{
    await createPassenger(req,res);
})



router.post('/login',async (req,res)=>{
    await loginPassenger(req,res);
})

export default router