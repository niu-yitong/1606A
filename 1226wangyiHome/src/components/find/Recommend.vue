<template>
    <div class="s_box">
        <!-- 轮播图 -->
        <div class="bannerBox">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../../images/1.jpg"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="../../images/2.jpg"/>
                    </div>
                    <div class="swiper-slide">
                        <img src="../../images/3.jpg"/>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!-- 分类 -->
        <div class="musicType">
            <dl>
                <dt><i class="icon iconfont icon-zixun"></i></dt>
                <dd>电台分类</dd>
            </dl>
            <dl>
                <dt><i class="icon iconfont icon-07"></i></dt>
                <dd>电台排行</dd>
            </dl>
            <dl>
                <dt><i class="icon iconfont icon-erji"></i></dt>
                <dd>DI电音</dd>
            </dl>
            <dl>
                <dt><i class="icon iconfont icon-pingfen"></i></dt>
                <dd>小兵电音</dd>
            </dl>
        </div>
        <!-- 推荐歌单 -->
        <div class="r_contBox">
            <div class="tit"><p>推荐歌单</p></div>
            <div class="r_cont">
                <dl>
                    <dt><img src="../../images/g1.jpg"/></dt>
                    <dd>"要做什么梦是每个人的自由"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g2.jpg"/></dt>
                    <dd>"若不能一起，来世愿与你再次相遇"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g3.jpg"/></dt>
                    <dd>"我的民谣，你的故事"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g2.jpg"/></dt>
                    <dd>"若不能一起，来世愿与你再次相遇"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g1.jpg"/></dt>
                    <dd>"我的民谣，你的故事"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g1.jpg"/></dt>
                    <dd>"要做什么梦是每个人的自由"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g2.jpg"/></dt>
                    <dd>"若不能一起，来世愿与你再次相遇"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g3.jpg"/></dt>
                    <dd>"我的民谣，你的故事"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g2.jpg"/></dt>
                    <dd>"若不能一起，来世愿与你再次相遇"</dd>
                </dl>
                <dl>
                    <dt><img src="../../images/g1.jpg"/></dt>
                    <dd>"我的民谣，你的故事"</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

export default {
    name:"Recommend",
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay:true,
          loop:true
        })
    }
}
</script>

<style scoped>
.r_box{
    width:100%;
    height:100%;
}
.bannerBox{
    width:100%;
    height:180px;
}
.swiper-container{
    width:100%;
    height:100%;
}
.swiper-wrapper{
    width:100%;
    height:100%;
}
.swiper-slide{
    width:100%;
    height:100%;
}
.swiper-slide img{
    width:100%;
    height:100%;
    border-radius: 10px;
}
.musicType{
    width:100%;
    height:100px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    border-bottom:1px solid #E1E2E4;
}
.musicType dl {
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    position: relative;
}
.musicType dl dt {
    width:60px;
    height:60px;
    border-radius:50%;
    background:#34393C;
}
.musicType dl dt i{
    color:#fff;
    font-size:28px;
    margin-left:14px;
    position:absolute;
    top: 21px;
    left: 2px;
}
.musicType dl dd{
    font-size:16px;
}
.r_contBox{
    display: flex;
    flex-direction: column;

}
.tit p{
    font-size:16px;
    line-height:36px;
}
.r_cont {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.r_cont dl{
    width:31%;
    margin-left:2%;
    margin-top:10px;
}
.r_cont dl dt{
    width:100%;
    height:100px;
}
.r_cont dl dt img{
    width:100%;
    height:100%;
}
</style>
