function o(t){let e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}var u=(t,e)=>t.map(({src:i,description:r},s)=>`
  <li class="slider__preview-item">
    <button class="slider__preview-btn" data-id="${s}" data-link="" data-desc="">
      <img class="slider__preview-img" width="100px" height="100px" src="${e+i}" alt="${r}">
    </button>
  </li>
`).join(""),p=(t,e)=>`
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
      ${u(t,e)}
    </ul>
  </section>
`,c=(t,e,i)=>{let r=t.querySelector(".slider__main-img"),s=t.querySelector(".slider__desc");r.src=i+e.src,s.textContent=e.description},d=(t,e,i)=>{let r=o(p(e,i));t.append(r),r.querySelector(".slider__preview-item").classList.add("slider__preview-item_active"),c(t,e[0],i)};var l=0,_=(t,e)=>{t.previewContainer.querySelector(".slider__preview-item_active").classList.remove("slider__preview-item_active");let r=t.picturesData[e];c(t.container,r,t.picturesAddress),t.previewContainer.children[e].classList.add("slider__preview-item_active"),l=e},m=(t,e)=>{let i=t.target.closest(".slider__arrow");if(!i)return;let r=i.name==="next"?l+1:l-1;r<0&&(r=e.picturesData.length-1),r>e.picturesData.length-1&&(r=0),_(e,r)};function w(t,e){let i=t.target.closest(".slider__preview-btn");if(!i)return;let r=Number(i.dataset.id);_(e,r)}var b=(t,e,i)=>{let r=t.querySelector(".slider-container");d(r,e,i);let s=n=>{let a={root:t,container:r,previewContainer:r.querySelector(".slider__previews"),previousBtn:r.querySelector(".slider__arrow_left"),nextBtn:r.querySelector(".slider__arrow_right"),picturesData:e,picturesAddress:i};n.target.closest(".slider__previews")?w(n,a):m(n,a)};r.addEventListener("click",s)};export{b as init};
