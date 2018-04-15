<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please Select Server</p>
        <p v-else>Server #{{ server.id }} Selected {{ server.status }}</p>
    </div>

</template>

<script>

import { serverBus } from '../../main'

export default {
    data: function() {
        return {
            server: null,
        }
    },
    created() {
        serverBus.$on('serverSelected', (server) => {
            this.server = server
        })
    }
}
</script>

<style>

</style>
