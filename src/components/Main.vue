<template>
  <div class="container">
    <el-card class="box-card">
      <div class="card">
        <div class="context">
          <h1>全新的HR服务平台上限了 </h1>
          <div class="text-item">
            <span>以教职工服务为导向</span>
            <span>实现HR全周期管理</span>
          </div>
        </div>
        <div class="img">
          <img src="https://39.97.118.165/hr80/base/frame/pages/portal/resource/images/publicityIcon.png" alt="">
        </div>
      </div>
    </el-card>
    <el-row class="info-row" :gutter="54">
      <el-col :span="8" class="el-col">
        <el-card style="background-color: #16ddd1">
          <div class="icon">
            <i class="fa fa-calendar-check-o"></i>
          </div>
          <div class="context">
            <p>我的待办</p>
            <p>342</p>
          </div>

        </el-card>
      </el-col>
      <el-col :span="8" class="el-col">
        <el-card style="background-color: #fcaf62">
          <div class="icon">
            <i class="fa fa-commenting-o"></i>
          </div>
          <div class="context">
            <p>消息提醒</p>
            <p>0</p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" class="el-col">
        <el-card style="background-color: #bd73dd">
          <div class="icon">
            <i class="fa fa-american-sign-language-interpreting"></i>
          </div>
          <div class="context">
            <p>人员异动</p>
            <p>34</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="context_list">
      <el-card class="card_context_list">
        <div slot="header" class="clearfix">
          <span>常用服务</span>
        </div>
        <div class="list_items">
          <div class="item">
            <i class="fa fa-keyboard-o" style="color:#74ddcb;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-calendar" style="color:#1a85b3;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-shopping-cart" style="color:#dd7661;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-desktop" style="color:#17ba6c;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-search-minus" style="color:#cd76dd;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-envelope" style="color:#d24fdd;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-scissors" style="color:#dd4f1c;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-steam-square" style="color:#6a0fdd;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-comment-o" style="color:#dd0657;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-opera" style="color:#14dd72;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-underline" style="color:#d24fdd;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-clock-o" style="color:#dd3cba;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-safari" style="color:#0f7cdd;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-user" style="color:#afddcb;"></i>
            <span>机构管理</span>
          </div>
          <div class="item">
            <i class="fa fa-newspaper-o" style="color:#d24fdd;"></i>
            <span>机构管理</span>
          </div>
        </div>
      </el-card>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'Main'
  }
</script>

<style lang="less" scoped>
  .box-card {
    background-image: linear-gradient(120deg, #3ae5fb 0%, #66a6ff 100%);
    color: #fff;

    .card {
      padding: 10px 20px 30px;
      display: flex;

      .context {
        flex: 3;
        letter-spacing: 8px;
        text-align: left;
        margin-left: 30px;

        .text-item {
          font-size: 20px;
          display: flex;

          span {
            letter-spacing: 5px;
          }

          span:last-child {
            margin-left: 40px;
          }
        }

        h1 {
          font-size: 34px;
        }
      }

      .img {
        vertical-align: middle;
        flex: 1;
      }
    }
  }

  .info-row {
    margin-top: 30px;
  }

  .el-col .el-card {
    height: 130px;
  }

  .el-col .el-card .icon {
    line-height: 70px;
    font-size: 30px;
    float: left;
    color: #ffff;
    margin-left: 20px;
    vertical-align: middle;
  }

  .el-col .el-card .context {
    letter-spacing: 2px;
    color: #fff;
    float: right;
    text-align: right;
  }

  .context_list {
    margin-top: 40px;

    .card_context_list {
      .list_items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 30px;
        grid-column-gap: 30px;
        .item{
         border-radius: 4px;
          text-align: left;
          line-height: 90px;
          background-color: #f9f9f9;
          color: #a1a2a9;

          i{
            margin:0 20px;
            font-size: 25px;
          }
        }
        .item:hover{
          cursor: pointer;
          box-shadow: 0 3px 4px #cbcbcb;
        }
      }
    }
  }
</style>
