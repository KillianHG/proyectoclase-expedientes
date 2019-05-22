<template>
<v-app>
    <v-form>
        <v-container>
            <h1>Datos Tutor a Cargo</h1>
            <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            v-model="data.dni"
                            label="Dni"
                            required
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="data.nombre"
                            label="Nombre"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="data.apellidos"
                            label="Apellido"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="data.nacionalidad"
                            label="Nacionalidad"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="data.telefono1"
                            label="Telefono"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="data.telefono2"
                            label="Telefono 2(Opcional)"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12>
                    <div>
                        <v-btn large color="primary" @click="postData">Dar Alta</v-btn>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</v-app>
</template>

<script>
    import axios from 'axios';
    import constantes from '@/const.js';

    export default {
        name: "nuevo-tutores",
        data() {
            return {
                data: {
                    dni: '',
                    nombre: '',
                    apellidos: '',
                    nacionalidad: '',
                    telefono1: '',
                    telefono2: ''
                },
            }
        },
        methods: {
            postData() {
                axios.post(constantes.path + 'tutores', this.data)
                    .then(this.$router.push('/tutores'))
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
