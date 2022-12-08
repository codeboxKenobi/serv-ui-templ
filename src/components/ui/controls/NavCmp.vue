<template>
    <div class="nav-cmp">
        <tab-cmp v-for="( tab, tabIndex ) in tabs" 
        :class="active === tabIndex ? 'active-tab' : '' "
            :key="tabIndex" 
            :name="tab" 
                @click="( active = tabIndex )"
                @click-handler="clickHandler( tab )" />
    </div>
</template>

<script>
import { ref } from 'vue'
import TabCmp from '../TabCmp.vue';

    export default {
        components: {
            TabCmp
        },

        setup() {
            const active = ref( false )
            const tabs = {
                '1': 'Сервис',
                '2': 'Продажи',
                '3': 'Склад',
                '4': 'Аналитика',
            }

            const clickHandler = ( data ) => {
                console.log( data );
            }

            return {
                tabs,
                clickHandler,
                active
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.nav-cmp {
    @include flexRow( space-between, center );
    height: 100%;
    width: 25%;
    min-width: 300px;
    margin: 0px 10px;
}
</style>