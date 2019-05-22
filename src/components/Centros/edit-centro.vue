<template>
    <div>
        <v-app id="inspire">
            <v-form>
                <v-container>
                    <h1>Datos del Centro</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm5 md5>
                            <v-text-field
                                    v-model="items[0].nombre_de_centro"
                                    label="Nombre Del Centro"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].telefono_de_contacto"
                                    label="Telefono"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].nombre_director_centro"
                                    label="Nombre Director del Centro"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].direccion_de_centro"
                                    label="Direccion del Centro"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].poblacion"
                                    label="Poblacion"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].provincia"
                                    label="Provincia"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-btn large color="primary"
                                   @click="savedata">Guardar</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
        </v-app>

    </div>
</template>
<script>
    import axios from 'axios';
    import constantes from '@/const.js';

    export default {
        props: ['id_centro'],
        data() {
            return {
                items:[{
                    id_centro: '',
                    nombre_de_centro: '',
                    nombre_director_centro: '',
                    direccion_de_centro: '',
                    poblacion: '',
                    provincia: '',
                    telefono_de_contacto: ''
                }]
            }
        },
        mounted() {
            axios.get(constantes.path + 'centros/' + this.id_centro)
                .then(response => this.items = response.data)
        },
        methods:{
            savedata(){
                axios.put(constantes.path + 'centros/' + this.items[0].id_centro , this.items[0])
                    .finally(this.$router.push('/centros')
            )}
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
