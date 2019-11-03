<template>
    <div class="main">
        <div class="box-hd">
            <h2 class="title">为你推荐</h2>
            <div class="more">
                <div class="controls">
                    <a @click.prevent="prev" class="control control-prev" href=""></a>
                    <a @click.prevent="next" class="control control-next" href=""></a>
                </div>
            </div>
        </div>
        <div class="recommend-bd">
            <div class="xm-carousel-wrapper">
                <ul :style="{'margin-left':recommendMarginLeft+'px'}">
                    <li v-for="item in data.data">
                        <dl>
                            <dt>
                                <a :href="commodityUrl(item.commodityid)">
                                    <img :srcset="item.image" :alt="item.name">
                                </a>
                            </dt>
                            <dd class="xm-recommend-name">
                                <a :href="commodityUrl(item.commodityid)">{{item.name}}</a>
                            </dd>
                            <dd class="xm-recommend-price">{{item.market_price}}元</dd>
                            <dd class="xm-recommend-tips">{{item.comments}}人好评</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseRecommend",
        methods:{
            prev(){
                if(this.recommendMarginLeft<0){
                    this.recommendMarginLeft += 1240
                }
            },
            next(){
                if(this.recommendMarginLeft>-3720){
                    this.recommendMarginLeft -= 1240
                }
            }
        },
        data(){
            return{
                response:null,
                data:'',
                recommendMarginLeft:0
            }
        },
        computed:{
            commodityUrl(){
                return function (commodityid) {
                    return "//item.mi.com/".concat(commodityid,".html")
                }
            }
        },
        mounted() {
            this.$http.get('rec/rec/guesslike?jsonpcallback=jQuery111306789620162933383_'+new Date().getTime()).then(
                response => {
                    // console.log(response);
                    this.response = response;
                    this.data = JSON.parse(/\(.+\)/.exec(response.data)[0].slice(1,-1));
                },
                response => {
                    console.error(response);
                }
            );
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 378px;
        /*padding-top: 22px;*/
        background-color: #f5f5f5;
        .box-hd {
            position: relative;
            height: 58px;
            width: 1226px;
            margin-left: auto;
            margin-right: auto;
            .title {
                margin: 0;
                font-size: 22px;
                font-weight: 200;
                line-height: 58px;
                color: #333;
                float: left;
            }
            .more {
                width: 70px;
                height: 24px;
                position: absolute;
                top: 15px;
                right: 0;
                .controls{
                    .control{
                        width: 35px;
                        height: 24px;
                        padding: 3px 5px;
                        border: 1px solid #e0e0e0;
                        font-size: 16px;
                        line-height: 16px;
                        display: inline-block;
                        text-align: center;
                        transition: color .5s;
                    }
                    .control-prev{

                    }
                    .control-next{

                    }
                }
                a{
                    color: #b0b0b0;
                }
                a:hover{
                    color: #ff6700;
                    text-decoration: none;
                }
            }
        }
        .recommend-bd{
            width: 1226px;
            margin-left: auto;
            margin-right: auto;
            .xm-carousel-wrapper{
                overflow: hidden;
                height: 320px;
                position: relative;
                ul{
                    width: 4960px;
                    transition: margin-left 0.5s ease 0s;
                    padding: 0;
                    list-style: none;
                    margin: 0;
                    li{
                        transition: all 0.2s linear;
                        margin-right: 14px;
                        margin-bottom: 14px;
                        height: 300px;
                        background-color: #fff;
                        text-align: center;
                        position: relative;
                        padding: 0;
                        margin-top: 0;
                        list-style: none;
                        float: left;
                        width: 234px;
                        dl{
                            padding: 0 20px;
                            list-style: none;
                            margin: 1em 0;
                            .xm-recommend-notice{
                                position: absolute;
                                top: 0;
                                left: 0;
                                z-index: 5;
                                width: 100%;
                                opacity: 0;
                                transform: translate3d(0, -10px, 0);
                                transition: all .2s linear;
                            }
                            .xm-recommend-tips{
                                position: relative;
                                color: #757575;
                            }

                            .xm-recommend-price{
                                margin-bottom: 10px;
                                color: #ff6700;
                            }
                            .xm-recommend-name{
                                margin-bottom: 10px;
                                height: 18px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                a{
                                    color: #333;
                                }
                                a:hover{
                                    color: #333;
                                    text-decoration: none;
                                }
                            }
                            dd{
                                padding: 0;
                                list-style: none;
                            }
                            dt{
                                a{
                                    color: #757575;
                                    img{
                                        width: 140px;
                                        height: 140px;
                                        border:0;
                                    }
                                }
                                a:hover{
                                    color: #ff6700;
                                    text-decoration: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

</style>