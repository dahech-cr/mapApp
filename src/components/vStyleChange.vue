<template>
  <div id="style-change">
    <div>
      <div class="selected-marker">
        <div class="selected-marker__header">
          Marker name : {{ markerObj.name }}
        </div>

        <div @click="closeStyleBlock" class="navigation__icon">
          <i class="fas fa-times"></i>
        </div>
      </div>

      <div v-if="isStylyVis" class="change__block">
        <div class="point">
          <div class="point__header">Size</div>
          <div class="point__block">
            <div
              class="point__choice"
              v-for="(size, index) in sizeArray"
              :key="index"
            >
              <input
                v-model="style.size"
                :value="size.size"
                type="radio"
                class="btn-check"
                name="options"
                :id="size.idInput"
                autocomplete="off"
                checked
              />
              <label
                class="btn btn-secondary size__active"
                :for="size.idInput"
                >{{ size.sizeName }}</label
              >
            </div>
          </div>
        </div>

        <div class="point">
          <div class="point__header">Point type</div>
          <div class="point__block">
            <div
              class="point__choice"
              v-for="(point, index) in pointArray"
              :key="index"
            >
              <input
                v-model="style.point"
                :value="point.point"
                type="radio"
                class="btn-check"
                name="point__options"
                :id="point.idInput"
                autocomplete="off"
                checked
              />
              <label
                class="btn btn-secondary point__active"
                :for="point.idInput"
              >
                {{ point.pointName }}
              </label>
            </div>
          </div>
        </div>

        <div class="point">
          <div class="point__header">Color</div>
          <div class="point__block">
            <div
              class="point__choice"
              v-for="(color, index) in colorArray"
              :key="index"
            >
              <input
                :value="color.colorName"
                type="radio"
                class="btn-check"
                name="color__options"
                :id="color.idInput"
                autocomplete="off"
                v-model="style.colorCurrent"
              />
              <label
                class="btn btn-secondary color__active"
                :for="color.idInput"
              >
                <div
                  :id="color.idForClass"
                  style="font-size: 0; height: 20px; width: 20px"
                ></div>
              </label>
            </div>
          </div>
        </div>

        <div class="edit__button">
        <button
          style="margin: 0 40px 20px 0; max-width: 100px"
          type="button"
          class="button-save"
          @click="editMarker"
        >
          Edit
        </button>
      </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Changer",
  props: {
    markerObj: Object,
    index: Number,
    
  },

  data() {
    return {
      isStylyVis : true,
      style: {
        size: this.markerObj.style.size,
        point: this.markerObj.style.point,
        colorCurrent: this.markerObj.style.colorCurrent,
      },
      sizeArray: {
        1: {
          sizeName: "S",
          size: "s",
          idInput: "size__option1",
        },
        2: {
          sizeName: "M",
          size: "m",
          idInput: "size__option2",
        },
        3: {
          sizeName: "L",
          size: "l",
          idInput: "size__option3",
        },
      },
      pointArray: {
        1: {
          pointName: "●",
          point: "point",
          idInput: "point__option1",
        },
        2: {
          pointName: "▲",
          point: "triangle",
          idInput: "point__option2",
        },
        3: {
          pointName: "⬥",
          point: "rhombus",
          idInput: "point__option3",
        },
      },
      colorArray: {
        1: {
          colorName: "black",
          color: "black",
          idInput: "color__option1",
          idForClass: "color__black",
        },
        2: {
          colorName: "yellow",
          color: "yellow",
          idInput: "color__option2",
          idForClass: "color__yellow",
        },
        3: {
          colorName: "orange",
          color: "orange",
          idInput: "color__option3",
          idForClass: "color__orange",
        },
        4: {
          colorName: "red",
          color: "red",
          idInput: "color__option4",
          idForClass: "color__red",
        },
        5: {
          colorName: "purple",
          color: "#8970eb",
          idInput: "color__option5",
          idForClass: "color__purple",
        },
        6: {
          colorName: "blue",
          color: "#253bac",
          idInput: "color__option6",
          idForClass: "color__blue",
        },
        7: {
          colorName: "green",
          color: "#2ec962",
          idInput: "color__option7",
          idForClass: "color__green",
        },
        8: {
          colorName: "grey",
          color: "grey",
          idInput: "color__option8",
          idForClass: "color__grey",
        },
      },
    };
  },
  methods: {
    ...mapActions(["EDIT_MARKER", "EDIT_INDEX"]),
    colorBox() {

      for (var i = 1; i < 9; i++) {
        document.getElementById(
          this.colorArray[i].idForClass
        ).style.backgroundColor = this.colorArray[i].color;
      }
      
    },
    editMarker() {
      const obj = this.style;
      this.EDIT_INDEX(this.index);
      this.EDIT_MARKER(obj);
    },
    closeStyleBlock(){
      this.$emit('closeStyleBlock')
    }
  },
  computed: {
    ...mapGetters(["SELECTED_MARKER"]),
  },
  mounted() {
    this.colorBox();
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
$button-b-color: #8d79ff;
$font-size-marker: 16px;

#style-change {
  
  border-top: 3px solid #402b94;
}
.navigation__icon {
  margin-top: 10px;
  font-size: 25px;
}
.fa-angle-down{
   transition-duration: 0.3s;

  &:hover {
    color: #402b94;
    transform: scale(1.6);
  }
  &:active{
    transform: scale(1);
  }
}
.fa-angle-up{
  transition-duration: 0.3s;

  &:hover {
    color: #402b94;
    transform: scale(1.6);
  }
  &:active{
    transform: scale(1);
  }
}
.fa-times {
  margin: 0 10px;
  transition-duration: 0.3s;
  &:hover {
    color: #402b94;
    transform: scale(1.6);
  }
  &:active{
    transform: scale(1);
  }
}
.selected-marker {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
}
.selected-marker__header {
  font-weight: bold;
  padding: 10px 10px 0;
  font-size: 18px;
  border-bottom: 1px solid black;
}
.change__block {
  padding: 10px;
}
.point__block {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 10px 0;
}
.point__header {
  text-align: left;
  font-size: 30px;
  margin-right: 6px;
}
.point__choice {
  margin-top: 6px;
  font-size: 20px;
}
.edit__button {
  text-align: right;
}
.button-save {
  font-size: 18px;
  border-radius: 6px;
  padding: 6px 30px;
  background-color: white;
  outline: none;
  border: 2px solid #402b94;

  transition-duration: 0.2s;
  backface-visibility: hidden;

  &:hover {
    background-color: #8d79ff;
    color: white;
    
  }
  &:active {
    transform: scale(0.9);
    transition-duration: 0.15s;
  }
}

.btn-check {
  display: none;
}
.btn-check:checked + .size__active {
  background-color: $button-b-color;
  color: rgb(0, 0, 0);
}
.btn-check:checked + .point__active {
  background-color: $button-b-color;
  color: rgb(0, 0, 0);
}
.btn-check:checked + .color__active {
  background-color: $button-b-color;
  color: rgb(0, 0, 0);
}
.btn-secondary {
  margin: 0 3px;
  background-color: white;
  color: black;
  transition-duration: 0.2s;
  backface-visibility: hidden;

  &:hover {
    background-color: $button-b-color;
    color: rgb(0, 0, 0);
  }
}
</style>