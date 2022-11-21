<template>
  <div class="pop-up" ref="pop-up-wrap">
    <div class="pop-up__wrap">
      <div
          class="pop-up__close"
          @click="closePopUp"
      >
      </div>
      <div class="pop-up__title">
        <slot name="title"></slot>
      </div>
      <div class="pop-up__content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  methods: {
    closePopUp() {
      this.$emit('closePopUp')
    }
  },
  mounted() {
    document.addEventListener('click', (item) => {
      let _this = this;

      if (item.target === _this.$refs['pop-up-wrap']) {
        _this.closePopUp();
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-y: auto;
  padding: 0 10px;

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    z-index: 20;
    @media screen and (min-width: 1025px) {
      &:hover {
        cursor: pointer;

        &:after {
          border-color: $grey;
        }

        &:before {
          border-color: $grey;
        }
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 16px;
      border-top: 2px solid $black;
    }

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      width: 16px;
      border-top: 2px solid $black;
    }
  }

  &__wrap {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 420px;
    width: 100%;
    height: fit-content;
    padding: 30px;
    background: $white;
    border-radius: 10px;
  }
}
</style>