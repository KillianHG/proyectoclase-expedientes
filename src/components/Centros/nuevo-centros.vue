<template>
    <v-app>
        <v-form>
            <v-container>
                <h1>Datos del Centro</h1>
                <v-layout row wrap>
                    <v-flex xs12 sm5 md5>
                        <v-text-field
                                v-model="nombre_de_centro"
                                label="Nombre Del Centro"
                                required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="nom_director_centro"
                                label="Nombre Director del Centro"

                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="direccion_de_centro"
                                label="Direccion del Centro"
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="poblacion"
                                label="Poblacion"
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="provincia"
                                label="Provincia"
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="telefono_de_contacto"
                                label="Telefono"
                                required
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12>
                        <div>
                            <v-btn large color="primary" @click="postData">Dar Alta</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </v-app>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "nuevo-centros",
        data (){
            return {
                data: {
                nombre_de_centro: '',
                nom_director_centro: '',
                    direccion_de_centro: '',
                    poblacion: '',
                    provincia: '',
                    telefono_de_contacto: ''
                },
                methods: {
                    postData() {
                        axios.post('http://localhost:3000/api/centros', this.data)
                            .then(this.$router.push('/centros'))
                    }
                }
            }
        }
    }
</script>

<style scoped>

    h1{
        color:darkblue;
    }

</style>