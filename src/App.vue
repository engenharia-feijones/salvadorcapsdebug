<template>
  <!-- v-app: elemento da biblioteca vuetify ultilizada para iniciar uma aplicação. Deve ser chamada uma unica vez -->
  <v-app class="panel">
    <v-app-bar-title id="topbar">
      <div class="center">
        <router-link :to="{ name: 'Home' }">
          <img id="logo" src="./assets/logo.png" />
        </router-link>
      </div>
      <div class="social-relative-container">
        <div class="social-container">
          <div
            class="icon-render"
            v-for="(icon, index) in menuIcons"
            :key="index"
          >
            <v-img :src="icon" alt="" />
          </div>
        </div>
      </div>

    </v-app-bar-title>
    <v-card tile>
      <v-tabs dark show-arrows class="navbar">
        <v-row justify-md="center" class="navbar-row">
          <v-tab
            v-for="(item, index) in menuItems"
            :key="index"
            :to="{ name: 'Products', params: { brand: item.name } }"
            class="items"
          >
            <v-icon class="navbar-bullet" v-if="showBullets(index)"
              >mdi-circle-medium</v-icon
            >{{ item.name }}
          </v-tab>
        </v-row>
      </v-tabs>
    </v-card>

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
import axios from 'axios'
export default {
  data() {
    return {
      menuItems: [ ],

      menuIcons: [
        require("./assets/icon-facebook.png"),
        require("./assets/icon-instagram.png"),
        require("./assets/icon-whatsApp.png"),
        require("./assets/icon-sacola.png"),
      ],
    };
  },
  created(){
    this.getBrands()
  },
  methods: {
   async getBrands(){
      await axios.get(`https://salvadorcapsapi.azurewebsites.net/api/Brand`)
        .then((response => {
            this.menuItems = response.data
            console.log(this.menuItems)
        }))
    },
    showBullets(index) {
      // return index != 0 && index != this.menuItems.length - 1;
     return index != 0;

    },
  },
};
</script>

<!-- scoped: Utilizado para aplicar estilo somente neste componente.  -->
<style scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#topbar {
  color: white;
  background: url("./assets/black.jpeg") no-repeat bottom center scroll;
  background-position: auto;
  background-size: cover;
}

.navbar .items {
  font-family: "Montserrat";
  font-size: 1.5em;
  padding: 0.9em 0;
  color: #dadada;
  font-weight: 900;
}

.navbar-bullet {
  font-size: 2em !important;
}


.social-relative-container {
  position: relative;
  padding: .1em;
}

.social-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: translateY(-10em);
  right: 0;
}

.social-container .icon-render {
  width: 2em;
  padding: 0.1em;
  margin: 0.3em 0.1em;
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

.center {
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  .social-container {
    flex-direction: row;
    transform: translateY(-2.5em);
    font-size: 1.8rem;
  }
}


</style>


<style>
/* Without scope to change the tabs background */
/*  */
div[role="tablist"] {
  background-image: linear-gradient(to right, #ebb738, #815823);
  /* transform: translateY(-1.3em); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  position: relative;
}

/* 
  get edu feedback before undo this
div[role="tablist"]::before {
  background-color: black;
  content: "";
  width: 100%;
  position: absolute;
  height: 1.32em;
  bottom: -1.35em;
} */

@media screen and (min-width: 768px) {
  div[role="tablist"] {
    padding: 2.5em 0;
  }
}

.transparent {
  background-color: transparent !important;
  box-shadow: none !important;
}

.center {
  display: flex;
  justify-content: center;
}

.pad-footer {
  padding-bottom: 100px;
}
</style>