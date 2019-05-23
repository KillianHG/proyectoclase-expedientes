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
                                    v-model="data.id_centro"
                                    :items="centros"
                                    label="Centro"
                                    item-text="nombre_de_centro"
                                    item-value="id_centro"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                    <v-layout class="featured-inputs" v-for="(tutorDni, index) in tutoresDni" :key="index">
                        <v-flex xs12 sm2 md2>
                            <v-autocomplete class="info-tutor"
                                    v-model="tutoresDni[index]"
                                    :items="tutores"
                                    :search-input.sync="search"
                                    label="Dni"
                                    item-text="dni"
                                    return-object
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12 sm2 md2>
                            <v-autocomplete class="info-tutor"
                                    v-model="tutoresDni[index]"
                                    :items="tutores"
                                    :search-input.sync="search"
                                    label="Nombre"
                                    item-text="nombre"
                                    return-object
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12 sm2 md2>
                            <v-text-field class="info-tutor"
                                    v-model="tutorDni.apellidos"
                                    label="Apellidos"
                                    disabled
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm2 md2>
                            <v-text-field class="info-tutor"
                                    v-model="tutorDni.nacionalidad"
                                    label="Nacionalidad"
                                    disabled
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm2 md2>
                            <v-text-field class="info-tutor"
                                    v-model="tutorDni.telefono1"
                                    label="Telefono"
                                    disabled
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm2 md2>
                            <v-text-field class="info-tutor"
                                    v-if="tutorDni.telefono2 != ''"
                                    v-model="tutorDni.telefono2"
                                    label="Telefono 2"
                                    disabled

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm2 md2>
                            <v-select class="info-tutor"
                                    ref="Actuacion"
                                    v-model="tutorDni.parentesco"
                                    :items="parentesco"
                                    label="Parentesco"
                                    placeholder="Elige Parentesco"
                                    required
                            ></v-select>
                        </v-flex>
                        <v-flex xs12 sm2 md2>
                            <v-btn v-if="index!=0" flat icon color="red" @click="removeTutor(index)">
                                <v-icon>clear</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-btn flat icon color="blue" @click="newTutor">
                        <v-icon>add</v-icon>
                    </v-btn>
                    <v-flex xs12 sm5>

                        <div>
                            <v-btn v-if="!enabled" large disabled @click="postData">Dar Alta</v-btn>
                            <v-btn v-else large color="primary" @click="postData">Dar Alta</v-btn>

                        </div>

                    </v-flex>

                </v-container>
            </v-form>
        </v-app>
    </div>
</template>

<script>
    import axios from 'axios';
    import constantes from '@/const.js';

    export default {
        name: "nuevo-alumno",
        data() {
            return {
                test: false,
                centros: [{}],
                tutores: null,
                tutoresDni: [{
                    dni: '',
                    nombre: '',
                    apellidos: '',
                    nacionalidad: '',
                    telefono1: '',
                    telefono2: '',
                    parentesco: ''
                },],
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
                parentesco: [
                    'Padre',
                    'Madre',
                    'Tutor legal'
                ],
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
            axios.get(constantes.path + 'centros')
                .then(response => this.centros = response.data)
            axios.get(constantes.path + 'tutores')
                .then(response => this.tutores = response.data)

        },
        methods: {
            postData() {
                this.tutoresDni.map(c => {
                    let alumnotutor = {
                        alumnos_dni: this.data.dni,
                        tutor_a_cargo_dni: c.dni,
                        parentesco: c.parentesco,
                    }
                    axios.post(constantes.path + 'alumnoshastutor', alumnotutor)
                })
                axios.post(constantes.path + 'alumnos', this.data)
                    .then(this.$router.push('/alumnos'))
            },
            querySelections(v) {
                setTimeout(() => {
                    this.items = this.states.filter(e => {
                        return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                    })
                }, 500)
            },
            newTutor() {
                this.tutoresDni.push({
                    dni: '',
                    nombre: '',
                    apellidos: '',
                    nacionalidad: '',
                    telefono1: '',
                    telefono2: ''
                })
            },
            removeTutor(index) {
                this.tutoresDni.splice(index, 1)
            },
            enabled: function () {
                if (this.tutoresDni[0].dni === '' && this.tutoresDni[0].parentesco === '') {
                        return false
                } else {
                    return true
                }


            }
        },
        watch: {
            data: {
                handler: function () {
                    // Return the object that changed
                    if (this.data.id_centro != null) {
                        this.test = true
                    }
                },
                deep: true
            },
            search(val) {
                val && val !== this.select && this.querySelections(val)
            },
        }
    }
</script>

<style scoped>


    .featured-inputs {
        display: flex;
        flex-direction: row;

    }

    @media (min-width: 100px) and (max-width: 1176px) {
        .featured-inputs {
            display: flex;
            flex-direction: column;
        }
    }

    .info-tutor {
        width: 150px;
        margin-right: 10px;
    }

    h1 {
        color: #5887bc;


    }

    h3 {
        text-decoration: underline;
        padding-top: 10px;

    }

</style>
