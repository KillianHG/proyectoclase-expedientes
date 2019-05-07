<template>
    <div id="nuevo-demandas">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Demandas</h1>
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
                                    v-model="data.numero_registro"
                                    label="Nº Reg"
                                    required
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
                            <v-select
                                    v-model="data.curso"
                                    :items="years"
                                    label="Curso"
                                    item-text="curso"
                            ></v-select>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    v-model="data.concrecion"
                                    label="Concrecion"
                                    required
                                    box
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <div>
                                <v-btn v-if="!enabled" large disabled>Validar</v-btn>
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
                alumnos: null,
                dni: this.$route.query.id,
                items: [{}],
                data: {
                    alumnos_dni: '',
                    curso: '',
                    numero_registro: '',
                    concrecion: '',
                }
            }
        },
        mounted() {
            axios.get(constantes.path + 'alumnosdni/')
                .then(response => this.alumnos = response.data)
            if (this.dni != null) {
                axios.get(constantes.path + 'alumnos/' + this.dni)
                    .then(response => this.items = response.data)
            }
        },
        methods: {
            postData() {
                this.data.alumnos_dni = this.dni
                axios.post(constantes.path + 'demandas', this.data)
                    .then(this.$router.push('/demandas/?id=' +this.dni))
            },
            querySelections (v) {
                setTimeout(() => {
                    this.items = this.states.filter(e => {
                        return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                    })
                }, 500)
            }
        },
        computed : {
            years () {
                const year = new Date().getFullYear()
                return Array.from({length: year - 1969}, (value, index) => year - index + '/' + (year - index + 1) )
            },
            enabled: function() {
                if(this.dni && this.data.curso && this.data.numero_registro && this.data.concrecion) {
                    return true
                } else {
                    return false
                }
            }
        },
        watch: {
            dni: {
                handler: function () {
                    axios.get(constantes.path + 'alumnos/' + this.dni)
                        .then(response => this.items = response.data)
                },
                deep: true
            },
            search (val) {
                val && val !== this.select && this.querySelections(val)
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
