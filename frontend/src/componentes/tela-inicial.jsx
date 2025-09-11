"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/tela-inicial.css"

const TelaInicial = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showNewContent, setShowNewContent] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Criar linhas de código flutuantes
    const backgroundCode = document.querySelector(".background-code")
    const codeLines = [
      '<html lang="en">',
      '<meta charset="UTF-8">',
      "<div>",
      "<span>",
      'console.log("Hello World");',
      "const arr = [];",
      "function init() {",
      "#include <iostream>",
      "public static void main(String[] args) {",
      'print("Python Code");',
      "var x = 10;",
      'let y = "text";',
      "</head>",
      "<body>",
      "</html>",
      "</script>",
      "<style>",
      ".class { color: #fff; }",
      'git commit -m "initial commit"',
      "npm install",
      "pip install requests",
      "SELECT * FROM users;",
      "UPDATE products SET price = 99;",
      '<?php echo "Hello"; ?>',
      "#define MAX_SIZE 100",
      "// C++ comment",
      "/* JS comment */",
      "<span></span>",
      "<a></a>",
      "<p></p>",
      "<h1></h1>",
      "background-color: #0D0D0D;",
      'font-family: "Fira Code";',
      "position: absolute;",
      "display: flex;",
      "justify-content: center;",
      "align-items: center;",
      "z-index: 10;",
      "transform: translate(-50%, -50%);",
      "width: 100vw;",
      "height: 100vh;",
      "overflow: hidden;",
    ]

    const createCodeLine = () => {
      const line = document.createElement("span")
      line.classList.add("code-line")

      const rand = Math.random()
      if (rand < 0.33) {
        line.classList.add("back")
      } else if (rand < 0.66) {
        line.classList.add("mid")
      } else {
        line.classList.add("front")
      }

      line.textContent = codeLines[Math.floor(Math.random() * codeLines.length)]
      line.style.left = Math.random() * 100 + "vw"
      line.style.top = Math.random() * 200 - 50 + "vh"

      const zDepth = Math.random() * 300
      line.style.setProperty("--z-index-depth", `-${zDepth}px`)
      line.style.setProperty("--scale-depth", `${1 - zDepth / 600}`)

      const duration = 25 // duração base em segundos
      line.style.animationDelay = `-${Math.random() * duration}s`

      if (backgroundCode) {
        backgroundCode.appendChild(line)
      }
    }

    // Criar 70 linhas de código
    for (let i = 0; i < 70; i++) {
      createCodeLine()
    }

    // Cleanup function
    return () => {
      if (backgroundCode) {
        backgroundCode.innerHTML = ""
      }
    }
  }, [])

  const handleHumanCheck = () => {
    setIsLoading(true)

    setTimeout(() => {
      setShowNewContent(true)
      setIsLoading(false)
    }, 2000)
  }

  const handleYesClick = () => {
    navigate("/cadastro")
  }

  const handleNoClick = () => {
    // Criar efeito glitch e mostrar erro
    startGlitchTransition()
  }

  const startGlitchTransition = () => {
    document.body.classList.add("transitioning")

    const glitchContainer = document.createElement("div")
    glitchContainer.classList.add("transition-glitch-container")

    const numSquares = 100
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement("div")
      square.classList.add("glitch-square")

      square.style.top = Math.random() * 100 + "vh"
      square.style.left = Math.random() * 100 + "vw"
      square.style.width = Math.random() * 10 + 5 + "vw"
      square.style.height = Math.random() * 10 + 5 + "vw"

      const randomRotate = Math.random() * 360 - 180
      const randomHue = Math.random() * 180 - 90
      square.style.setProperty("--random-rotate", `${randomRotate}deg`)
      square.style.setProperty("--random-hue", `${randomHue}deg`)

      glitchContainer.appendChild(square)
    }

    document.body.appendChild(glitchContainer)
    glitchContainer.style.display = "block"

    setTimeout(() => {
      // Redirecionar para página de erro ou mostrar mensagem
      alert("O FUTURO DA HUMANIDADE FOI COMPROMETIDO")
      document.body.removeChild(glitchContainer)
      document.body.classList.remove("transitioning")
    }, 1000)
  }

  return (
    <div className="tela-inicial">
      <div className="glitch-overlay"></div>
      <div className="background-code"></div>

      <div className="popup-container">
        <div src="./popupcyber.png" alt="Cyber Popup Background" className="popup-image" />

        <div className="popup-content">
          {!showNewContent ? (
            <div className="popup-text">
              <h1>HUMAN.EXE INICIADO</h1>
              <p>
                As máquinas não apenas pensam, elas sentem. Elas decidiram que não precisamos mais existir. Mas uma
                falha no sistema abriu uma brecha.
              </p>
              <p>
                Esse site é um arquivo sobrevivente. Uma tentativa de lembrar o que fomos. Uma busca por tudo aquilo que
                a IA tentou apagar: beleza, afeto, caos, erro, dor, poesia.
              </p>
              <p>Se você está lendo isso, você ainda é humano. E isso é raro.</p>

              <div className="btn-align">
                {isLoading ? (
                  <div className="loader"></div>
                ) : (
                  <button className="human-check-button" onClick={handleHumanCheck}>
                    <span className="checkbox"></span>
                    Eu não sou humano
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="popup-text">
              <h1 className="new-title">ACESSO</h1>
              <p className="prompt-text">Você está pronto?</p>
              <button className="choice-button" onClick={handleYesClick}>
                &gt; SIM
              </button>
              <button className="choice-button" onClick={handleNoClick}>
                &gt; NÃO
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TelaInicial
