import{A as v}from"./About-c2e8f623.js";import{_ as d,r as b,o as c,c as l,a as s,F as g,b as f,n as I,p as k,d as w,e as p,f as m}from"./index-f8df1ee3.js";const C={props:{img:{type:Array}},setup(a){const o=a.img,e=b(0);return{allImg:o,currentImg:e,switchImg:n=>{o.length-1<e.value+n?e.value=0:e.value+n<0?e.value=o.length-1:e.value+=n,console.log(n,e.value)},switchImgClick:n=>{e.value=n}}}},y={class:"carusel"},$={class:"main"},j=["src"],A={class:"preview"},q=["onClick"],G=["src"];function x(a,o,e,t,u,n){return c(),l("div",y,[s("div",$,[s("i",{class:"far fa-chevron-left",onClick:o[0]||(o[0]=i=>t.switchImg(-1))}),s("div",null,[s("img",{src:t.allImg[t.currentImg]},null,8,j)]),s("i",{class:"far fa-chevron-right",onClick:o[1]||(o[1]=i=>t.switchImg(1))})]),s("div",A,[(c(!0),l(g,null,f(t.allImg,(i,r)=>(c(),l("div",{class:I(["img_block",{active_img:t.currentImg==r}]),onClick:h=>t.switchImgClick(r),key:r},[s("img",{src:i},null,8,G)],10,q))),128))])])}const N=d(C,[["render",x],["__scopeId","data-v-29a80502"]]);const S={setup(){}},_=a=>(k("data-v-2f8434fa"),a=a(),w(),a),T=_(()=>s("div",{class:"info"},[s("h1",null,"НАШИ ТРЕНЕРА"),s("p",null," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque omnis cumque aut temporibus voluptatum quo tempore accusamus quasi, doloribus commodi accusantium laudantium aperiam blanditiis laboriosam repudiandae necessitatibus dicta obcaecati tempora. ")],-1)),B={class:"cards_block"},F=_(()=>s("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Hans-Dieter_Flick%2C_Germany_national_football_team_%2803%29.jpg/179px-Hans-Dieter_Flick%2C_Germany_national_football_team_%2803%29.jpg"},null,-1)),L=_(()=>s("h1",null,"Иван Иванович Иванов",-1)),R=_(()=>s("p",null,"Мастер Спорта",-1)),z=[F,L,R];function D(a,o,e,t,u,n){return c(),l("section",null,[T,s("div",B,[(c(),l(g,null,f(3,i=>s("div",{class:"card",key:i},z)),64))])])}const E=d(S,[["render",D],["__scopeId","data-v-2f8434fa"]]),H={components:{About:v,Carusel:N,Trainers:E},setup(){return{title:"Любители",msg:"Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",allImg:["https://ss.sport-express.ru/userfiles/materials/169/1699153/volga.jpg","https://ru.sport-wiki.org/wp-content/themes/sportwiki/img/water-polo.jpg","https://aqualeo.ru/media/django-summernote/2019-08-28/088ab781-b175-4d73-8c2b-ea7b1085560a.jpg","https://static.legalcdn.org/66/85/5b8e3db68b2ac_1536048566.png","https://usport.uz/images/news/BASN4867.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjr1DaRvk1aGR485UNJGdzJLEfMRjwbS9LQ&usqp=CAU","https://sportsgroup.ru/wp-content/uploads/2018/01/water_polo2.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4c2BmPligjjFQ9GfyEKG-_s606S2pfHTLg&usqp=CAU"]}}};function U(a,o,e,t,u,n){const i=p("About"),r=p("Carusel"),h=p("Trainers");return c(),l(g,null,[m(i,{title:t.title,msg:t.msg},null,8,["title","msg"]),m(r,{img:t.allImg},null,8,["img"]),m(h),m(i,{title:t.title,msg:t.msg},null,8,["title","msg"])],64)}const Q=d(H,[["render",U]]);export{Q as default};
