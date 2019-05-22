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
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            axios.post(constantes.path + 'empleados', payload)
                .then(commit('setLoading', false))
                .catch(commit('setError', "El DNI introducido ya existe"))
                .finally(commit('setLoading', false))
        },
        signUserIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            let user = null
            axios.get(constantes.path + 'empleados/' + payload.dni)
                .then(response => {
                    let items = response.data
                    if(items[0].password === payload.password){
                        user = {
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
                        commit('setError', "Contraseña incorrecta")
                    }

                }).catch( function (){
                    if (user == null) {
                        commit('setError', "El DNI introducido no existe")
                    }
            })
                .finally(commit('setLoading', false))
        },
        autoSignIn ({commit}, payload) {
            commit('setUser', payload)
        },
        logout ({commit}) {
                commit('setUser', null)
        },
        clearError ({commit}) {
            commit('clearError')
        }
    },
    getters: {
        user (state) {
            return state.user
        },
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    }
})

