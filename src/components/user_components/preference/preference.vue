<template>
    <div class="preference">
        <!--提示部分可以删除-->
        <span class="tips">偏好部分</span>
        <router-view></router-view>
    </div>
</template>

<style lang="css">
.preference {
    width: 79%;
    height: 100%;
    float: left;
    background-color: #C9C9C9;
    border-radius: 10px;
    position: relative;
}
/*提示部分可以删除*/
.tips {
    font-size: 200px;
    left: 25%;
    top: 30%;
    position: absolute;
}
</style>