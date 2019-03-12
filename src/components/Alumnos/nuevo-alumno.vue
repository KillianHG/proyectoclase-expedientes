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
                                    v-model="data.apellido"
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
                                            v-model="date"
                                            label="Picker in menu"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                            <v-text-field
                                    v-model="data.puesto"
                                    label="Fecha de nacimiento"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.ciudad"
                                    label="Ciudad de nacimiento"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.pais"
                                    label="Pais de nacimiento"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.direccion"
                                    label="Direccion"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.poblacion"
                                    label="Poblacion"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.provincia"
                                    label="Provincia"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-flex xs12 sm5>
                        <div>
                            <v-btn color="primary" flat @click="submit">Submit</v-btn>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm5>
                        <div>
                            <v-btn large color="primary">Dar Alta</v-btn>
                        </div>
                    </v-flex>

                </v-container>
            </v-form>
        </v-app>
        <!-- Los siguientes paragrafos son una prueba para ver que se pasan los datos del formulario a la data correctamente (es provisional) -->
        <p> {{ data.dni }} </p>
        <p> {{ data.nombre }} </p>
        <p> {{ data.apellido }} </p>
        <p> {{ data.nacimiento }} </p>
        <p> {{ data.ciudad }} </p>
        <p> {{ data.pais }} </p>
        <p> {{ data.direccion }} </p>
        <p> {{ data.poblacion }} </p>
        <p> {{ data.provincia }} </p>
    </div>
</template>

<script>
    export default {
        name: "nuevo-alumno",
        data () {
            return {
                data: {
                    dni: '',
                    nombre: '',
                    apellido: '',
                    nacimiento: '',
                    ciudad: '',
                    pais: '',
                    direccion: '',
                    poblacion: '',
                    provincia: '',
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
