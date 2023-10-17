import axios  from "axios";


const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token:'pk.eyJ1IjoiYmFsZXhnIiwiYSI6ImNsZ254eDdkYTBjZDAzZHA5YXp6OXdvN3IifQ.bes_UcLobMnRAPU8u6EEYg'
    }
});

export default directionsApi;