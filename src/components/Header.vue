<template>
    <div class="main">
        <div class="home">
            <div class="header-logo">
                <a class="logo ir" href="//www.mi.com/index.html" title="小米官网"></a>
            </div>
            <ul class="nav-list" :class="showNavMenu?'':'dis-li-First-child'">
                <li v-for="(value, key, index) in header" :key="index" @mouseover="showMenu" @mouseout="closeMenu"><a href="">{{key}}</a></li>
            </ul>
            <div class="site-category">
                <ul class="site-category-list">
                    <li v-for="(value, key, index) in category" :key="index" @mouseover="showTables(index)" @mouseout="closeTables(index)">
                        <a :href="value[0]">{{key}}</a>
                        <div v-show="table[index]">
                            <ul class="children-list">
                                <li v-for="(v, k, i) in value[1]">
                                    <a :href="v[0]">
                                        <img :src="v[1]" alt="">
                                        <span>{{k}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="input-group mb-3">
                <input type="text" @focusin="clickInput" @focusout="outInput" class="form-control" placeholder=""
                       aria-label="Recipient's username"
                       aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" :class="[changeInput?'borderFF6700':'borderE0E0E0']"
                            type="button" id="button-addon2">搜索
                    </button>
                </div>
            </div>
        </div>
        <transition name="goods">
            <TheGoods v-show="showMenuBool" :data="head" @navMouseover="showMenu" @navMouseout="closeMenu">
            </TheGoods>
        </transition>
    </div>
</template>

<script>
    import TheGoods from "./TheGoods";

    export default {
        name: "Header",
        components: {TheGoods},
        props: ['showNavMenu'],
        data() {
            return {
                header: {
                    "全部商品分类": [],
                    "小米手机": [],
                    "Redmi红米": [],
                    "电视": [],
                    "笔记本": [],
                    "家电": [],
                    "路由器": [],
                    "智能硬件": [],
                    "服务": [],
                    "社区": [],
                },
                changeInput: false,
                showMenuBool: false,
                category: {
                    '手机 电话卡': ['https://www.mi.com/p/1915.html', {
                        '小米CC9': ['https://www.mi.com/micc9/', '//i1.mifile.cn/f/i/2019/micc9/_80.png?width=80&height=80'],
                        '小米CC美图定制版': ['https://www.mi.com/xiaomicc9mt', '//i1.mifile.cn/f/i/2019/mitucc/106531562083939_.pic.jpg?width=80&height=80'],
                        '小米CC9e': ['https://www.mi.com/micc9e', '//i1.mifile.cn/f/i/80-80-new.png?width=80&height=80'],
                        '小米9': ['https://www.mi.com/mi9/', '//i1.mifile.cn/f/i/g/2015/cn-index/mi9-80.png?width=80&height=80'],
                        '小米9 SE': ['https://www.mi.com/mi9se/', '//i1.mifile.cn/f/i/g/2015/cn-index/mi9se-80.png?width=80&height=80'],
                        '小米MIX 3': ['https://www.mi.com/mix3/', '//i1.mifile.cn/f/i/g/2015/cn-index/mix3-80.png?width=80&height=80'],
                        '小米8 青春版': ['https://www.mi.com/mi8youth/', '//i1.mifile.cn/f/i/g/2015/cn-index/qingchun-80.png?width=80&height=80'],
                        '小米8 屏幕指纹版': ['https://www.mi.com/mi8ud/', '//i1.mifile.cn/f/i/g/2015/cn-index/pingmu-80.png?width=80&height=80'],
                        '小米MIX 2S': ['https://www.mi.com/mix2s/', '//i1.mifile.cn/f/i/g/2015/cn-index/mix2s80-80white.png?width=80&height=80'],
                        '小米Max 3': ['https://www.mi.com/max3/', '//i1.mifile.cn/f/i/g/2015/cn-index/max3-80-80.png?width=80&height=80'],
                        '黑鲨游戏手机 2': ['https://www.mi.com/blackshark-game2/', '//i1.mifile.cn/f/i/2019/blacksharkg2/123.jpg?width=80&height=80'],
                        'Redmi K20 Pro': ['https://www.mi.com/redmik20pro/', '//i1.mifile.cn/f/i/2019/redmik20pro/hongse-1.jpg?width=80&height=80'],
                        'Redmi K20': ['https://www.mi.com/redmik20/', '//i1.mifile.cn/f/i/2019/redmik20/lanse-1.jpg?width=80&height=80'],
                        'Redmi 7A': ['https://www.mi.com/redmi7a/', '//i1.mifile.cn/f/i/2019/redmi7a/heisedi.jpg?width=80&height=80'],
                        'Redmi 7': ['https://item.mi.com/product/10000138.html', '//i1.mifile.cn/f/i/2019/redmi7/800-800.png?width=80&height=80'],
                        'Redmi Note 7 Pro': ['https://www.mi.com/redminote7pro/', '//i1.mifile.cn/f/i/g/redminote7pro.jpg?width=80&height=80'],
                        'Redmi Note 7': ['https://www.mi.com/redminote7/', '//i1.mifile.cn/f/i/g/2015/cn-index/note780-80.png?width=80&height=80'],
                        '移动4G+专区': ['https://www.mi.com/p/5592.html', '//i1.mifile.cn/f/i/g/2015/cn-index/80.jpg?width=80&height=80'],
                        '对比手机': ['https://www.mi.com/compare/', '//i1.mifile.cn/f/i/15/goods/sidebar/compare.jpg?width=80&height=80'],
                        '米粉卡 日租卡': ['https://www.mi.com/micard', '//i1.mifile.cn/f/i/g/2015/cn-index/mifenka-1.jpg?width=80&height=80'],
                        '小米移动 电话卡': ['https://www.mi.com/mimobile/', '//i1.mifile.cn/f/i/15/goods/sidebar/mimobile.jpg?width=80&height=80'],
                        '手机上门维修': ['https://item.mi.com/product/7532.html', '//i1.mifile.cn/f/i/g/2015/cn-index/weixiu80-80.png?width=80&height=80'],
                        '云服务空间月卡': ['https://item.mi.com/product/8262.html', 'https://i1.mifile.cn/f/i/g/2015/yunfuwu.jpg?width=80&height=80']
                    }], '电视 盒子': ['https://www.mi.com/a/h/9819.html', {
                        '米家激光投影电视': ['https://search.mi.com/search_%E6%BF%80%E5%85%89%E6%8A%95%E5%BD%B1%E7%94%B5%E8%A7%86', '//i1.mifile.cn/f/i/g/2015/cn-index/mijiajiguang4k.jpg?width=80&height=80'],
                        '小米壁画电视 65英寸': ['https://www.mi.com/arttv/', '//i1.mifile.cn/f/i/g/2015/cn-index/bihua.jpg?width=80&height=80'],
                        '小米全面屏电视': ['https://search.mi.com/search_%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86', '//i1.mifile.cn/f/i/g/2015/cn-index/E55ADIANSHI.jpg?width=80&height=80'],
                        '小米电视4A 32英寸': ['https://www.mi.com/mitv4A/32/', '//i1.mifile.cn/f/i/g/2015/TV4A-32.png?width=80&height=80'],
                        '小米电视4A 43英寸青春版': ['https://www.mi.com/mitv4A/43y', '//i1.mifile.cn/f/i/g/2015/TV4A-43QC.png?width=80&height=80'],
                        '小米电视4A 49英寸': ['https://www.mi.com/mitv4A/49/', '//i1.mifile.cn/f/i/g/2015/cn-index/4A49.jpg?width=80&height=80'],
                        '小米电视4A 50英寸': ['https://www.mi.com/mitv4A/50', '//i1.mifile.cn/f/i/g/2015/TV4A-50.png?width=80&height=80'],
                        '小米电视4A 55英寸': ['https://www.mi.com/mitv4A/55/', '//i1.mifile.cn/f/i/g/2015/cn-index/55120120.png?width=80&height=80'],
                        '小米电视4A 58英寸': ['https://www.mi.com/mitv4A/58/', '//i1.mifile.cn/f/i/g/2015/TV4A-58-x.png?width=80&height=80'],
                        '小米电视4A 65英寸': ['https://www.mi.com/mitv4A/65/', '//i1.mifile.cn/f/i/g/2015/cn-index/65120_120.png?width=80&height=80'],
                        '小米电视4C 32英寸': ['https://www.mi.com/mitv4c/32/', '//i1.mifile.cn/f/i/g/2015/TV4C-32.png?width=80&height=80'],
                        '小米电视4C 40英寸': ['https://www.mi.com/mitv4c/40/', '//i1.mifile.cn/f/i/g/2015/cn-index/4c-40.jpg?width=80&height=80'],
                        '小米电视4C 43英寸': ['https://www.mi.com/mitv4c/43/', '//i1.mifile.cn/f/i/g/2015/TV4C-43.png?width=80&height=80'],
                        '小米电视4C 50英寸': ['https://www.mi.com/mitv4c/50/', '//i1.mifile.cn/f/i/g/2015/TV4C-50.png?width=80&height=80'],
                        '小米电视4C 55英寸': ['https://www.mi.com/mitv4c/55/', '//i1.mifile.cn/f/i/g/2015/cn-index/4C55.jpg?width=80&height=80'],
                        '小米电视4X 43英寸': ['https://www.mi.com/mitv4x/43/', '//i1.mifile.cn/f/i/g/2015/TV4X-43xin.png?width=80&height=80'],
                        '小米电视4X 55英寸': ['https://www.mi.com/mitv4x/55/', '//i1.mifile.cn/f/i/g/2015/TV4X-55.png?width=80&height=80'],
                        '小米电视4X 65英寸': ['https://item.mi.com/product/9666.html', '//i1.mifile.cn/f/i/g/2015/cn-index/4X65.jpg?width=80&height=80'],
                        '小米电视4 55英寸': ['https://www.mi.com/mitv4/55/', '//i1.mifile.cn/f/i/g/2015/TV4-55.png?width=80&height=80'],
                        '小米电视4 65英寸旗舰版': ['https://www.mi.com/mitv4/65aio/', '//i1.mifile.cn/f/i/g/2015/65yiti.jpg?width=80&height=80'],
                        '小米电视4 75英寸': ['https://www.mi.com/mitv4/75/', '//i1.mifile.cn/f/i/g/2015/cn-index/475.jpg?width=80&height=80'],
                        '小米电视4S': ['https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%864s', '//i1.mifile.cn/f/i/g/2015/TV4S-32.png?width=80&height=80'],
                        '小米电视 体育版': ['https://search.mi.com/search_%E7%94%B5%E8%A7%86%E4%BD%93%E8%82%B2%E7%89%88', '//i1.mifile.cn/f/i/g/2015/TVTYB.png?width=80&height=80'],
                        '小米盒子': ['https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%9B%92%E5%AD%90', '//i1.mifile.cn/f/i/g/2015/cn-index/hezibai480_80.jpg?width=80&height=80']
                    }], '笔记本 平板': ['https://www.mi.com/a/h/7529.html', {
                        '小米笔记本 15.6"': ['https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2015.6', '//i1.mifile.cn/f/i/g/bijiben80.jpg?width=80&height=80'],
                        '小米笔记本 13.3"': ['https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2013.3', '//i1.mifile.cn/f/i/g/2015/cn-index/80x80.png?width=80&height=80'],
                        '小米笔记本 12.5"': ['https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2012.5', '//i1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=80&height=80'],
                        'RedmiBook 14': ['https://www.mi.com/redmibook14/', '//i1.mifile.cn/f/i/g/2015/RedmiBookbashi.png?width=80&height=80'],
                        '小米游戏本': ['https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%E6%B8%B8%E6%88%8F%E6%9C%AC', '//i1.mifile.cn/f/i/g/2015/youxiben-80.jpg?width=80&height=80'],
                        '小米平板4': ['https://item.mi.com/product/10000108.html', '//i1.mifile.cn/f/i/g/2015/pingban2.jpg?width=80&height=80'],
                        '键盘': ['https://search.mi.com/search_%E6%9C%BA%E6%A2%B0%E9%94%AE%E7%9B%98', '//i1.mifile.cn/f/i/g/2015/yuemijianpan80.jpg?width=80&height=80'],
                        '鼠标／鼠标垫': ['https://search.mi.com/search_%E9%BC%A0%E6%A0%87', '//i1.mifile.cn/f/i/g/2015/cn-index/wxsb80.png?width=80&height=80'],
                        '转接器': ['https://search.mi.com/search_%E8%BD%AC%E6%8E%A5%E5%99%A8', '//i1.mifile.cn/f/i/15/goods/sidebar/usbzjqggg80.jpg?width=80&height=80'],
                        '平板配件': ['https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6', '//i1.mifile.cn/f/i/g/2015/xiaomipingbanpeijian80.jpg?width=80&height=80'],
                        '笔记本双肩包': ['https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%8F%8C%E8%82%A9%E5%8C%85', '//i1.mifile.cn/f/i/g/2015/cn-index/bijibenshuangjianbao80.jpg?width=80&height=80'],
                        '小米笔记本内胆包': ['https://list.mi.com/accessories/tag?id=neidanbao', '//i1.mifile.cn/f/i/g/2015/cn-index/neidanbao80.jpg?width=80&height=80']
                    }], '家电 插线板': ['https://www.mi.com/p/9285.html', {
                        '米家立式空调': ['https://www.mi.com/aircondition-f/f3c1/', '//i1.mifile.cn/f/i/g/2015/cn-index/lishikongtiao.png?width=80&height=80'],
                        '米家空调': ['https://search.mi.com/search_%E4%BA%92%E8%81%94%E7%BD%91%E7%A9%BA%E8%B0%83', '//i1.mifile.cn/f/i/g/2015/cn-index/kongtiaoguan140.png?width=80&height=80'],
                        '米家洗烘一体机': ['https://search.mi.com/search_%E6%B4%97%E7%83%98%E4%B8%80%E4%BD%93%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/cn-index/xihongyitipro_80x80.png?width=80&height=80'],
                        'Redmi全自动波轮洗衣机': ['https://search.mi.com/search_%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/cn-index/redmibolunxiyiji.jpg?width=80&height=80'],
                        '净水器': ['https://search.mi.com/search_%E5%87%80%E6%B0%B4%E5%99%A8-132', '//i1.mifile.cn/f/i/g/2015/cn-index/jingshuiqi80haha.jpg?width=80&height=80'],
                        '净水器滤芯': ['https://search.mi.com/search_%E5%87%80%E6%B0%B4%E5%99%A8%E6%BB%A4%E8%8A%AF', '//i1.mifile.cn/f/i/g/2015/lvxinbashi.png?width=80&height=80'],
                        '扫地机器人': ['https://www.mi.com/roomrobot/?cfrom=search', '//i1.mifile.cn/f/i/g/2019/saodi.jpg?width=80&height=80'],
                        '吸尘器': ['https://www.mi.com/vacuum-cleaner/', '//i1.mifile.cn/f/i/g/2019/xichenqi.jpg?width=80&height=80'],
                        '空气净化器': ['https://search.mi.com/search_%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8', '//i1.mifile.cn/f/i/g/2015/cn-index/jinghuaqi2S-80.jpg?width=80&height=80'],
                        '电饭煲': ['https://search.mi.com/search_%E7%94%B5%E9%A5%AD%E7%85%B2', '//i1.mifile.cn/f/i/g/2015/cn-index/yalidianfanbao-80.jpg?width=80&height=80'],
                        '电磁炉': ['https://search.mi.com/search_%E7%94%B5%E7%A3%81%E7%82%89-189', '//i1.mifile.cn/f/i/g/2015/cn-index/diancilu-80.jpg?width=80&height=80'],
                        '厨房用具': ['https://search.mi.com/search_%E7%9F%A5%E5%90%BE%E7%85%AE-0-0-0-0-1-0-0-0-1', '//i1.mifile.cn/f/i/g/2015/cn-index/tangguo-80.jpg?width=80&height=80'],
                        '电水壶': ['https://search.mi.com/search_%E7%94%B5%E6%B0%B4%E5%A3%B6', '//i1.mifile.cn/f/i/g/2015/cn-index/dianshuihu-80.jpg?width=80&height=80'],
                        '滤水壶': ['https://search.mi.com/search_%E6%BB%A4%E6%B0%B4%E5%A3%B6', '//i1.mifile.cn/f/i/g/2015/lvshuihu80.jpg?width=80&height=80'],
                        '落地风扇': ['https://search.mi.com/search_%E8%90%BD%E5%9C%B0%E6%89%87', '//i1.mifile.cn/f/i/g/2015/mijiadianfengshan80.png?width=80&height=80'],
                        '投影仪': ['https://www.mi.com/projection-youth/', '//i1.mifile.cn/f/i/g/2015/cn-index/touyingqingchun.png?width=80&height=80'],
                        '灯具': ['https://search.mi.com/search_%E7%81%AF%E5%85%B7', '//i1.mifile.cn/f/i/g/2015/cn-index/xidingdeng-80.jpg?width=80&height=80'],
                        '插线板': ['https://search.mi.com/search_%E6%8F%92%E6%8E%92', '//i1.mifile.cn/f/i/g/2015/chaxianban80.jpg?width=80&height=80'],
                        '新风机': ['https://search.mi.com/search_%E6%96%B0%E9%A3%8E%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/xinfengji.jpg?width=80&height=80'],
                        '电暖器': ['https://item.mi.com/product/9145.html', '//i1.mifile.cn/f/i/g/2015/diannuanqi.jpg?width=80&height=80'],
                        '电压力锅': ['https://item.mi.com/1190200053.html', '//i1.mifile.cn/f/i/g/2015/yalidianfan.jpg?width=80&height=80'],
                        '料理机': ['https://search.mi.com/search_%E6%96%99%E7%90%86%E6%9C%BA', '//i1.mifile.cn/f/i/g/2019/liaoli.jpg?width=80&height=80'],
                        '电煮壶': ['https://item.mi.com/product/9529.html', '//i1.mifile.cn/f/i/g/2019/dianzhuhu.jpg?width=80&height=80']
                    }], '出行 穿戴': ['https://www.mi.com/p/9289.html', {
                        '手环手表': ['https://search.mi.com/search_%E6%89%8B%E7%8E%AF%E6%89%8B%E8%A1%A8', '//i1.mifile.cn/f/i/luyang5/shouhuan_80x80.png?width=80&height=80'],
                        'VR': ['https://search.mi.com/search_vr', '//i1.mifile.cn/f/i/g/2015/cn-index/VRyitiji80.jpg?width=80&height=80'],
                        '平衡车': ['https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6', '//i1.mifile.cn/f/i/g/2015/cn-index/scooter-80.jpg?width=80&height=80'],
                        '滑板车': ['https://search.mi.com/search_%E6%BB%91%E6%9D%BF%E8%BD%A6', '//i1.mifile.cn/f/i/g/2015/cn-index/scooter2-80.jpg?width=80&height=80'],
                        '车载逆变器': ['https://search.mi.com/search_%E8%BD%A6%E8%BD%BD%E9%80%86%E5%8F%98%E5%99%A8', '//i1.mifile.cn/f/i/g/2015/chezainibianqi80.jpg?width=80&height=80'],
                        '平衡车配件': ['https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6%E9%85%8D%E4%BB%B6', '//i1.mifile.cn/f/i/g/2015/peijian80.jpg?width=80&height=80'],
                        '智能后视镜': ['https://search.mi.com/search_%E5%90%8E%E8%A7%86%E9%95%9C', '//i1.mifile.cn/f/i/g/2015/cn-index/mirror-80.jpg?width=80&height=80'],
                        '智能记录仪': ['https://search.mi.com/search_%E8%AE%B0%E5%BD%95%E4%BB%AA', '//i1.mifile.cn/f/i/g/2015/jiluyi.jpg?width=80&height=80'],
                        '车载空气净化器': ['https://search.mi.com/search_%E8%BD%A6%E8%BD%BD%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8', '//i1.mifile.cn/f/i/g/2015/chezaikongjing.jpg?width=80&height=80'],
                        '无线车充': ['https://item.mi.com/product/9357.html', '//i1.mifile.cn/f/i/g/2019/chechong.jpg?width=80&height=80'],
                        '充气宝': ['https://item.mi.com/product/9613.html', '//i1.mifile.cn/f/i/g/2019/chongqi.jpg?width=80&height=80'],
                        '平衡轮': ['https://item.mi.com/product/10003.html', '//i1.mifile.cn/f/i/g/2019/pinghenglun.jpg?width=80&height=80']
                    }], '智能 路由器': ['https://www.mi.com/a/h/8363.html', {
                        '打印机': ['https://search.mi.com/search_%E6%89%93%E5%8D%B0%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/zhaopiandayinj.jpg?width=80&height=80'],
                        '路由器': ['https://www.mi.com/a/h/8363.html', '//i1.mifile.cn/f/i/g/2015/cn-index/luyouqi4_80.jpg?width=80&height=80'],
                        '智能家庭': ['https://search.mi.com/search_%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD', '//i1.mifile.cn/f/i/g/2015/zhinengjiating80.jpg?width=80&height=80'],
                        '对讲机': ['https://search.mi.com/search_%E5%AF%B9%E8%AE%B2%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/duijiangji.jpg?width=80&height=80'],
                        '无人机': ['https://search.mi.com/search_%E6%97%A0%E4%BA%BA%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/cn-index/wurenji80.jpg?width=80&height=80'],
                        '摄像机': ['https://search.mi.com/search_%E6%91%84%E5%83%8F%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/cn-index/camera-head-80.jpg?width=80&height=80'],
                        '照相机': ['https://search.mi.com/search_%E7%85%A7%E7%9B%B8%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/cn-index/camera-small-80.jpg?width=80&height=80'],
                        '智能门锁': ['https://item.mi.com/product/9120.html', '//i1.mifile.cn/f/i/g/2015/mensuo.jpg?width=80&height=80'],
                        '视频门铃': ['https://search.mi.com/search_%E9%97%A8%E9%93%83', '//i1.mifile.cn/f/i/g/2019/menling.jpg?width=80&height=80'],
                        '小爱老师': ['https://search.mi.com/search_%E5%B0%8F%E7%88%B1%E8%80%81%E5%B8%88', '//i1.mifile.cn/f/i/luyang5/laoshi_80x80.png?width=80&height=80'],
                        '小爱音箱': ['https://search.mi.com/search_%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1', '//i1.mifile.cn/f/i/g/2019/play.jpg?width=80&height=80']
                    }], '电源  配件': ['https://www.mi.com/p/9290.html', {
                        '移动电源': ['https://search.mi.com/search_%E5%85%85%E7%94%B5%E5%AE%9D', '//i1.mifile.cn/f/i/g/2015/cn-index/dianyuan2.100080.jpg?width=80&height=80'],
                        '数据线': ['https://search.mi.com/search_usb%E6%95%B0%E6%8D%AE%E7%BA%BF', '//i1.mifile.cn/f/i/g/2015/cn-index/shujuxian-80.jpg?width=80&height=80'],
                        '车充': ['https://search.mi.com/search_%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8', '//i1.mifile.cn/f/i/g/2015/cn-index/chezaichongdianqi80.jpg?width=80&height=80'],
                        '充电器': ['https://search.mi.com/search_%E5%85%85%E7%94%B5%E5%99%A8', '//i1.mifile.cn/f/i/g/2015/cn-index/chongdianqi-80.jpg?width=80&height=80'],
                        '无线充': ['https://search.mi.com/search_%E6%97%A0%E7%BA%BF%E5%85%85%E7%94%B5%E5%99%A8', '//i1.mifile.cn/f/i/g/2015/wuxianchong80.jpg?width=80&height=80'],
                        '电池': ['https://search.mi.com/search_%E5%BD%A9%E8%99%B9%E7%94%B5%E6%B1%A0', '//i1.mifile.cn/f/i/15/goods/sidebar/7Battery1.jpg?width=80&height=80'],
                        '自拍杆': ['https://search.mi.com/search_%E8%87%AA%E6%8B%8D%E6%9D%86', '//i1.mifile.cn/f/i/g/2015/cn-index/zipaigan80.jpg?width=80&height=80'],
                        '手机壳': ['https://list.mi.com/8-0-0-0-0-0-0-0-1', '//i1.mifile.cn/f/i/15/goods/sidebar/baohu.jpg?width=80&height=80'],
                        '手机贴膜': ['https://list.mi.com/9', '//i1.mifile.cn/f/i/15/goods/sidebar/tiemo.jpg?width=80&height=80'],
                        '手机支架': ['https://item.mi.com/1162000043.html?cfrom=search', '//i1.mifile.cn/f/i/g/2015/shoujizhijia80.jpg?width=80&height=80'],
                        '平板配件': ['https://search.mi.com/search_%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6', '//i1.mifile.cn/f/i/g/2015/pingban80.jpg?width=80&height=80'],
                        '黑鲨配件': ['https://search.mi.com/search_%E9%BB%91%E9%B2%A8%E9%85%8D%E4%BB%B6', '//i1.mifile.cn/f/i/g/2015/heishashoubing80.jpg?width=80&height=80'],
                        '其他配件': ['https://search.mi.com/search_%E5%85%B6%E4%BB%96%E7%94%B5%E6%BA%90%E9%85%8D%E4%BB%B6', '//i1.mifile.cn/f/i/g/2015/qitapeijian80.jpg?width=80&height=80']
                    }], '健康 儿童': ['https://www.mi.com/p/9291.html', {
                        '洗手机': ['https://www.mi.com/dispenser/', 'https://i1.mifile.cn/f/i/g/2015/xishouji.jpg?width=80&height=80'],
                        '剃须刀': ['https://search.mi.com/search_%E5%89%83%E9%A1%BB%E5%88%80', '//i1.mifile.cn/f/i/g/2015/cn-index/tixvdao80.jpg?width=80&height=80'],
                        '日光镜': ['https://item.mi.com/product/9235.html', '//i1.mifile.cn/f/i/g/2015/riguang.jpg?width=80&height=80'],
                        '牙刷': ['https://search.mi.com/search_%E7%89%99%E5%88%B7', '//i1.mifile.cn/f/i/g/2015/cn-index/yashua80.jpg?width=80&height=80'],
                        '吹风机': ['https://item.mi.com/1184700005.html', '//i1.mifile.cn/f/i/g/2015/chuifengji.jpg?width=80&height=80'],
                        '体重秤': ['https://search.mi.com/search_%E4%BD%93%E9%87%8D%E7%A7%A4', '//i1.mifile.cn/f/i/15/goods/list/scale.jpg?width=80&height=80'],
                        '体脂秤': ['https://search.mi.com/search_%E4%BD%93%E8%84%82%E7%A7%A4', '//i1.mifile.cn/f/i/g/2019/tizhicheng.jpg?width=80&height=80'],
                        '血压计': ['https://item.mi.com/product/3674.html', '//i1.mifile.cn/f/i/g/2015/xueyaji80.jpg?width=80&height=80'],
                        '体温计': ['https://search.mi.com/search_%E4%BD%93%E6%B8%A9%E8%AE%A1', '//i1.mifile.cn/f/i/g/2015/tiwenji80.jpg?width=80&height=80'],
                        '早教启智': ['https://search.mi.com/search_%E6%97%A9%E6%95%99%E5%90%AF%E6%99%BA', '//i1.mifile.cn/f/i/g/2015/cn-index/mitugushi-80.jpg?width=80&height=80'],
                        '遥控电动': ['https://search.mi.com/search_%E5%84%BF%E7%AB%A5%E9%81%A5%E6%8E%A7', '//i1.mifile.cn/f/i/g/2015/XIAOFEIJIBASHI.jpg?width=80&height=80'],
                        '益智积木': ['https://search.mi.com/search_%E7%9B%8A%E6%99%BA%E7%A7%AF%E6%9C%A8-196', '//i1.mifile.cn/f/i/g/2015/cn-index/toyblock2-80.jpg?width=80&height=80'],
                        '儿童手表': ['https://search.mi.com/search_%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8', '//i1.mifile.cn/f/i/g/2015/cn-index/shoubiao280.jpg?width=80&height=80'],
                        '儿童滑板车': ['https://search.mi.com/search_%E5%84%BF%E7%AB%A5%E6%BB%91%E6%9D%BF%E8%BD%A6', '//i1.mifile.cn/f/i/g/2015/huabanche80.jpg?width=80&height=80'],
                        '米兔拉杆箱': ['https://item.mi.com/product/8878.html', '//i1.mifile.cn/f/i/g/2015/cn-index/laganxiang.jpg?width=80&height=80'],
                        '婴儿推车': ['https://item.mi.com/product/9029.html', 'https://i1.mifile.cn/f/i/g/2015/gif/tuiche.jpg?width=80&height=80'],
                        '儿童书包': ['https://item.mi.com/product/10000130.html', '//i1.mifile.cn/f/i/g/2015/shubao2.jpg?width=80&height=80'],
                        '婴儿理发器': ['https://item.mi.com/product/9315.html', '//i1.mifile.cn/f/i/g/2015/lifa.jpg?width=80&height=80'],
                        '儿童保温杯': ['https://item.mi.com/product/9317.html', '//i1.mifile.cn/f/i/g/2019/baowenb.jpg?width=80&height=80'],
                        '走步机': ['https://www.mi.com/treadmill/?cfrom=search', '//i1.mifile.cn/f/i/g/2019/zoubu.jpg?width=80&height=80'],
                        '点读笔': ['https://item.mi.com/product/9834.html', '//i1.mifile.cn/f/i/g/2019/diandubi.jpg?width=80&height=80']
                    }], '耳机 音箱': ['https://www.mi.com/p/9292.html', {
                        '小米小爱音箱 Play版': ['https://www.mi.com/aispeaker-play', '//i1.mifile.cn/f/i/g/2019/play.jpg?width=80&height=80'],
                        '线控耳机': ['https://search.mi.com/search_%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/cn-index/erji80.jpg?width=80&height=80'],
                        '蓝牙耳机': ['https://search.mi.com/search_%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA', '//i1.mifile.cn/f/i/g/2019/airdots.jpg?width=80&height=80'],
                        '头戴耳机': ['https://search.mi.com/search_%E5%A4%B4%E6%88%B4%E8%80%B3%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/cn-index/toudai80.jpg?width=80&height=80'],
                        '品牌耳机': ['https://search.mi.com/search_%E5%93%81%E7%89%8C%E8%80%B3%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/video/pinpai80.jpg?width=80&height=80'],
                        '蓝牙音箱': ['https://search.mi.com/search_%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1', '//i1.mifile.cn/f/i/g/2015/cn-index/800-800-3.jpg?width=80&height=80'],
                        '小米AI音箱': ['https://www.mi.com/aispeaker/', '//i1.mifile.cn/f/i/g/2015/xiaoai.jpg?width=80&height=80'],
                        '小米小爱音箱HD': ['https://item.mi.com/product/9151.html', '//i1.mifile.cn/f/i/g/2015/xiaoaiyinxhd.jpg?width=80&height=80'],
                        'k歌耳机': ['https://search.mi.com/search_k%E6%AD%8C%E8%80%B3%E6%9C%BA', '//i1.mifile.cn/f/i/g/2015/kgeerji.jpg?width=80&height=80'],
                        '小爱音箱 万能遥控版': ['https://www.mi.com/aispeaker-control/?cfrom=search', '//i1.mifile.cn/f/i/g/2019/yaokong.jpg?width=80&height=80'],
                        '小爱触屏音箱': ['https://www.mi.com/aispeaker-touch/?cfrom=search', '//i1.mifile.cn/f/i/g/2019/chupidng.jpg?width=80&height=80']
                    }], '生活 箱包': ['https://www.mi.com/p/9293.html', {
                        '双肩包': ['https://search.mi.com/search_%E5%8F%8C%E8%82%A9%E5%8C%85', '//i1.mifile.cn/f/i/g/2015/cn-index/xiangbao-80.jpg?width=80&height=80'],
                        '钱包': ['https://search.mi.com/search_%E9%92%B1%E5%8C%85', '//i1.mifile.cn/f/i/g/2015/cn-index/qianbao-80.jpg?width=80&height=80'],
                        '旅行箱': ['https://search.mi.com/search_%E6%97%85%E8%A1%8C%E7%AE%B1', '//i1.mifile.cn/f/i/15/goods/sidebar/lvxingxiang.jpg?width=80&height=80'],
                        '运动鞋': ['https://search.mi.com/search_%E8%BF%90%E5%8A%A8%E9%9E%8B', '//i1.mifile.cn/f/i/g/2015/shenhuahui80.jpg?width=80&height=80'],
                        '服饰': ['https://search.mi.com/search_%E8%A1%A3%E7%89%A9', '//i1.mifile.cn/f/i/g/2015/cn-index/txv80.jpg?width=80&height=80'],
                        '眼镜': ['https://search.mi.com/search_%E7%9C%BC%E9%95%9C', '//i1.mifile.cn/f/i/g/2015/cn-index/tyj80.jpg?width=80&height=80'],
                        '床垫': ['https://search.mi.com/search_%E5%BA%8A%E5%9E%AB', '//i1.mifile.cn/f/i/g/2015/cn-index/chuangdian-80-80.jpg?width=80&height=80'],
                        '枕头': ['https://search.mi.com/search_%E6%9E%95%E5%A4%B4', '//i1.mifile.cn/f/i/g/2015/cn-index/zhent.ou80.png?width=80&height=80'],
                        '沙发': ['https://search.mi.com/search_%E6%B2%99%E5%8F%91', '//i1.mifile.cn/f/i/g/2015/cn-index/shafa.80.png?width=80&height=80'],
                        '饰品': ['https://search.mi.com/search_%E9%A5%B0%E5%93%81', '//i1.mifile.cn/f/i/g/2015/cn-index/jinmitu.jpg?width=80&height=80'],
                        '螺丝刀': ['https://search.mi.com/search_%E8%9E%BA%E4%B8%9D%E5%88%80', '//i1.mifile.cn/f/i/g/2015/cn-index/luosidao-80.jpg?width=80&height=80'],
                        '保温杯': ['https://item.mi.com/1174800007.html?cfrom=search', '//i1.mifile.cn/f/i/g/2015/bbbbei.jpg?width=80&height=80'],
                        '伞': ['https://item.mi.com/product/6124.html', '//i1.mifile.cn/f/i/g/2015/umbrella.jpg?width=80&height=80'],
                        '驱蚊器': ['https://search.mi.com/search_%E9%A9%B1%E8%9A%8A%E5%99%A8', '//i1.mifile.cn/f/i/g/2015/quwenqi.jpg?width=80&height=80'],
                        '尤克里里': ['https://item.mi.com/product/7716.html', '//i1.mifile.cn/f/i/g/2015/ukelele.jpg?width=80&height=80'],
                        '毛巾/浴巾': ['https://search.mi.com/search_%E6%AF%9B%E5%B7%BE', '//i1.mifile.cn/f/i/g/2015/maojinmaojin.jpg?width=80&height=80'],
                        '米兔': ['https://search.mi.com/search_%E7%B1%B3%E5%85%94%E7%8E%A9%E5%81%B6', '//i1.mifile.cn/f/i/g/2015/cn-index/mitu-80.jpg?width=80&height=80'],
                        '笔': ['https://search.mi.com/search_%E7%AD%BE%E5%AD%97%E7%AC%94', '//i1.mifile.cn/f/i/g/2019/junengxie.jpg?width=80&height=80'],
                        '床': ['https://item.mi.com/product/10000160.html', '//i1.mifile.cn/f/i/g/2019/chuang.jpg?width=80&height=80']
                    }]
                },
                table:[false,false,false,false,false,false,false,false,false,false],
                head:[[['米家互联网空调（一级能效）', 'https://item.mi.com/product/9144.html'], ['https://item.mi.com/product/9144.html', '//i1.mifile.cn/f/i/g/2015/cn-index/yijinengxiaokongtiao.png'], '2399元'], [['米家互联网洗烘一体机 10kg', 'https://item.mi.com/product/9161.html'], ['https://item.mi.com/product/9161.html', '//i1.mifile.cn/f/i/g/2015/xihongxin.png'], '1999元'], [['Redmi全自动波轮洗衣机1A', 'https://item.mi.com/product/9509.html'], ['https://item.mi.com/product/9509.html', '//i1.mifile.cn/f/i/g/2015/cn-index/redmixiyiji.jpg'], '799元'], [['小米净水器', 'https://www.mi.com/water2/'], ['https://www.mi.com/water2/', '//i1.mifile.cn/f/i/g/2015/xiaomijingshuiqi.jpg'], '1999元'], [['米家扫地机器人', 'https://www.mi.com/roomrobot/'], ['https://www.mi.com/roomrobot/', '//i1.mifile.cn/f/i/g/2015/cn-index/saodijiqiren320-220.jpg'], '1399元'], [['烟灶套装', 'https://item.mi.com/product/9861.html'], ['https://item.mi.com/product/9861.html', '//i1.mifile.cn/f/i/g/2019/yanzao.jpg'], '1999元', '新品']],
                showMenuTimeOut:null

            }
        },
        methods: {
            clickInput() {
                this.changeInput = true
            },
            outInput() {
                this.changeInput = false
            },
            showMenu() {
                clearTimeout(this.showMenuTimeOut);
                this.showMenuBool = true;
            },
            closeMenu() {
                clearTimeout(this.showMenuTimeOut);
                this.showMenuBool = false;
                this.showMenuTimeOut=setTimeout(()=>{
                    this.showMenuBool=false;
                },200)
            },
            showTables(index){
                console.log(index);
                // this.table[index] = true;Vue无法检测到
                /*
                this.$set(this.table,index,true)
                或者使用Vue.set
                 */
                this.table.splice(index,1,true);
                console.log(this.table);
            },
            closeTables(index){
                console.log(index);
                this.table.splice(index,1,false);
                console.log(this.table);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .borderE0E0E0 {
        border: 1px solid #e0e0e0;
    }

    .borderFF6700 {
        border: 1px solid #ff6700;
    }

    .disNone {
        display: none;
    }

    .disNoneTable{
        display: none;
    }

    .disUnset {
        display: unset;
    }

    .disUnsetTable {
        display: unset;
    }

    .disBlock{
        display: block;
    }

    .dis-li-First-child {
        li:first-child {
            display: none;
        }
    }

    .main {
        position: relative;
        height: 100px;


        .home {
            width: 1226px;
            margin-left: auto;
            margin-right: auto;

            .site-category {
                position: absolute;
                top: 100px;
                z-index: 21;
                width: 234px;
                height: 460px;
                font-size: 14px;
                display: block;

                .site-category-list {
                    margin: 0;
                    padding: 20px 0;
                    list-style-type: none;
                    height: 460px;
                    border: 0;
                    color: #fff;
                    background: rgba(0, 0, 0, 0.6);

                    li {
                        a {
                            color: #fff;
                            position: relative;
                            display: block;
                            padding-left: 30px;
                            height: 42px;
                            line-height: 42px;
                        }

                        a:hover {
                            text-decoration: none;
                        }

                        div {
                            width: 992px;
                            position: absolute;
                            left: 234px;
                            top: 0;
                            z-index: 24;
                            height: 458px;
                            border: 1px solid #e0e0e0;
                            border-left: 0;
                            background: #fff;
                            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);

                            .children-list {
                                display: table;
                                width: 993px;
                                /*width: auto;*/
                                float: left;
                                height: 458px;
                                margin: 0;
                                padding: 2px 0;
                                list-style-type: none;

                                li {
                                    display: table-cell;
                                    position: relative;
                                    float: left;
                                    width: 248px;
                                    height: 76px;

                                    a {
                                        display: block;
                                        padding: 18px 20px;
                                        line-height: 40px;
                                        color: #333;
                                        transition: color .2s;

                                        img {
                                            margin-right: 12px;
                                            vertical-align: middle;
                                            border: 0;
                                            width: 40px;
                                            height: 40px;
                                        }

                                        span {
                                            line-height: 40px;
                                        }
                                    }

                                    a:hover {
                                        color: #ff6700;
                                        text-decoration: none;
                                    }
                                }
                                li:hover{
                                    background-color: unset;
                                }

                                /*li:nth-of-type(6n+7){*/
                                /*    padding-left: 76px;*/
                                /*}*/
                            }
                        }
                    }
                    li:hover{
                        background-color: #ff6700;
                    }
                }
            }

            .navMenu {
                position: absolute;
                top: 100px;
                left: 0;
                z-index: 24;
                width: 100%;
                height: 229px;
                border-top: 1px solid #e0e0e0;
                background: #fff;
                box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
                transition: box-shadow .2s;
                padding-top: 0;
                margin-top: 0;
                padding-bottom: 0;
                margin-bottom: 0;
            }

            .input-group {
                width: auto;
                height: 50px;
                float: right;
                margin-top: 25px;

                .form-control {
                    flex: none;
                    width: 245px;
                    height: 50px;
                    border-radius: unset;
                }

                .form-control:focus {
                    box-shadow: unset;
                    border-color: #ff6700;
                }

                button {
                    border-radius: unset;
                    width: 52px;
                    height: 50px;
                }

                button:focus {
                    box-shadow: unset;
                    border-color: unset;
                }
            }


            .nav-list {
                padding-top: 15px;
                display: inline-block;
                padding-left: 60px;
                text-align: center;
                position: relative;
                width: 848px;
                height: 88px;
                margin: 0;
                font-size: 16px;
                list-style-type: none;

                li {
                    float: left;
                    margin-top: 23px;
                    font-size: 16px;

                    a {
                        padding: 26px 10px 38px;
                        text-decoration: none;
                        color: #333333;
                    }

                    a:hover {
                        color: #ff6700;
                    }
                }
            }

            .header-logo {
                float: left;
                margin-top: 22px;

                .logo {
                    position: relative;
                    display: block;
                    width: 55px;
                    height: 55px;
                    overflow: hidden;
                    background: url("//s01.mifile.cn/i/logo.png");
                }

                .ir {
                    text-align: left;
                    text-indent: -9999em;
                }
            }
        }
        .goods-enter-active,.goods-leave-active{
            /*transition: opacity .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
            transition: all .5s ease;
        }
        /*.goods-enter-active{*/
        /*    animation: goods-in .5s;*/
        /*}*/
        /*.goods-leave-active{*/
        /*    animation: goods-in .5s reverse;*/
        /*}*/
        .goods-enter,.goods-leave-to{
            opacity: 0;
            /*height: 0;*/
        }
        /*@keyframes goods-in {*/
        /*    0%{*/
        /*        height: 0;*/
        /*        !*transform: scale(1,0);*!*/
        /*    }*/

        /*    100%{*/
        /*        height: 230px;*/
        /*        !*transform: scale(1,1);*!*/
        /*    }*/
        /*}*/
    }
</style>