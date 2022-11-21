<template>
  <BasePopUp
      :pop-up-open="(popUpStatus && popUpOpenName === popUpName) ? true : false"
      @closePopUp="closePopUp"
  >
    <template #header>Register</template>
    <template #body >
      <form>
        <p>First Name* </p>
        <input type="text">
        <p>Last Name* </p>
        <input type="text">
        <p>Phone* </p>
        <input type="text">
        <p>Email address* </p>
        <input type="text">
        <p>Password* </p>
        <input type="text">
        <p>Repeat your password* </p>
        <input type="text">
        <button>login </button>

        <span @click="backToLogin">Back to login </span>
      </form>
    </template>
  </BasePopUp>
</template>

<script>
import BasePopUp from "@/components/pop-up/BasePopUp";

export default {
  name: "PopUpRegister",
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
      popUpName: 'popUpRegister'
    }
  },

  methods: {
    closePopUp() {
      this.$emit('closePopUp')
    },
    backToLogin() {
      this.closePopUp();
      this.$emit('backToLogin')
    }
  },
  mounted() {
    this.$emit('getName', this.popUpName)
  }
}
</script>

<style scoped>

</style>