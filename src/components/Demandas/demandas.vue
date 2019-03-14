<template>
    <div>
        <p>{{ id }}</p>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        data() {
            return {
                id: this.$route.query.id,
                data: null
            }
        }
    }
</script>

<style scoped>

</style>
