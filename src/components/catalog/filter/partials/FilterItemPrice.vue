<template>
  <div class="filter__price">
    <p>Price</p>

    <div class="filter__price--inputs">
      <input
          type="number"
          v-model="priceValue[0]"
      />
      <input
          type="number"
          v-model="priceValue[1]"
      />
      <button
          @click="$emit('setPrice', priceValue)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9L16 9V7L1 7L1 9Z" fill="white"/>
        </svg>
      </button>
    </div>

    <VueSimpleRangeSlider
        class="filter__price--rage-slider"
        v-model="priceValue"
        :model-value="priceValue"
        :value="priceValue"
        :max="priceDefault[1]"
        :min="priceDefault[0]"
    />

  </div>
</template>

<script>
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/css";
import {mapGetters} from "vuex"

export default {
  name: "FilterItemPrice",
  components: { VueSimpleRangeSlider },
  data() {
    return {
      priceValue: [],
      priceDefault: []
    }
  },
  watch: {
    priceDefault(newPrise) {
      setTimeout(this.priceValue = newPrise, 1000);
    }
  },
  computed: {
    ...mapGetters('products', [
        'PRICEVALUE'
    ]),
  },
  methods: {
    setDefaultPrise() {
      this.priceDefault = this.PRICEVALUE;
      this.priceValue = this.priceDefault;
    },
  },
  mounted() {
    this.setDefaultPrise();
  }
}
</script>

<style lang="scss">

.filter__price {
  margin-bottom: 22px;

  & > p {
    margin-bottom: 19px;
    font-weight: 500;
    font-size: 16px;
    line-height: 29px;
    color: $black;
  }

  .filter__price--inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    input {
      width: 100%;
      max-width: 77px;
      height: 33px;
      padding: 7px 5px 3px;
      font-weight: 300;
      font-size: 16px;
      line-height: 29px;
      color: $black;
      text-align: center;
      border: 1px solid #C4C4C4;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33px;
      height: 33px;
      background: #B1B8BB;
    }
  }

  .filter__price--rage-slider {
    .simple-range-slider-popover,
    .simple-range-slider-popover-arrow {
      display: none;
    }
  }
}

</style>