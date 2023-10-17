import { useMapStore } from "@/composables";
import { usePlacesStore } from "@/composables/usePlacesStore";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap} = useMapStore();

        const initMap = async() => {
            if(!mapElement.value) throw new Error('Div element no exist');
            if(!userLocation.value) throw new Error('User Location no exist');

                await Promise.resolve();// esto es para resolver el tiempo de carga del mapa

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup()
            .setLngLat(userLocation.value)
            .setHTML(`
                <h4> Aqui estoy</h4>  
                <p>  ${userLocation.value}</p>
            `)


            const myLocationMarker = new Mapboxgl.Marker()
            .setLngLat(userLocation.value)
            .setPopup(myLocationPopup)
            .addTo(map)
        //TODO: establecer map en Vuex
        setMap(map)
        }


        onMounted(() => {
            if(isUserLocationReady.value ) return initMap()
            
            //console.log(mapElement.value)
        });
        watch( isUserLocationReady, (newval)=>{
            initMap();
        })
        return {

            isUserLocationReady,
            mapElement


        }
    },


})