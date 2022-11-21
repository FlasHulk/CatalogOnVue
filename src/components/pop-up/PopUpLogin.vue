<template>
  <BasePopUp
      :pop-up-open="(popUpStatus && popUpOpenName === popUpName) ? true : false"
      @closePopUp="closePopUp"
  >
    <template #header>Login</template>
    <template #body>
      <form>
        <p>Email address* </p>
        <input type="text">
        <p>Password* </p>
        <input type="text">
        <button>login </button>
      </form>
    </template>
  </BasePopUp>
</template>

<script>
import BasePopUp from "@/components/pop-up/BasePopUp";

export default {
  name: "PopUpLogin",
  components: {
    BasePopUp
  },
  props: {
    popUpStatus: {
      type: Boolean,
      default: false,
    },
    popUpOpenName: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      popUpName: 'popUpLogin'
    }
  },
  methods: {
    closePopUp() {
      this.$emit('closePopUp')
    }
  },
}
</script>

<style scoped>

</style>