from fastapi import APIRouter, Form
from app.controllers.cadastro_controller import cadastro_usuario

router = APIRouter()

@router.post("/cadastro")
def rota_cadastro(
    nome: str = Form(...),
    nome_usuario: str = Form(...),
    email: str = Form(...),
    senha: str = Form(...),
    id_genero: int = Form(...),
    id_tipo_usuario: int = Form(...)
):
    return cadastro_usuario(nome, nome_usuario, email, senha, id_genero, id_tipo_usuario)
