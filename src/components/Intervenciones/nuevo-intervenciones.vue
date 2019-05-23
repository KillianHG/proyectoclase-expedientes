<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="nuevo-intervenciones">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Intervenciones</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6>
                            <v-autocomplete
                                    v-model="dni"
                                    :items="alumnos"
                                    :search-input.sync="search"
                                    label="Alumno"
                                    item-text="nombre"
                                    item-value="dni"
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12 sm6 md>
                            <v-select
                                    v-model="id_demanda"
                                    :items="demandas"
                                    label="Curso"
                                    item-text="curso"
                                    item-value="id_demanda"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12>
                            <v-flex xs3 sm3 md3>
                                <v-text-field
                                        v-model="dni"
                                        label="Dni"
                                        required
                                        :disabled="true"
                                ></v-text-field>
                            </v-flex>
                        </v-flex>
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
                                    v-model="items[0].id_centro"
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
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="data.fecha_intervencion"
                                            label="Fecha Intervencion"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="data.fecha_intervencion" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-select
                                    ref="Actuacion"
                                    v-model="data.actuacion"
                                    :rules="[() => !!data.actuacion || 'Este apartado es requerido']"
                                    :items="actuaciones"
                                    label="Actuacion"
                                    placeholder="Elige Actuacion"
                                    required
                            ></v-select>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    v-model="data.descripcion_de_la_intervencion"
                                    label="Descripcion"
                                    required
                                    box
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <div>
                                <v-btn v-if="!enabled" large disabled >Validar</v-btn>
                                <v-btn v-else large color="primary" @click="postData">Validar</v-btn>
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
    import constantes from '@/const.js';

    export default {
        data() {
            return {
                search: null,
                actuaciones:[
                    'Avaluació psicopedagògica',
                    'Coordinació amb el centre',
                    'Entrevista família',
                    'CAD-Comissió social',
                    'Coordinació Serveis Socials',
                    'Coordinació CSMIJ',
                    'Coordinació CDIAP',
                    'Coordinació CEE',
                    'Coordinació serveis externs',
                    'Altres'],
                alumnos: null,
                dni: null,
                id_demanda: '',
                demandas: [],
                curso: '',
                items: [{}],
                data: {
                    ficha_demanda_id_demanda: '',
                    fecha_intervencion: '',
                    actuacion: '',
                    descripcion_de_la_intervencion: '',
                }
            }
        },
        mounted() {
            axios.get(constantes.path + 'alumnosdni/')
                .then(response => this.alumnos = response.data)
        },
        methods: {
            postData() {
                this.data.ficha_demanda_id_demanda = this.id_demanda
                axios.post(constantes.path + 'intervenciones', this.data)
                    .then(this.$router.push('/intervenciones/?id=' + this.id_demanda))
            },
            querySelections (v) {
                setTimeout(() => {
                    this.items = this.states.filter(e => {
                        return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                    })
                }, 500)
            }
        },
        computed: {
            enabled: function() {
                if(this.dni && this.id_demanda && this.data.fecha_intervencion &&
                    this.data.actuacion && this.data.descripcion_de_la_intervencion) {
                    return true
                } else {
                    return false
                }
            }
        },
        watch: {
            dni: {
                handler: function () {
                    axios.get(constantes.path + 'demandas/' + this.dni)
                        .then(response => this.demandas = response.data)
                }
            },
            id_demanda: {
                handler: function () {
                    axios.get(constantes.path + 'demanda/'+ this.id_demanda)
                        .then(response => this.items = response.data)
                }
            },
            search (val) {
                val && val !== this.select && this.querySelections(val)
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
