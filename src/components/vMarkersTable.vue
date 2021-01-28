<template>
  <div class="table" :class="{ table__width: isTablesPartVis }">
    <div class="info__markers">
      <div @click="changeTableVIs">
        <i class="fas fa-angle-right"></i>
      </div>

      <div v-if="isTablesPartVis">Список маркеров :</div>
    </div>

    <div v-if="isTablesPartVis" class="table__markers">
      <div
        class="markers"
        v-for="(marker, index) in MARKERS_ARRAY"
        :key="index"
      >
        <div class="markers__name d-flex bd-highlight">
          <div class="p-2 flex-grow-1 bd-highlight">{{ marker.name }}</div>

          <div @click="deleteMarker(index)" class="p-2 bd-highlight">
            <i class="fas fa-trash"></i>
          </div>

          <div @click="openForEdit(index)" class="p-2 bd-highlight">
            <i class="fas fa-edit"></i>
          </div>
        </div>
      </div>
      <stylyChange
        @closeStyleBlock="closeStyleBlock"
        :key="componentKey"
        v-bind:index="index"
        v-bind:markerObj="SELECTED_MARKER"
        v-if="isStyleBlockVis"
      ></stylyChange>
    </div>
  </div>
</template>

<script>
import stylyChange from "./vStyleChange";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MarkersTable",
  data() {
    return {
      isTablesPartVis: false,
      selectedMarker: null,
      isStyleBlockVis: false,
      componentKey: 1,
      index: null,
    };
  },
  components: {
    stylyChange,
  },
  computed: {
    ...mapGetters(["MARKERS_ARRAY", "SELECTED_MARKER"]),
  },
  methods: {
    ...mapActions(["DELETE_MARKER", "SEARCH_MARKER"]),
    deleteMarker(index) {
      this.isStyleBlockVis = false;
      console.log("delete__table");

      this.DELETE_MARKER(index);
    },
    openForEdit(index) {
      console.log(this.MARKERS_ARRAY[index]);
      this.index = index;
      this.componentKey += 100;
      this.SEARCH_MARKER(index);
      this.isStyleBlockVis = true;
    },
    closeStyleBlock() {
      this.isStyleBlockVis = false;
    },
    changeTableVIs() {
      this.isTablesPartVis = !this.isTablesPartVis;
    },
  },
};
</script>

<style lang="scss" scoped>
.fa-angle-right{
  transition-duration: 0.3s;
  &:hover {
    color: #402b94;
    transform: scale(1.6);
  }
  &:active {
    transform: scale(1);
  }
}
.fa-edit {
  transition-duration: 0.2s;
  &:hover {
    color: #402b94;
    transform: scale(1.4);
  }
  &:active {
    transform: scale(1);
  }
}
.fa-trash {
  transition-duration: 0.2s;
  &:hover {
    color: #402b94;
    transform: scale(1.4);
  }
  &:active {
    transform: scale(1);
  }
}
.table__width {
  min-width: 220px;
}
.table {
  width: auto;

  height: auto;
}
.info__markers {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 20px;
}
.table__markers {
  width: auto;
}
.markers__name {
  text-align: left;
}
</style>