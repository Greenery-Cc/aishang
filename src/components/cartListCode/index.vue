<template>
  <div class="cart_wrap">
   <div v-for="(item,index) in  curList"  :key='index'  class="home_item">
        <div class="home_logo">
          <img :src="item.pic" alt />
        </div>
        <div class="home_text">
          <div class="text_title">{{item.name}}</div>
          <div class="text_print">
            已售:
            <span>{{item.buyCount}}</span>件
          </div>
          <div class="text_price">
            售价:￥
            <b>{{item.price}}</b>
          </div>
          <div class="text_btn">
            <span class="add" @click="sub(item.id)" >-</span>
            <b>{{item.count}}</b>
            <span class="sub" @click="add(item.id)" >+</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data () {
        return {
           
        }
    },
    computed:{
      ...mapState(['curList'])
    },
    methods:{
    ...mapMutations(['sub','add'])
    }

}
</script>

<style lang="scss" scoped>
  .home_item {
    padding: 10px 20px;
    width: 100%;
    display: flex;
    .home_logo {
      width: 30%;
      height: 100px;
      img {
        width: 100%;
      }
    }
    .home_text {
      position: relative;
      width: 70%;
      margin-left: 20px;
      div {
        line-height: 33px;
      }
      .text_title {
        width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .text_print {
        span {
          display: inline-block;
          margin: 0 5px;
        }
      }
      .text_price {
        b {
          color: red;
        }
      }
      .text_btn {
        position: absolute;
        width: 100px;
        height: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        bottom: 0;
        right: 0;
        span{
          width: 30px;
          line-height: 30px;
          border-radius: 50%;
          text-align: center;
          font-size: 18px;
        }
        .add{
          border: 1px solid skyblue;
          color: skyblue;
        }
        .sub{
          background: skyblue;
          color: #fff;
        }
      }
    }
  }
</style>