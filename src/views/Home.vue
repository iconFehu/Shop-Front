<template>
    <div class="home">
        <!--    <img alt="Vue logo" src="../assets/logo.png">-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <TopBar type="购物车"></TopBar>
        <Header show-nav-menu="true"></Header>
        <BaseHome></BaseHome>
        <BaseBanner style="background-color: #ffffff"></BaseBanner>
        <BasePage></BasePage>
        <BaseBanner></BaseBanner>
        <BasePage></BasePage>
        <BaseBanner></BaseBanner>
        <BasePage></BasePage>
        <BaseBanner></BaseBanner>
        <BasePage></BasePage>
        <BaseBanner></BaseBanner>
        <BasePage></BasePage>
        <BaseBanner></BaseBanner>
        <BasePage></BasePage>
        <BaseBanner></BaseBanner>
        <BaseRecommend></BaseRecommend>
        <BaseComment></BaseComment>
        <BaseVideo></BaseVideo>
        <BaseFooter></BaseFooter>
        <BaseInfo></BaseInfo>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import BasePage from "../components/BasePage";
    import BaseHome from "../components/BaseHome";
    import Header from "../components/Header";
    import TopBar from "../components/TopBar";
    import BaseBanner from "../components/BaseBanner";
    import BaseFooter from "../components/BaseFooter";
    import BaseInfo from "../components/BaseInfo";
    import BaseRecommend from "../components/BaseRecommend";
    import BaseComment from "../components/BaseComment";
    import BaseVideo from "../components/BaseVideo";

    export default {
        name: 'home',
        components: {
            BaseVideo,
            BaseComment,
            BaseRecommend,
            BaseInfo,
            BaseFooter,
            BaseBanner,
            TopBar,
            Header,
            BaseHome,
            BasePage,
            HelloWorld
        },
        mounted() {
            // window.open("https://qiye.mi.com/")
        }
    }
</script>