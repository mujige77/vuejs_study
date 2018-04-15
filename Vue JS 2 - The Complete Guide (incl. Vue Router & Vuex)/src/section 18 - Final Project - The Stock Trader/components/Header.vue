<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a>
                </router-link>
                <router-link to="/stocks" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <ul class="navbar-nav navbar-right">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="endDay">End Day<span class="sr-only">(current)</span></a>
                </li>
                <li
                    class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#" id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                    Save & Load</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                        <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                    </div>
                </li>
            </ul>
            <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        </div>
    </nav>
</template>


<script>
    import {mapActions} from 'vuex'

	export default {
        data() {
            return {
                isDropDownOpen: false,
            }
        },
		computed: {
			funds() {
				return this.$store.getters.funds
			}
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                feachData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks()
            },
            saveData() {
                const data = {
                    funds : this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks : this.$store.getters.stocks,
                }
                this.$http.put('data.json', data)
            },
            loadData() {
                this.feachData()
            }
        },
	}
</script>