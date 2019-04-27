<template>
    <div id="user_index">
        <el-container>
            <Aside></Aside>
            <el-container direction="vertical">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from '@components/user_components/layout/header';
import Aside from '@components/user_components/layout/aside';
import Main from '@components/user_components/layout/main';
import Footer from '@components/user_components/layout/footer';

export default {
    components: {
        Header,
        Aside,
        Main,
        Footer,
    }
};
</script>