<template>
  <div class="w-full overflow-y-auto bg-gray-100">
   <LayoutHeader></LayoutHeader>
   <div class="bg-gray-100 flex justify-center transition-all pt-20 pb-7 lg:justify-between h-full mx-auto max-w-screen-lg">
     <div class="bg-white min-w-0 rounded-md shadow-sm border-0 p-8 md:p-10">
      <Article v-for="i in 10" :key="i"/>
     </div>
      <div class="hidden transition-all lg:block sideContent rounded-md shadow-sm bg-white"></div>

   </div>
   <LayoutFooter>s</LayoutFooter>

  </div>
</template>
<script setup lang="ts">
import Article from '@/components/Article.vue'
import LayoutFooter from '@/components/LayoutFooter.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'

</script>

<style scoped>
.container {

}
.sideContent{
 width: 260px;
}
</style>