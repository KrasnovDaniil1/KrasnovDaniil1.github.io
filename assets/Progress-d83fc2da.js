import{_ as v,I as b,r as l,o as h,a as p,b as d,c as u,d as e,e as n,F as k,f as y,l as w,w as x,q as I,t as f,p as j,h as C}from"./index-421894c9.js";const $={components:{Icons:b},setup(){const a=l([{img:"https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg",data:"14.12.2023",title:"Победа в соревнованиях"},{img:"https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg",data:"15.12.2023",title:"Победа в соревнованиях"},{img:"https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg",data:"16.12.2023",title:"Победа в соревнованиях"},{img:"https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg",data:"17.12.2023",title:"Победа в соревнованиях"},{img:"https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/9f/8c/79f00daba1e3401fba2a3e91d7c1cd7c5d3ad36ad25c2616834560.jpg",data:"18.12.2023",title:"Победа в соревнованиях"}]),o=l(),t=l(0),s=l(3),_=()=>{t.value-=1,t.value<0&&(t.value=a.value.length-s.value),o.value.style.transform=`translateX(-${100/s.value*t.value}%)`},i=()=>{t.value+=1,t.value>a.value.length-s.value&&(t.value=0),o.value.style.transform=`translateX(-${100/s.value*t.value}%)`};return h(()=>{window.innerWidth>650?s.value=3:s.value=1}),{progress:a,carusel:o,current:t,clickLeft:_,clickRight:i,elemCarusel:s}}},B=a=>(j("data-v-4efb03ad"),a=a(),C(),a),S={class:"progress"},L=B(()=>e("h2",{class:"progress__title"},"Наши достижения",-1)),N={class:"progress__block"},P={class:"block__carusel"},V={class:"carusel__item",ref:"carusel"},D={class:"item__content"},F=["src"],R={class:"content__about"},X={class:"item__data"},q={class:"item__title"};function E(a,o,t,s,_,i){const r=p("Icons"),g=p("router-link");return d(),u("main",S,[L,e("div",N,[n(r,{icons:"arrow",style:{transform:"rotate(180deg)"},class:"block__arrow",onClick:o[0]||(o[0]=c=>s.clickLeft())}),e("nav",P,[e("div",V,[(d(!0),u(k,null,y(s.progress,(c,m)=>(d(),w(g,{to:"/",class:"item",key:m},{default:x(()=>[e("div",D,[e("img",{src:c.img,class:"content__img"},null,8,F),e("h4",R,[I(" Подробнее "),n(r,{icons:"arrowDefault",class:"about__arrow"})])]),e("h6",X,f(c.data),1),e("h5",q,f(c.title),1)]),_:2},1024))),128))],512)]),n(r,{icons:"arrow",class:"block__arrow",onClick:o[1]||(o[1]=c=>s.clickRight())})])])}const T=v($,[["render",E],["__scopeId","data-v-4efb03ad"]]);export{T as P};
