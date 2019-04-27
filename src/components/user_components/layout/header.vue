<template>
    <el-header>
        <el-dropdown class="user-area" @command="handleCommand">
            <span>
                <div @mouseover="showUserInfo" @mouseleave="hideUserInfo" class="user-name" v-if="isLogin">
                    <el-tag type="info" color="#C9D3DC">{{userName}}</el-tag>    
                </div>
                <img @mouseover="showUserInfo" @mouseleave="hideUserInfo" class="user-avatar" :src="avatarUrl" v-if="isLogin" />
                <img @mouseover="showUserInfo" @mouseleave="hideUserInfo" class="user-avatar" src="@assets/logo.png" v-else /> 
            </span>
            <el-dropdown-menu slot="dropdown" v-if="isLogin">
                <router-link to="/user_information" tag="div"><el-dropdown-item icon="el-icon-info">个人中心</el-dropdown-item></router-link>
                <router-link to="/user_setting" tag="div"><el-dropdown-item icon="el-icon-setting">账号设置</el-dropdown-item></router-link>
                <router-link to="/help" tag="div"><el-dropdown-item icon="el-icon-question">帮助</el-dropdown-item></router-link>
                <el-dropdown-item icon="el-icon-error" command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
            <el-dropdown-menu slot="dropdown" v-else>
                <router-link to="/login" tag="div"><el-dropdown-item icon="el-icon-info">登录</el-dropdown-item></router-link>
                <router-link to="/register" tag="div"><el-dropdown-item icon="el-icon-info">注册</el-dropdown-item></router-link>
            </el-dropdown-menu>
        </el-dropdown>   
    </el-header>
</template>

<script>
export default {
    data() {
        return {
            avatarUrl: require('@assets/user_avatar.png'),
            is_show: false,
            is_hide: true,
        }
    },
    methods: {
        showUserInfo() {
            this.is_show = false;
            this.is_hide = true;
        },
        hideUserInfo() {
            this.is_show = true;
            this.is_hide = false;
        },
        handleCommand(command) {
            console.log(command);
            if (command == 'logout') {
                this.clearCookie();
                this.$router.push('/login');
                this.$notify.success({
                    title: '成功',
                    message: '退出成功'
                });
            }
        },
        getCookie: function() {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('='); //再次切割
                    //判断查找相对应的值
                    if (arr2[0] == 'userName') {
                        var userName = arr2[1]; //保存到保存数据的地方
                    } else if (arr2[0] == 'userPassword') {
                        var userPassword = arr2[1];
                    }
                }
                if (userName != undefined && userPassword != undefined) {
                    this.$store.state.userLoginData.userName = userName;
                    this.$store.state.userLoginData.isLogin = true;
                }
            }
        },
        setCookie(userName, userPassword, exDays) {
            var exDate = new Date(); //获取时间
            exDate.setTime(exDate.getTime() + 24 * 60 * 60 * 1000 * exDays); //保存的天数
            //字符串拼接cookie
            window.document.cookie = "userName" + "=" + userName + ";path=/;expires=" + exDate.toGMTString();
            window.document.cookie = "userPassword" + "=" + userPassword + ";path=/;expires=" + exDate.toGMTString();
        },
        clearCookie: function() {
            this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
        }
    },
    created() {
        this.getCookie();
    },
    computed: {
        userName () {
            return this.$store.state.userLoginData.userName
        },
        isLogin() {
            return this.$store.state.userLoginData.isLogin
        }
    }
}
</script>