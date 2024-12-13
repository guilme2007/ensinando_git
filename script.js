document.getElementById("searchButton").addEventListener("click", function () {
    const cidade = document.getElementById("cityInput").value;
    if (cidade) {
      obterClima(cidade);
    } else {
      alert("Por favor, insira o nome de uma cidade!");
    }
  });
  
  function obterClima(cidade) {
    const chaveApi = "eed4d5f1a2a1311afa46aa9541478202";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&lang=pt_br&units=metric`;
  
    fetch(url)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Cidade não encontrada");
        }
        return resposta.json();
      })
      .then((dados) => {
        const nomeCidade = dados.name;
        const temperatura = dados.main.temp;
        const descricao = dados.weather[0].description;
        const icone = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  
        document.getElementById("cityName").textContent = nomeCidade;
        document.getElementById("temperature").textContent = temperatura;
        document.getElementById("description").textContent = descricao;
        document.getElementById("weatherIcon").src = icone;
  
        document.getElementById("weatherDetails").style.display = "block";
        document.getElementById("weatherInfo").style.display = "none";
      })
      .catch((erro) => {
        document.getElementById("weatherInfo").textContent =
          "Cidade não encontrada. Por favor, tente novamente com um nome válido!";
        document.getElementById("weatherDetails").style.display = "none";
        document.getElementById("weatherInfo").style.display = "block";
      });
  }
  