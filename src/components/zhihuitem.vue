<!--
 * @Author: your name
 * @Date: 2021-07-21 08:17:25
 * @LastEditTime: 2021-07-30 17:34:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\components\record.vue
-->
<template>
  <div>
    <div class="left_content_bottom" v-for="(item, key) in list" :key="key">
      <div>
        <ul class="firstul">
          <li class="lione"><a href="">江小白&ensp;</a>回答了问题 • 1小时前</li>
          <li class="litwo">
            <a href="">{{ item.title }}</a>
          </li>
          <li>{{ item.header }}</li>

          <li class="li_p">
            <p ref="height">{{ item.content | ellipsis(70, item.isflag) }}</p>
          </li>
          <li class="lithree" v-show="item.isflag" @click="isSpread(key)">
            阅读全文
          </li>
        </ul>
        <ul class="secondul">
          <li :class="item.isapprove ? 'btnone' : 'big_btnnone '">
            <button @click="approvebtn(key)">
              <i :class="item.isapprove ? 'shang' : 'shang_white '"></i
              ><span>
                {{ item.isapprove ? " 赞同" : "已赞同"
                }}{{ item.endorsenum }}</span
              >
            </button>
          </li>
          <button
            @click="noapprovebtn(key)"
            :class="item.isnoapprove ? 'btntwo' : 'big_btntwo '"
          >
            <i :class="item.isnoapprove ? 'xia' : 'xia_white '"></i>
          </button>
          <li>
            <button class="btncomm">
              <i class="iconfont icon-ziyuan"></i> {{ item.commentnum }} 条评论
            </button>
          </li>
          <li>
            <button class="btncomm">
              <i class="iconfont icon-fenxiang2"></i> 分享
            </button>
          </li>
          <li>
            <button class="btncomm">
              <i class="iconfont icon-shoucang"></i> 收藏
            </button>
          </li>
          <li>
            <button class="btncomm" @click="islovebtn(key)">
              <i class="iconfont icon-xihuan"></i
              >{{ item.islove ? "取消喜欢" : "喜欢" }}
            </button>
          </li>
          <li class="iconfont icon-gengduo juli"></li>
          <li v-show="item.isflag == false">
            <button class="shouqi" @click="noSpread(key)">收起</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhihuitem",
  data() {
    return {
      list: [
        {
          title: "时代周刊06年风度人物",
          header: "每年阅读200本书真的具有可行性吗？",
          content:
            "疫情居家隔离期间，我有认真的反思自己：原来原来原来把我关在家里三个月我也并不会珍惜这份难得的时间来专注读书，而是要打王者荣耀跟看美剧。疫情居家隔离期间，疫情居家隔离期间，我有认真的反思自己：原来把我关在家里三个月我也并不会珍惜这份难得的时间来专注读书，而是要打王者荣耀跟看美剧。我有认真的反思自己：原来把我关在家里三个月我也并不会珍惜这份难得的时间来专注读书，而是要打王者荣耀跟看美剧。",
          ishide: true, //展开
          isflag: true, //阅读全文收起
          endorsenum: 25, //点赞数
          commentnum: 10, //评论数
          commentcontent: "", //评论内容
          islove: false, //是否喜欢
          isapprove: true, //赞同
          isnoapprove: true,
        },
        {
          title: "音乐制作话题下的优秀答主",
          header: "为什么很多人强调编曲中编写乐器要符合实际演奏？",
          content:
            "反问：你希望你的作品有一天可以搬上舞台演出吗？你是希望这一天早点来还是晚点来？等人长出第三只手，怕是万八千年都过了不知道多少轮了。当然，你完全可以不计成本，一个人来不了就两个人，但是以这个问题的思维，怕是会觉得人多起来了就不炫了，所以一个三只手的乐手，要比两个正常乐手要炫，那么两个乐手得弹六七只手的才行。",
          isflag: true, //阅读全文收起
          endorsenum: 99, //点赞数
          commentnum: 60, //评论数
          commentcontent: "", //评论内容
          islove: false, //是否喜欢
          isapprove: true, //赞同
          isnoapprove: true,
        },
        {
          title: "国际体育话题下的优秀答主",
          header: "国际体联对桥本大辉男子全能跳马争议成绩给出了完整打分解释",
          content:
            "  FIG（国际体操联合会）从昨晚男子体操全能决赛后至今，其网络社交账号（INS为主）持续遭到了海量的辱骂刷屏，今天上午更是不堪其扰而关闭了INS的帖子评论功能。在今晚早些时候，FIG史无前例地公针对桥本大辉男子全能跳马争议成绩，给出了完整打分解释声明。这也是FIG第一次公布正式比赛的E分完成分的详细打分大致翻译：桥本大辉在7月28日的男子全能跳马比赛中获得的分数引起了众多评论，国际体操联合会(FIG)想要确认这次比赛的裁判是公正和准确的。国际体操联合会进行的赛后分析表明，裁判小组采用了现行的打分规则。桥本大辉本次跳马动作确认为5.6分的D分难度分关于E分完成分，评审裁判按照满分10分从以下扣分点中扣除：0.1 第一阶段轻微分腿（上马分腿）0.1 身体轻微弯曲（腾空屈髋）0.1 第二阶段轻微分腿0.1 落地准备不足  （落地弯腰，展体不足）0.1 落地不完全转体（没有转正，度数不足）0.3 落地一大步（最大扣分）P分罚分：0.1 右脚出界罚分完成分10-0.8=9.2分。最终得分：5.6+9.2-0.1=14.7分综上，FIG可以确认：桥本大辉的14.7分得分是正确的，符合打分规则。最终排名亦是如此。FIG在此感谢所有运动员在比赛展现的出色发挥和运动精神。至此，官方解答已出，尘埃落定。这也是据我所知，体操项目到现在为止，第一次官方针对所谓的“争议”单独发公告。无论是普通观众还是体操名将针对打分的质疑，都可以有所停歇了。感谢认真研究过规则的体操迷们，在贴吧、微博、知乎积极发帖科普做出的辛苦工作。附原提问回答：2020 东京奥运竞技体操男子组个人全能决赛肖若腾遗憾摘银，如何评价本场比赛？目前该回答已无法阅读，笔者在此附上全文备份：结论放前面：1、桥本大辉的跳马打分基本没有问题。2、“动作结束后没有向裁判示意扣0.3”这一条是清清楚楚写在规则明文里的，之前大型比赛里也有过其他国选手被判罚的先例。根据NBC电视台转播的镜头来看，肖若腾确实出现了忘记向裁判示意的情况。（详细分析请看下文）强调一下：体操项目不是只看落地，还要看空中姿态、动作质量。 首先要知道体操的总分构成，总分=D分难度分+E分完成分-P分罚分。出界属于罚分范畴。落地一大步属于完成分范畴。然后跳马怎么看？跳马分为第一腾空+第二腾空+落地，主要由这三个方面考察，落地也分落地时的展体姿态、是否转足角度、落地是否稳定等等。一般观众只会看落地站的稳不稳，有没有出界，很容易忽视前面的扣分点，从而被误导。先发一下最新周期版本下的跳马罚分P分的扣分规则：大致翻译：桥本大辉在7月28日的男子全能跳马比赛中获得的分数引起了众多评论，国际体操联合会(FIG)想要确认这次比赛的裁判是公正和准确的。国际体操联合会进行的赛后分析表明，裁判小组采用了现行的打分规则。桥本大辉本次跳马动作确认为5.6分的D分难度分关于E分完成分，评审裁判按照满分10分从以下扣分点中扣除：0.1 第一阶段轻微分腿（上马分腿）0.1 身体轻微弯曲（腾空屈髋）0.1 第二阶段轻微分腿0.1 落地准备不足  （落地弯腰，展体不足）0.1 落地不完全转体（没有转正，度数不足）0.3 落地一大步（最大扣分）P分罚分：0.1 右脚出界罚分完成分10-0.8=9.2分。最终得分：5.6+9.2-0.1=14.7分综上，FIG可以确认：桥本大辉的14.7分得分是正确的，符合打分规则。最终排名亦是如此。FIG在此感谢所有运动员在比赛展现的出色发挥和运动精神。至此，官方解答已出，尘埃落定。这也是据我所知，体操项目到现在为止，第一次官方针对所谓的“争议”单独发公告。无论是普通观众还是体操名将针对打分的质疑，都可以有所停歇了。感谢认真研究过规则的体操迷们，在贴吧、微博、知乎积极发帖科普做出的辛苦工作。附原提问回答：2020 东京奥运竞技体操男子组个人全能决赛肖若腾遗憾摘银，如何评价本场比赛？目前该回答已无法阅读，笔者在此附上全文备份：结论放前面：1、桥本大辉的跳马打分基本没有问题。2、“动作结束后没有向裁判示意扣0.3”这一条是清清楚楚写在规则明文里的，之前大型比赛里也有过其他国选手被判罚的先例。根据NBC电视台转播的镜头来看，肖若腾确实出现了忘记向裁判示意的情况。（详细分析请看下文）强调一下：体操项目不是只看落地，还要看空中姿态、动作质量。 首先要知道体操的总分构成，总分=D分难度分+E分完成分-P分罚分。出界属于罚分范畴。落地一大步属于完成分范畴。然后跳马怎么看？跳马分为第一腾空+第二腾空+落地，主要由这三个方面考察，落地也分落地时的展体姿态、是否转足角度、落地是否稳定等等。一般观众只会看落地站的稳不稳，有没有出界，很容易忽视前面的扣分点，从而被误导。先发一下最新周期版本下的跳马罚分P分的扣分规则：",
          isflag: true, //阅读全文收起
          endorsenum: 99, //点赞数
          commentnum: 60, //评论数
          commentcontent: "", //评论内容
          islove: false, //是否喜欢
          isapprove: true, //赞同
          isnoapprove: true,
        },
      ],
    };
  },
  computed: {},
  created(){
    this.$axios.get("http://localhost:3000/list")
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  },
  /* 展开全文收起 */
  filters: {
    ellipsis: function (value, len, key) {
      if (key) {
        if (value.length > len) {
          return value.slice(0, len) + "...";
        }
      } else {
        return value;
      }
    },
  },
  methods: {
    //点赞按钮
    approvebtn(key) {
      if (this.list[key].isapprove) {
        this.list[key].isnoapprove = true;
        this.list[key].isapprove = false;
        this.list[key].endorsenum++;
      } else {
        this.list[key].isapprove = true;
        this.list[key].endorsenum--;
      }
    },
    //取消点赞
    noapprovebtn(key) {
      if (this.list[key].isapprove == false) {
        this.list[key].endorsenum--;
        this.list[key].isapprove = true;
        this.list[key].isnoapprove = false;
      } else if (this.list[key].isnoapprove == false) {
        this.list[key].isnoapprove = true;
      } else if (this.list[key].isnoapprove == true) {
        this.list[key].isnoapprove = false;
      }
    },
    //是否喜欢
    islovebtn(key) {
      if (this.list[key].islove == false) {
        this.list[key].islove = true;
      } else {
        this.list[key].islove = false;
      }
    },
    //展开
    isSpread(key) {
      this.list[key].isflag = false;
    },
    noSpread(key) {
      this.list[key].isflag = true;
    },
  },
};
</script>

<style lang="scss" >
</style>

