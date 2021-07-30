<!--
 * @Author: your name
 * @Date: 2021-07-21 08:17:25
 * @LastEditTime: 2021-07-30 14:51:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\components\unrecord.vue
-->
<template>
  <div>
    <!-- 头部header -->
    <div class="fixedheade">
      <header v-show="ismouse == true">
        <div class="left_vacancy2"></div>
        <div class="css_hediv">
          <a href="#" class="cursor">知乎</a>
          <ul class="tab_item">
            <li @click="isclickheader()">
              <a href="javascript:;" class="lileft">首页</a
              ><span :class="headerstatus ? 'bottomxiaone' : ''"></span>
            </li>
            <li @click="isclickheader2()">
              <a href="javascript:;">会员</a
              ><span :class="headerstatustwo ? 'bottomxiatwo' : ''"></span>
            </li>
            <li>
              <a href="javascript:;" @click="isclickheader3()">发现</a
              ><span :class="headerstatusthree ? 'bottomxiatwo' : ''"></span>
            </li>
            <li>
              <a href="javascript:;" @click="isclickheader4()">等你来答</a
              ><span :class="headerstatusfour ? 'bottomxiathree' : ''"></span>
            </li>
          </ul>
          <div class="head_search">
            <label for="">
              <input type="text" placeholder="台风烟花" />
              <span class="iconfont icon-sousuo sousuo"></span>
            </label>
            <button>提问</button>
            <span class="iconfont icon-icon_news_fill icon_span"></span>
            <span class="iconfont icon-bangzhu icon_spantwo"></span>
            <img src="https://pic2.zhimg.com/da8e974dc_is.jpg" alt="" />
          </div>
        </div>
        <div class="right_vacancy"></div>
      </header>
      <!-- 头部切换 -->
      <header v-show="ismouse == false">
        <div class="left_vacancy2"></div>
        <div class="css_hediv">
          <a href="#" class="cursor">知乎</a>
          <ul class="tab_itemtwo">
            <li><a href="" class="lileft">关注</a></li>
            <li><a href="">推荐</a></li>
            <li><a href="">热榜</a></li>
            <li><a href="">视频</a></li>
          </ul>
          <div class="head_searchtwo">
            <label for="">
              <input type="text" placeholder="台风烟花" />
              <span class="iconfont icon-sousuo sousuo"></span>
            </label>
            <button>提问</button>
          </div>
        </div>
        <div class="right_vacancy"></div>
      </header>
    </div>
    <div class="big_box" v-show="headerstatus">
      <!-- 左侧缩放 -->
      <div class="left_vacancy"></div>
      <!-- 内容主体 -->
      <div class="box">
        <!-- 左边内容 -->
        <div class="box_left">
          <div class="left_content">
            <div class="left_content_header">
              <ul>
                <li><a href="" class="left_content_header_color">关注</a></li>
                <li><a href="">推荐</a></li>
                <li><a href="">热榜</a></li>
                <li><a href="">视频</a></li>
              </ul>
            </div>
          </div>
          <zhihuitem></zhihuitem>
          <zhihuitem></zhihuitem>
          <zhihuitem></zhihuitem>
          <zhihuitem></zhihuitem>
          <zhihuitem></zhihuitem>
          <zhihuitem></zhihuitem>
        </div>
        <!-- 主体右边功能 -->
        <div class="box_right">
          <!-- 第一栏 -->
          <div>
            <div class="top_right">
              <span>
                <div class="iconfont icon-dingdanzhongxin circleone"></div>
                <div class="fontcolor" title="回答">回答问题</div>
              </span>
              <span>
                <div class="iconfont icon-shipin circletwo"></div>
                <div class="fontcolor" title="发布">发布视频</div>
              </span>
              <span>
                <div class="iconfont icon-xiewenzhang circlethree"></div>
                <div class="fontcolor" title="写文章">写文章</div>
              </span>
              <span>
                <div class="iconfont icon-lightbulb circlefour"></div>
                <div class="fontcolor" title="写想法 ">写想法</div>
              </span>
            </div>
            <div class="right_dai">
              <span>稍后答</span>
              <span>草稿箱</span>
            </div>
          </div>
          <!-- 功能栏 -->
          <div class="da_right">
            <span class="Writing_center"
              ><i class="iconfont icon-ren"></i> 创作中心</span
            >
            <span class="spango"> 去开通 > </span>
          </div>
          <div :class="fixflag ? 'isfixed' : ' '">
            <div class="right_gong">
              <a href="#">
                <img
                  src="https://pic1.zhimg.com/v2-227b4721fecef8b1aa88450299595f99.png"
                  alt=""
                />
              </a>
              <ul>
                <li>
                  <span class="iconfont icon-shandian yellow"></span> Live
                </li>
                <li>
                  <span class="iconfont icon-bookshelf green"></span> 书店
                </li>
                <li>
                  <span class="iconfont icon-fengshan-copy blue"></span> 圆桌
                </li>
                <li><span class="iconfont icon-bi blue"></span> 专栏</li>
                <li>
                  <span class="iconfont icon-fufei-copy blue2"></span> 付费咨询
                </li>
                <li><span class="iconfont icon-baike blue3"></span> 百科</li>
              </ul>
            </div>
            <!-- 功能列表 -->
            <div class="right_list">
              <ul>
                <li>
                  <i class="iconfont icon-shoucang"></i> 我的收藏<span
                    class="liright"
                    >{{ $store.state.collectnum }}</span
                  >
                </li>
                <li>
                  <i class="iconfont icon-wenti"></i> 我关注的问题
                  <span class="liright">0</span>
                </li>
                <li><i class="iconfont icon-ren"></i> 我的邀请</li>
                <li><i class="iconfont icon-yueguanli"></i> 我的余额</li>
                <li><i class="iconfont icon-feiyongwenti"></i> 站务中心</li>
                <li><i class="iconfont icon-fuwuerji"></i> 帮助中心</li>
                <li><i class="iconfont icon-c"></i> 版权服务中心</li>
              </ul>
            </div>
            <footer class="right_footer">
              <ul>
                <li>刘看山 知乎 指南 知乎协议 知乎隐私保护指引</li>
                <li>应用工作申请开通知乎机构号</li>
                <li>侵权举报网上有害信息举报专区</li>
                <li>京 ICP 证 110745 号</li>
                <li>京 ICP 备 13052560 号 - 1</li>
                <li>
                  <img
                    src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png"
                    alt=""
                  />
                  京公网安备 11010802020088 号
                </li>
                <li>互联网药品信息服务资格证书</li>
                <li>（京）- 非经营性 - 2017 - 0067</li>
                <li>违法和不良信息举报：010-82716601</li>
                <li>儿童色情信息举报专区</li>
                <li>信息安全漏洞反馈专区</li>
                <li>证照中心Investor Relations</li>
                <li>联系我们 © 2021 知乎</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
      <!-- 右侧侧缩放 -->
      <div class="right_vacancy"></div>
    </div>
    <!-- 会员功能 -->
    <div v-show="headerstatustwo"><p>会员功能待开发</p></div>
    <!-- 发现 -->
    <div v-show="headerstatusthree"><p>发现功能待开发</p></div>
    <!-- 等你来答 -->
    <div v-show="headerstatusfour"><p>等你来答功能待开发</p></div>
    <div
      v-if="btnFlag"
      class="iconfont icon-icon2 go-top"
      title="回到顶部"
      @click="backTop"
    ></div>
  </div>
</template>
<script>
import zhihuitem from "@/components/zhihuitem.vue";
export default {
  name: "Homepage",
  components: {
    zhihuitem,
  },
  data() {
    return {
      ismouse: true,
      btnFlag: false,
      fixflag: false,
      headerstatus: true,
      headerstatustwo: false,
      headerstatusthree: false,
      headerstatusfour: false,
    };
  },
  computed: {},
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    window.addEventListener("scroll", this.handleScroll, true);
    window.addEventListener("scroll", this.scrollfixed, true);
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    /* 监听右侧 固定  */
    scrollfixed() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 268) {
        that.fixflag = true;
      } else {
        that.fixflag = false;
      }
    },
    handleScroll() {
      // 监听鼠标滚动
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if (scroll < 0) {
        this.ismouse = true;
      } else {
        this.ismouse = false;
      }
    },
    isclickheader() {
      this.headerstatus = true;
      this.headerstatustwo = false;
      this.headerstatusthree = false;
      this.headerstatusfour = false;
    },
    isclickheader2() {
      this.headerstatus = false;
      this.headerstatustwo = true;
      this.headerstatusthree = false;
      this.headerstatusfour = false;
    },
    isclickheader3() {
      this.headerstatus = false;
      this.headerstatustwo = false;
      this.headerstatusthree = true;
      this.headerstatusfour = false;
    },
    isclickheader4() {
      this.headerstatus = false;
      this.headerstatustwo = false;
      this.headerstatusthree = false;
      this.headerstatusfour = true;
    },
  },
};
</script>

<style lang="scss">
@import "../scss/iconfont/iconfont.css";
@import "../scss/css/common.scss";
@import "../scss/css/base.scss";
</style>