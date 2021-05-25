<template>
  <!-- :items: propriedade adicionada no componente -->
  <div v-if="showRender">
    <Search  :brand="brand" :key="brand.id"  />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Json from "@/domain/produtos.js";
import axios from "axios";

export default {
  name: "Produtos",
  components: {
    Search,
    Json,
  },
  data() {
    return {
      items: [],
      brand: {},
    };
  },
  /* Toda vez que houver alguma alteração de valor no route.params ele carrega a lista de produtos
   *  Isso foi feito por conta do meu created ja te sido chamado e eu estar no mesmo componente pois o mesmo ja foi carregado.
   */
  computed:{
      showRender(){
        return this.brand
      }
  },
  watch: {
    "$route.params.brand"() {
      this.brandName = this.$route.params.brand;
      this.brandFilter();
    },
  },
  async created() {
   await  this.getdBrand();
    this.brandName = this.$route.params.brand;
    this.brandFilter();

  },
  methods: {
    async getdBrand() {
      await axios.get(`https://salvadorcapsapi.azurewebsites.net/api/Brand`).then((response) => {
        this.brands = response.data;
      });
    },
    brandFilter() {
      this.brand = this.brands.filter(
        (brand) => brand.name == this.brandName
      )[0];
    },
  
  },
};
</script>
