document.addEventListener('DOMContentLoaded', function(){

//set and grab my major html components
let body = document.getElementsByTagName('body')[0]
let header = document.createElement('header')
   body.appendChild(header)
   header.innerText = "PIXEL FUN TIME!"
let pSection = document.createElement('section')
   body.appendChild(pSection)
let footer = document.createElement('footer')
   body.appendChild(footer)
   let fDiv = document.createElement ('div')
   footer.appendChild(fDiv)
   fDiv.setAttribute ('id', 'pal')
   let clearDiv = document.createElement ('div')
   footer.appendChild(clearDiv)
   clearDiv.setAttribute('id', 'clear')
   clearDiv.innerText = "Palette Cleanser"
let pixels = document.getElementsByClassName('pixel')

//make pixels
function makePixels() {
   for (var i = 0; i < 2010; i++) {
      let div = document.createElement('div')
      pSection.appendChild(div)
      div.className = 'pixel'
   }
}
makePixels()

//choose what color potential the click has
function choosey() {
   color = event.target
   if (color.className === 'color'){
      pColor = color.id;
   }
  }

document.addEventListener('click', choosey)
// document.addEventListener('mousedown', choosey)

//colors in palette
colorArray = ['#000000', '#573323', 'rgb(198, 113, 36)', 'orange', '#fcfa21', 'rgb(144, 237, 25)','rgb(25, 182, 78)', 'rgb(30, 213, 185)', 'rgb(25, 142, 200)', 'rgb(14, 55, 136)', '#6a5ab8', '#7e37b5', '#d70cbd', 'rgb(189, 6, 83)', 'white']
pColor = colorArray[0];

//change pixel into certain color on click
function clicky() {
   pixels = event.target
   if (pixels.className === 'pixel'){
      pixels.style.backgroundColor = pColor
      document.addEventListener('mouseover', clicky)
      document.addEventListener('mouseup', function(){
         document.removeEventListener('mouseover', clicky)
      })
   }
}
document.addEventListener('mousedown', clicky)

//creating colors + setting their class and id
for (var color of colorArray){
   div = document.createElement('div')
   fDiv.appendChild(div)
   div.setAttribute ('id', color)
   div.className = ('color')

   div.style.backgroundColor = (color)
}

function cleary() {
   clear = event.target
   let pxls = document.getElementsByClassName('pixel')
   if (clear.id == 'clear'){
      for(let p of pxls)
         p.style.backgroundColor = "white"
   }
}
document.addEventListener('click', cleary)

})
