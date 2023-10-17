import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex"
import Mapboxgl from 'mapbox-gl';
import { Feature } from "@/interfaces/places";
import { LngLat } from "@/store/map/actions";

export const useMapStore = ()=>{

const store = useStore<StateInterface>();

return{

    map:computed (   () => store.state.map.map),
    distance: computed (   () => store.state.map.distance),
    duration: computed (   () => store.state.map.duration),

    //mutations
    isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),

    //mutations
    setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
setPlaceMarkers:(places: Feature[]) => store.commit('map/setPlaceMarkers', places),
    //actions
    getRouteBetweenPoints:(start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints',
    {start, end})
}
}