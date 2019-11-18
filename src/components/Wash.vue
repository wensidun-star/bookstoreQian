<template>
  <div>
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
      <Menu mode="horizontal" active-name="2">
        <MenuItem name="1" to="/">
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

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>
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