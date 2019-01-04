<template>
    <div class="m_wrap">
        <!-- <header class="m_header">
            
        </header> -->
        <section class="m_section">
            <div class="bnBox">
                <img src="../images/c1.png"/>
            </div>
            <div class="musType">
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
                <dl>
                    <dt><img src="../images/d1.png"/></dt>
                    <dd>会员曲库</dd>
                </dl>
            </div>
            <div class="smBn">
                <img src="../images/b1.png"/>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>
html,body{
    width:100%;
    height:100%;
}
.m_wrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
}
.m_header{
    width:100%;
    height:40px;
    border-bottom:1px solid #ccc;
}
.m_section{
    flex:1;
}
.bnBox img{
    width:96%;
    height:160px;
    margin-left:2%;
}
.musType{
    width:100%;
    height:150px;
    background:#fff;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-wrap: wrap;
}
.musType dl{
    width:19%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:1px;
}
.musType dl dt{
    width:50px;
    height:50px;
    background:#FFE9E8;
    border-radius:50%;
}
.musType dl dt img{
    margin:0 auto;
    width:20px;
    height:20px;
    margin-left:15px;
    height:20px;
    margin-top:13px;
}
.musType dl dd{
    font-size:14px;
}
.smBn{
    width:100%;
    height:60px;
}
.smBn img{
    width:96%;
    height:60px;
    margin-left:2%;
    margin-top:16px;
}
</style>
