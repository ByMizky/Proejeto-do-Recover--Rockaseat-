
function toggleMode() {
 const html = document.documentElement
 
 html.classList.toggle('light')
 
 /* é possivel fazer desse modo aqui também
 if(html.classList.contains('light')) {
   html.classList.remove('light') 
 } else {
  html.classList.add('light')
 } */

 //substituindo a imagem - passo a passo:
 
 // Pegue a tag
 const img = document.querySelector("#profile img")

 //substitua a imagem:
 if(html.classList.contains("light")) {
  //se tiver no Light mode, adicione a imagem light
  img.setAttribute('src', './assets/avatar-light.png')
  img.setAttribute('alt', 'Professot Mayk de esculos escuros!')
} else {
  //se não estiver, mantenha a imagem normal
  img.setAttribute('src', './assets/avatar.png')

}
}
 