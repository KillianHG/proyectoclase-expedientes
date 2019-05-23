<template>
    <div id="nuevo-demandas">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Demanda Alumno</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].nombre"
                                    label="Nombre"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].apellidos"
                                    label="Apellidos"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].fecha_de_nacimiento"
                                    label="Fecha de Nacimiento"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].numero_registro"
                                    label="Nº Reg"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md7>
                            <v-text-field
                                    v-model="items[0].nombre_de_centro"
                                    label="Centro"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].curso"
                                    label="Curso"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    v-model="items[0].concrecion"
                                    label="Concrecion"
                                    required
                                    box
                                    :disabled="true"
                            ></v-textarea>
                        </v-flex>

                        <table>
                            <tr>
                                <td>
                                    <v-flex xs12 sm6 md5>
                                        <v-btn large color="primary"
                                               @click="showIntervenciones">Ver intervenciones</v-btn>
                                    </v-flex>
                                </td>
                                <td>
                                    <v-flex xs12 sm6 md5>
                                        <v-btn large color="primary"
                                               @click="editar">Editar Demanda</v-btn>
                                        <v-btn large color="error"
                                               @click="removeDemanda">Borrar Demanda</v-btn>
                                    </v-flex>
                                </td>
                            </tr>
                        </table>
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
        props: ['id'],
        data() {
            return {
                items: null
            }
        },
        mounted() {
            axios.get(constantes.path + 'demanda/' + this.id)
                .then(response => this.items = response.data)
        },
        methods: {
            showIntervenciones(){
                this.$router.push('/intervenciones?id=' + this.id)
            },
            editar(){
                this.$router.push('/editarDemanda/' + this.id)
            },
            removeDemanda() {
                axios.delete(constantes.path + 'demandas/' + this.id)
                    .finally(this.$router.push('/demandas'))
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
