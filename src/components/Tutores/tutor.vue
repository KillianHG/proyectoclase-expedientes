<template>
    <v-app>
        <v-form>
            <v-container>
                <h1>Informacion tutor a cargo</h1>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md3>
                        <v-text-field
                                v-model="items[0].dni"
                                label="Dni"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="items[0].nombre"
                                label="Nombre"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="items[0].apellidos"
                                label="Apellido"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="items[0].nacionalidad"
                                label="Nacionalidad"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="items[0].telefono1"
                                label="Telefono"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="items[0].telefono2"
                                label="Telefono 2"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-flex xs12 sm6 md5>
                    <v-btn large color="primary"
                           @click="editar">Editar Tutor</v-btn>
                </v-flex>
            </v-container>
        </v-form>
    </v-app>
</template>

<script>
    import axios from 'axios';
    import constantes from '@/const.js';

    export default {
        props: ['dni'],
        data() {
            return {
                items: [{
                    dni: '',
                    nombre: '',
                    apellidos: '',
                    nacionalidad: '',
                    telefono1: '',
                    telefono2: ''
                }]
            }
        },
        mounted() {
            axios.get(constantes.path + 'tutores/' + this.dni)
                .then(response => this.items = response.data)

        },
        methods: {
            editar(){
                this.$router.push('/editarTutor/' + this.dni)
            }
        }

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
