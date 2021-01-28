import Vue from 'vue'
import Vuex from 'vuex'

import pointblack from "../assets/marker-colors/map-point-black.png"
import pointyellow from "../assets/marker-colors/map-point-yellow.png"
import pointorange from "../assets/marker-colors/map-point-orange.png"
import pointred from "../assets/marker-colors/map-point-red.png"
import pointpurple from "../assets/marker-colors/map-point-purple.png"
import pointblue from "../assets/marker-colors/map-point-blue.png"
import pointgreen from "../assets/marker-colors/map-point-green.png"
import pointgrey from "../assets/marker-colors/map-point-grey.png"

import triangleblack from "../assets/marker-colors/map-triangle-black.png"
import triangleyellow from "../assets/marker-colors/map-triangle-yellow.png"
import triangleorange from "../assets/marker-colors/map-triangle-orange.png"
import trianglered from "../assets/marker-colors/map-triangle-red.png"
import trianglepurple from "../assets/marker-colors/map-triangle-purple.png"
import triangleblue from "../assets/marker-colors/map-triangle-blue.png"
import trianglegreen from "../assets/marker-colors/map-triangle-green.png"
import trianglegrey from "../assets/marker-colors/map-triangle-grey.png"

import rhombusblack from "../assets/marker-colors/map-rhombus-black.png"
import rhombusyellow from "../assets/marker-colors/map-rhombus-yellow.png"
import rhombusorange from "../assets/marker-colors/map-rhombus-orange.png"
import rhombusred from "../assets/marker-colors/map-rhombus-red.png"
import rhombuspurple from "../assets/marker-colors/map-rhombus-purple.png"
import rhombusblue from "../assets/marker-colors/map-rhombus-blue.png"
import rhombusgreen from "../assets/marker-colors/map-rhombus-green.png"
import rhombusgrey from "../assets/marker-colors/map-rhombus-grey.png"





Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    colorArray: {
      pointblack,
      pointyellow,
      pointorange,
      pointred,
      pointpurple,
      pointblue,
      pointgreen,
      pointgrey,

      triangleblack,
      trianglered,
      triangleyellow,
      triangleorange,
      trianglepurple,
      triangleblue,
      trianglegreen,
      trianglegrey,

      rhombusblack,
      rhombusyellow,
      rhombusorange,
      rhombusred,
      rhombuspurple,
      rhombusblue,
      rhombusgreen,
      rhombusgrey,
    },
    sizeArray: {
      s: [31, 43],
      m: [44, 58],
      l: [61, 81]


    },
    selectedMarker: null,
    selectedIndex: null,
    defaultIcon: {

    },
    markerArray: [{
      id: 1,
      name: 'marker' + '1',
      coordinate: {
        lat: 47.42465491104985,
        lng: -1.2580583447684048
      },
      iconUrl: pointblack,
      iconSize: [44, 58],
      style: {
        size: "m",
        point: "point",
        colorCurrent: "black",
      }
    }],
    namecount: 2
  },
  mutations: {
    ADD_MARKER_TO_ARRAY: (state, obj) => {

      const marker = {
        id: 0 + state.namecount,
        name: 'marker' + state.namecount,
        coordinate: obj,
        iconUrl: state.colorArray.pointblack,
        iconSize: state.sizeArray.m,
        style: {
          size: "m",
          point: "point",
          colorCurrent: "black",
        }

      }
      state.namecount += 1
      state.markerArray.push(marker)

    },
    DELETE_MARKER_TO_ARRAY: (state, index) => {

      state.markerArray.splice(index, 1)


    },
    SEARCH_MARKER_IN_STATE: (state, index) => {
      state.selectedMarker = state.markerArray[index]
      //console.log("TYT")
      //console.log(state.markerArray[index].style)
    },
    EDIT_INDEX_IN_STATE: (state, index) => {
      state.selectedIndex = index
    },
    EDIT_MARKER_IN_STATE: (state, obj) => {
      for (const key in state.colorArray) {
        if (key == (obj.point + obj.colorCurrent)) {
          state.markerArray[state.selectedIndex].iconUrl = state.colorArray[key]
          state.markerArray[state.selectedIndex].style.point = obj.point
          state.markerArray[state.selectedIndex].style.colorCurrent = obj.colorCurrent
          state.markerArray[state.selectedIndex].style.size = obj.size
        }
      }
      for (const key in state.sizeArray) {
        if (key == obj.size) {
          state.markerArray[state.selectedIndex].iconSize = state.sizeArray[key]
        }
      }
    }
  },
  actions: {
    ADD_MARKER({
      commit,
      state
    }, obj) {
      commit("ADD_MARKER_TO_ARRAY", obj)
      ///console.log('add')
    },
    DELETE_MARKER({
      commit
    }, index) {
      commit("DELETE_MARKER_TO_ARRAY", index)
      console.log("Actions")
    },
    SEARCH_MARKER({
      commit
    }, index) {
      commit("SEARCH_MARKER_IN_STATE", index)
      //console.log("Edit_Actions")
    },
    EDIT_INDEX({
      commit
    }, index) {
      commit("EDIT_INDEX_IN_STATE", index)
    },
    EDIT_MARKER({
      commit,
      state
    }, object) {



      commit("EDIT_MARKER_IN_STATE", object)
    },

  },
  getters: {
    DEFAULT_ICON(state) {
      return state.defaultIcon
    },
    MARKERS_ARRAY(state) {
      return state.markerArray
    },
    SELECTED_MARKER(state) {
      return state.selectedMarker
    }
  }
})

export default store;