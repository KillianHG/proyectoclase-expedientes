<template class="principal">
    <v-container>
        <v-layout style="padding-top: 150px">
            <v-flex xs12 sm8 offset-sm2>
                <h1 style="text-align: center">Login User</h1>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="onSignup">
                            <v-layout row justify-center>
                                <v-flex xs6>
                                    <v-text-field
                                            label="Dni"
                                            v-model="dni"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row justify-center>
                                <v-flex xs6>
                                    <v-text-field
                                            label="password"
                                            v-model="password"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex xs12>
                                    <div class="text-xs-center">
                                    <v-btn large color="primary" @click="getData">Log in</v-btn>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-container>

                </v-card-text>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import constantes from '@/const.js';



    export default {
        name: "validar-usuario",

        data(){
            return{

                    dni: '',
                    password:'',
                    items:'',


            }
        },
        methods: {
            async getData() {
                await axios.get(constantes.path + 'empleados/' + this.dni)
                    .then(response => this.items = response.data)

                    sessionStorage.setItem("login",false)

                    if(this.items[0].password==this.password){

                        sessionStorage.setItem("login", true)
                        this.$router.push('/opcionCrea')
                        alert("bienvenido "+ this.items[0].nombre)
                        location.reload()


                    }
                    else{
                        alert("contraseña o dni incorrectos")
                        location.reload()
                    }
                },
            }

    }
</script>

<style scoped>

h1{
    color:darkblue;

}
.principal{


}

</style>
