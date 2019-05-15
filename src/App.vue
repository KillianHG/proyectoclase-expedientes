<template class="principal">
    <v-app>
        <v-navigation-drawer temporary absolute v-model="sideNav">
            <v-toolbar flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            <router-link to="/" tag="soan" style="cursor: pointer"><i class="ss ss-2x ss-mor"></i>Principal
                            </router-link>
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-divider></v-divider>
            <v-list>
                <v-list-tile
                        v-for="item in menuItems"
                        :key="item.title"
                        router
                        :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{ item.title }}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar height="55" class="light-blue darken-2">
            <v-toolbar-title
                    class="hidden-xs-only">
                <router-link to="/" tag="soan" style="cursor: pointer">Principal</router-link>
            </v-toolbar-title>
            <v-toolbar-side-icon
                    @click.native.stop="sideNav = !sideNav"
                    class="hidden-sm-and-up"></v-toolbar-side-icon>
            <spacer></spacer>
            <v-toolbar-items class="hidden-xs-only" >
                <v-btn
                        flat
                        v-for="item in menuItems"
                        :key="item.title"
                        router
                        :to="item.link">
                    <i :class="'ss ss-2x ss-'+item.icon"></i>&nbsp;
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <main>
            <router-view></router-view>
        </main>
    </v-app>
</template>

<script>



    export default {
        data() {
            return {
                sideNav: false,
                login:false
            }
        },
        mounted(){

        },
        computed: {

            autenticacion() {
                return {

                    login: sessionStorage.getItem("login")

                }
            },
            menuItems() {



                let menuItems = [
                    //{icon: '', title: 'Alumnos', link: '/alumnos'},
                    //{icon: '', title: 'Demandas', link: '/demand  as'},
                    //{icon: '', title: 'Intervenciones', link: '/intervenciones'},

                    //{icon: '', title: 'Login', link: '/validarusuario'}
                ]

                    if(this.login==false){
                        menuItems = [
                            {icon: '', title: 'Login', link: '/validarusuario'},
                            {icon: '', title: 'Crear Nuevo', link: '/opcionCrea'},
                            {icon: '', title: 'Listados', link: '/opcionLista'},
                        ]
                    }


                return menuItems
            }
        },



    }
</script>
<style>
.principal{


}


</style>
