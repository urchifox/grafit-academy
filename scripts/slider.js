function l(r){let e=document.createElement("div");return e.innerHTML=r,e.firstElementChild}var _=(r,e)=>r.map(({src:i,description:t},s)=>`
  <li class="slider__preview-item">
    <button class="slider__preview-btn" data-id="${s}" data-link="" data-desc="">
      <img class="slider__preview-img" width="100px" height="100px" src="${e+i}" alt="${t}">
    </button>
  </li>
`).join(""),u=(r,e)=>`
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
      ${_(r,e)}
    </ul>
  </section>
`,c=(r,e,i)=>{let t=r.querySelector(".slider__main-img"),s=r.querySelector(".slider__desc");t.src=i+e.src,s.textContent=e.description},a=(r,e,i)=>{let t=l(u(e,i));r.append(t),t.querySelector(".slider__preview-item").classList.add("slider__preview-item_active"),c(r,e[0],i)};var o=(r,e)=>{r.previewContainer.querySelector(".slider__preview-item_active").classList.remove("slider__preview-item_active");let t=r.picturesData[e];c(r.container,t,r.picturesAddress),r.previewContainer.children[e].classList.add("slider__preview-item_active"),r.currentPreviewIndex=e},p=(r,e)=>{let i=r.target.closest(".slider__arrow");if(!i)return;let t=i.classList.contains("slider__arrow_right")?e.currentPreviewIndex+1:e.currentPreviewIndex-1;t<0&&(t=e.picturesData.length-1),t>e.picturesData.length-1&&(t=0),o(e,t)};function w(r,e){let i=r.target.closest(".slider__preview-btn");if(!i)return;let t=Number(i.dataset.id);o(e,t)}var P=(r,e,i)=>{let t=r.querySelector(".slider-container");a(t,e,i);let s={root:r,container:t,previewContainer:t.querySelector(".slider__previews"),previousBtn:t.querySelector(".slider__arrow_left"),nextBtn:t.querySelector(".slider__arrow_right"),picturesData:e,picturesAddress:i,currentPreviewIndex:0},d=n=>{n.target.closest(".slider__previews")?w(n,s):p(n,s)};t.addEventListener("click",d)};export{P as init};
