<template>
  <label class="checkbox-wrap">
    <input
        type="checkbox"
        :value="attributeData.id"
        :checked="bool"
        @change="(bool === false) ? bool = true : bool = false"
        @input="$emit('setAttribute', attributeData)"
        name="attribute"
    >
    <span class="checkbox"></span>
    <p>{{ attributeData.title }}</p>
  </label>
</template>

<script>
export default {
  name: "FilterItemAttribute",
  props: {
    attributeData: {
      type: Object,
      default: () => ({}),
    },
    isChecked: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      bool: false
    }
  },
  methods: {
    checked(item) {
      console.log(1)
      if (item === this.isChecked.id) {
        this.bool = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type=checkbox] {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  input[type=checkbox]:checked + .checkbox {
    background: #FFCA28;
    border-color: #FFCA28;
  }

  .checkbox {
    display: block;
    width: 19px;
    height: 19px;
    margin-right: 10px;
    border: 1px solid #C4C4C4;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    color: $black;
    text-transform: capitalize;
  }
}
</style>