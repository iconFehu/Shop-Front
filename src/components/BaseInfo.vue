<template>
    <div class="main">
        <div class="info">
            <div class="header-logo">
                <a class="logo ir" href="//www.mi.com/index.html" title="小米官网"></a>
            </div>
            <div class="info-text">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li v-for="(value, key, index) in nav" class="breadcrumb-item" aria-current="page"><a
                                :href="value">{{key}}</a></li>
                    </ol>
                </nav>
                <p>©
                    <a href=" " target="_blank" title="mi.com" data-stat-id="bdfd116c84984884" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-bdfd116c84984884', '', 'pcpid', '']);">mi.com</a> 京ICP证110507号
                    <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow" data-stat-id="09f3ca7af7fc3710" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-09f3ca7af7fc3710', 'http://beian.miit.gov.cn/', 'pcpid', '']);">京ICP备10046444号</a>
                    <a rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134" target="_blank" data-stat-id="e9d2688beb41458a" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-e9d2688beb41458a', 'http://www.beian.gov.cn/portal/registerSystemInforecordcode=11010802020134', 'pcpid', '']);">京公网安备11010802020134号 </a>
                    <a href="//www.mi.com/culture-license/" target="_blank" data-stat-id="059ce48ed7ed6a36" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-059ce48ed7ed6a36', '//www.mi.com/culture-license/', 'pcpid', '']);">京网文[2017]1530-131号</a> <br>
                    <a href="//www.mi.com/medical/record/" target="_blank" data-stat-id="97cdd5ee52424ea3" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-97cdd5ee52424ea3', '//www.mi.com/medical/record/', 'pcpid', '']);">（京）网械平台备字（2018）第00005号
                    </a>
                    <a href="//www.mi.com/medical/qualification/" target="_blank" data-stat-id="f4696bf96a52cdae" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-f4696bf96a52cdae', '//www.mi.com/medical/qualification/', 'pcpid', '']);">互联网药品信息服务资格证 (京) -非经营性-2014-0090
                    </a>
                    <a href="//www.mi.com/business-license/" target="_blank" data-stat-id="3ed1ade2d90f5e8a" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-3ed1ade2d90f5e8a', '//www.mi.com/business-license/', 'pcpid', '']);">营业执照</a>
                    <a href="//www.mi.com/medical/list/" target="_blank" data-stat-id="5186b38734e64ad1" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-5186b38734e64ad1', '//www.mi.com/medical/list/', 'pcpid', '']);">医疗器械公告</a>
                    <br>
                    <a href="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/af5b8ef38e7d57c5ee7fa4289ccf4df8.png" target="_blank" data-stat-id="22eb6b5cf4b462d7" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-22eb6b5cf4b462d7', '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/af5b8ef38e7d57c5ee7fa4289ccf4df8.png', 'pcpid', '']);">增值电信业务许可证</a>&nbsp;
                    网络食品经营备案（京）【2018】WLSPJYBAHF-12  &nbsp;
                    <a href="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fe7383e11127caea371f17156f429a1e.png" target="_blank" data-stat-id="911257f4cef77495" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-911257f4cef77495', '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fe7383e11127caea371f17156f429a1e.png', 'pcpid', '']);">食品经营许可证</a>
                    <br>违法和不良信息举报电话：185-0130-1238 <a href="https://www.mi.com/static/intellectual/index.html" target="_blank" data-stat-id="1f66dd3b1b0f7218" onclick="_msq.push(['trackEvent', '81190ccc4d52f577-1f66dd3b1b0f7218', 'https://www.mi.com/static/intellectual/index.html', 'pcpid', '']);">知识产权侵权投诉</a> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
            </div>
            <div class="info-links">
                <a v-for="(value, key, index) in helplinks" :href="key">
                    <img :src="value" alt="TRUSTe Privacy Certification">
                </a>
            </div>
            <div class="slogan ir">探索黑科技，小米为发烧而生</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseInfo",
        data(){
            return{
                nav: {
                    "小米商城": ["https://www.mi.com/index.html"],
                    "MIUI": ["https://www.miui.com/"],
                    "IoT": ["https://iot.mi.com/index.html"],
                    "云服务": ["https://i.mi.com/"],
                    "金融": ["https://jr.mi.com?from=micom"],
                    "有品": ["https://youpin.mi.com/"],
                    "小爱开放平台": ["https://xiaoai.mi.com/"],
                    "企业团购": ["https://qiye.mi.com/"],
                    "资质证照": ["https://www.mi.com/aptitude/list/?id=41"],
                    "协议规则": ["https://www.mi.com/aptitude/list/"],
                    "下载app": ["https://www.mi.com/appdownload/"],
                    "Select Region": []
                },
                helplinks:{'//privacy.truste.com/privacy-seal/validation?rid=4fc28a8c-6822-4980-9c4b-9fdc69b94eb8&lang=zh-cn': '//i1.mifile.cn/f/i/17/site/truste.png', '//search.szfw.org/cert/l/CX20120926001783002010': '//s01.mifile.cn/i/v-logo-2.png', 'https://ss.knet.cn/verifyseal.dll?sn=e12033011010015771301369&ct=df&pa=461082': '//s01.mifile.cn/i/v-logo-1.png', 'http://www.315online.com.cn/member/315140007.html': '//s01.mifile.cn/i/v-logo-3.png', 'https://www.mi.com/service/buy/commitment/': '//i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png'}
            }
        }
    }
</script>

<style lang="scss" scoped>
.main{
    padding: 30px 0;
    font-size: 12px;
    background: #fafafa;
    .info{
        height: auto;
        position: relative;
        width: 1226px;
        margin-left: auto;
        margin-right: auto;
        .header-logo {
            float: left;

            .logo {
                position: relative;
                display: block;
                width: 57px;
                height: 57px;
                overflow: hidden;
                background: url("//s01.mifile.cn/i/logo.png");
            }

            .ir {
                text-align: left;
                text-indent: -9999em;
            }
        }
        .info-text{
            padding-left: 67px;
            .breadcrumb {
                background-color: #fafafa;
                padding: 0;
                a{
                    color: #757575;
                    text-decoration: none;
                }
                a:hover{
                    color: #ff6700;
                }
            }

            .breadcrumb-item + .breadcrumb-item::before {
                display: inline-block;
                padding-right: 0.5rem;
                color: #424242;
                content: "|";
            }

            p{
                color: #b0b0b0;
                margin: 0;
                line-height: 18px;
                a{
                    color: #b0b0b0;
                    text-decoration: none;
                }
                a:hover{
                    color: #ff6700;
                }
            }
        }
        .info-links{
            height: 28px;
            margin: 4px 0 0;
            padding-left: 67px;
            a{
                color: #757575;
                img{
                    width: auto;
                    height: 28px;
                    margin-left: 0;
                    margin-bottom: 15px;
                }
            }
            a:hover{
                color: #ff6700;
                text-decoration: none;
            }
        }
        .slogan{
            clear: both;
            margin: 30px auto 0;
            width: 267px;
            height: 19px;
            background: url(//s01.mifile.cn/i/slogan2016.png) no-repeat center 0;
            display: block;
            text-align: left;
            text-indent: -9999em;
            overflow: hidden;
        }
    }
}
</style>