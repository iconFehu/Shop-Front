<template>
    <div class="main">
        <div class="footer">
            <div class="footer-service">
                <ul>
                    <li v-for="(value, key, index) in service"><a href="">{{key}}</a></li>
                </ul>
            </div>
            <div class="footer-links">
                <dl v-for="(value, key, index) in helplinks">
                    <dt>{{key}}</dt>
                    <dd v-for="(v, k, i) in value[0]"><a :href="v">{{k}}</a></dd>
                </dl>
                <div>
                    <p class="phone">400-100-5678</p>
                    <p>
                        周一至周日 8:00-18:00<br>（仅收市话费）
                    </p>
                    <a rel="nofollow" class="btn btn-line-primary btn-small" href="//support.kefu.mi.com/" target="_blank" data-stat-id="e6dd56edd4376826" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-e6dd56edd4376826', '//support.kefu.mi.com/', 'pcpid', '']);"><i class="iconfont"></i> 联系客服</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseFooter",
        data() {
            return {
                service: {
                    "预约维修服务": [],
                    "7天无理由退货": [],
                    "15天免费退货": [],
                    "满150元包邮": [],
                    "520余家售后网点": []
                },
                helplinks: {
                    '帮助中心': [{
                        '账户管理': '//www.mi.com/service/account/Account%20registration/',
                        '购物指南': '//www.mi.com/service/buy/SalesTime/',
                        '订单操作': '//www.mi.com/service/order/sendprogress/'
                    }],
                    '服务支持': [{
                        '售后政策': '//www.mi.com/service/exchange',
                        '自助服务': '//www.mi.com/service/',
                        '相关下载': '//www.mi.com/c/service/download/'
                    }],
                    '线下门店': [{
                        '小米之家': '//www.mi.com/c/xiaomizhijia/',
                        '服务网点': '//www.mi.com/static/maintainlocation/',
                        '授权体验店': '//www.mi.com/static/familyLocation/'
                    }],
                    '关于小米': [{
                        '了解小米': '//www.mi.com/about/',
                        '加入小米': 'http://hr.xiaomi.com/',
                        '投资者关系': '//company.mi.com/zh-cn/ir/indexContent/index.html'
                    }],
                    '关注我们': [{
                        '新浪微博': 'https://weibo.com/xiaomishangcheng',
                        '官方微信': '#J_modalWeixin',
                        '联系我们': '//www.mi.com/about/contact/'
                    }],
                    '特色服务': [{
                        'F 码通道': '//order.mi.com/queue/f2code',
                        '礼物码': '//order.mi.com/giftcode/input/',
                        '防伪查询': '//order.mi.com/service/imei'
                    }]
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        width: 100%;

        .footer {
            width: 1226px;
            height: 272px;
            margin-left: auto;
            margin-right: auto;

            .footer-service {
                height: 80px;
                padding: 27px 0;
                border-bottom: 1px solid #e0e0e0;

                ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;

                    li:first-child {
                        border-left: 0;
                    }

                    li {
                        float: left;
                        width: 19.8%;
                        height: 25px;
                        border-left: 1px solid #e0e0e0;
                        font-size: 16px;
                        line-height: 25px;
                        text-align: center;

                        a {
                            color: #616161;
                            text-decoration: none;
                            transition: color .2s;
                        }

                        a:hover {
                            color: #ff6700;
                        }
                    }
                }
            }

            .footer-links {
                height: 192px;
                padding: 40px 0;
                dl{
                    float: left;
                    width: 160px;
                    height: 112px;
                    margin: 0;
                    dt{
                        margin: -1px 0 26px;
                        font-size: 14px;
                        line-height: 1.25;
                        color: #424242;
                        font-weight: unset;
                    }
                    dd{
                        margin: 10px 0 0;
                        font-size: 12px;
                        a{
                            color: #757575;
                            text-decoration: none;
                        }
                        a:hover {
                            color: #ff6700;
                        }
                    }
                }
                div{
                    float: right;
                    width: 251px;
                    height: 112px;
                    border-left: 1px solid #e0e0e0;
                    text-align: center;
                    color: #616161;
                    .phone{
                        margin: 0 0 5px;
                        font-size: 22px;
                        line-height: 1;
                        color: #ff6700;
                    }
                    p{
                        margin: 0 0 16px;
                        font-size: 12px;
                    }
                    a{
                        display: inline-block;
                        padding: 0;
                        margin: 0;
                        border: 1px solid #ff6700;
                        text-align: center;
                        cursor: pointer;
                        transition: all .4s;
                        width: 118px;
                        height: 28px;
                        font-size: 12px;
                        line-height: 28px;
                        background: #fff;
                        color: #ff6700;
                    }
                    a:hover{
                        color: #fff;
                        background-color: #f25807;
                        border-color: #f25807;
                    }
                }
            }
        }
    }
</style>