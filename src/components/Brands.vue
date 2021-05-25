<template>
  <v-row >
    <!-- class="center main" -->
    <!-- class="center" -->
    <v-col  xl="2" lg="3" md="4" sm="5" cols="7" v-for="item in brand" :key="item.id" >
      <v-card v-if="item.promo" max-width="400" class=" ml-12 transparent brand pad-footer ">
        <router-link :to="{name:'Products', params: { brand: item.name }}">
          <img class="brand-box" :src=item.desktopSpotlightImage />
        </router-link>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'
export default {
  // Definição das props do componente
  props: {
    items: {
      Required: true,
      type: [Object, Array]
    }
  },
  data:() => ({
 
      selection: '',
      brand:[],
    
  }),
  created(){
    this.getBrands()
  },
  methods: {
    async getBrands(){
       await axios.get(`https://salvadorcapsapi.azurewebsites.net/api/Brand`)
        .then((response =>{
            this.brand = response.data
            console.log(this.brand)
        }))
      
    },
    getInteger(num) {
      return Math.floor(num).toString();
    },
    getDecimal(num) {
      return (num - Math.floor(num)).toFixed(2).replace("0.", "");
    },
  }
}
</script>
<!-- scoped: a camada de estilo se aplica somente a este component -->
<style scoped>
.brand {
  margin: 12px;
  transform: skewX(17deg) !important;
  overflow: hidden;
}
.brand-box {
  max-height: 374px;
  max-width: 374px;
  width: 230%;
  transform: skewX(-17deg);
  margin-left: -35%;
}
</style>
