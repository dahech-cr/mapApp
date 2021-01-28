<template>
  <div>
    <l-map  id="map" :zoom="zoom" :center="center" @click="addMarker">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      
      <l-marker
        v-for="(marker, index) in markers"
        :key="index"
        :lat-lng="marker.coordinate"
        @click="removeMarker(index)"
      >
        <l-tooltip
          style="positions: fixed"
          :options="{ permanent: false, direction: 'top' }"
        >
          {{ marker.name }}
        </l-tooltip>
        <l-icon :iconUrl="marker.iconUrl" :icon-size="marker.iconSize" />
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "vue2-leaflet";
import AwesomeMarkers from "leaflet.awesome-markers";
import { latLng, icon } from "leaflet";
import { mapActions, mapGetters } from "vuex";


export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip,
  },
  data() {
    return {
      zoom: 10,
      center: L.latLng(47.41322, -1.219482),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markers: [],
    };
  },
  computed: {
    ...mapGetters(["MARKERS_ARRAY"]),
  },
  methods: {
    ...mapActions(["ADD_MARKER"]),
    removeMarker(index) {
    },
    addMarker(event) {

      this.ADD_MARKER(event.latlng);
    },
  },
  mounted() {
    this.markers = this.MARKERS_ARRAY;
  },
};
</script>

<style lang="scss" >
</style>