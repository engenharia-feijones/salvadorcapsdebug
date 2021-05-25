<template>
  <!-- :items: propriedade adicionada no componente -->
  <Brands :items="items" />
</template>

<script>
// @ is an alias to /src
import Brands from '@/components/Brands.vue'
import Json from '@/domain/produtos.js'

export default {
  name: 'Home',
  components: {
    Brands,
    Json
  },
  data() {
    return {
      items: [],
      brand: this.$route.params.brand
    }
  },
  methods: {
    getTopMenu() {
      this.items = [
        { id: 1, name: 'MAIS71CLOTHING' },
        { id: 2, name: 'SEVEN' },
        { id: 3, name: 'BLACK BRASIL' },
        { id: 4, name: 'NEW ERA' },
      ]
    }
  },
  beforeMount() {
    this.getTopMenu()
  },
  created() {
    // console.log(this.$route.params.marca)

    // console.log(this.marca)
    // this.items = this.produtos(this.marca)
  },
}
</script>
