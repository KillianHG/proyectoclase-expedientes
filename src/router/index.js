import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Alumnos from '@/components/Alumnos/alumnos'
import Demandas from '@/components/Demandas/demandas'
import Intervenciones from '@/components/Intervenciones/intervenciones'
import CrearUsuario from '@/components/Usuarios/crear-usuario'
import ValidarUsuario from '@/components/Usuarios/validar-usuario'

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
            name: 'alumnos',
            component: Alumnos
        },
        {
            path: '/demandas?id=',
            name: 'demandas',
            component: Demandas
        },
        {
            path: '/demandas/',
            name: 'demandas',
            component: Demandas
        },
        {
            path: '/intervenciones',
            name: 'intervenciones',
            component: Intervenciones
        },
        {
            path: '/crearusuario',
            name: 'crear-usuario',
            component: CrearUsuario
        },
        {
            path: '/validarusuario',
            name: 'validar-usuario',
            component: ValidarUsuario
        }
    ],
    mode: 'history'
})
