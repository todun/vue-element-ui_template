<template>
    <div class="consult">
        <!--提示部分可以删除-->
        <span class="tips">协商部分</span>
        <router-view></router-view>
    </div>
</template>

<style lang="css">
.consult {
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