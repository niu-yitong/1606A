<template>
  <div id="app">
      <section class="a_section">
          <router-view></router-view>
      </section>
      <footer class="f_footer">
          <router-link to="/Find" tag="span">
            <dl>
              <dt><i class="icon iconfont icon-shouye"></i></dt>
              <dd>发现</dd>
            </dl>
          </router-link>
          <router-link to="/Video" tag="span">
            <dl>
              <dt><i class="icon iconfont icon-qianbao"></i></dt>
              <dd>视频</dd>
            </dl>
          </router-link>
          <router-link to="/Mine" tag="span">
            <dl>
              <dt><i class="icon iconfont icon-wode"></i></dt>
              <dd>我的</dd>
            </dl>
          </router-link>
          <router-link to="/Friend" tag="span">
            <dl>
              <dt><i class="icon iconfont icon-gengduo"></i></dt>
              <dd>朋友</dd>
            </dl>
          </router-link>
          <router-link to="/Account" tag="span">
            <dl>
              <dt><i class="icon iconfont icon-qianbao"></i></dt>
              <dd>账号</dd>
            </dl>
          </router-link>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
}
html,body{
  width:100%;
  height:100%;
}
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:flex;
  flex-direction:column;
}
.a_section{
  flex:1;
}
.f_footer{
  width:100%;
  height:60px;
  background:#F2F2F2;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  border-top:1px solid #ccc;
}
.f_footer dl{
  display:flex;
  flex-direction: column;
  justify-content:center;
  margin-top:10px;
}
.f_footer dl dt{
  margin-left:5px;
  margin-bottom:5px;
}
.f_footer dl dt i{
  color:#6B6B6B
}
.router-link-active{
  color:black
}
</style>
