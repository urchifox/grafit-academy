function l(i){let e=document.createElement("div");return e.innerHTML=i,e.firstElementChild}var n=(i,e)=>i.map(({src:s,description:t},r)=>`
  <li class="slider__preview-item">
    <button class="slider__preview-btn" data-id="${r}" data-link="" data-desc="">
      <img class="slider__preview-img" width="100px" height="100px" src="${e+s}" alt="${t}">
    </button>
  </li>
`).join(""),a=(i,e)=>`
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
      ${n(i,e)}
    </ul>
  </section>
`,c=(i,e,s)=>{let t=i.querySelector(".slider__main-img"),r=i.querySelector(".slider__desc");t.src=s+e.src,r.textContent=e.description},_=(i,e,s)=>{let t=l(a(e,s));i.append(t),t.querySelector(".slider__preview-item").classList.add("slider__preview-item_active"),c(i,e[0],s)};export{c as renderMainPicture,_ as renderSlider};
