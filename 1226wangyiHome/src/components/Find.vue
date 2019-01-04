<template>
    <div class="f_wrap">
        <header class="f_header">
            <div class="header_t_l">
                <img src="../images/p1.jpg"/>
            </div>
            <div class="header_t_c">
                <i class="icon iconfont icon-sousuo"></i>
                <input type="text" placeholder="猜你喜欢 浮生"/>
            </div>
            <div class="header_t_r">
                <img src="../images/p2.jpg"/>
            </div>      
        </header>   
        <section class="f_section">
            <div class="section_t">
                <div class="section_box">
                    <router-link  to="/Recommend" tag="span">个性推荐</router-link>
                    <router-link  to="/Station" tag="span">主播电台</router-link>    
                </div>
            </div>
            <div class="section_content">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:"Find"
}
</script>

<style>
.activeRoute{
    border-bottom:1px solid #fff;
}
.f_wrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
}
.f_header{
    width:100%;
    height:46px;
    background:#33383B;
    padding:10px 15px;
    display:flex;
    box-sizing: border-box;
    flex-direction:row;
    justify-content:space-between;
    border:none;
}
.f_header img {
    width:28px;
    height:28px;
}
.header_t_c{
    width:250px;
    height:32px;
    background:#5B6161;
    border-radius:15px;
    position: relative;
}
.header_t_c i{
    font-size:22px;
    color:#8A8E8F;
    position: absolute;
    left:5px;
    top:4px;
}
.header_t_c input{
    outline:none;
    width:90%;
    height:32px;
    border:none;
    margin-left:10%;
    background:none;
    text-align:center;
    color:#A6AAAB;
}
.f_section{
    flex:1;
    overflow: hidden;
    display:flex;
    flex-direction:column;
}
.section_t{
    width:100%;
    height:190px;
    background:#33383B;
    position: relative;
   
}
.section_box{
     display:flex;
    flex-direction:row;
    justify-content: space-around;
}
.section_box span{
    color:#fff;
    margin-top:12px;
    line-height:22px;
}
.router-link-active{
    border-bottom:2px solid #fff;
}
.section_content{
    flex: 1;
    width: 96%;
    height: 73%;
    margin-left: 2%;
    background: #FBFCFE;
    position: absolute;
    top: 102px;
    overflow: auto;
    border-radius:5px;
}
</style>
