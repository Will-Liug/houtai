<template>
  <div class="home">这是登录成功的页面</div>
</template>
<script>
import { getUserlist } from "@/api";
export default {
  created() {
    let params = {
      query: '',
      pagenum: 1,
      pagesize: 5
    }
    getUserlist(params).then(res=>{
      console.log(res)
    })
  }
};
</script>
<style lang="less">
</style>
