import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import constantes from '@/const.js'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
        loading: false,
        error: null,
    },
    mutations: {
        setUser (state, payload) {
            if (payload != null)  {
                state.user = payload
            } else {
                state.user = payload
                localStorage.removeItem('user')
            }
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }
    },
    actions: {
        // metodo para crear usuario
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
        },
        signUserIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            axios.get(constantes.path + 'empleados/' + payload.dni)
                .then(response => {
                    commit('setLoading', false)
                    let items = response.data
                    if(items[0].password == payload.password){
                        //alert("bienvenido "+ items[0].nombre)
                        let user = {
                            dni: items[0].dni,
                            nombre: items[0].nombre,
                            apellidos: items[0].dni,
                            puesto_de_trabajo: items[0].dni,
                            jornada_laboral: items[0].dni,
                            direccion: items[0].dni,
                            poblacion: items[0].dni,
                            provincia: items[0].provincia,
                            pais: items[0].pais,
                            numero_telefono: items[0].numero_telefono,
                            numero_telefono2: items[0].numero_telefono2,
                            correo_electronico: items[0].correo_electronico
                        }
                        localStorage.setItem("user", JSON.stringify(user))
                        commit('setUser', user)
                    }
                    else{
                        commit('setLoading', false)
                        alert("contraseña o dni incorrectos")
                        location.reload()
                    }

                })
        },
        autoSignIn ({commit}, payload) {
            commit('setUser', payload)
        },
        logout ({commit}) {
                commit('setUser', null)

        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
})

