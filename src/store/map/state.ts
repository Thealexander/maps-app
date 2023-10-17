import mapboxgl from "mapbox-gl";

export interface MapStateInterface {
    map?: mapboxgl.Map;
    markers:mapboxgl.Marker[];
    distance?: number;
    duration?: number;
}

function state(): MapStateInterface {
    return {
        map: undefined,
        markers:[],
        distance: undefined,
        duration: undefined
    }
}

export default state;