<template>
    <div id="nuevo-demandas">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Demandas</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="fullItems[0].nombre"
                                    label="Nombre"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="fullItems[0].apellidos"
                                    label="Apellidos"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="fullItems[0].fecha_de_nacimiento"
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

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md7>
                            <v-text-field
                                    v-model="fullItems[0].nombre_de_centro"
                                    label="Centro"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-select
                                    v-model="items[0].curso"
                                    :items="years"
                                    label="Curso"
                                    item-text="curso"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    v-model="items[0].concrecion"
                                    label="Concrecion"
                                    required
                                    box

                            ></v-textarea>
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
        props: ['id_demanda'],
        data() {
            return {
                fullItems: [
                    {
                        id_demanda: '',
                        numero_registro: '',
                        concrecion: '',
                        alumnos_dni: '',
                        curso: '',
                        dni: '',
                        nombre: '',
                        apellidos: '',
                        fecha_de_nacimiento: '',
                        ciudad_de_nacimiento: '',
                        pais_de_nacimiento: '',
                        direccion_reside: '',
                        poblacion_reside: '',
                        provincia_reside: '',
                        id_centro: '',
                        nombre_de_centro: ''
                    }
                ],
                items: [
                    {
                        id_demanda: '',
                        numero_registro: '',
                        concrecion: '',
                        alumnos_dni: '',
                        curso: '',
                    }
                ]
            }
        },
        mounted() {
            axios.get(constantes.path + 'demanda/' + this.id_demanda)
                .then(response => {
                    this.fullItems = response.data
                    this.items[0].id_demanda = this.fullItems[0].id_demanda
                    this.items[0].numero_registro = this.fullItems[0].numero_registro
                    this.items[0].concrecion = this.fullItems[0].concrecion
                    this.items[0].alumnos_dni = this.fullItems[0].alumnos_dni
                    this.items[0].curso = this.fullItems[0].curso
                })
        },
        computed: {
            years () {
                const year = new Date().getFullYear()
                return Array.from({length: year - 1969}, (value, index) => year - index + '/' + (year - index + 1) )
            }
        },
        methods: {

            savedata(){
                axios.put(constantes.path + 'demandas/' + this.id_demanda, this.items[0])
                    .then(alert("los datos de la demanda "+ this.id_demanda + " se ha editado"))
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
