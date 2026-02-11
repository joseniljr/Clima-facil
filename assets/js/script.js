console.log("JS carregou");

document.getElementById("btnSearch").addEventListener("click", () => {
  alert("Botão funcionando");
});

async function buscarClima() {
  const cidade = document.getElementById("cidade").value;

  // 1️⃣ Buscar latitude e longitude da cidade
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`;
  const geoResp = await fetch(geoUrl);
  const geoData = await geoResp.json();

  const lat = geoData.results[0].latitude;
  const lon = geoData.results[0].longitude;

  // 2️⃣ Buscar previsão do tempo (5 dias)
  const climaUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&forecast_days=5&timezone=auto`;
  const climaResp = await fetch(climaUrl);
  const climaData = await climaResp.json();

  // 3️⃣ Mostrar previsão
  mostrarPrevisao(climaData.daily);
}

function mostrarPrevisao(daily) {
  const previsaoDiv = document.getElementById("previsao");
  previsaoDiv.innerHTML = "<h2>Previsão (5 dias)</h2>";

  for (let i = 0; i < daily.time.length; i++) {
    previsaoDiv.innerHTML += `
      <div class="dia-previsao">
        <p><strong>${daily.time[i]}</strong></p>
        <p>Máx: ${daily.temperature_2m_max[i]}°C</p>
        <p>Mín: ${daily.temperature_2m_min[i]}°C</p>
      </div>
    `;
  }
}

