<template>
  <v-app>
    <v-main>
      <Search />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "./components/Search.vue";

export default Vue.extend({
  name: "App",

  components: {
    Search,
  },

  data: () => ({
    //
  }),
});
</script>
