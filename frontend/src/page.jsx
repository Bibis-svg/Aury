import { useEffect } from "react";

export default function IndexPage() {
  useEffect(() => {
    window.location.href = "/api/cadastro";
  }, []);

  return (
    <div>
      <p>Redirecionando...</p>
    </div>
  );
}
