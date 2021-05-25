<template>
  <!-- v-app: elemento da biblioteca vuetify ultilizada para iniciar uma aplicação. Deve ser chamada uma unica vez -->
  <v-app class="panel">
    <v-app-bar-title id="topbar">
      <div class="center">
        <router-link :to="{name:'Home'}">
          <img id="logo" src="./assets/logo.png" />
        </router-link>
      </div>
      <!-- v-row: criação de uma linha que vai de 1 a 12 onde pode ser adicionado colunas com suas respectivas confs -->
      <div class="social">
        <v-row>
          <v-col class="icon" xs="3" sm="3" md="3" lg="3" xl="3">
            <img src="./assets/icon-facebook.png" />
          </v-col>
          <v-col class="icon" xs="3" sm="3" md="3" lg="3" xl="3">
            <img src="./assets/icon-instagram.png" />
          </v-col>
          <v-col class="icon" xs="3" sm="3" md="3" lg="3" xl="3">
            <img src="./assets/icon-whatsApp.png" />
          </v-col>
          <v-col class="icon" xs="3" sm="3" md="3" lg="3" xl="3">
            <img src="./assets/icon-sacola.png" />
          </v-col>
        </v-row>
      </div>
      <v-card flat tile>
        <v-toolbar class="navbar">
          <v-icon>mdi-chevron-left</v-icon>
          <v-spacer></v-spacer>
          <v-btn-toggle class="transparent">
            <v-container>
              <v-row>
                <div v-for="(item, index) in menuItems" :key="item.name">
                  <v-btn class="item" plain :to="{ name: 'Products', params: { brand: item.name } }">
                    {{ item.name }}
                  </v-btn>
                  <v-icon class="separator" v-if="index != Object.keys(menuItems).length - 1">mdi-circle-medium</v-icon>
                </div>
              </v-row>
            </v-container>
          </v-btn-toggle>
          <v-spacer></v-spacer>
          <v-icon>mdi-chevron-right</v-icon>
        </v-toolbar>
      </v-card>
    </v-app-bar-title>
    <v-container class="main">
      <router-view />
    </v-container>
    <v-footer class="footer">
      <div><b>(71) 99208-92-49</b></div>
      <div><b>Av. Octávio Mangabeira, 13, GVT</b></div>
      <div><b>Salvador-BA 411740-000 / Shopping Pituba Sol Flat</b></div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      menuItems: []
    }
  },
  methods: {
    getTopMenu() {
      this.menuItems = [
        { id: 1, name: 'MAIS71CLOTHING', target: '#' },
        { id: 2, name: 'SEVEN', target: '#' },
        { id: 3, name: 'BLACK BRASIL', target: '#' },
        { id: 4, name: 'NEW ERA', target: '#' },
        { id: 5, name: 'NYC', target: '#' }
      ]
    }
  },
  beforeMount() {
    this.getTopMenu()
  }
}
</script>

<!-- scoped: Utilizado para aplicar estilo somente neste componente.  -->
<style scoped>
#topbar {
  display: table;
  padding: auto;
  color: white;
  background: url("./assets/black.jpeg") no-repeat bottom center scroll;
  background-position: auto;
  background-size: cover;
}
.navbar {
  float: left;
  width: 100%;
  overflow: hidden;

  background-image: linear-gradient(to right, #ebb738, #815823);
  color: #dadada;
  position: relative;
  margin: 0px 0px 15px;
}
.navbar i {
  font-size: 30px !important;
  color: #dadada;
}
.navbar .item {
  font-family: "Montserrat";
  font-size: 22px !important;
  color: #dadada !important;
  text-decoration: none;
  font-weight: 900;
  padding: 0px 8px !important;
}
.navbar .separator {
  font-size: 30px !important;
  color: #cabaa3 !important;
}

.social {
  float: right;
  position: absolute;
  right: 0;
  top: 135px;
  width: 40%;
}
.social div {
  float: right;
}
.social img {
  float: right;
  max-width: 50px;
  width: 100%;
  vertical-align: bottom;
}

.panel {
  background: url("./assets/white.jpeg") no-repeat fixed !important;
  background-size: 100% 100% !important;
  color: #2c3e50 !important;
}

.footer {
  width: 100%;
  font-size: 12px;
  text-align: center;
  position: fixed;
  bottom: 0;
  background: url("./assets/black.jpeg");
}
.footer > div {
  width: 100%;
  float: left;
  padding: 4px;
  color: #dadada;
  font-weight: 900;
}

#logo {
  margin-top: 10px;
  width: 180px;
}
</style>

<style>
.v-app-bar-title__content {
  /* header fix */
  position: absolute;
}

.transparent {
  background-color: transparent !important;
  box-shadow: none !important;
}
.center {
  display: flex;
  justify-content: center;
}
.main {
  width: 100% !important;
}
.pad-footer {
  padding-bottom: 100px;
}
</style>
