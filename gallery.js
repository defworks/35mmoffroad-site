
fetch('data/gallery.json')
.then(r=>r.json())
.then(data=>{
const g=document.getElementById('gallery')
data.images.forEach(img=>{
let el=document.createElement('img')
el.src='img/'+img
g.appendChild(el)
})
})
