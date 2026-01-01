const burger=document.querySelector('.burger')
const menu=document.querySelector('.menu')

burger?.addEventListener('click',()=>{
  menu.style.display=
    menu.style.display==='block'?'none':'block'
})