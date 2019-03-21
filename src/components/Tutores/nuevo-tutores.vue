<template>
<div>
<v-app>
    <v-form>
        <v-container>
            <h3>Datos Tutor a Cargo</h3>
            <v-layout row wrap>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="dni"
                            label="Dni"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md7>
                    <v-text-field
                            v-model="nombre"
                            label="Nombre"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="apellidos"
                            label="Apellido"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="parentesco"
                            label="Parentesco"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="nacionalidad"
                            label="Nacionalidad"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="telefono"
                            label="Telefono"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="telefono2"
                            label="Telefono 2(Opcional)"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm5>
                    <div>
                        <v-btn large color="primary" @click="postData">Dar Alta</v-btn>
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
        name: "nuevo-tutores",
        data() {
            return {
                data: {
                    dni: '',
                    nombre: '',
                    apellidos: '',
                    parentesco: '',
                    nacionalidad: '',
                    telefono: '',
                    telefono2: ''
                },
                methods: {
                    postData() {
                        axios.post('http://localhost:3000/api/tutores', this.data)
                            .then(this.$router.push('/tutores'))
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>