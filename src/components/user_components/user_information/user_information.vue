<template>
    <div class="user-information">
        <!--提示部分可以删除*-->
        <span class="info-tips">用户信息部分</span>
    </div>
</template>

<style lang="css">
.user-information {
    width: 20%;
    height: 100%;
    float: right;
    background-color: #C9C9C9;
    border-radius: 10px;
    position: relative;
}
/*提示部分可以删除*/
.info-tips {
    position: absolute;
    margin: 0 auto;
    font-size: 100px;
    width: 200px;
    line-height: 200px;
    left: 80px;
    top: 60px;
}
</style>