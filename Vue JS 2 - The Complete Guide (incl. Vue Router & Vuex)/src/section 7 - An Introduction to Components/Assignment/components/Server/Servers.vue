<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers">
                <server :server="server"></server>
            </li>

            <!-- <li class="list-group-item" v-for="index in 5">Server #{{ index }}</li> -->
        </ul>
    </div>
</template>

<script>
	import Server from './Server.vue'

	export default {
		data: function () {
			return {
				servers: [
					{id: 1, status: "Normal"},
					{id: 2, status: "Normal"},
					{id: 3, status: "Normal"},
					{id: 4, status: "Normal"},
				]
			}
		},
		components: {
			Server
		}
	}
</script>
<style>

</style>
