<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Expedientes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Entrar</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <crearusuario/>

    </v-content>
  </v-app>
</template>

<script>

import HelloWorld from './components/HelloWorld'
import validarusuario from './components/altausuarios/validarusuario'
import crearusuario from "./components/altausuarios/crearusuario";

export default {
  name: 'App',
  components: {
    crearusuario,
    validarusuario,
    HelloWorld,


  },
  data () {
    return {
      //
    }
  }
}
</script>
