<template>
  <div class="cart_wrap">
    <main>
        <CartCode ></CartCode>
    </main>
    <footer></footer>
      
  </div>
</template>

<script>
import CartCode from '../../components/cartListCode/'
export default {
  components:{
    CartCode
  },
  computed:{
    
  }
}
</script>

<style lang="scss" scoped>
.cart_wrap{
  width: 100%;
  height: 100%;
  background: #f0f0ff;
  display: flex;
  flex-direction: column;
}
main{
  flex: 1;
}
footer{
  width: 100%;
  height: 60px;
  border-top: 1px solid #666;
}
</style>