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
            placeholder="Try 'Unimed'"
            solo
            :value="inputValue"
            @input="saveInputValue"
            @keypress="searchBykeypress"
          >
          </v-text-field>
          <v-btn
            style="margin-top: 2px"
            icon
            large
            class="white"
            elevation="4"
            @click="searchInput"
          >
            <v-icon> mdi-magnify </v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="10">
        <v-data-table
          :server-items-length="numberOfItemsFound"
          disable-sort
          @update:page="setTablePage"
          @update:items-per-page="setItemsPerPage"
          :headers="headers"
          :items="rows"
          :itemsPerPage="5"
          :page="1"
          class="elevation-1"
        ></v-data-table>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosResponse } from "axios";

export default Vue.extend({
  name: "Search",
  data() {
    return {
      inputValue: "",
      itemsPerPage: 5,
      tablePage: 1,
      numberOfItemsFound: 0,
      headers: [
        {
          text: "Registro ANS",
        },
        {
          text: "CNPJ",
        },
        {
          text: "Razão Social",
        },
        {
          text: "Nome Fantasia",
        },
        {
          text: "Modalidade",
        },
        {
          text: "Logradouro",
        },
        {
          text: "Número",
        },
        {
          text: "Complemento",
        },
        {
          text: "Bairro",
        },
        {
          text: "Cidade",
        },
        {
          text: "UF",
        },
        {
          text: "CEP",
        },
        {
          text: "DDD",
        },
        {
          text: "Telefone",
        },
        {
          text: "Fax",
        },
        {
          text: "Endereço eletrônico",
        },
        {
          text: "Representante",
        },
        {
          text: "Cargo Representante",
        },
        {
          text: "Data Registro ANS",
        },
      ],
      rows: [],
    };
  },
  methods: {
    saveInputValue(value: string) {
      this.inputValue = value;
    },
    async searchInput() {
      try {
        const {
          data: { rows, fields },
        }: AxiosResponse<any> = await axios({
          method: "get",
          url: `${process.env.VUE_APP_BACKENDHOST}:${process.env.VUE_APP_BACKENDPORT}/registration?search=${this.inputValue}&page=${this.tablePage}&perPage=${this.itemsPerPage}`,
        });

        this.numberOfItemsFound = rows[0] ? Number(rows[0].count) : 0;

        this.headers = this.headers.map((header, index) => {
          return {
            text: header.text,
            value: fields[index].name,
          };
        });

        this.rows = rows.map((row: any) => {
          const { data_reg_ans: date, ...rest } = row;
          return {
            ...rest,
            data_reg_ans: date.split("T")[0],
          };
        });
      } catch (err) {
        console.log("Error has ocurred trying to fetch the search results.");
      }
    },
    async searchBykeypress(event: KeyboardEvent) {
      if (event.key === "Enter") {
        await this.searchInput();
      }
    },
    setTablePage(page: number) {
      this.tablePage = page;
      this.searchInput();
    },
    setItemsPerPage(perPage: number) {
      this.itemsPerPage = perPage;
    },
  },
});
</script>

<style scoped>
#mainrow {
  height: 50vh;
}
</style>
