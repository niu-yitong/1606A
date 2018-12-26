<template>
    <div class="wrap">
        <section class="section">
            <div class="logoBox">
                <img src="../images/logo.png" class="logo"/>
            </div>
            <ul class="m_uls">
                <li><button class="btn" @click="goLogin">手机号登录</button></li>
                <li><button class="btn">注册</button></li>
                <li><a>游客试用</a></li>
            </ul>
        </section>
        <footer class="footer">
            <div class="footer_top"><p>—————— 其他登录方式 ——————</p></div>
            <div class="footer_bot">
                <dl>
                    <dt><i class="icon iconfont icon-weixin"></i></dt>
                    <dd>微信</dd>
                </dl>
                <dl>
                    <dt><i class="icon iconfont icon-qq"></i></dt>
                    <dd>QQ</dd>
                </dl>
                <dl>
                    <dt><i class="icon iconfont icon-xinlangweibo"></i></dt>
                    <dd>微博</dd>
                </dl>
                <dl>
                    <dt><i class="icon iconfont icon-youxiang"></i></dt>
                    <dd>网易</dd>
                </dl>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:"Mindex",
    methods:{
        goLogin(){
            this.$router.push({
                name:"Login",
                path:"/Login"
            })
        }
    }
}
</script>

<style>
    .wrap{
        width:100%;
        height:100%;
        background:#FFFCFC;
        display:flex;
        flex-direction: column;
    }
    .section{
        flex:1;
    }
    .footer{
        width:100%;
        height:140px;
        border-top:1px solid #ccc;
    }
    .footer_top p{
        text-align:center;
        padding-top:10px;
    }
    .footer_bot{
        display:flex;
        flex-direction:row;
        justify-content: space-around;
    }
    .footer_bot dl{
        margin-top:20px;
    }
    .footer_bot dl dt{
        width:40px;
        height:40px;
        border:1px solid #ccc;
        border-radius:50%;
    }
    .footer_bot dl dt i{
        text-align:center;
        margin-left:5px;
        font-size:28px;
        margin-top:8px;
    }
    .footer_bot dl dd{
        margin-top:10px;
    }
    .logoBox{
        width:100%;
        height:180px;
    }
    .logo{
        width:90px;
        height:90px;
        margin-top:80px;
        margin-left:40%;
        margin-bottom:30px;
    }
    .m_uls li{
          margin-top:20px;
    }
    .btn{
        width:80%;
        height:35px;
        border:1px solid #D43D34;
        border-radius:15px;
        background:none;
        margin-left:10%;
        color:#D2362C;
    }
    .m_uls li a{
        margin-left:180px;
        margin-top:30px;
        font-size:12px;
    }
</style>
