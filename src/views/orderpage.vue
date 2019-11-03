<template>
  <div class="bigpage">
    <div class="site-header site-mini-header">
      <div class="container">
        <div class="header-logo">
          <a class="logo" href="//www.mi.com/index.html" title="小米官网" data-stat-id="ea54c9fed6a874d7" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-ea54c9fed6a874d7', '//www.mi.com/index.html', 'pcpid', '']);"></a>
        </div>
        <div class="header-title" id="J_miniHeaderTitle">
          <h2>确认订单</h2>
        </div>
        <div class="topbar-info" id="J_userInfo">
          <span class="user">
            <a rel="nofollow" class="user-name" href="//my.mi.com/portal" target="_blank">
              <span class="name">XUYANQIONG</span>
              <i class="inconfont">👇</i>
            </a>
            <ul class="user-menu">
              <li>
                <a rel="nofollow" href="//my.mi.com/portal" target="_blank">个人中心</a>
              </li>
              <li>
                <a rel="nofollow" href="https://order.mi.com/user/comment" target="_blank">评价晒单</a>
              </li>
              <li>
                <a rel="nofollow" href="https://order.mi.com/user/favorite" target="_blank">我的喜欢</a>
              </li>
              <li>
                <a rel="nofollow" href="//account.xiaomi.com/" target="_blank">小米账号</a>
              </li>
              <li>
                <a rel="nofollow" href="https://order.mi.com/site/logout" target="_blank">退出登录</a>
              </li>
            </ul>
          </span>
          
          <!-- <a class="link" href="#" data-agreement="true" data-login="true" data-stat-id="40879d467387e3e0" onclick="_msq.push(['trackEvent', '5df97b551662ffe7-40879d467387e3e0', '//order.mi.com/site/login', 'pcpid', '']);"
            data-href="//order.mi.com/site/login?redirectUrl=https://static.mi.com/cart/">登录</a> -->
          <span class="sep">|</span>
          <a class="link link-order" href="//static.mi.com/order/" rel="nofollow" target="_blank">我的订单</a>
        </div>
      </div>
    </div>
    <!-- 主题内容 -->
    <div class="page-main">
      <div class="container">
        <div class="checkout-box">
          <div class="section section-address">
            <div class="section-header clearfix">
              <h3 class="title">收货地址</h3>
              <div class="more">
                
              </div>
              <div class="mitv-tips hide" style="margin-left:0;border:none" id="J_bigproPostTip"></div>
            </div>
            <div class="section-body clearfix" id="J_addressList">
              <div class="address-item address-item-new"  id="J_newAddress">
                <i class="iconfont">＋</i>
                添加新地址
              </div>
            </div>
            </div>
            <div class="section setion-goods">
              <div class="section-header clearfix" style="border-bottom:1px solid #E0E0E0;">
                <h3 class="title">商品及优惠券</h3>
              </div>
              <div class="section-body">
                <ul class="goods-list" id="J_goodsList" style="padding:5px 0; border-bottom:1px solid #e0e0e0;">
                  <li class="clearfix" style="padding:10px 0;">
                    <div class="col col-img"><img src="//i1.mifile.cn/a1/pms_1527754949.17141338.jpg" width="30" height="30" /></div>
                    <div class="col col-name">
                      <a href="//item.mi.com/1182100017.html" target="_blank">小米手环</a>
                    </div>
                    <div class="col col-price">139元*5</div>
                    <div class="col col-status">&nbsp;</div>
                    <div class="col col-total" >695元</div>
                  </li>
                  <li class="clearfix" style="padding:10px 0;">
                    <div class="col col-img"><img src="//i1.mifile.cn/a1/pms_1562056084.63169068.jpg" height="30" width="30" /></div>
                    <div class="col col-name"><a href="//item.mi.com/1192500032.html" target="_blank">小米CC9 6GB+128GB 暗夜王子（深空灰）</a></div>
                    <div class="col col-price">139元*5</div>
                    <div class="col col-status">&nbsp;</div>
                    <div class="col col-total" >695元</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="section section-options section-payment clearfix hide">
              <div class="section-header">
                <h3 class="title">支付方式</h3>
              </div>
              <div class="section-body clearfix" >
                <ul class="J_optionList options ">
                  <li data-type="pay" class="J_option selected" data-value="1">在线支付</li>
                </ul>
              </div>
            </div>
            <div class="section section-options section-shipment clearfix">
              <div class="section-header">
                <h3 class="title">配送方式</h3>
              </div>
              <div class="section-body clearfix">
                <ul class="clearfix J_optionList options ">
                  <li data-type="shipment" class="J_option selected" data-amount="0" data-value="2">包邮</li>
                </ul>
                <div class="service-self-tip" id="J_serviceSelfTip" style="display: none;"></div>
              </div>
            </div>
            <div class="section section-options section-time clearfix hide" style="display: block;">
              <div class="section-header">
                <h3 class="title">配送时间</h3>
              </div>
              <div class="section-body clearfix">
                <ul class="J_optionList options options-list clearfix">
                  <li data-type="time" class="J_option selected" data-value="1">
                    不限送货时间：
                    <span>周一至周日</span>
                  </li>
                  <li data-type="time" class="J_option" data-value="2">
                    工作日送货：
                    <span>周一至周五</span>
                  </li>
                  <li data-type="time" class="J_option" data-value="3">
                    双休日、假日送货：
                    <span>周六至周日</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="section section-options section-invoice clearfix">
              <div class="sectoin-header" style="float:left;width:150px;">
                <h3 class="title">发票</h3>
              </div>
              <div class="section-body clearfix">
                <div class="invoice-result">
                  <span id="J_invoiceTitle">个人</span>
                  <span>商品明细</span>
                  <a href="#J_modalInvoiceInfo" data-toggle="modal" id="J_invoiceModify" data-stat-id="67efe13c31710c36" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-67efe13c31710c36', '#J_modalInvoiceInfo', 'pcpid', '']);">修改></a>
                </div>
              </div>
            </div>
            
            
            <!-- 使用优惠券 使用小米礼品卡 -->
            <div class="section section-count clearfix">
              <div class="count-actions">
                <div class="coupon-trigger" id="J_useCoupon">
                  <i class="iconfont icon-plus">+</i>
                  使用优惠券
                </div>
                <div class="coupon-result hide" id="J_couponResult">
                  <i class="iconfont icon-selected">+</i>
                  正在使用:
                  <span class="coupon-title" id="J_couponTitle"></span>
                  <a href="#" id="J_changeConpon" data-stat-id="73aef02e90ae00b2" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-73aef02e90ae00b2', 'javascript:void0', 'pcpid', '']);">[修改]</a>
                </div>
                <div class="coupon-box hide" id="J_couponBox">
                  <ul class="clearfix tab-switch J_tabSwitch">
                    <li class="tab-active">选择优惠券</li>
                    <li>输入优惠券码</li>
                  </ul>
                  <div class="tab-container">
                    <div class="tab-content list-content">
                      <p class="coupon-empty">您暂时没有可用的优惠券</p>
                    </div>
                    <div class="tab-content code-content hide" style="display: none;">
                      <div class="form-section">
                        <label class="input-label" for="coupon_code">请输入优惠券码</label>
                        <input class="input_text" type="text" id="coupon_code" name="coupon_code" />
                      </div>
                      <div class="coupon-confirm">
                        <a href="#" class="btn btn-primary" id="J_useCouponCode" data-stat-id="6c554afccd905651" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-6c554afccd905651', 'javascript:void0', 'pcpid', '']);">立即使用</a>
                        <a href="#" class="btn btn-gray J_couponCancel"  data-stat-id="7afa152eb2616628" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-7afa152eb2616628', 'javascript:void0', 'pcpid', '']);">不使用优惠券</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ecard-trigger" id="J_useEcard">
                  <i class="iconfont icon-plus">+</i>
                  使用小米礼品卡
                </div>
                <div class="ecard-result hide" id="J_ecardResult">
                  <i class="iconfont icon-selected">+</i>
                  已使用礼品卡
                  <span id="J_ecardVal"></span>
                  <a href="#" id="J_ecardModify" data-stat-id="47cd16f8e5331743" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-47cd16f8e5331743', 'javascript:void0', 'pcpid', '']);">[修改]</a>
                </div>
                <div class="ecard-trigger hide" id="J_useRecycle" data-type="recycle">
                  <i class="iconfont icon-plus">+</i>
                  使用现金券
                </div>
                <div class="ecard-result hide" id="J_recycleResult">
                  <i class="iconfont icon-selected">+</i>
                  已使用现金券
                  <span id="J_recycleVal"></span>
                  <a href="#" id="J_recycleModify" data-stat-id="47cd16f8e5331743" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-47cd16f8e5331743', 'javascript:void0', 'pcpid', '']);">[修改]</a>
                </div>
                <div class="ecard-box hide" id="J_ecardBox">
                  <ul class="clearfix tab-switch J_tabSwitch">
                    <li>已经绑定的礼品卡</li>
                    <li>输入礼品卡以绑定</li>
                  </ul>
                  <div class="tab-container">
                    <div class="tab-container">
                      <div class="tab-content ecard-list">
                        <div class="empty hide" id="J_ecardEmpty">
                          <p>没有发现可用的礼品卡！</p>
                          <a href="#" class="btn btn-gray J_ecardCancel" data-stat-id="19473665e219812c" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-19473665e219812c', 'javascript:void0', 'pcpid', '']);">取消</a>
                        </div>
                        <div class="hide">
                          <div id="J_ecardList"></div>
                          <div class="ecard-info" id="J_ecardInfo"></div>
                          <div class="btns">
                            <a href="#" class="btn btn-primary" id="J_useSelEcard" data-stat-id="467e920a48d3bc3c" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-467e920a48d3bc3c', 'javascript:void0', 'pcpid', '']);">确认以上选择</a>
                            <a href="#" class="btn btn-gray J_ecardCancel" data-stat-id="8b51c83ee66ae038" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-8b51c83ee66ae038', 'javascript:void0', 'pcpid', '']);">取消 不使用礼品卡</a>
                          </div>
                          </div>
                      </div>
                      <div class="tab-content ecard-input hide">
                        <div class="form-section">
                          <span class="input-title">密码:</span>
                          <input class="input-text input-card" type="text" id="ecard_password" name="ecard_password" placeholder="请输入礼品卡密码"/>
                        </div>
                        <div class="form-section clearfix">
                          <span class="input-title">验证码:</span>
                          <input class="input-text input-captcha" type="text" id="ecard_captcha" name="ecard_captcha" placeholder="请输入验证码"/>
                        </div>
                        <div class="captcha-img">
                          <img alt="验证码" title="点击更换验证码" id="J_ecardCaptchaImg" />                          
                        </div>
                      </div>
                      <div class="form-section form-btns">
                        <button class="btn btn-primary" id="J_bindEcard">绑定礼品卡</button>
                        <button class="btn btn-gray J_ecardCancel">取消</button>
                      </div>
                    </div>
                  </div>                  
                  <div class="recycle-box hide" id="J_recycleBox">
                    <div class="ecard-list recycle-list">
                      <div id="J_recycleList">
                        <div class="table-wrapper">
                          <ul class="clearfix">
                            <li class="col-1">选择</li>
                            <li class="col-2">券号</li>
                            <li class="col-3">本次使用（元）</li>
                            <li class="col-4">余额（元）</li>
                          </ul>
                          <div>
                            <table>
                              <tbody>  </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="ecard-info" id="J_recycleInfo">
                        未选择现金券，还需支付
                        <span>8390.90元</span>
                        <span class="tip">（暂不支持抵扣运费、意外保、电话卡等）</span>
                      </div>
                      <div class="btns">
                        <a href="#" class="btn btn-primary" id="J_useSelRecycle" data-stat-id="467e920a48d3bc3c" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-467e920a48d3bc3c', 'javascript:void0', 'pcpid', '']);">确认以上选择</a>
                        <a href="#" class="btn btn-gray J_recycleCancel" data-stat-id="2771a3e8b49ad7a2" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-2771a3e8b49ad7a2', 'javascript:void0', 'pcpid', '']);">取消 不使用现金券</a>
                      </div>
                    </div>
                  </div>
                  <div class="sms-box hide" id="J_ecardSmsBox">
                    <div class="title">
                      已向您绑定的手机
                      <span id="J_ecardMobile">(135****6910)</span>
                      发送验证码
                      <i class="icon-qa" id="J_ecardQa">?</i>
                    </div>
                    <div class="form-section clearfix">
                      <label class="input-label" for="ecard_sms">请输入验证码</label>
                      <input class="input-text input-ecard" type="text" id="ecard_sms" name="ecard_sms" />
                      <span id="J_smsCountdown" class="countdown hide">
                        <i></i>
                        秒后重新发送
                      </span>
                      <a href="#" class="repeat hide" id="J_repeatSms" data-stat-id="86ed7b2fd7ca5e28" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-86ed7b2fd7ca5e28', 'javascript:void0', 'pcpid', '']);">重新发送</a>
                    </div>
                    <div class="form-section form-btns">
                      <button class="btn btn-primary" id="J_checkEcardSms">确定</button>
                      <button class="btn btn-gray" id="J_cancelEcardSms">取消</button>
                    </div>
                    <div class="qa-detail hide" id="J_ecardQaDetail">
                      为保证您的资金安全，消费时需通过绑定手机的认证。若您绑定的手机号已变更，可前往小米账号中心修改绑定的手机号，如果原来的手机号已无法使用，可通过申诉的方式更换手机号。
                      <a href="https://account.xiaomi.com/pass/auth/security/home" target="_blank" data-stat-id="0e64fcfb8c3dd045" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-0e64fcfb8c3dd045', 'https://account.xiaomi.com/pass/auth/security/home', 'pcpid', '']);">前往小米账号中心</a>
                    </div>
                  </div>
                  <div class="loading hide">
                    <div class="loader"></div>
                  </div>
                </div>
                <div class="raise-buy-box">
                  <ul id="J_raiseBuyList">
                    
                  </ul>
                </div>
              </div>
              <div class="money-box" id="J_moneyBox">
                <ul>
                  <li class="clearfix">
                    <label>商品件数:</label>
                    <span class="val">11件</span>
                  </li>
                  <li class="clearfix">
                    <label>商品总价:</label>
                    <span class="val">8390.9</span>
                  </li>
                  <li class="clearfix">
                    <label>活动优惠:</label>
                    <span class="val">-0元</span>
                  </li>
                  <li class="clearfix">
                    <label>优惠券抵扣:</label>
                    <span class="val">
                      <i id="J_couponVal">-0</i>
                      元
                    </span>
                  </li>
                  <li class="clearfix">
                    <label>运费:</label>
                    <span class="val">
                      <i data-id="J_postageVal">0</i>
                      元
                    </span>
                  </li>
                  <li class="clearfix total-price">
                    <label>应付总额：</label>
                    <span class="val">
                      <em data-id="J_totalPrice">8390.9</em>
                      元
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            
            
            <div class="section-bar clearfix">
              <div class="fl">
                <div class="seleced-address" id="J_confirmAddress">
                  张三 1343****384 <br />
                  天津 天津市 和平区 小巷子333
                  <a href="#" class="modify J_modify">修改</a>
                </div>
                <div class="big-pro-tip hide J_confirmBigProTip"></div>
              </div>
              <div class="fr">
                <a href="#" class="btn btn-primary" id="J_checkoutToPay" data-stat-id="9dc0c7cf32a1c0ca" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-9dc0c7cf32a1c0ca', 'javascript:void0', 'pcpid', '']);">立即下单</a>
                <a href="//static.mi.com/cart/" class="btn  btn-return" data-stat-id="d5777c2afc47dad1" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-d5777c2afc47dad1', '//static.mi.com/cart/', 'pcpid', '']);">返回购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="big-pro-tip-pop hide" id="J_popBigProTip" style="top:0px;left: 0px;"></div>
      <div class="modal fade modal-hide modal-lipin" id="J_lipinTip">
        <div class="modal-header">
          <h3 class="title">温馨提示</h3>
        </div>
        <div class="modal-body">
          <p>为保障您的利益与安全，下单后礼品卡将会被使用，<br> 且订单信息将不可修改。请确认收货信息 </p>
          <ul>
            <li class="clearfix">
              <strong>收&nbsp;&nbsp;货&nbsp;&nbsp;人:</strong>
              <span id="J_lipinUserName"></span>
            </li>
            <li class="clearfix">
              <strong>联系电话:</strong>
              <span id="J_lipinUserPhone"></span>
            </li>
            <li class="clearfix">
              <strong>收货地址:</strong>
              <span id="J_lipinUserAddress"></span>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <a href="#" class="btn btn-primary" id="J_lipinSubmit" data-stat-id="7479e4d461606309" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-7479e4d461606309', 'javascript:void0', 'pcpid', '']);">确认下单</a>
          <a href="#" class="btn btn-gray" data-dismiss="modal" data-stat-id="6e7ff29eb418a43b" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-6e7ff29eb418a43b', 'javascript:void0', 'pcpid', '']);">返回修改</a>
        </div>
      </div>
      <div class="modal fade modal-hide fade modal-alert" id="J_modalAlert">
        <div class="modal-bd">
          <div class="text">
            <h3 id="J_alertMsg"></h3>
          </div>
          <div class="actions">
            <button class="btn btn-primary" data-stat-id="modal">确定</button>
          </div> 
          <a class="close" data-dismiss="modal" href="#" data-stat-id="86faab7930e5a48b" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-86faab7930e5a48b', 'javascript:void0', 'pcpid', '']);">
            <i class="iconfont">X</i>
          </a>
        </div>
      </div>
      <div class="address-top-bar" id="J_addressTopBar">
        <div class="container">
          <a href="#" class="btn btn-primary" id="J_addressTopBarBtn" data-staat-id="336acd257ed12157" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-336acd257ed12157', 'javascript:void0', 'pcpid', '']);">选择该收货地址</a>
          <div class="content" id="J_addressTopCon">
            <span class="uname">张三</span>
            <span class="utel">1343****384</span>
            天津 天津市 和平区 小巷子333
          </div>
        </div>
      </div>
      <div class="modal modal-warning modal-hide" id="warning-bargain-1463">
        <div class="modal-hd">
          <h2 class="title">温馨提示</h2>
          <a class="close" data-dismiss="modal" href="#" data-stat-id="7f05d4a8c5beeb64" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-7f05d4a8c5beeb64', 'javascript:void0', 'pcpid', '']);">
            <i class="iconfont">X</i>
          </a>
        </div>
        <div class="modal-bd">
          <p>
            <b>换卡说明：</b>
            <br>
            <br>
            移动2G/3G卡升级为移动4G卡
            
            <br>
            传统SIM大卡换小米手机适配的micro卡
          </p>
        </div>
      </div>
      <div class="modal modal-warning modal-hide" id="warning-bargain-1464">
        <div class="modal-hd">
          <h2 class="title">温馨提示</h2>
          <a class="close" data-dismiss="modal" href="#" data-stat-id="7f05d4a8c5beeb64" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-7f05d4a8c5beeb64', 'javascript:void0', 'pcpid', '']);">
            <i class="iconfont">X</i>
          </a>
        </div>
        <div class="modal-bd">
           <p>
            <b>换卡说明：</b>
            <br>
            <br>
            移动2G/3G卡升级为移动4G卡
            
            <br>
            传统SIM大卡换小米手机适配的nano卡
          </p>
        </div>
      </div>
      <div class="modal modal-invoice modal-hide fade" id="J_modalInvoiceInfo">
        <div class="modal-hd">
          <span class="title">发票信息</span>
          <span class="close" data-dismiss="modal">
            <i class="iconfont"> </i>
          </span>
        </div>
        
        
        <div class="modal-body">
          <div class="in-section clearfix">
            <label class="tit">发票类型:</label>
            <ul class="J_optionList options options-list  clearfix">
              <li data-type="invoice" data-invoice-type="not_invoice" class="hide J_option">不开发票</li>
              <li data-type="invoice" data-invoice-type="personal" class="J_option hide" data-value="1">纸质发票</li>
              <li data-type="invoice" data-invoice-type="electron" class="J_option selected" data-value="4">电子发票</li>
            </ul>
            <div class="invoice-tip hide invoice-paper-tip" id="J_invoicePaperTip">
              1.发票不与商品随箱寄出;<br>
              2.发票将于商品妥投完成7日后单独寄出;<br>
              3.发票收到后请妥善保存，退货需要一同寄回。
            </div>
            <div class="invoice-tip" id="J_invoiceDefaultTip">
              电子发票与纸质发票具有相同法律效力，可作为报销、售后、维权凭证。<br>
              <span>推荐使用电子发票，不怕丢失、更方便、更环保。</span><br>
              <a href="#" id="J_showPaperOption" data-stat-id="22119da1941db54e" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-22119da1941db54e', 'javascript:void0', 'pcpid', '']);">选择纸质发票</a>
            </div>
            <div class="invoice-tip hide" id="J_onlyEleTip">
              电子发票是税务局认可的有效凭证，其法律用途及使用规定同纸质发票。
            </div>
            </div>
            <div id="J_invoceInfoOpionsContent">
              <div class="in-section clearfix" id="J_invoiceTitleSec">
                <label class="tit">发票抬头:</label>
                <ul class="J_optionList options options-list clearfix">
                  <li data-type="invoice-mode" data-invoice-mode="personal" class="J_option selected">个人</li>
                  <li data-type="invoice-mode" data-invoice-mode="company" class="J_option">单位</li>
                </ul>
                <div class="form-section form-section-active form-section-valid">
                  <label class="input-label" for="invoice_title">请输入发票抬头</label>
                  <input class="input-text input-text-big" type="text" id="invoice_title" name="invoice_title" value="个人" />
                </div>
              </div>
              <div class="in-section clearfix hide" id="J_invoiceCompanyCode">
                <label class="tit">单位税号:</label>
                <div class="form-section form-section-valid">
                  <label class="input-label" for="invoice_company_code">请填写购买方纳税人识别号或统一社会信用代码</label>
                  <input class="input-text input-text-big" type="text" id="invoice_company_code" name="invoice_company_code" value/>
                  <a href="#" data-bubble-toggle="invoiceCompanyCodeQa" data-stat-id="1f456df28d12dfe6" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-1f456df28d12dfe6', 'javascript:void0', 'pcpid', '']);">
                    <i class="icon-qa">?</i>
                  </a>
                  <div class="qa-detail hide" data-bubble="invoiceCompanyCodeQa">
                      纳税人识别号为营业执照上的统一社会信用代码或税务登记证上的税号，一般为15、17、18、20位数字或大写字母。
                  </div>
                </div>
              </div>
              <div class="in-section clearfix J_eInvoiceMore">
                <label class="tit">收票手机:</label>
                <div class="form-section">
                  <label class="input-lable" for="einvoice_phone">收票人手机</label>
                  <input class="input-text input-text-big" type="text" id="einvoice_phone" name="einvoice_phone" data-tel value placeholder="电子发票开具后短信告知你(选填)" />
                </div>
              </div>
              <div class="in-section clearfix J_eInvoiceMore">
                <label class="tit">售票邮箱:</label>
                <div class="form-section">
                  <label class="input-lable" for="einvoice_mail">收票人邮箱</label>
                  <input class="input-text input-text-big" type="text" id="einvoice_mail" name="einvoice_mail" data-tel value placeholder="用于接受电子发票(选填)" />
                </div>
              </div>
              <div class="in-section in-section-con clearfix">
                <lable class="tit">发票内容:</lable>
                购买商品明细
              </div>
              <div class="more">
                <dl>
                  <dt>发票须知:</dt>
                  <dd>1.发票金额为实际支付金额，不包含优惠券、礼品卡等；</dd>
                  <dd>2.电子发票可以在订单完成后，在订单详情中下载和查看；</dd>
                  <dd>3.纸质发票不与商品同时发出，商品妥投完成7日后发出，收到后请妥善保存，如退货需一同寄回；</dd>
                  <dd>4.第三方商品的发票由相关企业单独开具；</dd>
                  <dd>5.订单已开具电子发票后，若改为纸质发票（卷票、增值税专用发票等），需自行承担快递费用，我司以快递到付形式寄出。</dd>
                  <dd>
                    <a href="https://order.mi.com/static/invoice" target="_blank" data-stat-id="dab4109570462a94" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-dab4109570462a94', 'https://order.mi.com/static/invoice', 'pcpid', '']);">发票相关问题</a>
                  </dd>
                </dl>
              </div>
              </div>
            <div class="tip" id="J_invoiceInfoSubmitTip"></div>
          </div>
        <div class="modal-footer">
          <a href="#" class="btn btn-gray" data-dismiss="modal" data-stat-id="aca6a7466c3f3c1f" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-aca6a7466c3f3c1f', 'javascript:void0', 'pcpid', '']);">取消</a>
          <a href="#" class="btn btn-primary" data-dismiss="modal" data-stat-id="J_invoiceInfoSubmit" onclick="_msq.push(['trackEvent', '17a1f380b9d4cd2e-2663a0ca2c98bc0e', 'javascript:void0', 'pcpid', '']);">保存</a>
        </div>
      </div>
      <div class="modal fade modal-agreement modal-hide" id="J_modalAgreement"></div>
     
  </div>
  </div>
</template>

<script>
</script>

<style>
  .bigproject {
    background-color: gainsboro;
  }
  
  /* 导航栏样式 */
  .site-mini-header{
    font-size: 12px;
    border-bottom: 2px solid #FF6700;
    background: #FFFFFF;
    color: #B0B0B0;
  }
  .site-header{
    position: relative;
    z-index: 20;
    height: 100px;
  }
  .site-header .container{
    position: relative;
  }
  .container{
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
  }
  .site-mini-header .header-logo{
    width: 93px;
    margin-top: 26px;
  }
  .site-header .header-logo{
    float: left;
    width: 62px;
    margin-top: 22px;
  }
  .site-mini-header .logo{
    width: 48px;
    height: 48px;
  }
  .site-header .logo{
    position: relative;
    display: block;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background-color: #FF6700;
  }
  .site-mini-header a{
    color: #757575;
  }
  a{
    text-decoration: none;
  }
  .site-mini-header .header-title{
    float: left;
    margin-top: 26px;
  }
  .site-mini-header .header-title h2{
    font-size: 28px;
    line-height: 48px;
    font-weight: normal;
    color: #424242;
  }
  .site-mini-header .header-title h2, .site-mini-header .header-title p{
    margin: 0;
  }
  h2{
    font-size: 1.5em;
    margin: 0.83em 0;
    display: block;
    margin-block-start:0.83em;
    margin-block-end:0.83em;
    margin-inline-start:0px;
    margin-inline-end:0px;
    font-weight: bold;
  }
  .site-mini-header .topbar-info{
    margin-top: 30px;
    line-height: 40px;
  }
  .site-mini-header .topbar-cart, .site-mini-header .topbar-info{
    position: relative;
    float: right;
    height: 40px;
  }
  .site-mini-header .topbar-info .link, .site-mini-header .topbar-info .user, .site-mini-header .topbar-info .message, .site-mini-header .topbar-info .sep{
    float: left;
  }
  .site-mini-header .user{
    position: relative;
    width: 110px;
    padding: 0;
    white-space: nowrap;
  }
  .site-mini-header .user-name{
    position: relative;
    z-index: 5;
    display: block;
    width: 120px;
    height: 40px;
    text-align: center;
  }
  .site-mini-header a{
   color: #757575;
  }
  .site-mini-header .user-name .name{
    display: inline-block;
    width: auto;
    max-width: 75px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: text-bottom;
    
  }
  .site-mini-header .user-name i{
    font-size: 24px;
    line-height: 24px;
    vertical-align: 9px;
  }
  .iconfont{
    font-family: "iconfont"!important;
    font-style: normal;
    -webkit-font-smoothing:antialiased;
    -webkit-text-stroke-width:0.2px
  }
  .site-mini-header .user-menu{
    display: none;
    position: absolute;
    left: 0;
    top: 40px;
    z-index: 3;
    width: 120px;
    margin: 0;
    padding: 7px 0;
    list-style-type: none;
    background: #FFFFFF;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    -webkit-box-shadow:0 2px 10px rgba(0,0,0,0.15)
  }
  menu, ol, ul{
    padding: 0 0 0 40px;
  }
  dl, menu, ol, ul{
    margin: 1em 0;
  }
  li{
    display: list-item;
    text-align:-webkit-match-parent; ;
  }
  .site-mini-header .user-menu a{
    display: block;
    padding: 3px 30px;
    line-height:2 ;
  }
  .site-mini-header .topbar-info .sep{
    color: #E0E0E0;
    margin: 0;
  }
  .site-mini-header .topbar-info .link, .site-mini-header .topbar-info .user, .site-mini-header .topbar-info .message, .site-mini-header .topbar-info .sep{
    float: left;
  }
  .sep, .ndash{
    margin: 0 .25em;
    font-family: sans-serif;
  }
  .site-mini-header .topbar-info .link{
    padding: 0 5px;
  }
  
  
  
  /* 主体内容样式 */
  .page-main{
    padding-top: 40px;
    padding-bottom: 60px;
    background: #F5F5F5;
  }
  .checkout-box{
    padding: 48px 0 0;
    background-color: #FFFFFF;
  }
  .section{
    margin-left: 48px;
    margin-right: 48px;
  }
  .section-address .section-header{
    margin-bottom: 20px;
  }
  .section .section-header .title{
    
    color: #333333;
    line-height: 20px;
    font-weight: normal;
  }
  .title{
    float: left;
    font-size: 18px;
    line-height:38px;
  }
  .checkout-box ul, .checkout-box li, .checkout-box p, .checkout-box h2, .checkout-box h3{
    margin: 0;
    padding: 0;
  }
  .h3{
    font-size: 1.17em;
    margin: 1em 0;
    display: block;
    margin-block-start:1em;
    margin-block-end:1em;
    margin-inline-start:0px;
    margin-inline-end:0px;
    font-weight: bold;
  }
  .mitv-tips{
    float: left;
    margin-left: 20px;
    margin-top:3px ;
    padding-left: 10px;
    color: #757575;
    border-left: 1px solid #E0E0E0;
    line-height: 1;
  }
  .hide{
    display: none!important;
  }
  .section-address .section-body{
    margin-left: -18px;
  }
  .section-address .address-item{
    float: left;
    margin-left:17px ;
    margin-bottom: 24px;
  }
  .address-item-new{
    text-align: center;
    color: #B0B0B0;
  }
  .address-item{
    width: 268px;
    height: 178px;
    border: 1px solid #E0E0E0;
    cursor: pointer;
    position: relative;
    transition:all .4s ease ;
    -webkit-transition:all .4s ease;
  }
  .address-item-new .iconfont{
    display: block;
    width: 30px;
    height: 30px;
    margin: 63px auto 8px;
    font-size: 30px;
    line-height: 26px;
    background-color:#E0E0E0 ;
    border-radius: 17px;
    text-align: center;
    transition: all .4s ease;
    color: #FFFFFF;

  }
  .section{
    margin-left:48px ;
    margin-right: 48px;
  }
  .section-goods .section-header{
    border-bottom:1px solid #E0E0E0 ;
  }
  .section-goods .section-header .title, .section-goods .section-header .more{
    line-height: 40px;
  }
  .section-goods .goods-list{
    padding: 5px 0;
    border-bottom: 1px solid #E0E0E0;
  }
  .checkout-box ul, .checkout-box li{
    list-style: none;
  }
  .section-goods .goods-list li{
    padding: 10px 0;
  }
  .section-goods .goods-list{
    padding: 5px 0;
    border-bottom: 1px solid #E0E0E0;
  }
  li{
    display: list-item;
    text-align:-webkit-match-parent ;
  }
  .section-goods .goods-list .col-img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .col-img{
    width:30px;
    height:30px;
    margin-right:10px;
    float:left;
    line-height:30px;
    color:#424242;
  }
  .section-goods .goods-list .col{
    float: left;
    line-height: 30px;
    color: #424242;
  }
  img{
    border: 0;
  }
.section-goods .goods-list .col-name{
  width: 650px;
  
}
.col-name{
  width: 350px;
  float:left;
  line-height:30px;
  color:#424242;
}
.section-goods .goods-list .col{
  float: left;
  line-height: 30px;
  color: #424242;
}
.section-goods .goods-list .col-name a{
  color: #424242;
}
.section-goods .goods-list .col-price{
  width: 150px;
  text-align: center;
}
.col-price{
  width:550px;
  text-align:center;
  float:left;
  line-height: 23px;
  color:#424242;
}
.section-goods .goods-list .col-status{
  width: 100px;
  text-align: center;
}
.col-status{
  width: 100;
  text-align:center;
  float:left;
  line-height: 30px;
  color:#424242;
}
.section-goods .goods-list .col-total{
  width: 190px;
  text-align: center;
  color: #FF6700;
}
.col-total{
  color: #FF6700;
}
.section-options{
  padding: 25px 0;
  border-bottom: 1px solid #E0E0E0;
}
.section{
  margin-left: 48px;
  margin-right: 48px;
}
.section-options .section-header{
  float: left;
  width: 150px;
}

.section-options .section-body{
  float: left;
}
.section-options .options .selected{
  border-color: #FFFFFF;
  color: #FF6700;
}
.section-options .options li{
  float: left;
  height: 38px;
  line-height: 38px;
  border:1px solid #FFFFFF;
  color: #333333;
  }
  .section-options .section-header .title{
    line-height: 38px;
  }
.section .section-header .title{
  float: left;
  color: #333333;
  font-size: 18px;
  line-height: 40px;
  font-weight: normal;
}
.service-self-tip{
  display: none;width: 458px;
  padding: 12px 15px;
  margin-top:14px;
  background-color:#F5F5F5;
  font-size: 12px;
  color: #757575;
  }
  .section-options .options-list .selected{
    border-color: #FF6700;
  }
  .section-options .options-list li{
    width: 235px;
    margin-right: 14px;
    border-color: #E0E0E0;
    text-align: center;
    cursor: pointer;
    transition: all .3s;
    -webkit-transition:all .3s;
  }
  .section-invoice{
    border-bottom: none;
  }
  .section-options{
    padding: 25px 0;
    /* border-bottom: 1px solid #E0E0E0; */
    border-top: 1px solid #E0E0E0;
  }
  .section-options .section-header{
    float: left;
    width: 150px;
  }
  .section-invoice .invoice-result{
    line-height: 40px;
    color: #FF6700;
  }
  .section-invoice .invoice-result span{
    margin-right: 14px;
  }
  .section-invoice .invoice-result a{
    color: #FF6700;
  }
  .section-count{
    min-height: 200px;
    padding: 20px 0;
    position: relative;
  }
  .section-bar{
    padding: 20px 48px;
    border-top: 2px solid #F5F5F5;
  }
  .section-bar .fl{
    float: left;
  }
  .section-bar .seleced-address{
    line-height: 20px;
    color: #424242;
  }
  .section-bar .seleced-address a{
    color: #FF6700;
  }
 .section-bar .big-pro-tip{
   color: #FF6700;
 } 
 .section-bar .fr{
   float: right;
   color: #757575;
 }
 .section-bar .fr .btn{
   float: right;
   margin-left: 30px;
   vertical-align: top;
 }
 .btn-primary{
   background: #FF6700;
   border-color: #FF6700;
   color: #FFFFFF;
 }
 .btn{
   display: inline-block;
   width:158px;
   height: 38px;
   padding: 0;
   margin: 0;
   border: 1px solid #B0B0B0;
   font-size: 14px;
   line-height: 38px ;
   text-align: center;
   color: #B0B0B0;
   transition: all .4s;
  -webkit-transition:all .4s 
 }
.section-bar .fr .btn-return{
  color:rgba(0,0,0,0.27);
  border-color:rgba(0,0,0,0.27) ;
  }

   /* 提示框样式 */
   .big-pro-tip-pop{
     width: 188px;
     min-height: 80px;
     padding: 20px 40px;
     border: 1px solid #EEEEEE;
     position: absolute;
     top: 0;
     left: 0;
     background-color:#FFFFFF ;
     box-shadow: 0 18px 30px rgba(0,0,0,0.18);
     font-size: 12px;
     color: #757575;
     line-height: 22px;
     z-index: 10;
   }
   .modal.fade{
     transition: opacity .4s linear, top .4s ease-out;
     top: -25%;
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
     margin-left: -330px;
     margin-top: -300px;
     background-color: #FFFFFF;
     outline: none;
   }
   .fade{
     opacity: 0;
     transition:opacity .15s linear ;
     -webkit-transition:opacity .15s linear
   }
   .modal-header, .modal-hd{
     position: relative;
     height: 32px;
     padding: 14px 20px;
     background-color: #F5F5F5;
   }
   .modal-header h3, .modal-header .title, .modal-hd h3, .modal-hd .title{
     margin: 0;
     font-size: 18px;
     font-weight: 400;
     line-height: 32px;
     color: #424242;
   }
   .modal-body, .modal-bd{
     position: relative;
     max-height: 400px;
     padding: 40px 60px;
   }
   .modal-lipin p{
     margin-bottom: 20px;
     text-align: center;
     font-size: 16px;
   }
   .modal-lipin p, .modal-lipin ul, .modal-lipin li{
     margin: 0;
     color: #616161;
   }
   p, pre{
     margin: 1em 0;
   }
   .modal-lipin li{
     list-style: none;
     line-height: 2;
   }
   .modal-lipin li strong{
     margin-right: 10px;
     font-weight: normal;
   }
   b, strong{
     font-weight: bold;
   }
   .modal-footer, .modal-ft{
     height: 40px;
     padding: 20px 0;
     border-top: 1px solid #E0E0E0;
     text-align: center;
     background-color:#F5F5F5 ;
   }
   .modal-footer .btn, .modal-ft .btn{
     margin: 0 7px;
     
   }
   .btn-gray{
     background: #B0B0B0;
     border-color: #B0B0B0;
     color: #FFFFFF;
   }
   .modal-alert{
     width: 500px;
     margin-left: -250px;
     
   }
   .modal-hide{
     display: none;
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
   }
   .modal .close .iconfont{
     font-size: 24px;
     font-weight: 200;
     vertical-align: middle;
   }
   .address-top-bar{
     width: 100%;
     height: 70px;
     position: fixed;
     top: -100px;
     left: 0;
     border-top: 1px solid #E0E0E0;
     background-color: #FFFFFF;
     box-shadow: 0 3px 6px rgba(0,0,0,0.1);
     z-index: 100;
     transition: all .3s;
   }
   .address-top-bar .btn{
     float: right;
     margin-top: 15px;
   }
   .address-top-bar .content{
     margin-top:15px;
     line-height: 40px;
     color: #757575;
   }
   .address-top-bar .content .uname{
     display: inline-block;
     margin-right: 25px;
     text-align: center;
   }
   .address-top-bar .content .utel{
     margin-right: 25px;
   }
   .modal-invoice .modal-body{
     padding: 10px 0 0 40px;
     max-height: 560px;
     height: 560px;
   }
   .modal-invoice .in-section{
     padding-left: 76px;
     position: relative;
   }
   .modal-invoice .tit{
     position: absolute;
     top: 0;
     left: 0;
     width: 76px;
     line-height: 40px;
     
   }
   label {
    cursor: default;
}
.modal-invoice ul, .modal-invoice li{
  list-style: none;
  
}
.modal-invoice ul, .modal-invoice li, .modal-invoice p{
  margin: 0;
  padding: 0;
}
.modal-invoice .options-list li{
  width: 235px;
  margin-right: 14px;
  margin-bottom: 14px;
  border-color: #E0E0E0;
  text-align: center;
  cursor: pointer;
  transition: all .3s;
}
.modal-invoice .options li{
  float: left;
  height: 38px;
  line-height: 38px;
  border: 1px solid #FFFFFF;
  color: #333333;
}
.modal-invoice .options-list .selected{
  border-color: #FF6700;
}
.modal-invoice .options .selected{
  border-color: #FFFFFF;
  color: #FF6700;
}
.modal-invoice .invoice-paper-tip{
  color: #FF6700;
}
.modal-invoice .invoice-tip{
  margin: 0 41px 14px 0;
  color: #757575;
  font-size: 12px;
}
a{
  color: #757575;
  text-decoration: none;
}
 .form-section{
   position: relative;
   margin: 0 0 14px;
   padding: 0;
   border: 0;
   text-align: left;
 }
 .form-section-active .input-label{
   top: -7px;
   font-size: 12px;
   background: #FFFFFF;
 }
 .input-label{
   position: absolute;
   left: 12px;
   top: 11px;
   z-index: 2;
   padding: 0 3px;
   font-size: 14px;
   line-height: 18px;
   color: #B0B0B0;
   background: transparent;
   cursor: text;
   transition: all .2s linear;
   -webkit-transition:all .2s linear
 }
 .modal-invoice .input-text-big{
   width: 454px;
 }
 .input-text{
   width: 186px;
   height: 18px;
   padding: 10px 16px;
   border: 1px solid #E0E0E0;
   font-size: 14px;
   line-height: 18px;
   background: #FFFFFF;
   transition: border-color .2s linear;
   -webkit-transition:border-color .2s linear;
 }
button, input, select, textarea{
  font-size: 100%;
  margin: 0;
  vertical-align: baseline;
}
button, input{
  line-height: normal;
}
.modal-invoice .icon-qa{
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-left: 3px;
  border-radius: 10px;
  text-align: center;
  color: #FFFFFF;
  background-color: #FF6700;
  font-style: normal;
  cursor: pointer;
}
.modal-invoice .qa-detail{
  width: 264px;
  padding: 17px 20px;
  position: absolute;
  top: 39px;
  right: 0;
  border: 1px solid #E0E0E0;
  font-size: 12px;
  color: #757575;
  background-color: #FFFFFF;
  -webkit-box-shadow:0 3px 4px rgba(0,0,0,0.18);
  box-shadow:0 3px 4px rgba(0,0,0,0.18) ;
  z-index: 10;
}
.modal-invoice .in-section-con{
  line-height: 40px;
}
.modal-invoice .more{
  padding-left: 76px;
  position: relative;
}
.modal-invoice .more dl, .modal-invoice .more dd, .modal-invoice .more dt{
  margin: 0;
  padding: 0;
}
.modal-invoice .more dt{
  position: absolute;
  top: 0;
  left: 0;
  width: 76px;
}
.modal-invoice .more dd{
  transition: color .3s;
  font-size: 12px;
  color: #757575;
  line-height: 1.8;
  -webkit-transition:color .3s
}
dd{
  margin: 0 0 0 40px;
  display: block;
  margin-inline-start:40px
}
.modal-invoice .more a{
  color: #FF6700;
}

.modal-agreement{
  margin-top: -166px;
  
}
   
/* 使用优惠券 使用小米礼品卡 */
.section-count .count-actions{
  float: left;
  position: relative;
}
.section-count .count-actions .coupon-trigger, .section-count .count-actions .ecard-trigger{
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
.section-count .count-actions .icon-plus{
  margin-right: 10px;
  position: relative;
  top: -1px;
}
.icon-plus{
  display: inline-block;
  width: 23px;
  height: 23px;
  font-size: 21px;
  line-height: 1;
  border-radius: 11px;
  text-align: center;
  background-color: #FF6700;
  color: #FFFFFF;
  vertical-align: middle;
}
.coupon-result, .ecard-result{
  height: 50px;
  line-height: 50px;
  color: #424242;
}
.coupon-result .icon-selected, .ecard-result .icon-selected{
  color: #83c44e;
  position: relative;
  top: -1px;
  margin-right: 5px;
}
.icon-selected{
  font-size: 22px;
  vertical-align: middle;
}
.coupon-result a, .ecard-result a{
  margin-left: 20px;
  color: #FF6700;
}
.coupon-box{
  width: 587px;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 20px 40px;
  border: 1px solid #e0e0e0;
  background-color: #FFFFFF;
  box-shadow: 0 18px 30px rgba(0,0,0,0.18);
  z-index: 10;
}
.coupon-box .tab-switch{
  height: 18px;
  padding: 10px 0;
  margin-bottom: 20px;
  overflow: hidden;
}
.coupon-box .tab-switch .tab-active{
  color: #FF6700;
}
.coupon-box .tab-switch li{
  float: left;
  width: 292px;
  margin-left: -2px;
  border-left: 2px solid #EEEEEE;
  text-align: center;
  line-height: 1;
  font-size: 18px;
  cursor: pointer;
  color: #757575;
  
}
.coupon-box .list-content{
  height: 220px;
}
.coupon-box .list-content .coupon-empty{
  padding-top: 80px;
  color: #B0B0B0;
  text-align: center;
}
.coupon-box .code-content{
  height: 200px;
  overflow: hidden;
  text-align: center;
}
.coupon-box .code-content .form-section{
  margin-top:30px ;
  margin-bottom: 30px;
}
.form-section{
  position: relative;
  margin: 0 0 0 14px;
  padding: 0;
  border: 0;
  text-align: left;
}
.coupon-box .code-content .input-label{
  top: 21px;
}
.coupon-box .code-content .input-text{
  width: 544px;
  height: 38px;
  line-height: 38px;
  font-size: 30px;
  color: #424242;
  text-align: center;
}
.coupon-box .coupon-confirm{
  text-align: center;
}
.coupon-box .coupon-confirm .btn{
  width: 160px;
  height: 40px;
  line-height: 40px;
  margin: 0 5px;
}
.ecard-box{
  width: 585px;
  min-height: 200px;
  position: absolute;
  top: 100px;
  left: 0;
  padding: 20px 40px;
  border: 1px solid #E0E0E0;
  background-color: #FFFFFF;
  box-shadow:0 18px 30px rgba(0,0,0,0.18) ;
  z-index: 200;
  transition: all .5s;
  -webkit-box-shadow:0 18px 30px rgba(0,0,0,0.18);
  -webkit-transition:all .5s;
}
.ecard-box .tab-switch{
  height: 18px;
  padding: 10px 0;
  margin-bottom: 20px;
  overflow: hidden;
}
.ecard-box .tab-switch li{
  float: left;
  width: 50%;
  margin-left: -2px;
  border-left: 2px solid #EEEEEE;
  text-align: center;
  line-height: 1;
  font-size: 18px;
  color: #757575;
  cursor: pointer;
}
.ecard-box .ecard-list .empty{
  margin: 20px 28px;
  text-align: center;
}
.ecard-box .ecard-list .empty p{
  margin: 0 0 30px;
  height: 60px;
  line-height: 60px;
  background-color: #F5F5F5;
}
.ecard-box .btn{
  margin-right: 10px;
}
.ecard-box .ecard-list .ecard-info{
  margin-bottom: 20px;
  margin-left: 24px;
}
.ecard-box .ecard-list .btns{
  margin-left: 24px;
  margin-bottom: 20px;
}
.ecard-box .ecard-input .form-section{
  margin-bottom: 20px;
  margin-left: 80px;
  position: relative;
}
.ecard-box .ecard-input .input-title{
  position: absolute;
  top: 0;
  left: -80px;
  width: 80px;
  height:50px;
  line-height:50px ;
}
.ecard-box .ecard-input .input-card{
  width: 466px;
}
.ecard-box .ecard-input .input-text{
  height: 28px;
}
.ecard-box .ecard-input .input-captcha{
  float: left;
  width: 100px;
}
.ecard-box .ecard-input .captcha-img{
  float: left;
  margin-left: 14px;
}
.ecard-box .ecard-input .captcha-img img{
  height: 50px;
  cursor: pointer;
}
.ecard-box .ecard-input .form-btns{
  padding:10px 0 0  ;
}
input.btn, button.btn{
  width: 160px;
  height: 40px;
}
.ecard-box .ecard-list .table-wrapper{
  position: relative;
  margin-bottom:20px ;
  
}
.ecard-box .ecard-list .table-wrapper ul{
  background-color:#FAFAFA ;
}
.ecard-box .ecard-list .table-wrapper .col-1{
  width: 50px;
  padding-left: 24px;
}
.ecard-box .ecard-list .table-wrapper li{
  float: left;
  height: 50px;
  line-height: 50px;
}
.ecard-box .recycle-list .table-wrapper .col-2{
  width: 200px;
}
.ecard-box .recycle-list .table-wrapper .col-3{
  width: 160px;
}
.ecard-box .recycle-list .table-wrapper .col-4{
  width: 150px;
  }
.ecard-box .ecard-list table{
    width: 100%;
  }
table{
  border-collapse: collapse;
  border-spacing: 0;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.ecard-box .ecard-list .ecard-info span{
  color: #FF6700;
}
.ecard-box .ecard-list .ecard-info .tip{
  margin-left: 10px;
  color: #757575;
  font-size: 12px;
}
 .ecard-box .sms-box{
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background-color: #FFFFFF;
 }
 .ecard-box .sms-box .title{
   margin: 35px 0 25px 130px;
   font-size: 16px;
   color:#424242;
 }
 .ecard-box .sms-box .icon-qa{
   display: inline-block;
   width: 20px;
   height: 20px;
   line-height: 20px;
   margin-left:3px;
   border-radius: 10px;
   text-align: center;
   color: #FFFFFF;
   background-color: #FF6700;
   font-style: normal;
   cursor: pointer;
   font-size: 12px;
   vertical-align: 2px;
 }
 .ecard-box .sms-box .form-section{
   margin-left:130px ;
   margin-bottom:26px ;
} 
 .ecard-box .sms-box .input-label{
   top: 16px;
 }
 .ecard-box .sms-box .input-ecard{
   width: 298px;
   height: 28px;
   margin-right: 8px;
 }
.ecard-box .sms-box .countdown{
  color: #B0B0B0;
}
.ecard-box .sms-box .countdown i{
  font-style: normal;
}
.ecard-box .sms-box .repeat{
  color: #FF6700;
}
.ecard-box .sms-box .qa-detail{
  width: 264px;
  padding: 17px 20px;
  position: absolute;
  top: -105px;
  right: -1px;
  border: 1px solid #E0E0E0;
  font-size: 12px;
  color: #757575;
  background-color: #FFFFFF;
  box-shadow: 0 3px 4px rgba(0,0,0,0.18);
  -webkit-box-shadow:0 3px 4px rgba(0,0,0,0.18);
}
.ecard-box .sms-box .qa-detail a{
  color: #FF6700;
}
.ecard-box .loading{
  width: 100%;
  height: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color:rgba(0,0,0,0.1) ;
}
.loading{
  padding: 20px 0;
}
.ecard-box .loading .loader{
  top: 40%;
}
.loader, .loader:before, .loader:after{
  transform-origin:50% 50% ;
  animation-name:loader;
  animation-duration:.3s;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
  animation-direction:alternate-reverse;
}
.loader{
  position: relative;
  margin: 0 auto;
  width: 4px;
  height: 20px;
  background: #FF6700;
  overflow: visible;
  animation-delay: 0s;
  transform: scale(1,1);
}
.raise-buy-box{
  margin-top: 20px;
}
.raise-buy-box ul{
  float: left;
}
.section-count .money-box{
  position: absolute;
  right: 0;
  bottom: 20px;
  text-align: right;
}
.section-count .money-box ul{
  float: left;
}
.section-count .money-box li{
  display: block;
  padding-left: 126px;
  line-height:2 ;
  position: relative;
  zoom: 1;
}
.section-count .money-box label{
  position: absolute;
  top: 0;
  left: 0;
  width: 126px;
  white-space: nowrap;
  color: #757575;
  zoom: 1;
}
.section-count .money-box .val{
  color: #FF6700;
  zoom: 1;
}
.section-count .money-box .total-price{
  margin-top: 10px;
}
  
  
  /* body样式 */
  body {
    font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    color: #333;
    background-color: #fff;
    min-width: 1226px
  }
  html, button, input, select, textarea{
    font-family: sans-serif;
  }
  html{
    font-size: 100%;
    -webkit-text-size-adjust:100%
  }
</style>
