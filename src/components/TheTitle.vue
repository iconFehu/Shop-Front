<template>
    <div class="box-hd">
        <h2 class="title">{{title}}</h2>
        <div class="more">
            <a href="http://www.mi.com/a/h/9891.html" class="more-link" target="_blank">查看全部<i></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheTitle",
        props:['title']
    }
</script>

<style scoped>
    .title {
        margin: 0;
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
        float: left;
    }

    h2{
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }

    .more {
        position: absolute;
        top: 0;
        right: 0;
    }
    .box-hd{
        position: relative;
        height: 58px;
    }
    .more-link{
        font-size: 16px;
        line-height: 58px;
        color: #424242;
        transition: all .4s;
    }
    .more-link:hover{
        color: #ff6700;
    }
    a:hover{
        text-decoration: none;
    }
</style>