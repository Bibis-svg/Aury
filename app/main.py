from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routes.cadastro_routes import router as cadastro_router
import os

app = FastAPI(title="Sistema de Cadastro", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "http://127.0.0.1:3000",
        "https://*.vercel.app",  # Vercel domains
        "https://*.netlify.app", # Netlify domains
        "*"  # Allow all origins for now - restrict in production
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

app.include_router(cadastro_router, prefix="/api", tags=["cadastro"])

if os.path.exists("frontend/dist"):
    app.mount("/", StaticFiles(directory="frontend/dist", html=True), name="frontend")

@app.get("/")
async def root():
    """Root endpoint for API health check"""
    return {"message": "API do Sistema de Cadastro está funcionando!"}
