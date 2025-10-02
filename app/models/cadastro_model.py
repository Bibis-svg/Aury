import oracledb
import hashlib
import os
from fastapi import HTTPException


ORACLE_USER = os.getenv("ORACLE_USER", "rm557621")
ORACLE_PASSWORD = os.getenv("ORACLE_PASSWORD", "240606")
ORACLE_DSN = os.getenv("ORACLE_DSN", "oracle.fiap.com.br:1521/orcl")

def get_connection():
   
    try:
        return oracledb.connect(user=ORACLE_USER, password=ORACLE_PASSWORD, dsn=ORACLE_DSN)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro de conexão com o banco: {str(e)}")

def hash_password(password: str) -> str:
    
    return hashlib.sha256(password.encode()).hexdigest()

def cadastrar_usuario(nome, nome_usuario, email, senha, id_genero, id_tipo_usuario):
    conn = None
    cursor = None
    try:
        conn = get_connection()
        cursor = conn.cursor()
        
       
        cursor.execute("""
            SELECT COUNT(*) FROM CP4_CADASTRO_USUARIO 
            WHERE EMAIL = :1 OR NOME_USUARIO = :2
        """, (email, nome_usuario))
        
        if cursor.fetchone()[0] > 0:
            raise HTTPException(status_code=400, detail="Email ou nome de usuário já existe")
        
        
        cursor.execute("SELECT NVL(MAX(ID_CADASTRO), 0) + 1 FROM CP4_CADASTRO_USUARIO")
        id_cadastro = cursor.fetchone()[0]

        senha_hash = hash_password(senha)

        cursor.execute("""
            INSERT INTO CP4_CADASTRO_USUARIO 
            (ID_CADASTRO, NOME, NOME_USUARIO, EMAIL, SENHA, ID_GENERO, ID_TIPO_USUARIO)
            VALUES (:1, :2, :3, :4, :5, :6, :7)
        """, (id_cadastro, nome, nome_usuario, email, senha_hash, id_genero, id_tipo_usuario))

        conn.commit()
        return id_cadastro
        
    except HTTPException:
        if conn:
            conn.rollback()
        raise
    except Exception as e:
        if conn:
            conn.rollback()
        raise HTTPException(status_code=500, detail=f"Erro no banco de dados: {str(e)}")
    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()
