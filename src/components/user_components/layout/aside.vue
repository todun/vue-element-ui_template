<template>
    <el-aside width="auto">
        <div class="logo">
            <router-link to="/user_index">
                <img src="@assets/logo.png" />
            </router-link>
        </div>
        <el-menu 
        background-color="#2B3034"
        default-active="4"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
            <el-menu-item index="/user_index/consult" v-if="this.$store.state.userLoginData.isLogin == true">
                <i class="el-icon-collection-tag"></i><span slot="title">协商</span>
            </el-menu-item>
            <el-menu-item index="/user_index/consult" v-else disabled>
                <i class="el-icon-collection-tag"></i><span slot="title">协商</span>
            </el-menu-item>
            <el-menu-item index="/user_index/preference" v-if="this.$store.state.userLoginData.isLogin == true">
                <i class="el-icon-collection-tag"></i><span slot="title">偏好</span>
            </el-menu-item>
            <el-menu-item index="/user_index/preference" v-else disabled>
                <i class="el-icon-collection-tag"></i><span slot="title">偏好</span>
            </el-menu-item>
            <el-menu-item index="/user_index/record" v-if="this.$store.state.userLoginData.isLogin == true">
                <i class="el-icon-collection-tag"></i><span slot="title">记录</span>
            </el-menu-item>
            <el-menu-item index="/user_index/record" v-else disabled>
                <i class="el-icon-collection-tag"></i><span slot="title">记录</span>
            </el-menu-item>
            <el-menu-item index="/user_index/chat" v-if="this.$store.state.userLoginData.isLogin == true">
                <i class="el-icon-collection-tag"></i><span slot="title">问答</span>
            </el-menu-item>
            <el-menu-item index="/user_index/chat" v-else disabled>
                <i class="el-icon-collection-tag"></i><span slot="title">问答</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
}
</script>