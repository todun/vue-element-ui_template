<template>
    <div class="register">
        <div class="register-window">
            <div class="logo">
                <router-link to="/login">
                    <img src="@assets/logo.png" />
                </router-link>
            </div>
            <el-form class="register-input" ref="form" :model="rigisterData">
                <el-form-item label="用户名">
                    <el-input v-model="rigisterData.userName" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="rigisterData.userPassword" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="rigisterData.userEmail" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="rigisterData.userPhoneNum" placeholder=""></el-input>
                </el-form-item>
            </el-form>
            <div class="register-button">
                <el-button @click="register" type="primary" round>注册</el-button>
                <el-button @click="login" type="primary" round>登录</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.register {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #EEEFF1;
    background-image: url('../assets/background.png');
}
.register-window {
    position: relative;
    position: absolute;
    top: 15%;
    right: 40%;
    width: 350px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 20px;
}
.register-input {
    position: absolute;
    width: 90%;
    left: 5%;
}
.el-form-item__label {
    color: black;
}
.el-input__inner {
    height: 45px;
    font-size: 30px;
    border-radius: 20px;
}
.register-button {
    position: absolute;
    bottom: 4%;
    left: 92px;
}
</style>

<script>
export default {
    data() {
        return {
            rigisterData: {
                userName: '',
                userPassword: '',
                userEmail: '',
                userPhoneNum: '',
            },
            isRegister: false,
        }
    },
    methods: {
        register() {
            if (this.isRegister) {
                this.$router.push('/login');
                this.$notify.success({
                    title: '成功',
                    message: '注册成功'
                });
            }
            else {
                this.$notify.error({
                    title: '错误',
                    message: '注册失败'
                });
            }
        },
        login() {
            this.$router.push('/login');
        }
    }
}
</script>