<template>
    <div>
        <button class="btn btn-primary" @click="inc(100)">Increment</button>
        <button class="btn btn-primary" @click="dec(50)">Decrement</button>
        <button class="btn btn-primary" @click="invert()">invert</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                    inc: 'increment',
                    dec: 'decrement'
                }
            ),
            invert() {
                this.mapMutations = ({ inc : 'decrement', dec: 'inceremnet' })
            }
        }
    }
</script>