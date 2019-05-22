<template>
    <v-app>
        <v-form>
            <v-container>
                <h1>Datos del Centro</h1>
                <v-layout row wrap>
                    <v-flex xs12 sm5 md5>
                        <v-text-field
                                v-model="data.nombre_de_centro"
                                label="Nombre Del Centro"
                                required
                        ></v-text-field>
                    </v-flex>

                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="data.telefono_de_contacto"
                            label="Telefono"
                            required
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="data.nombre_director_centro"
                                label="Nombre Director del Centro"

                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="data.direccion_de_centro"
                                label="Direccion del Centro"
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="data.poblacion"
                                label="Poblacion"
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="data.provincia"
                                label="Provincia"
                                required
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
        name: "nuevo-centros",
        data (){
            return {
                data: {
                    nombre_de_centro: '',
                    nombre_director_centro: '',
                    direccion_de_centro: '',
                    poblacion: '',
                    provincia: '',
                    telefono_de_contacto: ''
                }
            }
        },
        methods: {
            postData() {
                axios.post(constantes.path + 'centros', this.data)
                    .finally(this.$router.push('/centros'))
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
