<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="crearusuario">
        <v-app id="inspire">
            <v-form>
                <v-container>

                    <h1>NUEVO ALUMNO</h1>
                    <h3>Datos personales</h3>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md3>
                            <v-text-field
                                    v-model="data.dni"
                                    label="Dni"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md7>
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
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="data.fecha_de_nacimiento"
                                            label="Picker in menu"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="data.fecha_de_nacimiento" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.ciudad_de_nacimiento"
                                    label="Ciudad de nacimiento"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.pais_de_nacimiento"
                                    label="Pais de nacimiento"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.direccion_reside"
                                    label="Direccion"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.poblacion_reside"
                                    label="Poblacion"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.provincia_reside"
                                    label="Provincia"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-select
                                    :items="centros.items"
                                    label="Centros"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                    <v-flex xs12 sm5>
                        <div>
                            <v-btn large color="primary" @click="postData">Dar Alta</v-btn>
                        </div>
                    </v-flex>

                </v-container>
            </v-form>
        </v-app>
        <!-- Los siguientes paragrafos son una prueba para ver que se pasan los datos del formulario a la data correctamente (es provisional) -->
        <p> {{ centros }} </p>
        <p> Selected: {{ selected }} </p>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "nuevo-alumno",
        data() {
            return {
                centros: {
                    items:[]
                },
                data: {
                    dni: '',
                    nombre: '',
                    apellidos: '',
                    fecha_de_nacimiento: '',
                    ciudad_de_nacimiento: '',
                    pais_de_nacimiento: '',
                    direccion_reside: '',
                    poblacion_reside: '',
                    provincia_reside: '',
                    id_centro: ''
                },
                show1: false,
                show2: true,
                show3: false,
                show4: false,
                rules: {
                    required: value => !!value || 'Requerido.',
                    min: v => v.length >= 8 || 'Minimo 8 caracteres',
                    emailRules: [
                        v => !!v || 'E-mail is required',
                        v => /.+@.+/.test(v) || 'E-mail must be valid'
                    ],
                }


            }
        },
        mounted() {
            axios.get('http://172.31.73.46:3000/api/centros')
                .then(response => this.centros = response.data)
        },
        methods: {
            postData() {
                axios.post('http://172.31.73.46:3000/api/alumnos', this.data)
                    .then(this.$router.push('/alumnos'))
            }
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
