const API_BASE_URL = import.meta.env.VITE_API_URL || "https://aurysiteemeact-backend.onrender.com"


console.log("[v0] API_BASE_URL:", API_BASE_URL)
console.log("[v0] VITE_API_URL env var:", import.meta.env.VITE_API_URL)

export { API_BASE_URL }
