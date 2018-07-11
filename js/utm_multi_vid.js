multi="офис|офисный|офиса;офисную мебель\n\
квартира|квартирный;вещи из квартиры\n\
дача|дачу;вещи на дачу\n\
мебель|мебели;вашу мебель\n\
казань;ваш груз из Казани\n\
краснодар;груз из Краснодара\n\
москва;груз из Москвы\n\
липецк;груз из Липецка\n\
ростов;груз из Ростова\n\
саранск;груз из Саранска\n\
тула;груз из Тулы\n\
екатеринбург;груз из Екатеринбурга;\n\
самара;груз из Самары\n\
иркутск;груз из Иркутска\n\
срочно;груз за короткий срок\n\
ярославль;груз из Ярославля\n\
спб|петербург|питер;груз из Петербурга\n\
сургут;груз из Сургута\n\
челябинск;груз из Челябинска\n\
батайск;груз из Батайска\n\
омск;груз из Омска\n\
балтаси;груз из Балтаси";

$(function(){function getURLParameter(name){return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g,'%20'))||null}utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){utm[v]=getURLParameter(v)||$.cookie(v);$.cookie(v,utm[v],{expires:365,path:'/'})});var ab_title="default";if(utm['utm_term']){multi=multi.split('\n');multi=$.map(multi,function(v,i){arr1=v.split(';');r=new RegExp(arr1[0]);return{reg:r,val:arr1[1]}});multi=$.grep(multi,function(v,i){return utm['utm_term'].search(v.reg)>-1});if(multi[0]){ab_title=multi[0].val;var target=$('.multi');target.html(ab_title)}}});
