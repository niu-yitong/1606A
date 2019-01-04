<template>
  <div class="three-level-address" id="three_level_address">
    <div class="region-div">
      <span class="input-icon"><i class="iconfont icon-dizhi"></i></span>
      <input type="text" placeholder="请选择三级地址" v-model="region" maxlength="80" readonly="readonly" @click="showAddressPicker" />
      <mt-popup v-model="regionVisible" position="bottom" class="region-popup">
        <mt-picker :slots="myAddressSlots" valueKey="name" :visibleItemCount	="5" @change="addressChange" :itemHeight="40"></mt-picker>
      </mt-popup>
 
      <div class="data-show-div">
        <p><span>三级地址：</span>{{region}}</p>
        <p><span>省：</span>{{province}}</p>
        <p><span>市：</span>{{city}}</p>
        <p><span>县：</span>{{county}}</p>
        <p><span>省级代码：</span>{{provinceCode}}</p>
        <p><span>市级代码：</span>{{cityCode}}</p>
        <p><span>县级代码：</span>{{countyCode}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import threeLevelAddress from '../assets/json/areaCode.json'
export default {
    data(){
      return{
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
        ],
 
 
      }
    },
    methods:{
      //打开地址选择器
      showAddressPicker(){
        this.regionVisible = true;
      },
      //picker组件的change事件，进行取值赋值
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
    },
    mounted(){
      //初始化设备高度为设备高度height 100%
      let orderHeight = window.innerHeight;
      document.getElementById("three_level_address").style.height = orderHeight + 'px';
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
.c_wrap{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background:#EEEEEE;
}
button{
    width:120px;
    height:40px;
}
.city{
    width:100%;
    height:120px;
}


  .three-level-address{
    width: 100%;
    text-align: left;
    background: black;
    color: #ffffff;
  }
  .region-div{
    width: 100%;
    padding-top: 1rem;
  }
  .input-icon{
    display: inline-block;
    vertical-align: middle;
  }
  .input-icon i{
    font-size: 2rem;
  }
  .region-div input{
    width: 70%;
    font-size: 1rem;
    line-height: 2rem;
    border-radius: 5px;
    outline: none;
    text-align: right;
    color: black;
  }
  .region-popup{
    width: 100%;
  }
  .data-show-div{
    margin-top: 1rem;
    margin-left: 1rem;
    color: #45C473;
  }
  .data-show-div span{
    color: #ffffff;
    font-size: 0.8rem;
  }
</style>

