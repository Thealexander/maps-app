import { GetterTree } from 'vuex';
import { MapStateInterface } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapStateInterface, StateInterface> = {
    isMapReady( state ) {
         return !!state.map;
    }
}



export default getters;