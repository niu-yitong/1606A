<template>
    <div class="h_wrap">
        <!-- 头部 -->
        <header class="h_header">
            <ul>
                <li>订单提交</li>
                <li>填写收货地址</li>
                <li>正在办理</li>
                <li>办理完成</li>
            </ul>
        </header>
        <!-- 内容 -->
        <section class="h_section">
            <img class="bn1" src="../assets/bn1.jpg"/>
            <div class="showPic">
                <dl @click="show('zhengOne')">
                    <dt><img src="../assets/t1.jpg"/></dt>
                    <dd>身份证正面</dd>
                </dl>
                <dl @click="show('zhengTwo')">
                    <dt><img src="../assets/t1.jpg"/></dt>
                    <dd>身份证反面</dd>
                </dl>
                <dl @click="show('zhengThree')">
                    <dt><img src="../assets/t1.jpg"/></dt>
                    <dd>驾驶证正页</dd>
                </dl>
                <dl @click="show('zhengFour')">
                    <dt><img src="../assets/t1.jpg"/></dt>
                    <dd>驾驶证副页</dd>
                </dl>
                <dl @click="show('zhengFive')">
                    <dt><img src="../assets/t1.jpg"/></dt>
                    <dd>白底半身照</dd>
                </dl>
            </div>
            <div class="choose">
                <ul>
                    <li @click="changeJiazhao">
                       <p>服务类型</p>
                       <div><span>{{form.type}}</span></div>
                    </li>
                    <li @click="showCity">
                        <p>当前驾照签发城市</p>
                        <span>{{qianfaArea}}</span>
                    </li>
                    <li>
                        <p>可补换的签发城市</p>
                        <span>请选择补换地</span>
                    </li>
                    <li>
                        <p>服务费</p>
                        <span class="money">￥399</span>
                    </li>
                </ul>
            </div>
            <div class="member">
                <ul>
                    <li>
                        <p>优惠</p>
                        <span>登陆后查看优惠券</span>
                    </li>
                </ul>
            </div>
            <div class="issue">
                <a>常见问题</a>
            </div>
            <div class="peoBox">
                <img src="../assets/people.jpg"/>
            </div>
        </section>
        <!-- 底部 -->
        <footer class="h_footer">
            <div class="h_footer_l">
                <p>实付：<span>￥399</span></p>
            </div>
            <div class="h_footer_r">
                <p>立即支付</p>
            </div>
        </footer>
        <!-- 遮罩层 -->
        <div class='msk' v-if="showMsk">
            <!-- 证件照 -->
            <div class="zhengjian_pic">
                <img :src="src" class="zheng"/>
                <img src="../assets/t3.png" class="direc"/>
            </div>
            <!-- 照片 -->
            <div class="photo">
                <ul>
                    <li>拍照</li>
                    <li>相册</li>
                    <li class="cancel" @click="hideMsk">取消</li>
                </ul>
            </div>
        </div>
        <!-- 城市 -->
        <div class="city">
            <mt-popup v-model="popupVisible" position="bottom" class="cityBox">
              <mt-picker :slots="myAddressSlots" valueKey="name" :visibleItemCount	="5" @change="addressChange" :itemHeight="40"></mt-picker>
            </mt-popup>
        </div>
        <!-- 补换驾照 -->
        <div class="changeJiazhao">
            <mt-popup v-model="showType" position="bottom" class="changeJiazhaoBox">
                <mt-picker :slots="typeArray" showToolbar title="服务器类型"></mt-picker>    
            </mt-popup>
        </div>
    </div>
</template>

<script>
import threeLevelAddress from '../assets/json/areaCode.json'
export default {
    name:"Home",
    data(){
        return{
           showMsk:false ,
           src:"",
           popupVisible:false,
           showType:false,
           qianfaArea:"请选择签发地",
           typeArray:[{values: ['换驾照', '补驾照']}],
           form:{
               type:""
           },
           region:'',//三级地址
            province:'',//省
            city:'',//市
            county:'',//县
            provinceCode:'',//省级代码
            cityCode:'', //市级代码
            countyCode:'',//县级代码
    
            regionVisible:false,//弹出框是否可见
            regionInit:false,//禁止地区选择器自动初始化，picker组件会默认进行初始化，导致一进入页面就会默认选中一个初始3级地址
    
            //picker组件插槽
            myAddressSlots: [
              //省
            {
                flex: 1,
                values: this.getProvinceArr(), //省份数组
                className: 'slot1',
                textAlign: 'center'
            },
               //分隔符
            {
                divider: true,
                content: '',
                className: 'slot2'
            },
              //市
            {
                flex: 1,
                values: this.getCityArr("北京市"),
                className: 'slot3',
                textAlign: 'center'
            },
            {
                divider: true,
                content: '',
                className: 'slot4'
            },
              //县
            {
                flex: 1,
                values: this.getCountyArr("北京市","市辖区"),
                className: 'slot5',
                textAlign: 'center'
            }
            ]
 
        }
        
    },
    methods:{
        changeJiazha(){
            alert(1111);
            console.log("changeJiazha");
        },
        show(type){
            // alert(type);
            switch(type){
                case "zhengOne":
                    this.src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2817490231,1179631914&fm=26&gp=0.jpg";
                    break;
                case "zhengTwo":
                    this.src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4137165709,1908937682&fm=26&gp=0.jpg";
                    break;
                case "zhengThree":
                    this.src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3584413984,3881781062&fm=26&gp=0.jpg";
                    break;
                case "zhengFour":
                    this.src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=562645827,2549618307&fm=26&gp=0.jpg";
                    break;
                case "zhengFive":
                    this.src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075745582,2752736493&fm=26&gp=0.jpg";
                    break;
                default:
                break;
                
            };
            this.showMsk=true
        },
        showCity(){
           this.popupVisible=true; 
        },
        changeJiazhao(){
            this.showType=true; 
        },
        hideMsk(){
            this.showMsk=false;
        },
        onValuesChange(picker, values) {
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
        },

         addressChange(picker, values){
        console.log(picker+"aaaaaaaaaaaaaaaaaaaaa");
        console.table(values);
        if (this.regionInit){
          //取值并赋值
          this.region = values[0]["name"] + values[1]["name"] + values[2]["name"];
          this.province = values[0]["name"];
          this.city = values[1]["name"];
          this.county = values[2]["name"];
          this.provinceCode = values[0]["code"];
          this.cityCode = values[1]["code"];
          this.countyCode = values[2]["code"];
          this.qianfaArea = this.region;
          console.log(picker.getSlotValue(0));
          console.table(picker.getSlotValues(0));
          console.table(picker.getValues());
          //给市、县赋值
          picker.setSlotValues(1, this.getCityArr(values[0]["name"]));
          picker.setSlotValues(2, this.getCountyArr(values[0]["name"], values[1]["name"]));
        }else {
          this.regionInit = true;
        }
      },
      //遍历json，返回省级对象数组
      getProvinceArr() {
          console.log(threeLevelAddress)
        let provinceArr = [];
        threeLevelAddress.forEach(function (item) {
          let obj = {};
          obj.name = item.name;
          obj.code = item.code;
          provinceArr.push(obj);
        });
        return provinceArr;
      },
      //遍历json，返回市级对象数组
      getCityArr(province) {
        // console.log("省：" + province);
        let cityArr = [];
        threeLevelAddress.forEach(function (item) {
          if (item.name === province) {
            item.children.forEach(function (args) {
              let obj = {};
              obj.name = args.name;
              obj.code = args.code;
              cityArr.push(obj);
            });
          }
        });
        return cityArr;
      },
      //遍历json，返回县级对象数组
      getCountyArr(province,city){
        let countyArr = [];
        threeLevelAddress.forEach(function(item){
          if (item.name === province){
            item.children.forEach(function (args) {
              if (args.name === city){
                args.children.forEach(function (param) {
                  let obj = {};
                  obj.name=param.name;
                  obj.code=param.code;
                  countyArr.push(obj);
                })
              }
            });
          }
        });
        // console.log(countyArr);
        return countyArr;
      },

    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
    list-style:none;
}
html,body{
    width:100%;
    height:100%;
}
.msk{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
}
.zhengjian_pic{
    width: 96%;
    height: 207px;
    background: #fff;
    margin-top: 80px;
    margin-left: 2%;
    padding:20px 20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    box-sizing: border-box;
}
.zheng{
    width: 220px;
    height: 150px;
    /* float: left;
    margin-left: 20px;
    margin-top: 30px; */
}
.direc{
    width: 80px;
    height: 148px;
    /* float: right;
    margin-right: 10px;
    margin-top: 30px; */
}
.photo{
    width:96%;
    min-height:80px;
    border-radius:4px;
    margin-left:2%;
}
.photo ul li{
    width:100%;
    height:45px;
    background:#ECECEC;
    line-height:45px;
    border-bottom:1px solid #999999;
    color:#5DACF6;
    text-align:center;
    border-radius:4px;
}
.cancel{
    font-weight:bold;
    margin:8px 0;
    border-radius:4px;
}
.h_wrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background:#EEEEEE;
}
.h_header{
    width:100%;
    height:48px;
    background:#fff;
}
.h_header ul{
    line-height:48px;
    display:flex;
    flex-direction:row;
    justify-content:space-around; 
    font-size:16px;
}
.h_section{
    flex:1;
    width:100%;
    position: relative;
}
.bn1{
    width:100%;
    height:120px;
}
.showPic{
    width:100%;
    height:120px;
    background:#fff;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
}
.showPic dl{
    width:20%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:14px;
}
.showPic dl dt{
    width:48px;
    height:38px;
}
.showPic dl dt img{
    width:100%;
    height:100%;
}
.showPic dl dd{
    width:50px;
    font-size:14px;
    text-align:center;
}
.choose{
    width:100%;
    min-height:130px;
    background:#fff;
    margin-top:8px;
}
.choose ul {
    padding:0 0 0 8px;
}
.choose ul li {
    width:100%;
    height:48px;
    font-size:14px;
    line-height:48px;
    border-bottom:1px solid #ccc;
}
.choose ul li p{
    float: left;
    color:#333;
}
.choose ul li span{
    float:right;
    color:#757575;
    margin-right:8px;
}
.choose ul li:last-child{
    border-bottom:none;
}
.money{
    color:#FD6766!important;
}
.member{
    width:100%;
    min-height:48px;
    margin-top:8px;
    background:#fff;
}
.member ul {
    padding:0 0 0 8px;
}
.member ul li {
    width:100%;
    height:48px;
    font-size:14px;
    line-height:48px;
    border-bottom:1px solid #ccc;
}
.member ul li p{
    float: left;
    color:#333;
}
.member ul li span{
    float:right;
    color:#757575;
    margin-right:8px;
}
.member ul li:last-child{
    border-bottom:none;
}
.issue{
    width:100%;
    height:32px;
    margin-top:5px;
}
.issue a{
    text-align:center;
    line-height:32px;
    color:#45ACF1;
    margin:0 auto;
    margin-left:150px;
    font-size:14px;
    text-decoration:underline;
}
.peoBox{
    position: absolute;
    right: 1px;
    bottom: 74px;
}
.peoBox img{
    width:60px;
    height:60px;
}
.h_footer{
    width:100%;
    height:45px;
    background:#fff;
}
.h_footer_l{
    float: left;
    line-height:45px;
}
.h_footer_l p{
    color:#252525;
    margin-left:12px;
}
.h_footer_l span{
    color:#FD6766;
}
.h_footer_r{
    width:120px;
    height:100%;
    background:#999;
    float: right;
}
.h_footer_r p{
    color:#fff;
    line-height:45px;
    text-align:center;
}
/* 签发城市 */
.cityBox{
    width:100%;
    height:300px;
}
.changeJiazhaoBox{
    width:100%;
    height:300px;
}
</style>
