import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { PlacesState } from './places/state';
import mapModule from './map';
import { mapState } from 'vuex';
import mapboxgl from 'mapbox-gl';
import { MapStateInterface } from './map/state';



export interface StateInterface {
 
  places: PlacesState,
  map: MapStateInterface
}

export default createStore<StateInterface>({
  modules: {
    //example: {}
    places: placesModule,
    map:mapModule
  }
})
