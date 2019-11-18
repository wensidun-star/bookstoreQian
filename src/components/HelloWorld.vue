<template>
  <div class="hello">
    <div class="top">
      <div class="left">
        <h1>BookStore.</h1>
      </div>
      <div class="right">
        <div><Icon type="md-person" size="16" color="#C0D9D9" /></div>&nbsp;
        <div><span>login</span></div>
      </div>
    </div>
    <div class="top_menu">
      <Menu mode="horizontal" active-name="1">
        <MenuItem name="1" to="/HelloWorld">
            <Icon type="ios-paper" />
            首页
        </MenuItem>
        <MenuItem name="2" to="/Wash">
            <Icon type="ios-people" />
            我要淘书
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                分类选择
            </template>
            <MenuGroup title="类型">
                <MenuItem name="3-1">学习书</MenuItem>
                <MenuItem name="3-2">小说</MenuItem>
                <MenuItem name="3-3">杂志</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            我的订单
        </MenuItem>
    </Menu>
    </div>
    <div class="swiper">
      <Carousel v-model="value1" loop>
        <CarouselItem v-for="(item,index) in bannerList" :key="index">
            <div class="demo-carousel">
              <img style="width:100%;height:576px;" :src="item.bannerimg" alt="">
            </div>
        </CarouselItem>
    </Carousel>
    </div>
    <div class="intro">
      <h1>嘉兴书店</h1>
      <p class="intro_txt">我们提供商品配送，预定等功能。还可扫描下方二维码进入小程序，用手机，更方便。任何品类图书都很齐全，保证正版，请放心购买.有质量问题支持无理由退货，其他原因无语退换。</p>
      <br>
      <br>
      <hr>
    </div>
    <div class="category">
      <h3>图书品类</h3>
      <div class="cardcate">
        <div class="card">
          <Card>
                <p slot="title">学习书</p>
                <p>五年中考三年模拟系列</p>
                <p>教材全解系列</p>
                <p>全易通系列...</p>
            </Card>
        </div>
        <div class="card">
          <Card>
                <p slot="title">杂志</p>
                <p>读者</p>
                <p>意林</p>
                <p>爱格...</p>
            </Card>
        </div>
        <div class="card">
          <Card>
                <p slot="title">名著</p>
                <p>城南旧事</p>
                <p>红岩</p>
                <p>格列佛游记...</p>
            </Card>
        </div>
        <div class="card">
          <Card>
                <p slot="title">小说</p>
                <p>不知东方既白</p>
                <p>斗罗大陆</p>
                <p>七宗罪...</p>
            </Card>
        </div>
      </div>
      <br><br>
    <hr>
    </div>
    <div class="bookShow">
      <h3>热卖商品</h3>
      <div class="thing_all">
        <div class="thing" v-for="item in bookList">
          <img class="bookImg" :src="item.bookimg" alt="">
          <p class="bookName">{{item.bookname}}</p>
          <p class="bookPrice">{{item.bookprice}}元</p>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="item1">
        <h2>联系我们</h2>
        <br>
        <p>座机：2035880</p>
        <br>
        <P>手机：13931588603</P>
        <br>
        <p>微信：18617853827</p>
      </div>
      <div class="item2">
        <h2>店面地址</h2>
        <br>
        <img class="local" src="../assets/local.jpg" alt="">
      </div>
      <div class="item3">
        <h2>二维码</h2>
        <br>
        <img class="code" src="../assets/wechat.jpg" alt="">
      </div>
    </div>

  </div>
</template>

<script>
import { apiBanner } from '@/request/api';
import { apiBook } from '@/request/api';
export default {
  name: 'HelloWorld',
  data () {
    return {
      value1:0,
      bannerList:[],
      bookList:[]
    }
  },
  mounted(){
    let that = this;
    apiBanner({}).then((result) => {
      that.bannerList = result;
    })
    apiBook({}).then((result) => {
      that.bookList = result.slice(0,4);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
    width: 60%;
    margin: 0 auto;
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .right{
    display: flex;
    flex-direction: row;
    font-size: 16px;
    color: #C0D9D9;
  }
  .top_menu{
    width: 60%;
    margin: 0 auto;
    margin-top: 24px;
  }
  .swiper{
    width: 100%;
    height: 576px;
  }
  .intro{
    width: 60%;
    text-align: center;
    margin: 0 auto;
    margin-top: 24px;
  }
  .intro_txt{
    font-size: 16px;
    margin-top: 24px;
  }
  .category{
    width: 60%;
    margin: 0 auto;
    margin-top: 24px;
  }
  .cardcate{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;
  }
  .card{
    width: 20%;
  }
  .bookShow{
    width: 60%;
    margin: 0 auto;
    margin-top: 24px;
  }
  .thing_all{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .thing{
    width: 150px;
    margin-top: 34px;
    display: flex;
    flex-direction: column;
  }
  .bookImg{
    width: 100%;
  }
  .bookName{
    text-align: center;
    font-size: 14px;
    color: black;
    margin-top: 8px;
  }
  .bookPrice{
    text-align: center;
    font-size: 12px;
    color: red;
    margin-top: 8px;
  }
  .foot{
    width: 100%;
    height: 400px;
    position: relative;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    background-color: beige;
    margin-top: 24px;
  }
  .item1,.item2,.item3{
    margin-left:19%;
    margin-top: 24px;
  }
  .local{
    width: 200px;
    height: 200px;
  }
  .code{
    width: 200px;
    height: 200px;
  }
</style>
