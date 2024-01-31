var t={favorites:JSON.parse(localStorage.getItem("favorites"))||[],inCart:JSON.parse(localStorage.getItem("inCart"))||[],bought:JSON.parse(localStorage.getItem("bought"))||[]};var c=(a,e)=>`
  <label class="favorite-button"  data-id="${a}">
    <input class="favorite-button__checkbox" name="favorite" type="checkbox" ${e?"checked":""}/>
    <span class="visually-hidden">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435</span>
  </label>
`,l=a=>{let e=a.target.closest(".favorite-button"),s=e.querySelector("input"),o=e.dataset.id;s.checked?t.favorites.push(o):t.favorites.splice(t.favorites.indexOf(o),1),localStorage.setItem("favorites",JSON.stringify(t.favorites))};export{c as getTemplate,l as onFavoriteClick};
