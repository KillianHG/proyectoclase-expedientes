import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Alumno from '@/components/Alumnos/alumno'
import Alumnos from '@/components/Alumnos/alumnos'
import Demanda from '@/components/Demandas/demanda'
import Demandas from '@/components/Demandas/demandas'
import Intervencion from '@/components/Intervenciones/intervencion'
import Intervenciones from '@/components/Intervenciones/intervenciones'
import ValidarUsuario from '@/components/Usuarios/validar-usuario'
import NuevoAlumno from '@/components/Alumnos/nuevo-alumno'
import NuevoDemandas from '@/components/Demandas/nuevo-demandas'
import NuevoIntervenciones from '@/components/Intervenciones/nuevo-intervenciones'
import NuevoTutores from '@/components/Tutores/nuevo-tutores'
import Tutor from '@/components/Tutores/tutor'
import Tutores from '@/components/Tutores/tutores'
import Centro from '@/components/Centros/centro'
import Centros from '@/components/Centros/centros'
import NuevoCentros from '@/components/Centros/nuevo-centros'
import NuevoUsuario from '@/components/Usuarios/crear-usuario'
import Usuarios from '@/components/Usuarios/usuarios'
import Usuario from '@/components/Usuarios/usuario'
import OpcionesCrear from '@/components/opciones-crear'
import OpcionesLista from '@/components/opciones-lista'
import EditAlumno from '@/components/Alumnos/edit-alumno'
import EditCentro from'@/components/Centros/edit-centro'
import EditDemanda from'@/components/Demandas/edit-demanda'
import EditIntervencion from'@/components/Intervenciones/edit-intervencion'
import EditTutor from'@/components/Tutores/edit-tutor'
import EditUsuario from'@/components/Usuarios/edit-user'
import AuthGuard from './AuthGuard'
import {store} from "../store/store";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'validar-usuario',
            component: ValidarUsuario,
            beforeEnter: (to, from, next) => {
                if (store.getters.user) {
                    next('/opcionLista')
                } else {
                    next()
                }
            }
        },
        {
            path: '/home',
            name: 'home',
            components:Home,
            beforeEnter: AuthGuard
        },
        {
            path: '/alumnos',
            name: 'alumnos',
            component: Alumnos,
            beforeEnter: AuthGuard
        },
        {
            path: '/alumno?id=',
            name: 'alumno',
            component: Alumno,
            beforeEnter: AuthGuard
        },
        {
            path: '/alumno/:dni',
            name: 'alumno',
            props: true,
            component: Alumno,
            beforeEnter: AuthGuard
        },
        {
            path: '/alumnos/nuevo',
            name: 'nuevo-alumno',
            component: NuevoAlumno,
            beforeEnter: AuthGuard
        },
        {
            path: '/demandas/:dni',
            name: 'demandas',
            component: Demandas,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/demandas/',
            name: 'demandas',
            component: Demandas,
            beforeEnter: AuthGuard
        },
        {
            path: '/demandas/nuevo',
            name: 'nuevo-demandas',
            component: NuevoDemandas,
            beforeEnter: AuthGuard
        },
        {
            path: '/demanda/:id',
            name: 'demanda',
            props: true,
            component: Demanda,
            beforeEnter: AuthGuard
        },
        {
            path: '/intervencion/:id',
            name: 'intervencion',
            props: true,
            component: Intervencion,
            beforeEnter: AuthGuard
        },
        {
            path: '/intervenciones/',
            name: 'intervenciones',
            component: Intervenciones,
            beforeEnter: AuthGuard
        },
        {
            path: '/intervenciones/nuevo',
            name: 'nuevo-intervenciones',
            component: NuevoIntervenciones,
            beforeEnter: AuthGuard
        },
        {
            path: '/tutores/nuevo',
            name: 'nuevo-tutores',
            component: NuevoTutores,
            beforeEnter: AuthGuard
        },
        {
            path: '/tutor/',
            name: 'tutor',
            component: Tutor,
            beforeEnter: AuthGuard
        },
        {
            path: '/tutores/',
            name: 'tutores',
            component: Tutores,
            beforeEnter: AuthGuard
        },
        {
            path: '/centro/',
            name: 'centro',
            component: Centro,
            beforeEnter: AuthGuard
        },
        {
            path: '/centros/',
            name: 'centros',
            component: Centros,
            beforeEnter: AuthGuard
        },
        {
            path: '/nuevocentros/',
            name: 'nuevo-centros',
            component: NuevoCentros,
            beforeEnter: AuthGuard
        },
        {
            path: '/usuario/nuevo',
            name: 'crear-usuario',
            component: NuevoUsuario,
            beforeEnter: AuthGuard
        },
        {
            path: '/usuarios',
            name: 'usuarios',
            component: Usuarios,
            beforeEnter: AuthGuard
        },
        {
            path: '/usuario',
            name: 'usuario',
            component: Usuario,
            beforeEnter: AuthGuard

        },
        {
            path: '/opcionCrea',
            name: 'opcion-crear',
            component: OpcionesCrear,
            beforeEnter: AuthGuard
        },
        {
            path: '/opcionLista',
            name: 'opcion-listar',
            component: OpcionesLista,
            beforeEnter: AuthGuard
        },
        {
            path:'/editarAlumno/:dni',
            name:'edit-alumno',
            props: true,
            component: EditAlumno,
        },
        {
            path:'/editarCentro',
            name:'editar-centro',
            component: EditCentro

        },
        {
            path:'/editarDemanda',
            name:'editar-demanda',
            component: EditDemanda
        },
        {
            path:'/editarIntervencion',
            name:'editar-intervencion',
            component: EditIntervencion
        },
        {
            path:'/editarTutor',
            name:'editar-tutor',
            component: EditTutor
        },
        {
            path:'/editarUsuario',
            name:'editar-Usuario',
            component: EditUsuario
        },

    ],
    mode: 'history'
})
