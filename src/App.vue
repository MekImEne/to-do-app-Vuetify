<template>
  <v-app style="background: #f5f5f5;">
    <Navbar></Navbar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
