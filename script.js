document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const btn = document.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = "Enviando...";

  const data = {
    ano: document.getElementById("ano").value,
    especialidad: document.getElementById("especialidad").value,
    seccion: document.getElementById("seccion").value,
    nie: document.getElementById("nie").value,
    fecha_nacimiento: document.getElementById("fecha_nacimiento").value,
    numero_telefono: document.getElementById("numero_telefono").value,
  };

  try {
    const response = await fetch("http://37.60.243.4:8002/recuperacion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Formulario enviado correctamente:\n" + JSON.stringify(result, null, 2));
      document.querySelector("form").reset();
    } else {
      alert(" Error: " + (result.detail || "Error desconocido"));
    }
  } catch (error) {
    alert(" No se pudo conectar con el servidor.\n" + error.message);
  } finally {
    btn.disabled = false;
    btn.textContent = "Enviar";
  }
});
