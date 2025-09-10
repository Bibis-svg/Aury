"use client"

import { useState, useRef } from "react"
import "../styles/cadastro.css" // Importa o arquivo CSS
import { API_BASE_URL } from "../config/api.js" // Import API configuration

// Importação das imagens para uso no componente
import elipse1 from "../assets/image/elipse1.png"
import elipse2 from "../assets/image/elipse2.png"
import elipse3 from "../assets/image/elipse3.png"

const CadastroUsuario = () => {
  // Estado para controlar se o cartão está virado
  const [flipped, setFlipped] = useState(false)

  // Ref para acessar o elemento do formulário
  const formRef = useRef(null)

  // Lida com o clique no botão
  const handleFlip = async (e) => {
    e.preventDefault()

    // Se o cartão não está virado, vira-o.
    if (!flipped) {
      setFlipped(true)
    } else {
      // Se já está virado, tenta enviar o formulário
      const form = formRef.current
      const formData = new FormData(form)

      try {
        const response = await fetch(`${API_BASE_URL}/api/cadastro`, {
          method: "POST",
          body: formData,
        })

        if (response.ok) {
          const result = await response.json()
          alert(result.mensagem || "Usuário cadastrado com sucesso!")
          // Redireciona se o cadastro for bem-sucedido
          window.location.href = "/home"
        } else {
          const errorData = await response.json()
          alert(errorData.detail || "Erro ao cadastrar usuário!")
        }
      } catch (error) {
        console.error("Erro:", error)
        alert("Erro de conexão com o servidor.")
      }
    }
  }

  return (
    <div className="background">
      <img src={elipse1 || "/placeholder.svg"} alt="elipse1" className="elipse elipse1" />
      <img src={elipse2 || "/placeholder.svg"} alt="elipse2" className="elipse elipse2" />
      <img src={elipse3 || "/placeholder.svg"} alt="elipse3" className="elipse elipse3" />
      <div className="body">
        <div className="circle-container">
          <form ref={formRef} id="form-cadastro" method="post">
            <div className="flip-card">
              <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
                <div className="flip-card-front">
                  <div className="form-container">
                    <label htmlFor="nome">nome</label>
                    <input type="text" id="nome" name="nome" required />

                    <label htmlFor="nome_usuario">username</label>
                    <input type="text" id="nome_usuario" name="nome_usuario" required />

                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="senha">senha</label>
                    <input type="password" id="senha" name="senha" required />
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="form-container">
                    <label htmlFor="id_genero">gênero</label>
                    <select id="id_genero" name="id_genero" required>
                      <option value="">Selecione</option>
                      <option value="1">Feminino</option>
                      <option value="2">Masculino</option>
                      <option value="3">Outro</option>
                    </select>

                    <label htmlFor="id_tipo_usuario">tipo de user</label>
                    <select id="id_tipo_usuario" name="id_tipo_usuario" required>
                      <option value="">Selecione</option>
                      <option value="1">Administrador</option>
                      <option value="2">Usuário Comum</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button className="floating-btn" id="flip-btn" onClick={handleFlip}>
              &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CadastroUsuario
