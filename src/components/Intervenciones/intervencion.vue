<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="intervencion">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Intervencion</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12>
                            <v-flex xs3 sm3 md3>
                                <v-text-field
                                        label="Dni"
                                        required
                                        :disabled="true"
                                ></v-text-field>
                            </v-flex>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    label="Nombre"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    label="Apellidos"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    label="Centro"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="date"
                                    lazy
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    min-width="290px"
                                    :disabled="true"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="date"
                                            label="Fecha Intervencion"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                            :disabled="true"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-autocomplete
                                    ref="Actuacion"
                                    v-model="actuacion"
                                    :rules="[() => !!actuacion || 'Este apartado es requerido']"
                                    :items="actuaciones"
                                    label="Actuacion"
                                    placeholder="Elige Actuacion"
                                    required
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    label="Descripcion"
                                    required
                                    box
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <div>
                                <v-btn large color="primary">Validar</v-btn>
                            </div>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-form>
        </v-app>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                actuaciones:['random 1', 'random 2', 'random 3'],
                id_demanda: this.$route.query.id,
                items: null,
                data: {
                    "no_registro": 2,
                    "ficha_demanda_id_demanda": 2,
                    "fecha_intervencion": 1553472000000,
                    "actuacion": "actuacion2222",
                    "descripcion_de_la_intervencion": "decripcion dos 2222",
                    "id_demanda": 2,
                    "numero_registro": 1111,
                    "concrecion": "concrecion uno 1111",
                    "alumnos_dni": "dni2222",
                    "curso": 2019,
                    "dni": "dni2222",
                    "nombre": "alumno2",
                    "apellidos": "apellido2",
                    "fecha_de_nacimiento": 1331683200000,
                    "ciudad_de_nacimiento": "ciudad222",
                    "pais_de_nacimiento": "pais222",
                    "direccion_reside": "direccion222",
                    "poblacion_reside": "poblacion222",
                    "provincia_reside": "provincia222",
                    "id_centro": 2
                }
            }
        },
        mounted() {
            axios.get('http://localhost:3000/api/intervencion/' + this.dni)
                .then(response => this.items = response.data)
        }
    }
</script>

<style scoped>
    h1{
        color:blue;


    }
    h3{
        text-decoration: underline;
        padding-top: 10px;

    }
</style>