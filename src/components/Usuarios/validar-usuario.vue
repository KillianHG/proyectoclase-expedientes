<template>
    <v-container>
        <v-layout justify-center style="padding-top: 150px">
            <v-flex xs12 sm8 offset-sm2>
                <h1 style="text-align: center">Login Usuario</h1>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="onSignup">
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                            label="Dni"
                                            v-model="dni"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                            label="pasword"
                                            v-model="pasword"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex xs12>
                                    <v-btn type="submit">Aceptar</v-btn>
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
                data: {
                    dni:'',
                    pasword:''
                }
            }
        },
        mounted() {
            axios.get(constantes.path + 'usuarios')
                .then(response => this.centros = response.data)
        },




    }
</script>

<style scoped>

h1{
    color:darkblue;

}

</style>
