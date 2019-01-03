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
                    <li @click="showJiazhao">
                       <p>服务类型</p>
                       <div><span>换驾照</span></div>
                    </li>
                    <li @click="showCity">
                        <p>当前驾照签发城市</p>
                        <span>请选择签发地</span>
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
        <div class="city">
            <mt-popup v-model="popupVisible" position="bottom" class="cityBox">
                <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
            </mt-popup>
        </div>
        <!-- 换驾照 -->
        <Showjiazhao></Showjiazhao>
    </div>
</template>

<script>
import Showjiazhao from "./Showjiazhao"
export default {
    name:"Home",
    data(){
        return{
           showMsk:false ,
           src:"",
           popupVisible:false,
           slots: [
                {
                flex: 1,
                values: ['北京', '上海', '广州', '2015-04', '2015-05', '2015-06'],
                className: 'slot1',
                textAlign: 'right'
                }, {
                divider: true,
                content: '-',
                className: 'slot2'
                }, {
                flex: 1,
                values: ['北1', '2上海', '2015-03', '2015-04', '2015-05', '2015-06'],
                className: 'slot3',
                textAlign: 'left'
                }
            ]
        }
        
    },
    methods:{
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
        hideMsk(){
            this.showMsk=false;
        },
        onValuesChange(picker, values) {
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
        },
        showJiazhao(){
            alert(1)
        }
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
    height:140px;
}
</style>
