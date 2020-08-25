<template>
  <el-container>
    <el-aside :width="isCollapse?'64px':'300px'">
      <div class="logo">
        <img src="@/assets/images/hr.png">
        <span :class="isCollapse ? 'disNone':'disBlock' ">人力资源管理服务平台</span>
      </div>
      <!--导航菜单-->
      <el-menu  :collapse="isCollapse" background-color="#32404e"
                text-color="#adb3b8"  unique-opened
                active-text-color="#229ec9" @open="handleOpen" @close="handleClose"
                :collapse-transition="false"
                router>
            <template v-for="menu in menulist" >
              <el-submenu v-if="menu.children" :index="menu.id+''" :key="menu.id">
                <template slot="title">
                  <i :class="menu.icon"></i>
                  <span slot="title" class="menu_padding">{{menu.title}}</span>
                </template>
                <template v-for="item in menu.children">
                  <el-submenu v-if="item.children" :index="item.id+''" :key="item.id">
                    <template slot="title">
                      <i :class="item.icon"></i>
                      <span slot="title" class="menu_padding">{{item.submenu}}</span>
                    </template>
                    <el-menu-item v-for="term in item.children" :key="term.id" :index="term.id+''">
                      <i :class="term.icon"></i><span slot="title">{{term.subItem}}</span>
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item  v-else-if="!item.children" :key="item.id" :index="item.id+''">
                    <i :class="item.icon"></i>
                    <span slot="title" class="menu_padding">{{item.submenu}}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
              <el-menu-item v-else-if="!menu.children" :index="menu.id+''" :key="menu.id">
                <i :class="menu.icon"></i>
                <span slot="title" class="menu_padding">{{menu.title}}</span>
              </el-menu-item>
            </template>


      </el-menu>
     <!-- <el-menu  class="el-menu-vertical-demo"  background-color="#32404e"
                text-color="#adb3b8"
                active-text-color="#229ec9" @open="handleOpen" @close="handleClose"
                :collapse="isCollapse" unique-opened
                :collapse-transition="false">

        <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <template slot="title" >
              <i :class="item.icon" ></i>
              <span slot="title" class="menu_padding">{{item.title}}</span>
            </template>
            <el-submenu :index="submenu.id+''" v-for="submenu in item.children" :key="submenu.id">
              <template slot="title" >
                <span class="menu_padding">{{submenu.submenu}}</span>
              </template>
              <el-menu-item :index="menu.id+''" v-for="menu in submenu.children" :key="menu.id">
                <span class="menu_padding">{{menu.subItem}}</span>
              </el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item :index="item.id" v-for="item in menulist" :key="item.id">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>-->

    </el-aside>
    <el-container>
      <el-header>
        <div class="collapse_home">
          <span class="collapse-icon" @click="toggleCollapse"><i class="fa fa-navicon fa-lg"></i></span>
          <span class="home-icon"><i class="fa fa-home fa-lg"></i></span>

        </div>
        <div class="nav-user">
          <div>
            <el-avatar :src="avatar"></el-avatar>
          </div>
          <div><span>长江大学</span><span>({{identify}})</span></div>
          <div class="dropdown">
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect"
                     background-color="#ffffff"
                     text-color="#000000"
                     active-text-color="#229ec9">
              <el-submenu index="1">
                <el-menu-item index="1-1">
                  <div class="user_operate"><i class="fa fa-user"></i><span>角色切换</span></div>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <div class="user_operate"><i class="fa fa-lock"></i><span>密码修改</span></div>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <div class="user_operate"><i class="fa fa-sign-out"></i><span>安全退出</span></div>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=75465567,1725628062&fm=15&gp=0.jpg',
        identify: '学校管理员',
        menulist:[],
        isCollapse:false
      }
    },
    created(){
   /*   let cur_path = this.$route.path; //获取当前路由
      let routers = this.$router.options.routes; // 获取路由对象v

      for (let i = 0; i < routers.length; i++) {
        let children = routers[i].children;
        if (children) {
          for (let j = 0; j < children.length; j++) {
            console.log(''+children[j].leaf)
            // 如果该菜单下还有子菜单
            if (children[j].children && !children[j].leaf) {
              let grandChildren = children[j].children;
              for (let z = 0; z < grandChildren.length; z++) {
                if (grandChildren[z].path === cur_path) {
                  subMenuIndex = j;
                  needOpenSubmenu = true;
                  break;
                }
              }
            }
          }
        }
      }*/
        this.axios.get('/menu.json').then(res=>{
          console.log(res.data)
          this.menulist=res.data
        })

    },
    methods: {
      //获取左边栏菜单信息
      handleSelect(key, keyPath) {
        if(key==='1-3'){
          console.log(12)

          this.$confirm('确认退出吗?', '提示', {
            confirmButtonClass: 'el-button--warning'
          }).then(() => {
            //确认
            sessionStorage.clear();
            this.$router.push('/login')
          }).catch(() => {});

        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleCollapse(){
        this.isCollapse=!this.isCollapse;
      },

    }
  }
</script>

<style lang="less" scoped>
  .el-container {
    height: 100%;
  }


  .el-header {
    // position: relative;
    color: #229ec9;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    text-align: center;
    box-shadow: 0 0 5px #23b7e6;
    .collapse_home {
      justify-items: center;
      display: inline-block;

      .collapse-icon {
        font-size: 14px;
        color: #aaa6ab;
        padding: 4px 6px;
      }

      .collapse-icon:hover {
        cursor: pointer;
      }

      .home-icon {
        color: #696969;
        margin-left: 20px;
        font-size: 20px;
      }

      .home-icon:hover {
        cursor: pointer;
        color: #3b3b3b;
      }
    }

    .nav-user {
      font-size: 13px;
      color: #464a4c;
      display: flex;

      .el-avatar {
        vertical-align: middle;
      }

      .dropdown:hover {
        cursor: pointer;
      }

      div {
        margin-right: 3px;

        span {
          margin-right: 8px;
        }

      }
    }
  }

  .user_operate {
    width: 40px;
    margin: 0 auto;
    i{
      margin-left: -20px;
    }
    span {
      margin-left: 10px;
    }
  }
.el-menu-demo:hover{
  color:#229ec9;
}
  .el-aside {
    background-color: #32404e;

    .logo{
      line-height: 60px;
      background-color: #23b7e6;
      .disNone{

        display: none;
      }

      .disBlock{
       color:#ffffff;
      }
      img{
        vertical-align: middle;
        width: 30px;
        height:30px;
        padding: 10px 15px;
      }
    }
  }
  .menu_padding{
    margin-left: 20px;
  }
  .el-main {
    background-color: #f9f9f9;
  }

</style>
