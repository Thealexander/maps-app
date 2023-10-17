<script lang="ts" src="./SearchBar.ts"/>

<template>
  <div class="searchbar-container">
    <input class="form-control" type="text" placeholder="Buscar Lugares..." 
    v-model="searchTerm"/>
    <SearchResults />
 </div>
</template>


<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
  z-index: 9999;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  border-radius: 5px !important;
  overflow: hidden;
  padding: 5;
}

</style>