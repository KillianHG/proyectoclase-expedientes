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
                                    :items="centros.items"
                                    label="Centro"
                                    item-text="nombre_de_centro"
                                    item-value="id_centro"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                    {{ tutoresDni }}
                    <v-layout v-for="(tutorDni, index) in tutoresDni" :key="index">
                        <v-flex xs12 sm1 md1>
                            <v-autocomplete
                                    v-model="tutorDni.dni"
                                    :items="tutores"
                                    :search-input.sync="search"
                                    label="Tutor"
                                    item-text="dni"
                                    item-value="dni"
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12 sm1 md1>
                            <v-text-field
                                    v-model="tutorDni.nombre"
                                    label="labeltest"
                                    disabled
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm1 md1>
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
                            <v-btn v-if="!test" large disabled @click="postData">Dar Alta</v-btn>
                            <v-btn v-else large color="primary" @click="postData">Dar Alta</v-btn>

                        </div>

                    </v-flex>

                </v-container>
            </v-form>
        </v-app>
        {{ tutores }}
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
                centros: null,
                tutores: null,
                tutoresDni: [{dni: '', nombre: '', apellidos: '', nacionalidad: '', telefono1: '', telefono2: ''},]
                ,
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
            axios.get(constantes.path + 'centros')
                .then(response => this.centros = response.data)
            axios.get(constantes.path + 'tutores')
                .then(response => this.tutores = response.data)

        },
        methods: {
            postData() {
                axios.post(constantes.path + 'alumnos', this.data)
                    .then(this.$router.push('/alumnos'))
            },
            querySelections (v) {
                setTimeout(() => {
                    this.items = this.states.filter(e => {
                        return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                    })
                }, 500)
            },
            newTutor() {
                this.tutoresDni.push({dni: '', nombre: '', apellidos: '', nacionalidad: '', telefono1: '', telefono2: ''})
            },
            removeTutor(index) {
                this.tutoresDni.splice(index, 1)
            },
        },
        watch: {
            data: {
                handler: function () {
                    // Return the object that changed
                    if(this.data.id_centro != null) {
                        this.test = true
                    }
                },
                deep: true
            },
            search (val) {
                val && val !== this.select && this.querySelections(val)
            },
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
