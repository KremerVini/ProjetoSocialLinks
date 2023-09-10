function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* pegar a tag img e substituir a imagem */

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/light-avatar.png")
    img.setAttribute("alt", "Eu, sorrindo")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Vini Kremer sorrindo, usando microfone na mão falando algo"
    )
  }

  /* se tiver light mode adicionar a imagem light, se tiver sem light mode manter a imagem normal */
}
