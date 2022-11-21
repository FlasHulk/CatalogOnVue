<template>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>