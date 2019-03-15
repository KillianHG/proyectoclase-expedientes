<template>
    <div id="nuevo-demandas">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Demandas</h1>
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
                            <v-text-field
                                    v-model="data.curso"
                                    label="Curso"
                                    required
                            ></v-text-field>
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
                                <v-btn large color="primary" @click="postData">Validar</v-btn>
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
                dni: this.$route.query.id,
                items: null,
                data: {
                    alumnos_dni: '',
                    curso: '',
                    numero_registro: '',
                    concrecion: '',
                }
            }
        },
        mounted() {
            axios.get('http://localhost:3000/api/alumnos/' + this.dni)
                .then(response => this.items = response.data)
        },
        methods: {
            postData() {
                this.data.alumnos_dni = this.dni
                axios.post('http://localhost:3000/api/demandas', this.data)
                    .then(this.$router.push('/demandas/?id=' +this.dni))
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