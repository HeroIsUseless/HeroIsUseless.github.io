// cheerio只实现了jQuery中的DOM部分，相当于jQuery的一个子集。
//cheerio的语法和jQuery完全一致，在使用cheerio时，几乎感觉不到它和jQuery的差异。
//在解析HTML方面，毫无疑问，cheerio是更好的选择。
import "jquery"; 
$.ajax({
     url: 'http://webapps.msxiaobing.com/api/simplechat/getresponse?workflow=Q20',
     type: 'post',
     data: data,
     success: function(res){
         alert(res);
         //自己的数据过滤存储处理
     }
 });






