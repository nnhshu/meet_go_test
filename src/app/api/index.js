import axios from 'axios';

// host api
const host = "https://api-test.meetgo.io";
const hostVnappmob = "https://vapi.vnappmob.com";

const urlGetNft = host + '/v1/location/getLocationBySlug';


const GetNft = async (slug, token) => {
    try {
        var common_axios = axios.create({
            baseURL: urlGetNft
        });
        // Set default headers to common_axios ( as Instance )
        common_axios.defaults.headers.common['Authorization'] = token;
        // Check your Header
        const response = await common_axios.post(urlGetNft, {
            slug
        });
        return response.data.data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export {
    GetNft,
};

export default host;