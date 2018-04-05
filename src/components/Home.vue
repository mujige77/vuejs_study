<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>you ma Save & Load your data</h6>
        <hr>
        <p>Your Funds: {{ funds }}</p>
    </div>
</template>

<script>
	export default {
		computed: {
			funds() {
                return this.$store.getters.funds
			}
		}
	}
</script>
