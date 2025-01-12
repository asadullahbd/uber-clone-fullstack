import { getAutoCompleteSuggestionsService } from "../services/maps.service.js";

export const getAutoCompleteSuggestionsController = async (req, res, next) => {
    try {
        

        const { input } = req.query;

        const suggestions = await getAutoCompleteSuggestionsService(input);

        res.status(200).json(suggestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};
