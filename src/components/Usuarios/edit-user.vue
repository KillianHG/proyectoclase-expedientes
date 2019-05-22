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

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].apellidos"
                                    label="Apellido"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].puesto_de_trabajo"
                                    label="Puesto de trabajo"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].jornada_laboral"
                                    label="Jornada laboral"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].direccion"
                                    label="Direccion"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].poblacion"
                                    label="Poblacion"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].provincia"
                                    label="Provincia"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].pais"
                                    label="Pais"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].numero_telefono"
                                    label="Numero de telefono"

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5 v-if="items[0].numero_telefono2 != null">
                            <v-text-field
                                    v-model="items[0].numero_telefono2"
                                    label="Numero de telefono 2(Opcional)"

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

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <v-text-field
                                    v-model="items[0].password"
                                    label="Password"

                            ></v-text-field>
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
        props: ['dni'],
        data() {
            return {
                items: null
            }
        },
        mounted() {
            axios.get(constantes.path + 'empleados/' + this.dni)
                .then(response => this.items = response.data)
        },
        methods: {

            savedata(){
                axios.put(constantes.path + 'empleados/' + this.dni,this.items).then(
                    alert("el usuario con dni"+ this.dni + " se ha editado")

                )
                this.$router.push('/usuarios')

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
