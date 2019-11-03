<template>
    <div class="navMenu" @mouseover="childMouseover" @mouseout.self="childMouseout">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li v-for="(key, index) in data" :key="index" class="breadcrumb-item" aria-current="page">
                    <div class="figure-thumb">
                        <a :href="key[1][0]">
                            <img :src="key[1][1]" alt="">
                        </a>
                    </div>
                    <div class="title">
                        <a :href="key[0][1]">{{key[0][0]}}</a>
                    </div>
                    <p>{{key[2]}}</p>
                    <div v-if="key.length===4" class="flags">
                        <div class="flag">
                            {{key[3]}}
                        </div>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "TheGoods",
        //data是一个json格式字符串
        props:['data'],
        methods:{
            childMouseover() {
                this.$emit('navMouseover');
                console.log("navMouseover")
            },
            childMouseout(){
                this.$emit('navMouseout');
                console.log("navMouseout")
            }
        }
    }
</script>

<style lang="scss" scoped>
.navMenu{
    position: absolute;
    top: 99px;
    left: 0;
    z-index: 24;
    width: 100%;
    height: 229px;
    border-top: 1px solid #e0e0e0;
    background: #fff;
    box-shadow: 0 3px 4px rgba(0,0,0,0.18);
    transition: box-shadow .2s;
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;


    .breadcrumb{
        width: 1226px;
        margin: 0 auto;
        list-style-type: none;
        padding: 0;
        font-size: 12px;
        background-color: #ffffff;
        li{
            position: relative;
            width: 204px;
            float: left;
            text-align: center;
            padding: 35px 12px 0;
            p{
                margin: 0;
                line-height: 20px;
                color: #ff6700;
            }
            .figure-thumb{
                width: 160px;
                height: 110px;
                margin: 0 auto 16px;
                text-align: center;
                img{
                    width: 160px;
                    height: 110px;
                }
            }
            .title{
                line-height: 20px;
                margin: 0;
                color: #333333;
                a{
                    display: block;
                    color: #333333;
                }
                a:hover{
                    text-decoration: none;
                }
            }
            .flags{
                position: absolute;
                top: -1px;
                left: 0;
                z-index: 1;
                width: 100%;
                font-size: 12px;
                text-align: center;
                .flag{
                    display: inline-block;
                    padding: 1px 20px;
                    border: 1px solid #ff6700;
                    color: #ff6700;
                }
            }
        }
    }
    .breadcrumb-item + .breadcrumb-item::before {
        display: inline-block;
        padding-right: 0;
        color: #424242;
        content: "";
        position: absolute;
        left: 0;
        top: 35px;
        z-index: 1;
        width: 1px;
        height: 100px;
        background-color: #e0e0e0;
    }
}
</style>