import express from "express"
import { getAutoCompleteSuggestionsController } from "../controllers/maps.controller.js";
import { authPassengerMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get("/getSuggestions",authPassengerMiddleware,getAutoCompleteSuggestionsController);

export default router;