<template>
  <v-container>
    <v-row justify="center" align="center" class="pad-footer">
      <v-card-title class="title">
        <h1>{{ brand.name }}</h1>
      </v-card-title>
      <v-col
        xl="2"
        lg="3"
        md="4"
        sm="5"
        xs="11"
        v-for="product in products"
        :key="product.id"
        align="center"
      >
        <v-card max-width="374px" class="transparent product">
          <v-img class="product-box" :src="product.image"></v-img>
          <v-card-title class="center product-name">{{
            product.name
          }}</v-card-title>
          <div class="center product-price">
            <small>R$</small><b>{{ getInteger(product.price) }},</b
            ><small>{{ getDecimal(product.price) }}</small>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  // Definição das props do componente

  data: () => ({
    selection: "",
    products: [],
    brands: [],
    brandId: "",
  }),

  props: {
    brand: {
      Type: Object,
    },
  },

  async created() {
    await this.getProducts();
    console.log(this.products)
  },

  methods: {
    async getProducts() {
      await axios.get(`https://salvadorcapsapi.azurewebsites.net/api/Product`).then((response) => {
        // this.productsBrand = response.data;
        
        this.products = response.data.filter(
          (product) => product.brandID == this.brand.id
        );
      });
    },
    getInteger(num) {
      return Math.floor(num).toString();
    },
    getDecimal(num) {
      return (num - Math.floor(num)).toFixed(2).replace("0.", "");
    },
  },
};
</script>
<!-- scoped: a camada de estilo se aplica somente a este component -->
<style scoped>
.title {
  width: 100%;
  margin: 1.25em 0px 0px;
  display: flex;
  justify-content: center;
}
.title h1 {
  font-family: "Montserrat";
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
}

.product {
  margin: 0.75em;
}
.product-box {
  max-height: 23.38em;
  max-width: 23.38em;
  border: 10px solid #feb425;
}
.product-name {
  padding: 0.63em 0.63em 0px;
  font-size: 1.13rem;
  font-weight: 700;
}
.product-price {
  display: flex;
}
.product-price > small {
  align-self: flex-end;
  font-size: 12px;
  font-weight: 600;
  padding: 2px;
}
.product-price > b {
  align-self: flex-end;
}
</style>
