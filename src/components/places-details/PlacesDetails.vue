<template>
  <div v-if="distance" 
        class="info-container column">
     
    <div class="col">Distancia <strong> {{distance}} kms</strong></div>
    <div class="col">Duracion <strong> {{duration}}mints</strong></div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMapStore } from '@/composables';
export default defineComponent({
    name:'PlacesDetails',
    setup(){

        const {distance, duration} = useMapStore();
        return{
            distance, 
            duration,
        }
    }

})
</script>

<style scoped>
.info-container {
    background-color: white;
    border-radius: 10px;
    bottom: 30px;
    box-shadow:  0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 15px;
    left: 20px;
    padding: 10px;
    position: fixed;
    width: 350px;
}
strong {
    color:#42b983;
}
</style>