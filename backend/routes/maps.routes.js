import express from "express"
import { getAutoCompleteSuggestionsController } from "../controllers/maps.controller.js";
const router = express.Router();

router.get("/getSuggestions",getAutoCompleteSuggestionsController);

export default router;