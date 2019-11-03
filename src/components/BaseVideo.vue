<template>
    <div class="main">
        <div class="box-hd">
            <TheTitle title="视频"></TheTitle>
        </div>
        <div class="box-bd">
            <ul>
                <li v-for="item in data">
                    <div class="figure">
                        <a :href="item['data-video']">
                            <img :src="item['data-video-poster']" alt="">
                        </a>
                    </div>
                    <h3>
                        <a :href="item['data-video']">{{item['title']}}</a>
                    </h3>
                    <p class="desc">
                        {{item.desc}}
                    </p>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
    import TheTitle from "./TheTitle";
    export default {
        name: "BaseVideo",
        components: {TheTitle},
        data(){
            return{
                data:[{'data-video': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12e0189c132e21e064c8161d09816de5.mp4', 'data-video-poster': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4c153a9166928ee45fd426dca994998.jpeg', 'title': '王源 & 小米9 全新广告大片', 'desc': '好看又能打！我反正被帅到了，Will You？'}, {'data-video': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/895d80d9283cb54da04fdc8c5d46f27a.mp4', 'data-video-poster': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab5883b089b94e576d9b645d8e62972c.jpg', 'title': '雷军对话王源', 'desc': '聊了3小时，这9个秘密决定公开'}, {'data-video': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2661b967a319f358fabe822aed708e6.mp4', 'data-video-poster': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6020501220b55fd96e1adc19c68eba2.png', 'title': '小米手环4', 'desc': '改变从今开始'}, {'data-video': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9fccf360955848ba970e309cd7e3736e.mp4', 'data-video-poster': 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bac0a8163ab820d0e6e5c2d051ae6592.jpg', 'title': '小米MIX 3 磁动力滑盖全面屏', 'desc': '全新滑盖交互体验，不一样的新感觉'}]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 378px;
        background-color: #f5f5f5;
        .box-hd {
            position: relative;
            height: 58px;
            width: 1226px;
            margin-left: auto;
            margin-right: auto;
        }
        .box-bd {
            height: 285px;
            width: 1226px;
            margin-left: auto;
            margin-right: auto;
            ul{
                width: 1240px;
                height: 285px;
                margin: 0;
                padding: 0;
                list-style-type: none;
                li:first-child{
                    margin-left: 0;
                }
                li{
                    position: relative;
                    float: left;
                    width: 296px;
                    height: 285px;
                    margin-left: 14px;
                    margin-bottom: 14px;
                    text-align: center;
                    background: #fff;
                    transition: all .2s linear;
                    .figure{
                        position: relative;
                        width: 296px;
                        height: 180px;
                        margin: 0 0 28px;
                        a{
                            display: block;
                            height: 180px;
                            color: #757575;
                            img{
                                width: 296px;
                                height: 180px;
                                border: 0;
                            }
                        }
                        a:hover{
                            color: #ff6700;
                            text-decoration: none;
                        }
                    }
                    h3{
                        margin: 0 0 6px;
                        font-size: 14px;
                        font-weight: 400;
                        text-align: center;
                        color: #333;
                        a{
                            color: #333333;
                        }
                        a:hover{
                            color: #ff6700;
                            text-decoration: none;
                        }
                    }
                    .desc{
                        height: 18px;
                        margin: 0;
                        font-size: 12px;
                        color: #b0b0b0;
                    }
                }
            }
        }
    }
</style>