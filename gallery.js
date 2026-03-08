
fetch("data/gallery.json")
.then(res=>res.json())
.then(data=>{
const gallery=document.getElementById("gallery")
data.images.forEach(img=>{
const image=document.createElement("img")
image.src="img/"+img.file
image.alt=img.title
gallery.appendChild(image)
})
})
