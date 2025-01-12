// import axios from "axios"
// export const getAutoCompleteSuggestionsService = async (input) => {
//     if (!input) {
//         throw new Error("query is required");
//     }

//     const apiKey = process.env.GOOGLE_MAPS_API;
//     const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
//         input
//     )}&key=${apiKey}`;

//     try {
//         const response = await axios.get(url);
//         if (response.data.status === "OK") {
//             return response.data.predictions
//                 .map((prediction) => prediction.description)
//                 .filter((value) => value);
//         } else {
//             throw new Error("Unable to fetch suggestions");
//         }
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// };
















import axios from "axios";

export const getAutoCompleteSuggestionsService = async (input) => {
    if (!input) {
        throw new Error("Input is required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API; // Use Go-Maps Pro API key
    const url = `https://gomapspro.api/autocomplete?query=${encodeURIComponent(
        input
    )}&apiKey=${apiKey}`;   

    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data.suggestions || [];
        } else {
            throw new Error(response.data.message || "Failed to fetch suggestions");
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};
