import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Alumnos from '@/components/Alumnos/Alumnos'
import Demandas from '@/components/Demandas/Demandas'
import Intervenciones from '@/components/Intervenciones/Intervenciones'
import CrearUsuario from '@/components/Usuarios/CrearUsuario'
import ValidarUsuario from '@/components/Usuarios/validarusuario'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/alumnos',
            name: 'Alumnos',
            component: Alumnos
        },
        {
            path: '/demandas?id=',
            name: 'Demandas',
            component: Demandas
        },
        {
            path: '/demandas/',
            name: 'Demandas',
            component: Demandas
        },
        {
            path: '/intervenciones',
            name: 'Intervenciones',
            component: Intervenciones
        },
        {
            path: '/crearusuario',
            name: 'CrearUsuario',
            component: CrearUsuario
        },
        {
            path: '/validarusuario',
            name: 'validarusuario',
            component: ValidarUsuario
        }
    ],
    mode: 'history'
})
