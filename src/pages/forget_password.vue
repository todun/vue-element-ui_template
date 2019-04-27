<template>
    <div class="forget-password">
        <div class="forget-password-window">
            <div class="logo">
                <router-link to="/login">
                    <img src="@assets/logo.png" />
                </router-link>
                <el-form class="forget-password-input" ref="form" :model="forgetPasswordData">
                    <el-form-item label="邮箱">
                        <el-input v-model="forgetPasswordData.userEmail" placeholder=""></el-input>
                    </el-form-item>
                </el-form>
                <el-button @click="forgetPassword" class="forget-password-button" type="danger" round>找回密码</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="css">
.forget-password {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #EEEFF1;
    background-image: url('../assets/background.png');
}
.forget-password-window {
    position: relative;
    position: absolute;
    top: 15%;
    right: 40%;
    width: 350px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 20px;
}
.forget-password-input {
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
.forget-password-button {
    position: absolute;
    left: 20%;
    bottom: 8%;
}
.el-button--danger {
    width: 60%;
    font-size: 25px;
    background-color: #FC6170;
}
.el-button.is-round {
    border-radius: 30px;
}
</style>

<script>
export default {
    data() {
        return {
            forgetPasswordData: {
                userEmail: '',
            },
            isFindPassword: false,
        }
    },
    methods: {
        forgetPassword() {
            if (this.isFindPassword) {
                this.$notify.success({
                    title: '成功',
                    message: '成功找回密码'
                });
            }
            else {
                this.$notify.error({
                    title: '错误',
                    message: '找回密码错误'
                });
            }
        }
    }
}
</script>