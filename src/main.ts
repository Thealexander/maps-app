import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFsZXhnIiwiYSI6ImNsZ254eDdkYTBjZDAzZHA5YXp6OXdvN3IifQ.bes_UcLobMnRAPU8u6EEYg';

if(!navigator.geolocation){
    throw new Error('Geolocation is not supportted for browser' )
}

createApp(App).use(store).use(router).mount('#app')
