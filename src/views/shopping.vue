<template>
  <div class="bigproject">
    <div class="site-header site-mini-header">
      <div class="container">
        <div class="header-logo">
          <a class="logo ir" href="//www.mi.com/index.html" title="小米官网" data-stat-id="1de2e5c522d7b543" onclick="_msq.push(['trackEvent', '5df97b551662ffe7-1de2e5c522d7b543', '//www.mi.com/index.html', 'pcpid', '']);">小米官网</a>
        </div>
        <div class="header-title has-more" id="J_miniHeaderTitle">
          <h2>我的购物车</h2>
          <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        </div>
        <div class="topbar-info" id="J_userInfo">
          <a class="link" href="#" data-agreement="true" data-login="true" data-stat-id="40879d467387e3e0" onclick="_msq.push(['trackEvent', '5df97b551662ffe7-40879d467387e3e0', '//order.mi.com/site/login', 'pcpid', '']);"
            data-href="//order.mi.com/site/login?redirectUrl=https://static.mi.com/cart/">登录</a>
          <span class="sep">|</span>
          <a class="link" href="#" data-argeement="true" data-register="true" data-stat-id="b072cf7c6a856e34" onclick="_msq.push(['trackEvent', '5df97b551662ffe7-b072cf7c6a856e34', 'https://account.xiaomi.com/pass/register', 'pcpid', '']);"
            data-href="https://account.xiaomi.com/pass/register">注册</a>
        </div>
      </div>
    </div>
    <div class="page-main">
      <div class="container">
        <div class="cart-loading loading hide" id="J_cartLoading">
          <div class="loader"></div>
        </div>
        <div class="cart-empty hide" id="J_cartEmpty">
          <h2>您的购物车还是空的！</h2>
          <p class="login-desc">登录后将显示您之前加入的商品</p>
          <a href="#" class="btn btn-primary btn-login" id="J_loginBtn" data-stat-id="6ab7b2b79aa79ef3" onclick="_msq.push(['trackEvent', '5df97b551662ffe7-6ab7b2b79aa79ef3', 'javascript:void0', 'pcpid', '']);">立即登录</a>
          <a href="//list.mi.com/0" class="btn btn-primary btn-shoping J_goShoping" data-stat-id="f7e2e8ff3af3bfec"
            onclick="_msq.push(['trackEvent', '5df97b551662ffe7-f7e2e8ff3af3bfec', '//list.mi.com/0', 'pcpid', '']);">马上去购物</a>
        </div>
        <div id="J_cartBox" class>
          <div class="addonitems-tips J_addonitemsTips">
            小米发货商品满150元免运费，还需
            <span>
              51
              <span>
                元
                <a class="J_getaddItems" href="#">去凑单></a>
              </span>
            </span>
          </div>
          <div class="cart-goods-list">
            <div class="list-head clearfix">
              <div class="col col-check">
                <i class="iconfont icon-checkbox icon-checkbox-selected" id="J_selectAll">✔</i>
                全选
              </div>
              <div class="col col-img">&nbsp;</div>
              <div class="col col-name">商品名称</div>
              <div class="col col-price">单价</div>
              <div class="col col-num">数量</div>
              <div class="col col-total">小计</div>
              <div class="col col-action">操作</div>
            </div>
            <div class="list-body" id="J_cartListBody">
              <div class="item-box">
                <div class="item-table J_cartGoods" data-info="{ commodity_id:'1191300047', gettype:'buy', itemid:'2191300034_0_buy', num:'1'} ">
                  <div class="item-row clearfix">
                    <div class="col col-check">
                      <i class="iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox" data-itemid="2191300034_0_buy"
                        data-status="1">✔</i>
                    </div>
                    <div class="col col-img">
                      <a href="//item.mi.com/1191300047.html" target="_blank">
                        <img alt src="//i1.mifile.cn/a1/pms_1553942601.88084043!80x80.jpg" width="80" height="80" />
                      </a>
                    </div>
                    <div class="col col-name">
                      <div class="tags"> </div>
                      <div class="tags"> </div>
                      <h3 class="name">
                        <a href="" target="_blank" style="font-size: 20px;">小米充电宝 10000mAh BROWN & FRIENDS 限量版 黑色</a>
                      </h3>
                    </div>
                    <div class="col col-price">
                      99元
                      <p class="pre-info"> </p>
                    </div>
                    <div class="col col-num">
                      <div class="change-goods-num clearfix J_changeGoodsNum">
                        <a href="#" class="J_minus">
                          <i class="iconfont">-</i>
                        </a>
                        <input type="text" name="2191300034_0_buy" value="1" data-num="1" data-buylimit="5"
                          autocomplete="off" class="goods-num J_goodsNum" />
                        <a href="#" class="J_plus">
                          <i class="iconfont-1">+</i>
                        </a>
                      </div>
                    </div>
                    <div class="col col-total">
                      99元
                      <p class="pre-info"> </p>
                    </div>
                    <div class="col col-action">
                      <a id="2191300034_0_buy" data-msg="确定删除吗？" href="#" title="删除" class="del J_delGoods">
                        <i class="iconfont">&times;</i>
                      </a>
                    </div>

                    <!-- 弹出对话框，提示是否删除选中物品 -->

               <!-- <div class="modal fade modal-hide modal-alert in" id="J_modalAlert" aria-hidden="false" style="display: block;">
                  <div class="modal-bd">
                    <div class="text">
                      <h3 id="J_alertMsg">确定删除吗？</h3>
                    </div>
                    <div class="actions">
                      <button class="btn btn-gray" data-dismiss="modal" id="J_alertCancel">取消</button>
                      <button class="btn btn-primary" data-dismiss="modal" id="J_alertOk">确定</button>
                    </div>
                    <a class="close" data-dismiss="modal" href="#" data-stat-id="86faab7930e5a48b"
                    onclick="_msq.push(['trackEvent', '5df97b551662ffe7-86faab7930e5a48b', 'javascript:void0', 'pcpid', '']);">
                    <i class="iconfont">X</i>
                    </a>
                  </div>
                </div>    -->


                  </div>
                </div>
                <div class="item-sub-box">
                  <div class="item-table">
                    <div class="item-row clearfix">
                      <div class="col col-img">
                        <a href="//item.mi.com/1173000036.html" target="_blank">
                          <img alt src="//i1.mifile.cn/a1/pms_1501236937.96732594!60x60.jpg" width="60" height="60" />
                        </a>
                      </div>
                      <div class="col col-name">
                        <div class="tags">
                          <span class="tag tag-red">赠品</span>
                        </div>
                        <h3 class="name">
                          <a href="//item.mi.com/1173000036.html" target="_blank">米粉卡日租卡</a>
                        </h3>
                      </div>
                      <div class="col col-price"></div>
                      <div class="col col-num">1</div>
                      <div class="col col-total"></div>
                      <div class="col col-actoin"></div>
                    </div>
                  </div>
                  <i class="arrow"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="raise=buy-box" id="J_raiseBuyBox"></div>
          <div class="cart-bar clearfix" id="J_cartBar">
            <div class="section-left">
              <a href="//list.mi.com/0" class="back-shopping J_goShoping" data-stat-id="b16361b4c5491b6d" onclick="_msq.push(['trackEvent', '5df97b551662ffe7-b16361b4c5491b6d', '#', 'pcpid', '']);">继续购物</a>
              <span class="cart-total">
                共
                <i id="J_cartTotlNum">2</i>
                件商品，已选择
                <i id="J_cartTotlNum">2</i>
                件
              </span>
              <span class="cart-coudan hide" id="J_coudanTip">
                ，还需
                <i id="J_postFreeBalance">51.00</i>
                元即可免邮费
                <a href="#" id="J_showCoudan" data-stat-id="cfc8337d6cbfdef7" onclick="_msq.push(['trackEvent', '5df97b551662ffe7-cfc8337d6cbfdef7', 'javascript:void0', 'pcpid', '']);">立即凑单</a>
              </span>
            </div>
            <span class="activity-money hide">
              活动优惠：减
              <i id="J_cartActivityMoney">0</i>
              元
            </span>
            <span class="total-price">
              合计:
              <em id="J_cartTotalPrice">99</em>
              元
            </span>
            <a href="#" class="btn btn-a btn btn-primary" id="J_goCheckout" data-stat-id="9bd56b7232f4ef1a" onclick="_msq.push(['trackEvent', '5df97b551662ffe7-9bd56b7232f4ef1a', 'javascript:void0', 'pcpid', '']);">去结算</a>
            <div class="no-select-tip hide" id="J_noSelectTip">
              请勾选需要结算的商品
              <i class="arrow arrow-a"></i>
              <i class="arrow arrow-b"></i>
            </div>
          </div>
        </div>
        <div class="cart-recommend hide" id="J_historyRecommend"></div>
        <div class="cart-recommend container" id="J_miRecommendBox" data-log_codes="reccom_Cart_0_0#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9143&bid=3038456.0&page=cartbuy;reccom_Cart_0_1#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=7463&bid=3038456.1&page=cartbuy;reccom_Cart_0_2#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9510&bid=3038456.2&page=cartbuy;reccom_Cart_0_3#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8023&bid=3038456.3&page=cartbuy;reccom_Cart_0_4#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=5815&bid=3038456.4&page=cartbuy;reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9140&bid=3038456.5&page=cartbuy;reccom_Cart_0_6#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=6802&bid=3038456.6&page=cartbuy;reccom_Cart_0_7#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.7&page=cartbuy;reccom_Cart_0_8#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9752&bid=3038456.8&page=cartbuy;reccom_Cart_0_9#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=10150&bid=3038456.9&page=cartbuy">
          <h2 class="xm-recommend-title">
            <span>买购物车中商品的人还买了</span>
          </h2>
          <div class="xm-recommend">
            <ul class="row clearfix">
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1185000013.html" data-log_code="reccom_Cart_0_0#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9143&bid=3038456.0&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="0" data-stat-text="小米移动电源3 20000mAh 高配版" target="_blank"
                      data-stat-pid="stat_Cart.购物车_0_1_11" data-stat-aid="小米移动电源320000mAh高配版">
                      <img src="//i1.mifile.cn/a1/pms_1546058471.685154!140x140.jpg" srcset="//i1.mifile.cn/a1/pms_1546058471.685154!280x280.jpg  2x"
                        alt="小米移动电源3 20000mAh 高配版" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1185000013.html" data-log_code="reccom_Cart_0_0#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9143&bid=3038456.0&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="0" target="_blank" data-stat-pid="stat_Cart.购物车_0_1_11">
                      小米移动电源3 20000mAh 高配版 </a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    7288人好评
                    <a href="//item.mi.com/cart/add/2185000007-0-1" data-log_code="reccom_Cart_0_0#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9143&bid=3038456.0&page=cartbuy"
                      data-stat-gid="2185000007" data-stat-method="1_11" data-stat-index="0" data-stat-text="小米移动电源3 20000mAh 高配版"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_0_1_11"
                      data-stat-aid="小米移动电源320000mAh高配版" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1175000002.html" data-log_code="reccom_Cart_0_1#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=7463&bid=3038456.1&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="1" data-stat-text="新小米移动电源2（10000mAh）" target="_blank"
                      data-stat-pid="stat_Cart.购物车_1_1_11" data-stat-aid="新小米移动电源2（10000mAh）">
                      <img src="//i1.mifile.cn/a1/pms_1513857241.9291821!140x140.jpg" srcset="//i1.mifile.cn/a1/pms_1513857241.9291821!280x280.jpg  2x"
                        alt="新小米移动电源2（10000mAh）" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1175000002.html" data-log_code="reccom_Cart_0_1#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=7463&bid=3038456.1&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="1" target="_blank" data-stat-pid="stat_Cart.购物车_1_1_11">
                      新小米移动电源2（10000mAh)</a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    3.5万人好评
                    <a href="//item.mi.com/cart/add/2175000001-0-1" data-log_code="reccom_Cart_0_1#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=7463&bid=3038456.1&page=cartbuy"
                      data-stat-gid="2175000001" data-stat-method="1_11" data-stat-index="1" data-stat-text="新小米移动电源2（10000mAh）"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_1_1_11"
                      data-stat-aid="新小米移动电源2（10000mAh）" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1191100045.html" data-log_code="reccom_Cart_0_2#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9510&bid=3038456.2&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="2" data-stat-text="Redmi AirDots真无线蓝牙耳机" target="_blank"
                      data-stat-pid="stat_Cart.购物车_2_1_11" data-stat-aid="Redmi AirDots真无线蓝牙耳机">
                      <img src="//i1.mifile.cn/a1/pms_1552810000.38783658!140x140.jpg" srcset="//i1.mifile.cn/a1/pms_1552810000.38783658!280x280.jpg  2x"
                        alt="Redmi AirDots真无线蓝牙耳机" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1191100045.html" data-log_code="reccom_Cart_0_2#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9510&bid=3038456.2&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="2" target="_blank" data-stat-pid="stat_Cart.购物车_2_1_11">
                      Redmi AirDots真无线蓝牙耳机 </a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    2.9万好评
                    <a href="//item.mi.com/cart/add/2191100025-0-1" data-log_code="reccom_Cart_0_2#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9510&bid=3038456.2&page=cartbuy"
                      data-stat-gid="2191100025" data-stat-method="1_11" data-stat-index="2" data-stat-text="Redmi AirDots真无线蓝牙耳机"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_2_1_11"
                      data-stat-aid="RedmiAirDots真无线蓝牙耳机" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1185000012.html" data-log_code="reccom_Cart_0_3#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9140&bid=3038456.3&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="3" data-stat-text="小米移动电源3 10000mAh USB-C双向快充版" target="_blank"
                      data-stat-pid="stat_Cart.购物车_0_1_11" data-stat-aid="小米移动电源3 10000mAh USB-C双向快充版">
                      <img src="//i1.mifile.cn/a1/pms_1552372948.24196473!140x140.jpg" srcset="//i1.mifile.cn/a1/pms_1552372948.24196473!280x280.jpg  2x"
                        alt="小米移动电源3 10000mAh USB-C双向快充版" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1185000012.html" data-log_code="reccom_Cart_0_3#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9140&bid=3038456.3&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="3" target="_blank" data-stat-pid="stat_Cart.购物车_3_1_11">
                      小米移动电源3 10000mAh USB-C双向快充版 </a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    3376人好评
                    <a href="//item.mi.com/cart/add/2185000006-0-1" data-log_code="reccom_Cart_0_3#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=9140&bid=3038456.3&page=cartbuy"
                      data-stat-gid="2185000006" data-stat-method="1_11" data-stat-index="3" data-stat-text="小米移动电源3 10000mAh USB-C双向快充版"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_3_1_11"
                      data-stat-aid="小米移动电源3 10000mAh USB-C双向快充版" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1173600040.html" data-log_code="reccom_Cart_0_4#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=6802&bid=3038456.4&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="4" data-stat-text="小米移动电源2C（20000mAh）" target="_blank"
                      data-stat-pid="stat_Cart.购物车_4_1_11" data-stat-aid="小米移动电源2C（20000mAh）">
                      <img src="//i1.mifile.cn/a1/pms_1505264799.43246303!140x140.jpg" srcset="//i1.mifile.cn/a1/pms_1505264799.43246303!280x280.jpg  2x"
                        alt="小米移动电源2C（20000mAh）" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1173600040.html" data-log_code="reccom_Cart_0_4#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=6802&bid=3038456.4&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="4" target="_blank" data-stat-pid="stat_Cart.购物车_4_1_11">
                      小米移动电源2C（20000mAh） </a>
                  </dd>
                  <dd class="xm-recommend-price">129元</dd>
                  <dd class="xm-recommend-tips">
                    4.1万人好评
                    <a href="//item.mi.com/cart/add/2185000007-0-1" data-log_code="reccom_Cart_0_4#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=6802&bid=3038456.4&page=cartbuy"
                      data-stat-gid="2185000007" data-stat-method="1_11" data-stat-index="4" data-stat-text="小米移动电源2C（20000mAh）"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_4_1_11"
                      data-stat-aid="小米移动电源2C（20000mAh）" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="5" data-stat-text="小米小背包" target="_blank" data-stat-pid="stat_Cart.购物车_5_1_11"
                      data-stat-aid="小米小背包">
                      <img src="//i1.mifile.cn/a1/pms_1539682803.29879353!140x140.png" srcset="//i1.mifile.cn/a1/pms_1539682803.29879353!280x280.png  2x"
                        alt="小米小背包" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="5" target="_blank" data-stat-pid="stat_Cart.购物车_5_1_11">
                      小米小背包 </a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    2.4万人好评
                    <a href="//item.mi.com/cart/add/2185000007-0-1" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-gid="2185000007" data-stat-method="1_11" data-stat-index="5" data-stat-text="小米小背包"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_5_1_11"
                      data-stat-aid="小米小背包" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="6" data-stat-text="小米小背包" target="_blank" data-stat-pid="stat_Cart.购物车_6_1_11"
                      data-stat-aid="小米小背包">
                      <img src="//i1.mifile.cn/a1/pms_1539682803.29879353!140x140.png" srcset="//i1.mifile.cn/a1/pms_1539682803.29879353!280x280.png  2x"
                        alt="小米小背包" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="6" target="_blank" data-stat-pid="stat_Cart.购物车_6_1_11">
                      小米小背包 </a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    2.4万人好评
                    <a href="//item.mi.com/cart/add/2185000007-0-1" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-gid="2185000007" data-stat-method="1_11" data-stat-index="6" data-stat-text="小米小背包"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_6_1_11"
                      data-stat-aid="小米小背包" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="7" data-stat-text="小米小背包" target="_blank" data-stat-pid="stat_Cart.购物车_7_1_11"
                      data-stat-aid="小米小背包">
                      <img src="//i1.mifile.cn/a1/pms_1539682803.29879353!140x140.png" srcset="//i1.mifile.cn/a1/pms_1539682803.29879353!280x280.png  2x"
                        alt="小米小背包" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="7" target="_blank" data-stat-pid="stat_Cart.购物车_7_1_11">
                      小米小背包 </a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    2.4万人好评
                    <a href="//item.mi.com/cart/add/2185000007-0-1" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-gid="2185000007" data-stat-method="1_11" data-stat-index="7" data-stat-text="小米小背包"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_7_1_11"
                      data-stat-aid="小米小背包" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="8" data-stat-text="小米小背包" target="_blank" data-stat-pid="stat_Cart.购物车_8_1_11"
                      data-stat-aid="小米小背包">
                      <img src="//i1.mifile.cn/a1/pms_1539682803.29879353!140x140.png" srcset="//i1.mifile.cn/a1/pms_1539682803.29879353!280x280.png  2x"
                        alt="小米小背包" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="8" target="_blank" data-stat-pid="stat_Cart.购物车_8_1_11">
                      小米小背包 </a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    2.4万人好评
                    <a href="//item.mi.com/cart/add/2185000007-0-1" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-gid="2185000007" data-stat-method="1_11" data-stat-index="8" data-stat-text="小米小背包"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_8_1_11"
                      data-stat-aid="小米小背包" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
              <li class="J_xm-recommend-list span4">
                <dl>
                  <dt>
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="9" data-stat-text="小米小背包" target="_blank" data-stat-pid="stat_Cart.购物车_9_1_11"
                      data-stat-aid="小米小背包">
                      <img src="//i1.mifile.cn/a1/pms_1539682803.29879353!140x140.png" srcset="//i1.mifile.cn/a1/pms_1539682803.29879353!280x280.png  2x"
                        alt="小米小背包" />
                    </a>
                  </dt>
                  <dd class="xm-recommend-name">
                    <a href="//item.mi.com/1182800049.html" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-method="1_11" data-stat-index="9" target="_blank" data-stat-pid="stat_Cart.购物车_9_1_11">
                      小米小背包 </a>
                  </dd>
                  <dd class="xm-recommend-price">199元</dd>
                  <dd class="xm-recommend-tips">
                    2.4万人好评
                    <a href="//item.mi.com/cart/add/2185000007-0-1" data-log_code="reccom_Cart_0_5#eid=180:16:0:0:0:0:0:0:0:0&traceId=CartRec-jR9+VBHvY/be6fJg1XQPsg==&pid=8621&bid=3038456.5&page=cartbuy"
                      data-stat-gid="2185000007" data-stat-method="1_11" data-stat-index="9" data-stat-text="小米小背包"
                      data-stat-addcart="加购" class="btn btn-small btn-line-primary J_xm-recommend-btn" data-stat-pid="stat_Cart加购.购物车_9_1_11"
                      data-stat-aid="小米小背包" style="display: none;">加入购物车</a>
                  </dd>
                  <dd class="xm-recommend-notice"></dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <BaseFooter></BaseFooter>
    <BaseInfo></BaseInfo>
  </div>
</template>
<script>

  import BaseFooter from "../components/BaseFooter";
  import BaseInfo from "../components/BaseInfo";
  export default {

    name: 'shopping',
    components: {BaseInfo, BaseFooter},
    data() {
      return {

      }
      methods: {

        function formatImageUrl(path, size) {
          var patt = /.jpg|.jpeg|.png/;
          var result = patt.exec(path);
          var thumb = path.indexOf('fds.api.mi-img.com') != -1;
          return thumb ? (path + '?thumb=1&w=' + size + '&h=' + size) : path.replace(patt, ('!' + size + 'x' + size +
            result));
            var formatDate = function(now, temp) {
               if (!now) {
                 return;
               }

               var d = new Date(parseInt(now) * 1000);
               var date = {
                 Y: d.getFullYear(),
                 M: d.getMonth() + 1,
                 D: d.getDate(),
                 h: d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
                 m: d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
                 s: d.getSeconds()
              };
             var str = temp || '##Y##-##M##-##D## ##h##:##m##:##s##';
             var key = '';

             for (var k in date) {
               if (date[k] >= 0) {
                 key = '##' + k + '##';
                 if (str.indexOf(key) >= 0) {
                   str = str.replace(key, date[k]);
                 }
               }
             }

             return str;
           };

           var formatLeft = function(end) {
               var left = end - Math.floor((new Date()).getTime() / 1000);
               var day = Math.floor(left / (24 * 60 * 60));
               var hour = Math.floor((left - day * 24 * 60 * 60) / (60 * 60));
               var minute = Math.floor((left - day * 24 * 60 * 60 - hour * 60 * 60) / (60));
               var str = '';
               day !== 0 ? str += day + '天' : '';
              hour !== 0 ? str += hour + '小时' : '';
               str += minute + '分钟';
              return str;
               }
        }
      }

             //精确乘法
            function mul(a, b) {
                var c = 0,
                    d = a.toString(),
                    e = b.toString();
                try {
                    c += d.split(".")[1].length;
                } catch (f) {}
                try {
                    c += e.split(".")[1].length;
                } catch (f) {}
                return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
            }
            //精确减法
            function sub(a, b) {
                var c, d, e;
                try {
                    c = a.toString().split(".")[1].length;
                } catch (f) {
                    c = 0;
                }
                try {
                    d = b.toString().split(".")[1].length;
                } catch (f) {
                    d = 0;
                }
                return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
            }

  }
}
</script>
<style scoped>
  .bigproject {
    background-color: gainsboro;
  }

  .site-header {
    position: relative;
    z-index: 20;
    height: 100px;
  }

  .site-mini-header {
    font-size: 12px;
    border-bottom: 2px solid #FF6700;
    background: #FFFFFF;
    color: #B0B0B0;
  }

  .site-header .container {
    position: relative;
  }

  .container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
  }

  .container:before,
  .container:after {
    content: " ";
    display: table;
  }

  .container:after {
    clear: both;
  }

  .site-mini-header .header-logo {
    width: 93px;
    margin-top: 26px;
  }

  .site-header .header-logo {
    float: left;
    width: 62px;
    margin-top: 22px;
  }

  .site-mini-header .logo {
    width: 48px;
    height: 48px;
  }

  .site-header .logo {
    position: relative;
    display: block;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background-color: #FF6700;
    background: url(../assets/milog.png)no-repeat 50% 50%;
  }

  .site-mini-header a {
    color: #757575;
  }

  .ir {
    display: block;
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
  }

  a {
    color: #757575;
    text-decoration: none;
  }

  .site-mini-header .has-more {
    height: 48px;
  }

  .site-mini-header .header-title {
    float: left;
    margin-top: 26px;
  }

  .site-mini-header .has-more h2 {
    float: left;
    line-height: 48px;
    margin-bottom: 0;

  }

  #J_cartBox {
    margin-left: -150px;
    margin-top: 40px;
    width: 1400px;


  }

  .site-mini-header .has-more h2 {
    margin-bottom: 6px;
    line-height: 1;
  }

  .cart-goods-list .item-box .col-action .del,
  .cart-goods-list .item-sub-box .col-action .del {
    /* 删除 */
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 12px;
    color: #757575;
    font-size: 16px;
    transition: all .3s;
  }

  .site-mini-header .header-title {
    font-size: 28px;
    line-height: 48px;
    font-weight: normal;
    color: #424242;
  }

  .site-mini-header .header-title h2,
  .site-mini-header .header-title p {
    margin-top: 5px;
  }

  h2 {
    font-size: 1.3em;
    margin: 0.83em 0;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .site-mini-header .has-more p {
    float: left;
    height: 20px;
    line-height: 20px;
    margin-top: 20px;
    margin-left: 15px;
  }

  .site-mini-header .has-more p {
    color: #757575;
    line-height: 2;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 16px;
  }

  .site-mini-header .topbar-info {
    margin-top: 40px;
    line-height: 40px;
    margin-right: -150px;
  }

  .site-mini-header .topbar-cart,
  .site-mini-header .topbar-info {
    position: relative;
    float: right;
    height: 40px;
    display: inline;
  }

  .site-mini-header .topbar-info .link {
    padding: 0.5px;

  }

  .site-mini-header .topbar-info .link,
  .site-mini-header .topbar-info .user,
  .site-mini-header .topbar-info .message,
  .site-mini-header .topbar-info .sep {
    float: left;
  }

  .change-goods-num a {
    float: left;
    width: 38px;
    height: 38px;
    line-height: 38px;
    color: #757575;
    font-size: 20px;
    transition: all .3s;
  }

  .change-goods-num {
    width: 148px;
    height: 38px;
    border: 1px solid #E0E0E0;
    text-align: center;
    background-color: #FFFFFF;
    position: relative;
    zoom: 1;
  }

  .site-mini-header a {
    color: #757575;
  }

  .change-goods-num input {
    float: left;
    width: 72px;
    height: 38px;
    line-height: 38px;
    padding: 0;
    border-width: 0;
    color: #424242;
    font-size: 16px;
    text-align: center;
    background-color:transparent;
  }

  /* input {
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    padding: 1px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}
input, textarea, select, button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 13.3333px Arial;
}
input, textarea, select, button, meter, progress {
    -webkit-writing-mode: horizontal-tb !important;
} */
  .cart-goods-list .item-box .col-num,
  .cart-goods-list .item-sub-box .col-num {
    font-size: 16px;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    vertical-align: baseline;
  }

  html,
  button,
  input,
  select,
  textarea {
    font-family: sans-serif;
  }

  a {
    color: #757575;
    text-decoration: none;
  }

  .site-mini-header .topbar-info .sep {
    color: #e0e0e0;
    margin: 0;
  }


  .sep,
  .ndash {
    font-family: sans-serif;
    margin: 0.25em;
  }

  html,
  button,
  input,
  select,
  textarea {
    font-family: sans-serif
  }

  html {
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }

  .xm-recommend ul,
  .xm-recommend li,
  .xm-recommend dl,
  .xm-recommend dt,
  .xm-recommend dd {
    padding: 0;
    margin-top: 0;
    list-style: none;
  }

  body {
    font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    color: #333;
    background-color: #fff;
    min-width: 1226px
  }

  .loading {
    padding: 20px 0;

  }

  .hide {
    display: none !important;
  }

  .loader,
  .loader:before,
  .loader:after {
    transform-origin: 50% 50%;
    animation-name: loader;
    animation-duration: .3s;
    animation-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1);
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
  }

  .loader {
    position: relative;
    margin: 0 auto;
    width: 4px;
    height: 20px;
    background: #FF6700;
    overflow: visible;
    animation-delay: 0s;
    transform: scale(1, 1)
  }

  .loader:before {
    margin: -10px 0 0 -10px;
    -webkit-animation-delay: .25s;
    animation-delay: .25s;
    -webkit-transform: scale(1, 0.3);
    -ms-transform: scale(1, 0.3);
    transform: scale(1, 0.3)
  }

  .loader:before,
  .loader:after {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 20px;
    content: '';
    background: #ff6700
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
    text-align: center;
  }

  .loader:after {
    margin: -10px 0 0 6px;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
    -webkit-transform: scale(1, 0.5);
    -ms-transform: scale(1, 0.5);
    transform: scale(1, 0.5)
  }

  0% {
    -webkit-transform: scale(1, 0.5);
    opacity: .2;
    filter: alpha(opacity=20)\9
  }

  100% {
    -webkit-transform: scale(1, 1);
    opacity: 1;
    filter: alpha(opacity=100)\9
  }

  .cart-empty {
    height: 273px;
    padding-left: 558px;
    margin: 65px 0 130px;
    /* background: url("../i/cart/cart-empty.png") no-repeat 124px 0; */
    color: #B0B0B0;
    overflow: hidden;
  }

  .J_plus {
    float: right;
    width: 38px;
    height: 38px;
    line-height: 38px;
    color: #757575;
    font-size: 20px;
    margin-top: -40px;
    transition: all .3s;
  }

  .cart-empty h2 {
    margin: 70px 0 15px;
    font-size: 36px;
  }

  h2 {
    font-size: 1.5em;
    margin: 0.83em 0;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .cart-empty .login-desc {
    display: none;
    margin: 0 0 20px;
    font-size: 20px;
    color: #B0B0B0;
  }

  p,
  pre {
    margin: 1em 0;
  }

  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: block;
  }

  .cart-empty .btn-login {
    display: none;
  }

  .cart-empty .btn {
    width: 170px;
    height: 48px;
    line-height: 48px;
  }

  .btn-primary {
    background: #FF6700;
    border-color: #FF6700;
    color: #FFFFFF;
  }

  .btn {
    padding: 0;
    margin: 0;
    border: 1px solid #B0B0B0;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    transition: all .4s;
  }

  a {
    text-decoration: none;
  }

  .addonitems-tips {
    text-align: right;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    line-height: 20px;
    margin-bottom: 13px;
  }

  .addonitems-tips span {
    color: #FF6700;
    margin-left: 2px;
  }

  .addonitems-tips a {
    margin-left: 12px;
    color: rgba(0, 0, 0, 0.87);
  }

  a {
    text-decoration: none;
  }

  .cart-goods-list {
    background-color: #FFFFFF;
  }

  .cart-goods-list .list-head {
    height: 70px;
    line-height: 70px;
    padding-right: 26px;
    color: #424242;
  }

  .cart-goods-list .list-head .col {
    float: left;
  }

  .cart-goods-list .col-check {
    width: 110px;
    padding-left: 5px;
    margin-left: 25px;
  }

  .cart-goods-list .col-check .icon-checkbox-selected {
    color: #FFFFFF;
    border-color: #FF6700;
    background-color: #FF6700;
  }

  .cart-goods-list .col-check .icon-checkbox {
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border: 1px solid #e0e0e0;
    margin-left: 24px;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    position: relative;
    top: -1px;
    cursor: pointer;
  }

  .cart-goods-list .list-head .icon-checkbox {
    margin-right: 15px;
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
  }

  .iconfont-1 {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    margin-left: 120px;

  }

  .cart-goods-list .list-head .col-img {
    width: 120px;
  }

  .cart-goods-list .list-head .col-name {
    width: 380px;
  }

  .cart-goods-list .item-sub-box .col {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid #FFFFFF;
  }

  .cart-goods-list .col-price {
    width: 140px;
    padding-right: 18px;
    text-align: center;
    color: #424242;
    margin-left: 25px;
  }

  .cart-goods-list .col-num {
    width: 150px;
    text-align: center;
    color: #424242;
    margin-left: 15px;
  }

  .cart-goods-list .col-total {
    width: 120px;
    padding-right: 20px;
    text-align: center;
    margin-left: 15px;
  }

  .cart-goods-list .item-box .tag-red,
  .cart-goods-list .item-sub-box .tag-red {
    background-color: #e53935;
  }

  .cart-goods-list .col-action {
    width: 130px;
    text-align: center;
  }

  .cart-goods-list .item-box {
    padding: 15px 26px 15px 0;
    border-top: 1px solid #E0E0E0;
  }

  .cart-goods-list .item-table {
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .cart-goods-list .item-table .item-row {
    display: table-row;
  }

  .cart-goods-list .item-table .col {
    display: table-cell;
    vertical-align: middle;
  }

  .cart-goods-list .col-name {
    width: 380px;
  }

  .cart-goods-list .item-box .col-img {
    width: 80px;
    height: 80px;
    padding-right: 40px;
    overflow: hidden;
  }

  .cart-goods-list .item-box .tag,
  .cart-goods-list .item-sub-box .tag {
    display: inline-block;
    width: 60px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    font-size: 12px;
    vertical-align: top;
  }

  .cart-goods-list .item-sub-box {
    padding-top: 15px;
    margin-bottom: -2px;
    margin-left: 100px;
    position: relative;
  }

  .cart-goods-list .col-name .name a {
    color: #424242;
  }

  .cart-goods-list .item-sub-box .item-table {
    background-color: #f5f5f5;
  }

  .cart-goods-list .item-sub-box .col-name .name {
    font-size: 16px;
  }

  .cart-goods-list .col-name .name {
    line-height: 1;
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .cart-goods-list .col-name .name,
  .cart-goods-list .col-name .desc {
    width: 380px;
    margin: 0;
  }

  .cart-goods-list .item-box .col-price,
  .cart-goods-list .item-sub-box .col-price {
    font-size: 16px;
  }

  .cart-goods-list .item-sub-box .arrow {
    position: absolute;
    top: 5px;
    left: 39px;
    width: 0;
    height: 0;
    border-width: 0 11px 10px;
    border-style: dashed dashed solid;
    border-color: transparent transparent #f5f5f5;
    overflow: hidden;
  }

  i,
  cite,
  em,
  var,
  address,
  dfn {
    font-style: italic;
  }

  .raise-buy-box {
    margin: 20px 0;
  }

  .cart-bar-fixed {
    width: 1226px;
    position: fixed;
    left: 50%;
    margin-left: -613px;
    bottom: 0;
    z-index: 20;
    background-color: #fafafa;
    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.1);
  }

  .cart-bar {
    height: 60px;
    text-align: right;
    line-height: 60px;
    transition: background .3s ease, top .3s ease;
    background-color: #FFFFFF;
    position: relative;
    margin-top: 30px;
  }

  .cart-bar .section-left {
    float: left;
  }

  div {
    display: block;
  }

  .cart-bar .back-shopping {
    line-height: 50px;
    margin-left: 32px;
  }

  .cart-bar a {
    transition: color .3s;
  }

  a {
    color: #757575;
    text-decoration: none;
  }

  .cart-bar .cart-total {
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #EEEEEE;
    color: #757575;
  }

  .cart-bar .cart-total i {
    color: #FF6700;
  }

  .cart-bar i {
    font-style: normal;
  }

  .cart-bar .cart-coudan {
    color: #757575;
  }

  .hide {
    display: none !important;
  }

  .cart-bar .cart-coudan {
    margin-left: 3px;
    color: #FF6700;
  }

  .cart-bar .activity-money {
    padding: 0.13px;
    border-right: 1px solid #EEEEEE;
    color: #757575;
  }

  .cart-bar .total-price {
    padding-left: 13px;
    color: #FF6700;
  }

  .cart-bar .total-price em {
    font-style: normal;
    font-size: 30px;
  }

  .cart-bar .btn {
    width: 200px;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    margin-left: 50px;
    vertical-align: top;
  }

  .cart-bar a {
    transition: color .3s;
  }

  .cart-bar .no-select-tip {
    width: 200px;
    height: 48px;
    line-height: 48px;
    position: absolute;
    top: -58px;
    right: 0;
    background-color: #FFFFFF;
    border: 1px solid #FF6700;
    color: #FF6700;
    text-align: center;
  }

  .cart-bar .no-select-tip .arrow-a {
    bottom: -8px;
    margin-left: -10px;
    border-width: 8px 10px 0;
    border-color: #ff6700 transparent transparent;
    z-index: 1;
  }

  .cart-bar .no-select-tip .arrow {
    display: block;
    width: 0;
    height: 0;
    border-style: solid dashed dashed;
    overflow: hidden;
    position: absolute;
    left: 50%;
  }

  .cart-bar .no-select-tip .arrow-b {
    bottom: -7px;
    margin-left: -8px;
    border-width: 7px 8px 0;
    border-color: #fff transparent transparent;
    z-index: 2;
  }

  .cart-recommend {
    margin: 60px 0 0;

  }

  .xm-recommend-title {
    position: relative;
    margin: 0;
    height: 50px;
    font-size: 300px;
    font-weight: 400;
    color: #757575;
    border-top: 1px solid #E0E0E0;
    -webkit-font-smoothing: antialiased;
  }


  h2 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .xm-recommend-title span {
    position: absolute;
    top: -20px;
    left: 372px;
    height: 40px;
    width: 482px;
    line-height: 40px;
    text-align: center;
    display: block;
    font-size: 35px;
  }

  .xm-recommend ul,
  .xm-recommend li,
  .xm-recommend dl,
  .xm-recommend dt,
  .xm-recommend dd {
    padding: 0;
    margin-top: 0;
    list-style: none;
  }

  .row {
    margin-left: -14px;
  }

  dl,
  menu,
  ol,
  ul {
    margin: 1em 0;
  }

  /* ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
} */
  .xm-recommend ul li {
    margin-bottom: 14px;
    height: 300px;
    background-color: #FFFFFF;
    text-align: center;
    position: relative;
  }

  .span4 {
    width: 234px;
  }

  .span1,
  .span2,
  .span3,
  .span4,
  .span5,
  .span6,
  .span7,
  .span8,
  .span9,
  .span10,
  .span11,
  .span12,
  .span13,
  .span14,
  .span15,
  .span16,
  .span17,
  .span18,
  .span19,
  .span20 {
    float: left;
    margin-left: 14px;
    min-height: 1px;
  }

  li {
    display: list-item;
  }

  .xm-recommend dl {
    padding: 0 20px;
    margin-bottom: 0;
  }

  .xm-recommend {
    width: 1226px;
    overflow: hidden;
    zoom: 1;
    position: relative;
    margin-left: -70px;
  }

  dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .xm-recommend dl dt {
    padding: 40px 0 15px;
    height: 145px;
  }

  .xm-recommend .xm-recommend-name {
    margin-bottom: 10px;
    height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 30px;
  }

  .xm-recommend dl dd {
    margin-left: 0;
  }

  dd {
    display: block;
    margin-inline-start: 40px;
    margin: 0 0 0 40px;
  }

  .xm-recommend .xm-recommend-name a {
    color: #333333;
  }

  .xm-recommend .xm-recommend-price {
    margin-bottom: 10px;
    color: #FF6700;
  }

  .xm-recommend .xm-recommend-tips .btn {
    position: absolute;
    left: 37px;
    top: 0;
    width: 120px;
    display: none;
  }

  .btn-line-primary {
    border-color: #FF6700;
    background: #FFFFFF;
    color: #FF6700;
  }

  .btn-small {
    height: 28px;
    font-size: 12px;
    line-height: 28px;
  }

  .xm-recommend .xm-recommend-notice {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    opacity: 0;
    transform: translate3d(0, -10px, 0);
    transition: all .2s linear;
  }



   /* 弹出对话框，提示是否删除选中物品的样式 */
   /* .modal.fade.in{
     top:50%

   }
   .modal.fade{
     -webkit-transition:opacity .4s linear, top .4s ease-out;
     transition: opacity .4s linear, top .4s ease-out;
     top: 25%;
   }
   .fade.in{
     opacity: 1;
   }
   .modal-alert{
     width: 500px;
     margin-left: -250px;
   }
   .modal-hide{
     display: none;
   }
   .modal{
     position: fixed!important;
     top: 50%;
     left: 50%;
     z-index: 1050;
     width: 660px;
     margin-left: 330px;
     margin-top:-300px;
     background-color: #FFFFFF;
     outline: none;
   }
   .fade{
     opacity: 0;
     -webkit-transition:opacity .15s linear;
     transition: opacity .15s linear;
   }
   .modal-alert .modal-bd{
     padding: 60px 60px 40px;
     text-align: center;
   }
   .modal-body, .modal-bd{
     position: relative;
     max-height: 400px;
     padding: 40px 60px;
   }
   .modal-alert .text{
     min-height: 130px;
   }
   .modal-alert h3, .modal-alert .title{
     margin: 0;
     font-size: 30px;
     font-weight: 400;
     line-height: 50px;
     color: #424242;
   }
   h3{
     font-size: 1.17em;
     margin: 1em 0;
     display: block;
     margin-block-start:1em;
     margin-block-end:1em;
     margin-inline-start:0px;
     margin-inline-end:0px;
   }
   .modal-alert .actions .btn{
     margin: 0 7px;
   }
   input.but,button.btn{
     width: 160px;
     height: 40px;
   }
   .btn-gray{
     background: #B0B0B0;
     border-color: #B0B0B0;
     color: white;
   }
   .btn{
     display: inline-block;
     width: 158px;
     height: 38px;
     padding: 0;
     margin: 0;
     border: 1px solid #B0B0B0;
     font-size: 14px;
     line-height: 38px;
     text-align: center;
     color: #FFFFFF;
     cursor: pointer;
     transition: all .4s;
     -webkit-transition:all .4s;
   }
   button, html input[type="button"], input[type="reset"], input[type="submit"]{
     -webkit-appearance:button;
     cursor: pointer;
     border-radius: 0;
   }
   button, select{
     text-transform: none;
   }
   button, input{
     line-height: normal;
   }
   button, input, select, textarea{
     font-size: 100%;
     margin: 0;
     vertical-align: baseline;
   }
   html, button, input, select, textarea{
     font-family: sans-serif;
   }
   .btn-primary{
     background: #FF6700;
     border-color: #FF6700;
     color: #FFFFFF;
   }
   .modal .close{
     position: absolute;
     top: 14px;
     right: 14px;
     width: 30px;
     height: 30px;
     line-height: 30px;
     text-align: center;
     color: #757575;
     cursor: pointer;
     transition: all .2s;
     z-index: 10;
     border-radius: 15px;
     -webkit-transition:all .2s
   }
   .modal .close .iconfont{
     font-size: 24px;
     font-weight: 200;
     vertical-align: middle;
   } */
</style>
