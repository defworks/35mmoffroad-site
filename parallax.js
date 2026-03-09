
window.addEventListener('scroll',()=>{
const sc=window.pageYOffset
document.querySelector('.hero').style.backgroundPositionY = sc*0.5+'px'
})
