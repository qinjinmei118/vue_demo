<template>
  <div class="container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="@/assets/images/avatar.jpg" alt="">
      </div>
      <el-form ref="form" :model="form" label-width="0" :rules="loginRules" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="账号或手机号"><i slot="prefix" class="fa fa-user fa-lg"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password"><i slot="prefix"
                                                                                class="fa fa-lock fa-lg"></i></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn_login" @click="submitLogin()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      //自定义表单效验
      var usernameValidate = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          if (value.length < 4) {
            callback(new Error('用户名长度不能小于4'))
          }
          callback()
        }
      }
      var passwordValidate = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (value.length < 6 && value > 11) {
            callback(new Error('密码长度在6~11之间'))
          }
        }
      }
      return {
        form: {
          username: '',
          password: ''
        },
        loginRules: {
          //表单效验
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            {
              min: 3, max: 6, message: '用户名长度在 3 ~ 6个字符之间', trigger: 'blur'
            }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 11, message: '长度在 6 到 11 之间', trigger: 'blur' }
          ]

        }
      }
    },
    methods: {
      //登录处理
      submitLogin() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
              const {data:res}=await this.axios.get('/users.json')

              if(res.username===this.form.username&&res.password===this.form.password){
                console.log('登录成功');
                window.sessionStorage.setItem('token',res.token);
                await this.$router.push('/home')
              }else{
                this.$message.error('用户名或者密码有误！');
                console.log('登录失败')
              }

          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 3px;
      box-shadow: 0 0 5px #eee;
      position: absolute;
      margin-left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }

  .login_form {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0 40px;
    box-sizing: border-box;
  }

  .btn_login {
    width: 100%;
  }
</style>
