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

    const apiKey = process.env.GOOGLE_MAPS_API; // Used Go-Maps Pro API key   
   
    
    //checking 
    // `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=dhak&offset=3&key=AlzaSyjk2XhgQYJ5BWxacNaR0WmvhN59Fryc4QT`

    const url = `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${input}&offset=3&key=${apiKey}`

    //checking

    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new Error(response.data.message || "Failed to fetch suggestions");
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};

