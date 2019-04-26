<template>
    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
            <div>
                <v-btn large color="primary"
                       @click="newUsuarios">Nuevo Usuario</v-btn>
            </div>
            <v-card>
                <v-list two-line>
                    <div class="grey lighten-5" >
                        <v-subheader>LISTA DE USUARIOS</v-subheader>
                        <v-divider divider></v-divider>
                    </div>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                                :key="item.dni"
                                avatar
                                ripple
                                @click="loadUsuarios(item.dni)"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.nombre }} {{ item.apellidos }}</v-list-tile-title>


                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.dni }}</v-list-tile-action-text>
                            </v-list-tile-action>

                        </v-list-tile>
                        <v-divider
                                v-if="index + 1 < items.length"
                                :key="index"
                        ></v-divider>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>

    import axios from 'axios';

    export default {
        data () {
            return {
                selected: [],
                items: null
            }
        },
        mounted() {
            axios.get('http://localhost:3000/api/empleados')
                .then(response => this.items = response.data)
        },
        methods: {
            loadUsuarios(id){
                this.$router.push('/usuario?id=' + id)
            },
            newUsuarios(){
                this.$router.push('usuario/nuevo')
            }
        }
    }
</script>

<style scoped>

</style>