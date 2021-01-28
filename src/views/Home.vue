<template>
  <div class="home">
    <div class="home__body">
      <div style="width:auto" >
        <v-markers-table class="markers__table"></v-markers-table>
      </div>

      <div class="map__container">
        <v-map class="map" ></v-map>
      </div>
      
    </div>
  </div>
</template>

<script>
import VMap from "../components/vMap.vue";
import VMarkersTable from "../components/vMarkersTable.vue";

export default {
  name: "Home",
  components: {
    VMarkersTable,
    VMap,
  },
};
</script>

<style lang="scss" scoped>

$div-border:#402b94;
.home {
  overflow: hidden;
}
.home__body {
  display: flex;
}
.map__container{
  width: 100%;
  margin: 20px 20px 0 0px;

  @media screen and (min-width: 720px){
    margin: 20px 30px 0 40px;
  }
  
}
.map {
  border: 3px solid $div-border;
  height: 400px;
  width: 100%;
  min-width: 200px;
  @media screen and (max-height: 500px){
    height: 70vh;
  }
  
}
.markers__table {
  border: 3px solid $div-border;
  margin: 20px 5px 40px 20px;
  width: auto;
  //min-width: 300px;
  //height: auto;
}
</style>
