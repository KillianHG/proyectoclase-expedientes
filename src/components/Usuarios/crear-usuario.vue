<template>
    <div id="crearusuario">
        <v-app id="inspire">
            <v-form>
                <v-container>

                    <h1>ALTA USUARIO</h1>
                    <h3>Datos personales</h3>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md3>
                            <v-text-field
                                    v-model="data.dni"
                                    label="Dni"
                                    required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.nombre"
                                    label="Nombre"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.apellido"
                                    label="Apellido"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.puesto"
                                    label="Puesto de trabajo"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.jornada"
                                    label="Jornada laboral"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.direccion"
                                    label="Direccion"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.poblacion"
                                    label="Poblacion"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.provincia"
                                    label="Provincia"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.pais"
                                    label="Pais"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.telefono"
                                    label="Numero de telefono"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.telefono2"
                                    label="Numero de telefono 2(Opcional)"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <h3></h3>
                    <h3>Asignacion Correo Electronico y Password</h3>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="data.correo"
                                    :rules="rules.emailRules"
                                    label="Correo Electronico"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <v-text-field
                                    v-model="data.password"
                                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    label="Nuevo Password"
                                    hint="AL menos 8 caracteres"
                                    counter
                                    @click:append="show1 = !show1"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                    <v-flex xs12 sm5>
                        <div>
                            <v-btn large color="primary">Dar Alta</v-btn>
                        </div>
                    </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "crearusuario",
        data () {
            return {
                data: {
                    dni: '',
                    nombre: '',
                    apellido: '',
                    puesto: '',
                    jornada: '',
                    direccion: '',
                    poblacion: '',
                    provincia: '',
                    pais: '',
                    telefono: '',
                    telefono2: '',
                    correo: '',
                    password: ''
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
