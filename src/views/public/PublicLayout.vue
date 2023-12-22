
<template>
    <header>
   

        <div class="wrapper">
            <PublicNav/>
   </div>
        </header>
        <RouterView />
</template>
<script>
import PublicNav from '../../components/PublicNav.vue';
export default {
    name:'PublicLayout',
    components:{
        PublicNav
    }
}
</script>
<style>
</style>