document.addEventListener('DOMContentLoaded', function(){

//set and grab my major html components
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

//make pixels
function makePixels() {
   for (var i = 0; i < 1988; i++) {
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
//mouse down
//mouse over
//mouse up
document.addEventListener('click', choosey)
// document.addEventListener('mousedown', choosey)

//colors in palette
colorArray = ['#000000', '#573323', 'rgb(198, 113, 36)', 'orange', 'rgb(144, 237, 25)','green', 'rgb(30, 213, 185)', 'rgb(25, 142, 200)', 'rgb(14, 55, 136)', 'white']
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
})
