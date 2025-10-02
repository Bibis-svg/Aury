from fastapi import Form, HTTPException
from app.models.cadastro_model import cadastrar_usuario

def cadastro_usuario(
    nome: str = Form(...),
    nome_usuario: str = Form(...),
    email: str = Form(...),
    senha: str = Form(...),
    id_genero: int = Form(...),
    id_tipo_usuario: int = Form(...)
):
    """
    Controlador para a lógica de cadastro de usuário.
    Recebe os dados do formulário e chama o modelo para o cadastro.
    """
    try:
        id_cadastro = cadastrar_usuario(nome, nome_usuario, email, senha, id_genero, id_tipo_usuario)
        return {"mensagem": "Usuário cadastrado com sucesso!", "id_cadastro": id_cadastro}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao cadastrar usuário: {str(e)}")
