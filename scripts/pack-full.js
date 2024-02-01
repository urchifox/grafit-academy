function n(e){let t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}var b=(e,t)=>e.map(({src:c,description:r},i)=>`
  <li class="slider__preview-item">
    <button class="slider__preview-btn" data-id="${i}" data-link="" data-desc="">
      <img class="slider__preview-img" width="100px" height="100px" src="${t+c}" alt="${r}">
    </button>
  </li>
`).join(""),E=(e,t)=>`
  <section class="slider">
    <figure class="slider__main-illustration">
      <img class="slider__main-img" src="" alt="">
      <figcaption class="slider__desc"></figcaption>
      <button class="slider__arrow slider__arrow_left">
        <span class="visually-hidden">\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435</span>
      </button>
      <button class="slider__arrow slider__arrow_right">
        <span class="visually-hidden">\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435</span>
      </button>
    </figure>
    <ul class="slider__previews">
      ${b(e,t)}
    </ul>
  </section>
`,f=(e,t,c)=>{let r=e.querySelector(".slider__main-img"),i=e.querySelector(".slider__desc");r.src=c+t.src,i.textContent=t.description},k=(e,t,c)=>{let r=n(E(t,c));e.append(r),r.querySelector(".slider__preview-item").classList.add("slider__preview-item_active"),f(e,t[0],c)};var y=(e,t)=>{e.previewContainer.querySelector(".slider__preview-item_active").classList.remove("slider__preview-item_active");let r=e.picturesData[t];f(e.container,r,e.picturesAddress),e.previewContainer.children[t].classList.add("slider__preview-item_active"),e.currentPreviewIndex=t},B=(e,t)=>{let c=e.target.closest(".slider__arrow");if(!c)return;let r=c.classList.contains("slider__arrow_right")?t.currentPreviewIndex+1:t.currentPreviewIndex-1;r<0&&(r=t.picturesData.length-1),r>t.picturesData.length-1&&(r=0),y(t,r)};function D(e,t){let c=e.target.closest(".slider__preview-btn");if(!c)return;let r=Number(c.dataset.id);y(t,r)}var h=(e,t,c)=>{let r=e.querySelector(".slider-container");k(r,t,c);let i={root:e,container:r,previewContainer:r.querySelector(".slider__previews"),previousBtn:r.querySelector(".slider__arrow_left"),nextBtn:r.querySelector(".slider__arrow_right"),picturesData:t,picturesAddress:c,currentPreviewIndex:0},p=u=>{u.target.closest(".slider__previews")?D(u,i):B(u,i)};r.addEventListener("click",p)};var s=new Map;s.set("853EBA39-329A-4DEF-ADA8-3A9870B0EB9E",{packName:"590+ Swamp Forest Vegetation Reference Pictures",price:500,previews:[{src:"refpack-14-1-h550@1x.jpg",description:""},{src:"refpack-14-2-h550@1x.jpg",description:""},{src:"refpack-14-3-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:2,type:"environment",tags:{nature:!0,city:!1}});s.set("FBD25B0D-8742-4C82-AE70-0D24027BF860",{packName:"Epic Rainforest",price:500,previews:[{src:"refpack-2-1-h550@1x.jpg",description:""},{src:"refpack-2-2-h550@1x.jpg",description:""},{src:"refpack-2-3-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:10,type:"environment",tags:{nature:!0,city:!1}});s.set("17BBF395-A40F-45F9-B360-4F5DD68866AE",{packName:"510+ Space Cowboy",price:800,previews:[{src:"refpack-3-1-h550@1x.jpg",description:""},{src:"refpack-3-2-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:9,type:"person",tags:{nudity:!1,inUnderwear:!1,inOutfit:!0}});s.set("247832B3-43EC-4C22-B618-2B46A9C63B85",{packName:"Castle",price:900,previews:[{src:"refpack-4-1-h550@1x.jpg",description:""},{src:"refpack-4-2-h550@1x.jpg",description:""},{src:"refpack-4-2-h550@1x.jpg",description:""}],specialOffer:!0,popularityRate:9,type:"environment",tags:{nature:!1,city:!0}});s.set("7C676F46-291D-46C6-A3D8-1530CF608595",{packName:"130+ Period Drama Reference Pictures",price:500,previews:[{src:"refpack-5-1-h550@1x.jpg",description:""},{src:"refpack-5-2-h550@1x.jpg",description:""},{src:"refpack-5-3-h550@1x.jpg",description:""},{src:"refpack-5-4-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:9,type:"person",tags:{nudity:!1,inUnderwear:!1,inOutfit:!0}});s.set("A463C41A-B505-44D7-B300-DB3D09819C90",{packName:"700+ Panaji Reference Pictures",price:900,previews:[{src:"refpack-6-1-h550@1x.jpg",description:""},{src:"refpack-6-2-h550@1x.jpg",description:""},{src:"refpack-6-3-h550@1x.jpg",description:""},{src:"refpack-6-4-h550@1x.jpg",description:""},{src:"refpack-6-5-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:8,type:"environment",tags:{nature:!1,city:!0}});s.set("B06D696F-2950-440D-A620-47FD0FBA63D5",{packName:"690 Dramatic Male Poses Reference Pictures",price:900,previews:[{src:"refpack-7-1-h550@1x.jpg",description:""},{src:"refpack-7-2-h550@1x.jpg",description:""},{src:"refpack-7-3-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:7,type:"person",tags:{nudity:!1,inUnderwear:!1,inOutfit:!0}});s.set("634D2AFF-68F5-435E-9203-F463F4F3B7B2",{packName:"730+ Epic Cliffs Reference Pictures",price:700,previews:[{src:"refpack-8-1-h550@1x.jpg",description:""},{src:"refpack-8-2-h550@1x.jpg",description:""},{src:"refpack-8-3-h550@1x.jpg",description:""},{src:"refpack-8-4-h550@1x.jpg",description:""},{src:"refpack-8-5-h550@1x.jpg",description:""},{src:"refpack-8-6-h550@1x.jpg",description:""}],specialOffer:!0,popularityRate:7,type:"environment",tags:{nature:!0,city:!1}});s.set("DE8351BE-D822-469C-866C-817FB59F8431",{packName:"1200+ Samurai Reference Pictures",price:500,previews:[{src:"refpack-9-1-h550@1x.jpg",description:""},{src:"refpack-9-2-h550@1x.jpg",description:""},{src:"refpack-9-3-h550@1x.jpg",description:""},{src:"refpack-9-4-h550@1x.jpg",description:""},{src:"refpack-9-5-h550@1x.jpg",description:""}],specialOffer:!0,popularityRate:5,type:"person",tags:{nudity:!1,inUnderwear:!1,inOutfit:!0}});s.set("BB5CADD4-9522-4A20-A9D1-423A00662C19",{packName:"790+Architecture Elements Reference Pictures",price:900,previews:[{src:"refpack-10-1-h550@1x.jpg",description:""},{src:"refpack-10-2-h550@1x.jpg",description:""},{src:"refpack-10-3-h550@1x.jpg",description:""},{src:"refpack-10-4-h550@1x.jpg",description:""},{src:"refpack-10-5-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:5,type:"environment",tags:{nature:!1,city:!0}});s.set("093B38E8-4248-4EC6-A602-F599F57F75CE",{packName:"320+ Swedish Soldier Reference Pictures",price:900,previews:[{src:"refpack-11-1-h550@1x.jpg",description:""},{src:"refpack-11-2-h550@1x.jpg",description:""},{src:"refpack-11-3-h550@1x.jpg",description:""},{src:"refpack-11-4-h550@1x.jpg",description:""},{src:"refpack-11-5-h550@1x.jpg",description:""},{src:"refpack-11-6-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:5,type:"person",tags:{nudity:!1,inUnderwear:!1,inOutfit:!0}});s.set("5FF15C54-3B36-4372-87FB-9434BAB60227",{packName:"900+ European Cities Reference Pictures",price:500,previews:[{src:"refpack-12-1-h550@1x.jpg",description:""},{src:"refpack-12-2-h550@1x.jpg",description:""},{src:"refpack-12-3-h550@1x.jpg",description:""}],specialOffer:!0,popularityRate:3,type:"environment",tags:{nature:!1,city:!0}});s.set("037D9794-ACA1-4D24-A1B8-361553322CE2",{packName:"Male 2 Couple 1",price:900,previews:[{src:"refpack-1-1-h550@1x.jpg",description:""},{src:"refpack-1-2-h550@1x.jpg",description:""},{src:"refpack-1-3-h550@1x.jpg",description:""},{src:"refpack-1-4-h550@1x.jpg",description:""},{src:"refpack-1-5-h550@1x.jpg",description:""},{src:"refpack-1-6-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:10,type:"person",tags:{nudity:!1,inUnderwear:!0,inOutfit:!1}});s.set("3EE3BB25-E58D-4AFA-B47B-C08C6CF43E8D",{packName:"840+ Motorcycle Reference Pictures",price:800,previews:[{src:"refpack-13-1-h550@1x.jpg",description:""},{src:"refpack-13-2-h550@1x.jpg",description:""},{src:"refpack-13-3-h550@1x.jpg",description:""},{src:"refpack-13-4-h550@1x.jpg",description:""},{src:"refpack-13-5-h550@1x.jpg",description:""},{src:"refpack-13-6-h550@1x.jpg",description:""}],specialOffer:!1,popularityRate:3,type:"person",tags:{nudity:!1,inUnderwear:!1,inOutfit:!0}});s.set("4B4FB705-6299-4F53-AECE-235BB1246DE4",{packName:"730+ Forest Historical Village Reference Pictures",price:500,previews:[{src:"refpack-15-1-h550@1x.jpg",description:""},{src:"refpack-15-2-h550@1x.jpg",description:""},{src:"refpack-15-3-h550@1x.jpg",description:""},{src:"refpack-15-4-h550@1x.jpg",description:""},{src:"refpack-15-5-h550@1x.jpg",description:""},{src:"refpack-15-6-h550@1x.jpg",description:""}],specialOffer:!0,popularityRate:1,type:"person",tags:{nudity:!1,inUnderwear:!1,inOutfit:!0}});var o="images/refpacks-covers/";var m=[];for(let[,e]of s)m.push(e.price);var G=Math.min.apply(null,m),K=Math.max.apply(null,m);var a={favorites:JSON.parse(localStorage.getItem("favorites"))||[],inCart:JSON.parse(localStorage.getItem("inCart"))||[],bought:JSON.parse(localStorage.getItem("bought"))||[]};var F=document.querySelector("#cart"),l=F.querySelector(".menu-dropdown__list"),ce=document.querySelector(".pack-market"),d=document.querySelector(".cart__counter"),P=()=>`
  <li class="menu-dropdown__item cart__message">
    \u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432 \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432
  </li>
`,O=()=>{let e=n(P());l.append(e)},R=(e,{packName:t,previews:c})=>`
    <li data-id="${e}" class="menu-dropdown__item">
        <a href="#" class="menu-dropdown__link">
      <img src="${o}${c[0].src}" class="cart__cover">
      ${t}
      <div class="menu-dropdown__link-comment cart__delete">
        <button class="cart__delete-button">
          <span class="visually-hidden">\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B</span>
        </button>
      </div>
    </a>
    </li>
`,_=e=>{l.querySelector(".cart__message")?.remove(),d.style.opacity=1;let c=s.get(e),r=n(R(e,c));l.append(r),d.textContent=a.inCart.length},v=e=>{if(l.querySelector(`.menu-dropdown__item[data-id="${e}"]`).remove(),a.inCart.length===0){O(),d.style.opacity=0;return}d.textContent=a.inCart.length};var x=(e,t)=>`
  <label class="buy-button" data-id="${e}">
    <input class="buy-button__checkbox" type="checkbox" name="buy" ${t?"checked":""}/>
    <span class="visually-hidden">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</span>
  </label>
`,C=e=>{let t=e.target.closest(".buy-button"),c=t.querySelector("input"),r=t.dataset.id;c.checked?(a.inCart.push(r),_(r)):(a.inCart.splice(a.inCart.indexOf(r),1),v(r)),localStorage.setItem("inCart",JSON.stringify(a.inCart))};var w=(e,t)=>`
  <label class="favorite-button"  data-id="${e}">
    <input class="favorite-button__checkbox" name="favorite" type="checkbox" ${t?"checked":""}/>
    <span class="visually-hidden">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</span>
  </label>
`,j=e=>{let t=e.target.closest(".favorite-button"),c=t.querySelector("input"),r=t.dataset.id;c.checked?a.favorites.push(r):a.favorites.splice(a.favorites.indexOf(r),1),localStorage.setItem("favorites",JSON.stringify(a.favorites))};var q=document.querySelector(".pack-market"),N=(e,{packName:t,price:c},r,i)=>`
  <article class="pack-full pack-market__pack-full">
    <div class="pack-full_container">
      <h2 class="pack-full__name">${t}</h2>

      <div class="slider-container"></div>

      <div class="pack-full__actions-container">
        <p class="pack-full__price">${c}<span class="visually-hidden">\u0440\u0443\u0431\u043B\u0435\u0439</span></p>
        ${x(e,i)}
        ${w(e,r)}
      </div>

      <button class="pack-full__close">
        <span class="visually-hidden">\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438</span>
      </button>
    </div>
  </article>
`,$=e=>{let t=e.target.closest(".favorite-button"),c=t.querySelector("input"),r=t.dataset.id,p=document.querySelector(`.pack-card[data-id="${r}"]`).querySelector(".favorite-button input");p.checked=c.checked,j(e)},L=e=>{let t=e.target.closest(".buy-button"),c=t.querySelector("input"),r=t.dataset.id,p=document.querySelector(`.pack-card[data-id="${r}"]`).querySelector(".buy-button input");p.checked=c.checked,C(e)},A=(e,t)=>{let c=a.favorites.includes(e),r=a.inCart.includes(e),i=n(N(e,t,c,r));i.addEventListener("click",I),i.querySelector(".pack-full__close").addEventListener("click",T),i.querySelector('[name="buy"]').addEventListener("click",L),i.querySelector('[name="favorite"]').addEventListener("click",$),document.addEventListener("keydown",S),q.append(i),h(i,t.previews,o),document.body.classList.add("modal-open")},g=()=>{document.querySelector(".pack-full").remove(),document.removeEventListener("keydown",S),document.body.classList.remove("modal-open")};function T(){g()}function S(e){e.key==="Escape"&&g()}function I(e){e.target.classList.contains("pack-full")&&g()}export{A as render};
