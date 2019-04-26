<template>
    <div id="crearusuario">
        <v-app id="inspire">
            <v-form>
                <v-container>
                    <h1>FICHA USUARIO</h1>
                    <h3>Datos personales</h3>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md3>
                            <v-text-field
                                    v-model="items[0].dni"
                                    label="Dni"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].nombre"
                                    label="Nombre"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].apellidos"
                                    label="Apellido"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].puesto_de_trabajo"
                                    label="Puesto de trabajo"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].jornada_laboral"
                                    label="Jornada laboral"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].direccion"
                                    label="Direccion"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].poblacion"
                                    label="Poblacion"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].provincia"
                                    label="Provincia"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].pais"
                                    label="Pais"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].numero_telefono"
                                    label="Numero de telefono"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].numero_telefono2"
                                    label="Numero de telefono 2(Opcional)"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <h3></h3>
                    <h3>Asignacion Correo Electronico y Password</h3>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].correo_electronico"
                                    label="Correo Electronico"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <v-text-field
                                    v-model="items[0].pasword"
                                    label="Password"
                                    :disabled="true"
                            ></v-text-field>
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
                dni: null,
                items: null
            }
        },
        created() {
            this.dni = this.$route.query.id
        },
        mounted() {
            axios.get('http://localhost:3000/api/empleados/' + this.dni)
                .then(response => this.items = response.data)
        }

    }
</script>

<style scoped>

</style>