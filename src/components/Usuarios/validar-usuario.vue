<template class="principal">
    <v-container>
        <v-layout style="padding-top: 150px">
            <v-flex xs12 sm8 offset-sm2>
                <h1 style="text-align: center">Login User</h1>
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
                                    <v-btn large color="primary" @click="getData">Log in</v-btn>
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
    import axios from 'axios';
    import constantes from '@/const.js';

    export default {
        name: "validar-usuario",

        data(){
            return{
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
        },
        methods: {
            getData() {
                this.$store.dispatch('signUserIn', {dni: this.dni, password: this.password})
                console.log('testisng')
                },
        },
        watch: {
            user (value) {
                if (value !== null && value !== undefined) {
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
