<template>
    <div class="main">
        <div class="topbar">
            <div class="topbar-nav">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li v-for="(value, key, index) in nav" class="breadcrumb-item" aria-current="page">
                            <a :href="value" rel="noreferrer" target="_blank">{{key}}</a>
<!--                            <router-link :to="value.toString()">{{key}}</router-link>-->
                        </li>
                    </ol>
                </nav>
            </div>
            <div class="topbar-cart" @mouseover="showCart" @mouseout="closeCart">
                <a href="https://static.mi.com/cart/" class="cart-mini">{{type}}({{cart}})</a>
            </div>
            <transition name="cartMenu">
                <div v-show="showCartMenu" class="cart-menu" @mouseover="showCartDiv" @mouseout="closeCart">
                    <div class="loading">
                        <div class="loader">

                        </div>
                    </div>
                </div>
            </transition>

            <div class="topbar-info" @mouseover="showCart">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li v-for="(value, key, index) in info" class="breadcrumb-item" aria-current="page"><a
                                :href="value">{{key}}</a></li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        props:['type'],
        data() {
            return {
                nav: {
                    "小米商城": ["https://www.mi.com/index.html"],
                    "MIUI": ["https://www.miui.com/"],
                    "IoT": ["https://iot.mi.com/index.html"],
                    "云服务": ["https://i.mi.com/"],
                    "金融": ["https://jr.mi.com?from=micom"],
                    "有品": ["https://youpin.mi.com/"],
                    "小爱开放平台": ["https://xiaoai.mi.com/"],
                    "企业团购": ["https://qiye.mi.com/"],
                    // "企业团购": ["/#/qiyepay"],
                    "资质证照": ["https://www.mi.com/aptitude/list/?id=41"],
                    "协议规则": ["https://www.mi.com/aptitude/list/"],
                    "下载app": ["https://www.mi.com/appdownload/"],
                    "Select Region": []
                },
                info:{
                    "登录":["https://order.mi.com/site/login"],
                    "注册":["https://account.xiaomi.com/pass/register"],
                    "消息通知":["https://order.mi.com/message/list"]
                },
                cart:0,
                showCartMenu:false,
                cartMenuOut:null
            }
        },
        methods:{
            showCart(){
                this.showCartMenu=true;
                console.log("showCartMenu");
            },
            closeCart(){
                clearTimeout(this.cartMenuOut);
                this.cartMenuOut=setTimeout(()=>{
                    console.log("ok");
                    this.showCartMenu=false;
                },500)


            },
            showCartDiv(){
                clearTimeout(this.cartMenuOut);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        position: relative;
        height: 40px;
        font-size: 12px;
        color: #b0b0b0;
        background-color: #333333;

        .topbar {
            position: relative;
            width: 1226px;
            margin-left: auto;
            margin-right: auto;

            .cartMenu-enter-active,.cartMenu-leave-active{
                /*transition: opacity .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
                transition: all .5s ease;
            }
            .cartMenu-enter,.cartMenu-leave-to{
                opacity: 0;
            }
            .cart-menu{
                box-shadow: 0 2px 10px rgba(0,0,0,0.15);
                padding: 15px 0 0;
                color: #424242;
                background: #fff;
                top: 40px;
                z-index: 31;
                position: absolute;
                right: 0;
                width: 316px;
                height: 100px;
                .loading{
                    margin: 5px 20px 20px;
                    text-align: center;
                    padding: 20px 0;
                    .loader,.loader:before,.loader:after{
                        -webkit-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                        -webkit-animation-name: loader;
                        animation-name: loader;
                        -webkit-animation-duration: .3s;
                        animation-duration: .3s;
                        -webkit-animation-timing-function: linear;
                        animation-timing-function: linear;
                        -webkit-animation-iteration-count: infinite;
                        animation-iteration-count: infinite;
                        -webkit-animation-direction: alternate-reverse;
                        animation-direction: alternate-reverse;
                    }
                    .loader{
                        position: relative;
                        margin: 0 auto;
                        width: 4px;
                        height: 20px;
                        background: #ff6700;
                        overflow: visible;
                        -webkit-animation-delay: 0s;
                        animation-delay: 0s;
                        -webkit-transform: scale(1, 1);
                        transform: scale(1, 1);
                    }
                    .loader:before, .loader:after {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 4px;
                        height: 20px;
                        content: '';
                        background: #ff6700;
                    }
                    .loader:before {
                        margin: -10px 0 0 -10px;
                        -webkit-animation-delay: .25s;
                        animation-delay: .25s;
                        -webkit-transform: scale(1, 0.3);
                        transform: scale(1, 0.3);
                    }
                    .loader:after {
                        margin: -10px 0 0 6px;
                        -webkit-animation-delay: .5s;
                        animation-delay: .5s;
                        -webkit-transform: scale(1, 0.5);
                        transform: scale(1, 0.5);
                    }
                }
            }

            * {
                height: 40px;
            }

            .topbar-nav {
                float: left;
                line-height: 40px;

                .breadcrumb {
                    background-color: #333333;
                    padding: 0;
                    a{
                        color: #b0b0b0;
                        text-decoration: none;
                    }
                    a:hover{
                        color: #ffffff;
                    }
                }

                .breadcrumb-item + .breadcrumb-item::before {
                    display: inline-block;
                    padding-right: 0.5rem;
                    color: #424242;
                    content: "|";
                }
            }

            .topbar-cart {
                width: 120px;
                margin-left: 15px;
                float: right;
                position: relative;
                .cart-mini{
                    position: relative;
                    z-index: 32;
                    display: block;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    color: #b0b0b0;
                    background: #424242;
                    text-decoration: none;
                }
                .cart-mini:hover{
                    color: #ff6700;
                    background-color: #ffffff;
                }
            }


            .topbar-info {
                line-height: 40px;
                float: right;
                position: relative;
                .breadcrumb {
                    background-color: #333333;
                    padding: 0;
                    a{
                        color: #b0b0b0;
                        text-decoration: none;
                    }
                    a:hover{
                        color: #ffffff;
                    }
                }

                .breadcrumb-item + .breadcrumb-item::before {
                    display: inline-block;
                    padding-right: 0.5rem;
                    color: #424242;
                    content: "|";
                }
            }

        }
    }

</style>