<template>
  <div class="main">
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="4000">
          <img src="//i1.mifile.cn/a4/xmad_1562766358464_CwLSR.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-interval="4000">
          <img src="//i1.mifile.cn/a4/xmad_15628446696574_rQFYE.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-interval="4000">
          <img src="//i1.mifile.cn/a4/xmad_15627254995865_hbFzT.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-interval="4000">
          <img src="//i1.mifile.cn/a4/xmad_15613002137481_tCEzx.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-interval="4000">
          <a href="//item.mi.com/1184800015.html" target="_blank"><img src="//i1.mifile.cn/a4/xmad_15608246770003_KZDoR.jpg" class="d-block w-100" alt="..."></a>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
    <div class="sub">
      <div class="span4">
        <ul>
          <li v-for="(key,index) in exposure" :key="index">
            <a :href="key[1]">{{key[0]}}</a>
          </li>
        </ul>
      </div>
      <div class="span16">
        <ul>
          <li v-for="(key,index) in promo" :key="index">
            <a :href="key[0]">
              <img :src="key[1]" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseHome",
    data() {
      return {
        exposure:[['选购手机', 'http://www.mi.com/compare/'], ['企业团购', 'http://qiye.mi.com/'], ['F码通道', 'https://order.mi.com/f'], ['米粉卡', 'https://www.mi.com/mimobile/'], ['以旧换新', 'https://huanxin.mi.com/'], ['话费充值', 'http://recharge.10046.mi.com/']],
        promo:[['https://www.mi.com/mi9/', '//i1.mifile.cn/a4/xmad_15626810884995_kXTbU.jpg 2x'], ['https://www.mi.com/micc9/', '//i1.mifile.cn/a4/xmad_15626738096311_sCqlP.jpg 2x'], ['https://www.mi.com/shouhuan4/', '//i1.mifile.cn/a4/xmad_1560477673797_cQPMS.jpg 2x']]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
    .sub{
      height: 170px;
      margin-top: 14px;
      .span4{
        float: left;
        width: 234px;
        height: 170px;
        ul{
          margin: 0;
          padding: 3px;
          list-style-type: none;
          font-size: 12px;
          text-align: center;
          background: #5f5750;
          height: 170px;
          li{
            position: relative;
            float: left;
            width: 70px;
            height: 82px;
            padding: 0 3px;
            a{
              display: block;
              padding-top: 18px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              color: rgba(255,255,255,0.7);
              transition: color .2s;
            }
            a:hover{
              color: #ffffff;
              text-decoration: none;
            }
          }

        }
      }
      .span16{
        float: right;
        width: 992px;
        height: 170px;
        ul{
          margin: 0;
          padding: 0;
          list-style-type: none;
          li{
            float: left;
            width: 316px;
            height: 170px;
            margin-left: 14px;
            transition: box-shadow .2s linear;
            a{
              img{
                width: 316px;
                height: 170px;
              }
            }
          }
        }
      }
    }
  }

    #carouselExampleIndicators{
        margin-left: auto;
        margin-right: auto;
    }
  .carousel-indicators{
      margin-right: 0;
      margin-left: 75%;
      li{
          width: 6px;
          height: 6px;
          border: 1px solid #ffffff;
          border-radius: 10px;
          margin: 0 5px;
      }
  }
  .carousel-control-next, .carousel-control-prev{
      width: 41px;
  }
  .carousel-control-prev{
      left: 234px;
  }
  .carousel-control-next-icon,.carousel-control-prev-icon{
      width: 41px;
      height: 69px;
  }
  .carousel-control-next-icon{
      background: url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -125px 50%;

  }
  .carousel-control-next-icon:hover{
      background-position: -42px 50%;
  }
  .carousel-control-prev-icon{
      background: url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -84px 50%;

  }
  .carousel-control-prev-icon:hover{
      background-position: 0 50%;
  }
  .carousel{
      width: 1226px;
      /*height: 460px;*/
  }
</style>
