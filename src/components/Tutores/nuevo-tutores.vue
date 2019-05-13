<template>
<v-app>
    <v-form>
        <v-container>
            <h1>Datos Tutor a Cargo</h1>
            <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                    <v-text-field
                            v-model="dni"
                            label="Dni"
                            required
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 sm6 md5>
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
                            v-model="telefono_1"
                            label="Telefono"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                    <v-text-field
                            v-model="telefono_2"
                            label="Telefono 2(Opcional)"
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
    import constantes from '@/const.js';

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
                    telefono_1: '',
                    telefono_2: ''
                },
                methods: {
                    postData() {
                        axios.post(constantes.path + 'tutores', this.data)
                            .then(this.$router.push('/tutores'))
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
