"use strict";require(["../widge/config"],function(){require(["jquery","head"],function(i,e){i(function(){e.position();var t,s=!0;i("input").keyup(function(){switch(i("input").index(this)){case 1:e=!/^[a-zA-Z][\w]{5,15}$/.test(i(this).get(0).value);break;case 2:e=!/^.{6,26}$/.test(i(this).get(0).value);t=i(this).get(0).value;break;case 3:e=!(t==i(this).get(0).value);break;case 4:e=!/.+@(qq|136)(\.com)+/.test(i(this).get(0).value);break;case 5:var e=!/^1[0-9]{10}$/.test(i(this).get(0).value)}" "==i(this).get(0).value?i(this).siblings("span").css("visibility","visible"):e?i(this).siblings("span").css("visibility","visible"):i(this).siblings("span").css("visibility","hidden")}),i("button").click(function(){for(var e=0;e<i("input").length;e++)console.log(" "==i("input").eq(e).get(0).value),console.log("visible"==i("span").css("visibility")),console.log(i("input").eq(3).get(0).value!=i("input").eq(2).get(0).value),i("input").eq(3).get(0).value==i("input").eq(2).get(0).value&&" "!=i("input").eq(e).get(0).value&&"visible"!=i("span").css("visibility")||(s=!1);s?alert("提交"):alert("请完善表格")})})})});