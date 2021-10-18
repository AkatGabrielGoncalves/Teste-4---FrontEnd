<template>
  <v-container fluid>
    <v-row id="mainrow" class="blue darken-1">
      <v-spacer></v-spacer>
      <v-col class="" cols="8" align-self="center">
        <h1 class="display-3 font-weight-regular text-center pa-6 white--text">
          Cadastro de Operadoras
        </h1>
        <v-row>
          <v-text-field
            class="mr-5"
            label="Search"
            placeholder="Try 'fdssggf'"
            solo
          >
          </v-text-field>
          <v-btn icon large class="white" elevation="4">
            <v-icon>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>

    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Search",
  data: () => ({
    //
  }),
});
</script>

<style scoped>
#mainrow {
  height: 50vh;
}


</style>