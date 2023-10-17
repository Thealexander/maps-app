<template>

     <MapView/>
     <SearchBar />
     <MyLocationBtn/>
     <PlacesDetails />
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables/usePlacesStore';

import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue'
import SearchBar from '@/components/searchBar/SearchBar.vue';
import PlacesDetails from '@/components/places-details/PlacesDetails.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    MapView, MyLocationBtn, SearchBar, PlacesDetails
  
  },
  setup(){
  usePlacesStore();

  }
});
</script>
