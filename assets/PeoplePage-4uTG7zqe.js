const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RelatedMediaList-CTjJOqRl.js","assets/index-CFsfbzrl.js","assets/index-Cw_-1gcV.css","assets/MovieCard-BuiiMjMX.js","assets/ImageComponent-CNYUm6E-.js"])))=>i.map(i=>d[i]);
import{g as l,j as e,G as i,r as d,_ as r}from"./index-CFsfbzrl.js";import{I as c}from"./ImageComponent-CNYUm6E-.js";const n=d.lazy(()=>r(()=>import("./RelatedMediaList-CTjJOqRl.js"),__vite__mapDeps([0,1,2,3,4]))),x=()=>{var t;const s=l(),a=((t=(s==null?void 0:s.combined_credits)||{})==null?void 0:t.cast)||[];return console.log(a),e.jsxs("div",{className:"flex gap-x-5 bg-black p-10 text-white",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(c,{src:s.profile_path&&`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${s.profile_path}`,width:300,height:450}),e.jsxs("div",{className:"mx-3 mb-6 mt-3 text-[1.3vw]",children:[e.jsx("p",{className:"font-bold",children:"Personal info"}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"font-bold",children:"Known For"}),e.jsx("p",{className:"text-[1.2vw]",children:s.known_for_department})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"font-bold",children:"Gender"}),e.jsx("p",{className:"text-[1.2vw]",children:i[s.gender]})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"font-bold",children:"Place of birth"}),e.jsx("p",{className:"text-[1.2vw]",children:s.place_of_birth})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("p",{className:"font-bold",children:"Birthday"}),e.jsx("p",{className:"text-[1.2vw]",children:s.birthday})]})]})]}),e.jsxs("div",{className:"flex-[2]",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"mb-6 text-[2vw] font-bold",children:s.name}),e.jsx("h3",{className:"mb-4 text-[1.4vw] font-bold",children:"Biography"}),e.jsx("p",{className:"whitespace-pre-line",children:s.biography})]}),e.jsx("div",{className:"mt-11",children:e.jsx(n,{relatedMedia:a,isLoading:!0,title:"Known For"})})]})]})};export{x as default};
