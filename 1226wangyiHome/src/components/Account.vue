<template>
    <div class="a_wrap">
        <header class="a_header">
            <p>账号</p>
        </header>
        <section class="a_section">
            <div class="s_sec">
                <!-- 登录提示 -->
                <div class="loginHint">
                    <p>登录网易云音乐</p>
                    <p>手机电脑多端同步，尽量海量高品质</p>
                    <button>立即登录</button>
                </div>
                <!-- 我的消息 -->
                <div class="myNews">
                    <img src="../images/x1.png" class="xImg"/>
                    <span>我的消息</span>
                    <img src="../images/right.png"  class="rightImg"/>
                </div>
                <!-- news1 -->
                <div class="news1">
                    <ul>
                        <li @click="goMember">
                            <img src="../images/x2.png" class="xImg"/>
                            <span>会员中心</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x3.png" class="xImg"/>
                            <span>商场</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x4.png" class="xImg"/>
                            <span>精品游戏推荐</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x5.png" class="xImg"/>
                            <span>在线听歌免流量</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                    </ul>
                </div>
                <!-- news2 -->
                <div class="news2">
                    <ul>
                        <li>
                            <img src="../images/x6.png" class="xImg"/>
                            <span>设置</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x7.png" class="xImg"/>
                            <span>扫一扫</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x8.png" class="xImg"/>
                            <span>个性皮肤</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x9.png" class="xImg"/>
                            <span>夜间模式</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x10.png" class="xImg"/>
                            <span>定时关闭</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x11.png" class="xImg"/>
                            <span>音乐闹钟</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x12.png" class="xImg"/>
                            <span>驾驶模式</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x13.png" class="xImg"/>
                            <span>亲子频道</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x14.png" class="xImg"/>
                            <span>小冰电台</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x15.png" class="xImg"/>
                            <span>优惠券</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                    </ul>
                </div>
                <!-- news3 -->
                <div class="news1">
                    <ul>
                        <li>
                            <img src="../images/x16.png" class="xImg"/>
                            <span>分享网易云音乐</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                        <li>
                            <img src="../images/x17.png" class="xImg"/>
                            <span>关于</span>
                            <img src="../images/right.png"  class="rightImg"/>    
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:"Account",
    methods:{
        goMember(){
            this.$router.push({
                name:"Member",
                path:"/Member"
            }) 
        }
    }
}
</script>

<style scoped>
    .xImg{
        width:20px;
        height:20px;
        margin-left:6px;
    }
    .rightImg{
        width:20px;
        height:20px;
    }
    .a_wrap{
        width:100%;
        height:100%;
        background:#EDEFEF;
        display:flex;
        flex-direction:column;
    }  
    .a_header{
        width:100%;
        height:40px;
        background:#D73E34;
    }
    .a_header p{
        text-align:center;
        color:#fff;
        line-height:44px;
    }
    .loginHint{
        width:100%;
        height:115px;
        background:#FBFDFD;
        padding:15px 0px;
    }
    .loginHint p{
        line-height:28px;
        text-align:center;
    }
    .loginHint button{
        width:90%;
        height:32px;
        border-radius:15px;
        margin-left:5%;
        margin-top:15px;
        background:none;
        border:1px solid #C4C5C5;
    }
    .a_section{
        height:490px;
        flex:1;
        overflow: scroll;
    }
    .s_sec{
        width:100%;
        height:490px;
    }
    .myNews{
        width: 100%;
        height: 25px;
        background: #FBFDFD;
        margin-top: 15px;
        padding: 5px 0;
    }
    .myNews .xImg{
        float: left;
    }
    .myNews span{
        float: left;
        margin-left:15px;
        font-size:14px;
        color:#535354;
    }
    .myNews .rightImg{
        float:right;
        margin-right:3px;
    }
    /* news1 */
    .news1{
        min-height:120px;
        margin-top:15px;
    }
    .news1 ul li{
        width: 100%;
        height: 25px;
        background: #FBFDFD;
        padding: 5px 0;
        border-bottom:1px solid #E7E8E9;
    }
    .news1 ul li .xImg{
        float: left;
    }
    .news1 ul li span{
        float: left;
        margin-left:15px;
        font-size:14px;
    }
    .news1 .rightImg{
        float:right;
        margin-right:3px;
    }
    /* news2 */
    .news2{
        min-height:120px;
        margin-top:15px;
    }
    .news2 ul li{
        width: 100%;
        height: 25px;
        background: #FBFDFD;
        padding: 5px 0;
        border-bottom:1px solid #E7E8E9;
    }
    .news2 ul li .xImg{
        float: left;
    }
    .news2 ul li span{
        float: left;
        margin-left:15px;
    }
    .news2 .rightImg{
        float:right;
        margin-right:3px;
    }
</style>
