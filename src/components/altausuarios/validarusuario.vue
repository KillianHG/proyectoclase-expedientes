<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="onSignup">
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                            name="email"
                                            label="Mail"
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                            name="password"
                                            label="password"
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                            name="confirmPassword"
                                            label="confirm Password"
                                            id="confirmPassword"
                                            v-model="confirmPassword"
                                            type="password"
                                            :rules="[comparePasswords]"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-layout>
                                <v-flex xs12>
                                    <v-btn type="submit">Sign up</v-btn>
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
    export default {
        name: "validarusuario"


    }
</script>

<style scoped>

</style>