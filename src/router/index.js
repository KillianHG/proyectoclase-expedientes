import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Alumno from '@/components/Alumnos/alumno'
import Alumnos from '@/components/Alumnos/alumnos'
import Demanda from '@/components/Demandas/demanda'
import Demandas from '@/components/Demandas/demandas'
import Intervencion from '@/components/Intervenciones/intervencion'
import Intervenciones from '@/components/Intervenciones/intervenciones'
import CrearUsuario from '@/components/Usuarios/crear-usuario'
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
            path: '/alumno?id=',
            name: 'alumno',
            component: Alumno
        },
        {
            path: '/alumno',
            name: 'alumno',
            component: Alumno
        },
        {
            path: '/alumno/nuevo',
            name: 'nuevo-alumno',
            component: NuevoAlumno
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
            path: '/demandas/nuevo',
            name: 'nuevo-demandas',
            component: NuevoDemandas
        },
        {
            path: '/demanda/',
            name: 'demanda',
            component: Demanda
        },
        {
            path: '/intervencion',
            name: 'intervencion',
            component: Intervencion
        },
        {
            path: '/intervenciones',
            name: 'intervenciones',
            component: Intervenciones
        },
        {
            path: '/intervenciones/nuevo',
            name: 'nuevo-intervenciones',
            component: NuevoIntervenciones
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
        },
        {
            path: '/tutores/',
            name: 'nuevo-tutores',
            component: NuevoTutores
        },
        {
            path: '/tutores/',
            name: 'tutor',
            component: Tutor
        },
        {
            path: '/tutores/',
            name: 'tutores',
            component: Tutores
        },
        {
            path: '/centro/',
            name: 'centro',
            component: Centro
        },
        {
            path: '/centros/',
            name: 'centros',
            component: Centros
        },
        {
            path: '/nuevocentros/',
            name: 'nuevo-centros',
            component: NuevoCentros
        }
    ],
    mode: 'history'
})
