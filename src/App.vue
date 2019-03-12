<template>
    <v-app>
        <v-navigation-drawer temporary absolute v-model="sideNav">
            <v-toolbar flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            <router-link to="/" tag="soan" style="cursor: pointer"><i class="ss ss-2x ss-mor"></i>Home
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
        <v-toolbar height="45" class="light-blue lighten-1">
            <v-toolbar-title
                    class="hidden-xs-only">
                <router-link to="/" tag="soan" style="cursor: pointer">Home</router-link>
            </v-toolbar-title>
            <v-toolbar-side-icon
                    @click.native.stop="sideNav = !sideNav"
                    class="hidden-sm-and-up"></v-toolbar-side-icon>
            <spacer></spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                        flat
                        v-for="item in menuItems"
                        :key="item.title"
                        router
                        :to="item.link">
                    <i :class="'ss ss-2x ss-'+item.icon"></i>
                    &nbsp;
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
                sideNav: false
            }
        },
        computed: {
            menuItems() {
                let menuItems = [
                    {icon: '', title: 'Alumnos', link: '/alumnos'},
                    {icon: '', title: 'Demandas', link: '/demandas'},
                    {icon: '', title: 'Intervenciones', link: '/intervenciones'},
                    {icon: '', title: 'Nueva', link: '/nueva'},
                    {icon: '', title: 'Eliminar', link: '/eliminar'},
                    {icon: '', title: 'Crear', link: '/crearusuario'},
                    {icon: '', title: 'Validar', link: '/validarusuario'}
                ]
                if (this.$route.path == '/demandas') {
                    menuItems = [
                        {icon: '', title: 'Alumnos', link: '/alumnos'},
                        {icon: '', title: 'TEST', link: '/demandas'},
                        {icon: '', title: 'Intervenciones', link: '/intervenciones'},
                        {icon: '', title: 'Nueva', link: '/nueva'},
                        {icon: '', title: 'Eliminar', link: '/eliminar'}
                    ]
                }
                return menuItems
            }
        }
    }
</script>

