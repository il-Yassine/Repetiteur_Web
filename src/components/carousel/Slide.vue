<template>
<div class="slide">
<img :src="imageScr" alt="Slide Image" srcset=""
class="w-full h-auto mb-4"
>
<h1 class="text-2xl font-bold">{{ title }}
</h1>
<p>{{ description }}</p>

</div>

</template>
<script> 
export default {
    props:{
        ImageSrc:String,
        title:String,
        description:String,
    }
}
</script>

 <style>

</style>