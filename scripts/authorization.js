var u="authorization__forms-container_start",s="authorization__forms-container_moved",n=document.querySelector(".main-nav__user-navigation"),b=n.querySelector("#login-temp"),C=document.querySelector("#authorization").content.querySelector(".authorization"),t=C.cloneNode(!0),o=t.querySelector(".authorization__forms-container"),a=t.querySelector("#tel-number"),A=t.querySelector("#code"),l=t.querySelector("#authorization-step1"),m=t.querySelector("#authorization-step2"),d=t.querySelector("#back"),v=t.querySelector(".authorization__close"),D=t.querySelector("#phone-text"),T=document.querySelector("#profile").content.querySelector(".main-nav__user-navigation-item"),c=T.cloneNode(!0),p=c.querySelector("#log-out"),I=document.querySelector("#log-in").content.querySelector(".main-nav__user-navigation-item"),i=I.cloneNode(!0),S=i.querySelector("#login-btn"),N=()=>{o.classList.remove(u),o.classList.add(s),D.textContent=a.value},f=()=>{o.classList.remove(s),o.classList.add(u),A.value=""},L=e=>{e.preventDefault(),N()},g=e=>{e.preventDefault(),r(),x(),B(),localStorage.setItem("isAuthorized","true")},y=()=>{r()},k=()=>{f()},E=e=>{e.key==="Escape"&&(e.preventDefault(),r())},q=e=>{e.target.classList.contains("authorization")&&r()},_=e=>{e.preventDefault(),O()},h=e=>{e.preventDefault(),localStorage.setItem("isAuthorized","false"),M()};function O(){t.addEventListener("click",q),document.addEventListener("keydown",E),v.addEventListener("click",y),l.addEventListener("submit",L),m.addEventListener("submit",g),d.addEventListener("click",k),n.append(t)}function r(){f(),a.value="",t.removeEventListener("click",q),document.removeEventListener("keydown",E),v.removeEventListener("click",y),l.removeEventListener("submit",L),m.removeEventListener("submit",g),d.removeEventListener("click",k),t.remove()}function B(){p.addEventListener("click",h),n.append(c)}function w(){p.removeEventListener("click",h),c.remove()}function z(){S.addEventListener("click",_),n.append(i)}function x(){S.removeEventListener("click",_),i.remove()}function M(){w(),z()}function P(){if(b.remove(),localStorage.getItem("isAuthorized")==="true"){B();return}z()}export{P as init};