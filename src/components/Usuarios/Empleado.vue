<template>
    <h1>USUARIO</h1>
    <h3>Datos personales</h3>
    <v-layout row wrap>
        <v-flex xs12 sm6 md3>
            <v-text-field
                    v-model="items[0].data.dni"
                    label="Dni"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.nombre"
                    label="Nombre"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.apellido"
                    label="Apellido"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.puesto"
                    label="Puesto de trabajo"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.jornada"
                    label="Jornada laboral"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.direccion"
                    label="Direccion"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.poblacion"
                    label="Poblacion"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.provincia"
                    label="Provincia"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.pais"
                    label="Pais"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.telefono"
                    label="Numero de telefono"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.telefono2"
                    label="Numero de telefono 2(Opcional)"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
    </v-layout>
    <h3></h3>
    <h3>Correo Electronico y Password</h3>
    <v-layout row wrap>
        <v-flex xs12 sm6 md5>
            <v-text-field
                    v-model="items[0].data.correo"
                    label="Correo Electronico"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm5>
            <v-text-field
                    v-model="items[0].data.password"
                    label="Nuevo Password"
                    :disabled="true"
            ></v-text-field>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex xs12 sm5>
            <div>
                <v-btn large color="primary" @click="postData">Dar Alta</v-btn>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Empleado"
    }
</script>

<style scoped>

</style>