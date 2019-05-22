<template class="principal">
    <v-container>
        <v-layout style="padding-top: 150px">
            <v-flex xs12 sm8 offset-sm2>
                <v-layout row justify-center v-if="error">
                    <v-flex xs12 sm6>
                        <app-alert @dismissed="onDismissed" :text="error"></app-alert>
                    </v-flex>
                </v-layout>
                <h1 style="text-align: center">Login usuario</h1>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="onSignup">
                            <v-layout row justify-center>
                                <v-flex xs6>
                                    <v-text-field
                                            label="Dni"
                                            v-model="dni"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row justify-center>
                                <v-flex xs6>
                                    <v-text-field
                                            label="password"
                                            v-model="password"
                                            :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                            :type="show1 ? 'text' : 'password'"
                                            @click:append="show1 = !show1"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex xs12>
                                    <div class="text-xs-center">
                                    <v-btn large color="primary" @click="getData" :disabled="loading" :loading="loading">Log in</v-btn>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-container>

                </v-card-text>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
   // import axios from 'axios';
    //import constantes from '@/const.js';

    export default {
        name: "validar-usuario",

        data(){
            return{
                show1: false,
                dni: '',
                password:'',
                items:'',
            }
        },
        mounted () {
            if (this.$store.getters.user) {
                this.$router.push('/opcionLista')
            }
        },
        computed: {
            user () {
                return this.$store.getters.user
            },
            error () {
                return this.$store.getters.error
            },
            loading () {
                return this.$store.getters.loading
            }
        },
        methods: {
            getData() {
                this.$store.dispatch('signUserIn', {dni: this.dni, password: this.password})
                },
            onDismissed () {
                this.$store.dispatch('clearError')
            }
        },
        watch: {
            user (value) {
                if (value !== null && value !== undefined) {
                    this.$store.dispatch('clearError')
                    this.$router.push('/opcionLista')
                }
            }
        },


    }
</script>

<style scoped>
    h1 {
        color: #5887bc;


    }

    h3 {
        text-decoration: underline;
        padding-top: 10px;

    }

</style>
