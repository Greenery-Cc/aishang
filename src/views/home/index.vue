<template>
  <div class="wrap_home">
    <div class="home_banner">
      <div class="banner_logo">
        <img src="../../images/avatar-1.jpg" alt />
      </div>
    </div>
    <div class="home_title">爱时尚精品屋</div>
    <div class="home_title2">公告：水墨年华，青春无悔</div>
    <div class="home_nav">
      <span
        :class="{active:curIndex===index}"
        @click="change(index)"
        v-for="(item,index) in navList"
        :key="index"
      >{{item}}</span>
    </div>
    <div class="home_list">
      <div class="home_item" v-for="(item,index) in shoppList" :key="index">
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
          <div
            :class="{active:curIndexs===index}"
            @click="changes(item)"
            class="text_btn"
          >加入购物车</div>
        </div>
      </div>
    </div>
    <router-link to='/cart' >
       <div class="wrap_shop">
      <img src="../../images/cart.png" alt />
      <sup>{{total}}</sup>
    </div>
    </router-link>
   
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import axios from "axios";
export default {
  data() {
    return {
      navList: ["价格升序↑", "价格降序↓", "销量升序↑", "价格降序↓"],
      shoppList: [],
      curIndex: 0,
      curIndexs: null,
      cartList: []
    };
  },
  computed:{
    total(){
      return this.curList.reduce((a,b)=>{
         return a+b.count
        
      },0)
    },
    ...mapState(['curList'])
   
    
  }
  ,
  mounted() {
    axios.get("https://yantianfeng.com/api/goodList").then(res => {
      this.shoppList = res.data.goodList;
      console.log(this.shoppList);
    });
     console.log(this.curList)
  },
  methods: {
    ...mapMutations(['changes']),
    change(index) {
      this.curIndex = index;
      if (index === 0) {
        this.curIndex = this.shoppList.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (index === 1) {
        this.curIndex = this.shoppList.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (index === 2) {
        this.curIndex = this.shoppList.sort((a, b) => {
          return a.buyCount - b.buyCount;
        });
      }
      if (index === 3) {
        this.curIndex = this.shoppList.sort((a, b) => {
          return b.buyCount - a.buyCount;
        });
      }
    }
  }
};
</script>

<style  lang='scss' scoped>
.wrap_home {
  width: 100%;
  height: 100%;
}
.home_banner {
  width: 100%;
  height: 200px;
  background: url("../../images/banner-2.png");
  background-size: cover;
  background-position-x: center;
  position: relative;
  .banner_logo {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    bottom: -40px;
    left: 50%;
    margin-left: -40px;
    img {
      width: 100%;
      height: 100%; 
    }
  }
}
.home_title {
  width: 100%;
  line-height: 40px;
  text-align: center;
  font-weight: 600px;
  font-size: 20px;
  margin-top: 35px;
}
.home_title2 {
  width: 100%;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
  text-align: center;
}
.home_nav {
  width: 90%;
  height: 60px;
  display: flex;
  margin-left: 5%;
  border-bottom: 1px solid #ccc;
  span {
    flex: 1;
    text-align: center;
    line-height: 60px;
    &.active {
      color: skyblue;
    }
  }
}
.home_list {
  flex: 1;
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
        padding: 3px 8px;
        color: #fff;
        background: red;
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 14px;
        &.active {
          opacity: 0.5;
        }
      }
    }
  }
}
.wrap_shop {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: skyblue;
  bottom: 20px;
  right: 20px;
  position: fixed;
  padding: 15px;
  img {
    width: 100%;
    height: 100%;
  }
}
sup {
  width: 20px;
  line-height: 20px;
  text-align: center;
  background: red;
  position: fixed;
  bottom: 70px;
  right: 30px;
  color: #fff;
  border-radius: 50%;
}
</style>