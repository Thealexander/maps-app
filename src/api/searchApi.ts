import axios  from "axios";


const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language: 'es',
        access_token:'pk.eyJ1IjoiYmFsZXhnIiwiYSI6ImNsZ254eDdkYTBjZDAzZHA5YXp6OXdvN3IifQ.bes_UcLobMnRAPU8u6EEYg'
    }
});

export default searchApi;