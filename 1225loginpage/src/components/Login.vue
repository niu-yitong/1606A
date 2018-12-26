<template>
    <div class="loginBox">
        <header class="header">
            <span @click="goIndex">返回</span>
            <h3>手机号登录</h3>
        </header>
        <section class="section">
            <ul class="l_uls">
                <li><input type="text" placeholder="手机号"/></li>
                <li><input type="text" placeholder="密码"/></li>
                <li><button>登录</button></li>
                <li><a>重设密码</a></li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name:"Login",
    methods: {
        goIndex(){
            this.$router.push({
                name:"Mindex",
                path:"/Mindex"
            })   
        }
    }
}
</script>

<style>
    .loginBox{
        width:100%;
        height:100%;
        display:flex;
        flex-direction: column;
    }
    .header{
        width:100%;
        height:44px;
        background:#353A3C;
    }
    .header span{
        float: left;
        color:#fff;
        margin-left:12px;
        line-height:44px;
    }
    .header h3{
        text-align: center;
        color:#fff;
        line-height:44px;
    }
    .section{
        width:100%;
        flex:1;
    }
    .l_uls{
        margin-top:30px;
    }
    .l_uls li {
        width:80%;
        height:32px;
        line-height:32px;
        margin-top:10px;
        margin-left:10%;
    }
    .l_uls li input{
        width:100%;
        height:32px;
        border:none;
        border-bottom:1px solid #ccc;
    }
    .l_uls li button{
        width:100%;
        height:35px;
        border-radius:15px;
        background:#3D4345;
        color:#5F6365;
        margin-top:10px;
    }
    .l_uls li a{
        margin-left:140px;
        margin-top:60px;
        font-size:12px;
    }
</style>
