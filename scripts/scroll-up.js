var s=document.querySelector(".scroll-up"),o="scroll-up_hidden",t="scroll-up_shown",c=()=>{if(window.scrollY>1e3){s.classList.remove(o),s.classList.add(t);return}s.classList.remove(t),s.classList.add(o)},l=()=>{window.addEventListener("scroll",c)};export{l as init};
