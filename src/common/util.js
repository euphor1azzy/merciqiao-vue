/**
 * 公共方法
 */
exports.install = function (Vue,options){
    var _this=Vue.prototype;
    var Common=Vue.prototype.$common={};
    
    /**
     * 在新页面打开
     * @param {*} $this
     * @param {*} routeName
     * @param {*} param 参数对象，对象格式
     */
    Common.OpenNewPage=function($this,routePath,param){
        let routeData=$this.$router.resolve({
            path:routePath,
            query:param
        });
        window.open(routeData.href,'_blank');
    }
    /**
     * 写入sessionStorage
     */
    Common.setSessionStorage=function(key,objData){
        if(typeof objData=='string'){
            sessionStorage.setItem(key,objData);
        }
        else{
            sessionStorage.setItem(key,JSON.stringify(objData));
        }
        
    }
    /**
     * 读取sessionStorage
     */
    Common.getSessionStorage=function(key,isObj){
        var data= sessionStorage.getItem(key);
        if(isObj){
            return JSON.parse(data);
        }
        return data;
    },
     /**
     * 移除sessionStorage
     */
    Common.removeSessionStorage=function(key){
        sessionStorage.removeItem(key);
    }
    ,
    Common.timestampToTime =function(row, column) {
          var date = row[column.property];
          if (date == undefined) {
             return "";
          }
          return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    Common.isSuccess =function(data,callback) {
        if (data && data.data) {   
            var json = data.data;
            if (json.status == 'SUCCESS') {
                _this.$message({message: '执行成功',type: "success"});
                callback(json);
            }
            else if (json.message) {
                _this.$message({message: json.message,type: "error"});
            }
        }
        else{
            _this.$message({message: '执行异常，请重试',type: "error"});
        }
    },
     Common.getCity =function() {
          return CONST_CityName!=''?CONST_CityName: returnCitySN["cname"];
    },
    Common.getYcyLev =function(myRank) {
        var lev='';
                            if(myRank<10){
                                lev='Lv1萌新';
                            }
                            else if(myRank<30){
                                lev='Lv2青铜';
                            }
                            else if(myRank<50){
                                lev='Lv3白银';
                            }
                            else if(myRank<70){
                                lev='Lv4黄金';
                            }
                            else if(myRank<100){
                                lev='Lv5铂金';
                            }
                            else if(myRank<150){
                                lev='Lv6钻石';
                            }
                            else if(myRank<200){
                                lev='Lv6星耀';
                            }
                            else if(myRank<300){
                                lev='Lv7王者';
                            }
                            else{
                                lev='Lv8铁粉';
                            }
                            return lev;
    }
    Common.getTimeLev =function(myRank) {
        var lev='';
                            if(myRank<10){
                                lev=8;
                            }
                            else if(myRank<30){
                                lev=7;
                            }
                            else if(myRank<50){
                                lev=6;  
                            }
                            else if(myRank<70){
                                lev=5;
                            }
                            else if(myRank<100){
                                lev=4;
                            }
                            else if(myRank<150){
                                lev=3;
                            }
                            else if(myRank<200){
                                lev=2;
                            }
                            else if(myRank<300){
                                lev=2;
                            }
                            else{
                                lev=1;
                            }
                            return lev;
    }
  }

