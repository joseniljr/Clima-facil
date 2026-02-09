# 🌦️ ClimaFácil

Aplicativo web simples que permite pesquisar uma cidade e exibir a temperatura atual e a velocidade do vento em tempo real, utilizando uma API REST pública.

Projeto desenvolvido com foco em aprendizado de HTML, CSS e JavaScript (Vanilla JS).

---

## 🚀 Funcionalidades

- Buscar clima pelo nome da cidade
- Exibir:
  - Temperatura atual
  - Velocidade do vento
  - Nome da cidade e país
- Interface simples e amigável
- Consumo de API pública

---

## 🛠️ Tecnologias utilizadas

- HTML  
- CSS  
- JavaScript   
- Open-Meteo API (API REST pública)

---

## 🌐 API utilizada

### Geocoding API (Open-Meteo)  
Converte o nome da cidade em latitude e longitude.

### Weather API (Open-Meteo)  
Retorna dados meteorológicos atuais, como:
- Temperatura
- Velocidade do vento

📄 Documentação oficial:  
https://open-meteo.com/

---

## 📁 Estrutura do projeto
clima-facil/
├── index.html
├── style.css
└── script.js


---

## ▶️ Como executar o projeto

1. Clone ou baixe este repositório
2. Abra a pasta do projeto
3. Dê duplo clique no arquivo `index.html`  
   ou abra com a extensão **Live Server** no VS Code
4. Digite o nome de uma cidade e clique em **Pesquisar**

> Não é necessário instalar dependências ou usar servidor backend.

---

## 📌 Observações

- O projeto utiliza a API Open-Meteo, que é gratuita e não exige chave de acesso (API Key).
- Os dados exibidos são em tempo real.
- Caso a cidade não seja encontrada, o sistema exibirá um alerta.

---

## 📚 Aprendizados

- Consumo de API REST pública
- Uso de `fetch` e `async/await`
- Manipulação do DOM com JavaScript
- Organização básica de projeto frontend
- Tratamento de erros simples

---

## 👤 Autor

Projeto desenvolvido Por Josenil Soares para fins de estudo e aprendizado em programação web.

