function iniciarApp(){desplegarmenu(),desplegarmenu2()}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));let menu=document.getElementById("menu"),cats=document.querySelector(".cats");function desplegarmenu(){menu.addEventListener("click",(function(){console.log("desde menu"),cats.classList.toggle("mostrar"),cats.addEventListener("mouseleave",(function(){cats.classList.remove("mostrar")}))}))}function desplegarmenu2(){menu.addEventListener("mouseenter",(function(){console.log("desde menu"),cats.classList.toggle("mostrar"),cats.addEventListener("mouseleave",(function(){menu.addEventListener("mouseleave",(function(){cats.classList.toggle("mostrar")})),cats.classList.remove("mostrar")}))}))}