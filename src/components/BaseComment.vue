<template>
    <div class="main">
        <div class="box-hd">
            <h2 class="title">热评产品</h2>
        </div>
        <div class="box-bd">
            <ul>
                <li v-for="item in data">
                    <div class="figure">
                        <a class="exposure" :href="item.exposurelink">
                            <img :src="item.imgsrc" :alt="item.imgalt">
                        </a>
                    </div>
                    <p class="review">
                        <a :href="item.reviewlink">{{item.reviewstring}}</a>
                    </p>
                    <p class="author">
                        <span class="date">{{item.author}}</span>
                    </p>
                    <div class="info">
                        <h3>
                            <a :href="item.infolink">{{item.infostring}}</a>
                        </h3>
                        <span class="sep">|</span>
                        <p class="price">
                            <span class="num">{{item.price}}</span>元
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseComment",
        data() {
            return {
                data: [{
                    'goodsid': '2191100025',
                    'exposurelink': 'https://item.mi.com/1191100045.html',
                    'imgsrc': '//i1.mifile.cn/a4/xmad_15603251497926_xYEgd.jpg',
                    'imgalt': 'Redmi AirDots真无线蓝牙耳机',
                    'reviewlink': 'https://order.mi.com/comment/commentDetail/comment_id/159283395',
                    'reviewstring': '快递牛，整体不错蓝牙可以说秒连。红米给力',
                    'author': ' 来自于 117384232 的评价 ',
                    'infolink': 'https://item.mi.com/1191100045.html',
                    'infostring': 'Redmi AirDots真无线蓝牙耳机',
                    'price': '99.9'
                }, {
                    'goodsid': '2190800001',
                    'exposurelink': 'https://item.mi.com/1190800001.html',
                    'imgsrc': '//i1.mifile.cn/a4/xmad_15603246236711_eKRFU.jpg',
                    'imgalt': '小米小爱触屏音箱',
                    'reviewlink': 'https://order.mi.com/comment/commentDetail/comment_id/159376717',
                    'reviewstring': '很棒的产品  很幸运米粉节抢到了，小爱很聪明，显示也很清晰 ，买到就是赚到。',
                    'author': ' 来自于 78772208 的评价 ',
                    'infolink': 'https://item.mi.com/1190800001.html',
                    'infostring': '小米小爱触屏音箱',
                    'price': '299'
                }, {
                    'goodsid': '2191900033',
                    'exposurelink': 'https://item.mi.com/1191900052.html',
                    'imgsrc': '//i1.mifile.cn/a4/xmad_15603268736395_QcvPS.jpg',
                    'imgalt': 'Redmi K20 Pro 全网通版 6GB+128GB 碳纤黑',
                    'reviewlink': 'https://order.mi.com/comment/commentDetail/comment_id/159846894',
                    'reviewstring': '黑色K20做工精细，分量足，外形手感俱佳，系统流畅，续航给力。。。总之一句话，非常不错！',
                    'author': ' 来自于 宁静致远 的评价 ',
                    'infolink': 'https://item.mi.com/1191900052.html',
                    'infostring': 'Redmi K20 Pro 全网通版 6GB+128GB 碳纤黑',
                    'price': '2599'
                }, {
                    'goodsid': '2191900015',
                    'exposurelink': 'https://item.mi.com/1191900033.html',
                    'imgsrc': '//i1.mifile.cn/a4/xmad_15603271856346_WZBAr.jpg',
                    'imgalt': 'Redmi K20 全网通版 6GB+128GB 火焰红',
                    'reviewlink': 'https://order.mi.com/comment/commentDetail/comment_id/159869681',
                    'reviewstring': '在小区拍的，照相很清晰，性价比高，值得购买。',
                    'author': ' 来自于 茫然 的评价 ',
                    'infolink': 'https://item.mi.com/1191900033.html',
                    'infostring': 'Redmi K20 全网通版 6GB+128GB 火焰红',
                    'price': '2099'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 509px;
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
        }
        .box-bd{
            height: 415px;
            width: 1226px;
            margin-left: auto;
            margin-right: auto;
            ul{
                margin: 0;
                padding: 0;
                list-style-type: none;
                li{
                    margin-left: 14px;
                    position: relative;
                    float: left;
                    width: 296px;
                    height: 415px;
                    margin-bottom: 14px;
                    background: #fff;
                    transition: all .2s linear;
                    .figure{
                        width: 296px;
                        height: 220px;
                        margin: 0 0 28px;
                        a{
                            color: #757575;
                            img{
                                width: 296px;
                                height: 220px;
                                border: 0;
                            }
                        }
                        a:hover{
                            color: #ff6700;
                            text-decoration: none;
                        }
                    }

                    .review{
                        height: 72px;
                        margin: 0 28px 22px;
                        font-size: 14px;
                        line-height: 24px;
                        font-weight: 400;
                        overflow: hidden;
                        color: #333333;
                        a{
                            color: #333333;
                        }
                        a:hover{
                            color: #333333;
                            text-decoration: none;
                        }
                    }
                    .author{
                        position: relative;
                        height: 18px;
                        margin: 0 28px 8px;
                        padding: 0 10px 0 0;
                        font-size: 12px;
                        color: #b0b0b0;
                    }
                    .info{
                        margin: 0 30px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;

                        h3{
                            display: inline-block;
                            margin: 0;
                            font-size: 14px;
                            font-weight: 400;
                            max-width: 170px;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            vertical-align: bottom;
                            color: #333;
                            a{
                                color: #333333;
                            }
                        }
                        .sep{
                            color: #e0e0e0;
                            margin: 0 .5em;
                        }
                        .price{
                            display: inline;
                            margin: 0;
                            color: #ff6700;
                            span{
                                color: #ff6700;
                            }
                        }
                    }
                }
                li:first-child{
                    margin-left: 0;
                }
            }
        }
    }
</style>