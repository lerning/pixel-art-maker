document.addEventListener('DOMContentLoaded', function(){

let body = document.getElementsByTagName('body')[0]
let header = document.createElement('header')
   body.appendChild(header)
   header.innerText = "PIXEL PIXEL PIXEL"
let pSection = document.createElement('section')
   body.appendChild(pSection)
let footer = document.createElement('footer')
   body.appendChild(footer)
   let fDiv = document.createElement ('div')
   footer.appendChild(fDiv)
   fDiv.setAttribute ('id', 'pal')
let pixels = document.getElementsByClassName('pixel')

function makePixels() {
   for (var i = 0; i < 1988; i++) {
      let div = document.createElement('div')
      pSection.appendChild(div)
      div.className = 'pixel'
   }
}
makePixels()


function choosey() {
   color = event.target
   if (color.className === 'color'){
      pColor = color.id;
   }
  }

document.addEventListener('click', choosey)


colorArray = ['blue', 'red', 'green']
pColor = colorArray[1];
function clicky() {
   pixels = event.target
   if (pixels.className === 'pixel'){
      pixels.style.backgroundColor = pColor
   }
}
document.addEventListener('click', clicky)



for (var color of colorArray){
   div = document.createElement('div')
   fDiv.appendChild(div)
   div.setAttribute ('id', color)
   div.className = ('color')

   div.style.backgroundColor = (color)
}
})
