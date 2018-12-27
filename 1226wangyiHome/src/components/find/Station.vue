<template>
    <div class="s_box">
        <!-- 轮播图 -->
        <div class="s_bannerBox">
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
        <!-- 今日优选 -->
        <div class="s_contBox">
            <div class="tit"><p>今日优选</p></div>
            <dl>
                <dt>
                    <img src="../../images/s6.jpg"/>
                </dt>
                <dd>
                    <p>末那大叔</p>
                    <p>节目：<span>18</span></p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../images/s7.jpg"/>
                </dt>
                <dd>
                    <p>末那大叔</p>
                    <p>节目：<span>18</span></p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../images/s8.jpg"/>
                </dt>
                <dd>
                    <p>末那大叔</p>
                    <p>节目：<span>18</span></p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../images/s3.jpg"/>
                </dt>
                <dd>
                    <p>末那大叔</p>
                    <p>节目：<span>18</span></p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="../../images/s1.jpg"/>
                </dt>
                <dd>
                    <p>末那大叔</p>
                    <p>节目：<span>18</span></p>
                    <p>愿你的故事有人能懂</p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

export default {
    name:"Station",
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
.s_box{
    width:100%;
    height:100%;
}
.s_bannerBox{
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
.s_contBox{
    display: flex;
    flex-direction: column;

}
.tit p{
    font-size:16px;
    line-height:36px;
}
.s_contBox dl{
    width:100%;
    height:100px;
    margin-top:15px;
}
.s_contBox dl dt{
    float: left;
    margin-right:15px;
}
.s_contBox dl dt img{
    width:100px;
    height:100px;
}
.s_contBox dl dd{
    float: left;
}
.s_contBox dl dd p{
    line-height:28px;
}
</style>
