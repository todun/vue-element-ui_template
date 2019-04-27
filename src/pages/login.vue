<template>
    <div class="login">
        <div class="login-window">
            <div class="logo">
                <router-link to="/login">
                    <img src="@assets/logo.png" />
                </router-link>
            </div>
            <el-form class="login-input" ref="form" :model="loginData">
                <el-form-item label="用户名">
                    <el-input v-model="loginData.userName" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginData.userPassword" placeholder=""></el-input>
                </el-form-item>
                <el-checkbox  v-model="checked" label="1">记住密码</el-checkbox >
            </el-form>
            <el-button @click="login" class="login-button" type="danger" round>登录</el-button>
            <div class="register-or-forgetpassword">
                <el-button @click="register" type="primary" round>注册</el-button>
                <el-button @click="forgetPassword" type="primary" round>忘记密码</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.login {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #EEEFF1;
    background-image: url('../assets/background.png');
}
.login-window {
    position: relative;
    position: absolute;
    top: 15%;
    right: 40%;
    width: 350px;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 20px;
}
.login-input {
    position: absolute;
    width: 90%;
    left: 5%;
}
.el-form-item__label {
    color: black;
}
.el-input__inner {
    height: 50px;
    font-size: 30px;
    border-radius: 20px;
}
.login-button {
    position: absolute;
    left: 20%;
    bottom: 19%;
}
.el-button--danger {
    width: 60%;
    font-size: 25px;
    background-color: #FC6170;
}
.el-button.is-round {
    border-radius: 30px;
}
.register-or-forgetpassword {
    position: absolute;
    bottom: 7%;
    left: 78px;
}
</style>

<script>
var checkAccount = function(userName, userPassword) {
    if (userPassword == 'admin')
        return true;
    return false;
}
export default {
    data() {
        return {
            loginData: {
                userName: '',
                userPassword: '',
                isLogin: false,
            },
            checked: false,
        }
    },
    mounted() {
        this.getCookie();
    },
    methods: {
        login() {
            if (checkAccount(this.loginData.userName, this.loginData.userPassword)) {
                if (this.checked == true) {
                    this.setCookie(this.loginData.userName, this.loginData.userPassword, 7);
                    console.log('cookie saved');
                }
                this.loginData.isLogin = true;
                this.$router.push('/user_index/consult');
                this.$notify.success({
                    title: '成功',
                    message: '登录成功'
                });
                this.$store.state.userLoginData.isLogin = this.loginData.isLogin;
                this.$store.state.userLoginData.userName = this.loginData.userName;
            }
            else {
                this.$notify.error({
                    title: '错误',
                    message: '用户名或者密码错误'
                });
            }
        },
        register() {
            this.$router.push('/register');
        },
        forgetPassword() {
            this.$router.push('/forget_password');
        },
        setCookie(userName, userPassword, exDays) {
            var exDate = new Date(); //获取时间
            exDate.setTime(exDate.getTime() + 24 * 60 * 60 * 1000 * exDays); //保存的天数
            //字符串拼接cookie
            window.document.cookie = "userName" + "=" + userName + ";path=/;expires=" + exDate.toGMTString();
            window.document.cookie = "userPassword" + "=" + userPassword + ";path=/;expires=" + exDate.toGMTString();
        },
        getCookie: function() {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('='); //再次切割
                    //判断查找相对应的值
                    if (arr2[0] == 'userName') {
                        this.loginData.userName = arr2[1]; //保存到保存数据的地方
                    } else if (arr2[0] == 'userPassword') {
                        this.loginData.userPassword = arr2[1];
                    }
                }
            }
        }
    }
}
</script>