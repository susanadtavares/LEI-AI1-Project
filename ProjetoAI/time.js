//Função Hora
function updateTime() {
    const timeElement = document.getElementById('Time');
    const now = new Date();

    // Formatação da hora
    const time = now.toLocaleTimeString('pt-PT');

    timeElement.textContent = time;
}

//Função Data
function updateDate(){

    const dateElement = document.getElementById('Date');
    const now = new Date();

    // Formatação da data
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = now.getFullYear();
  const date = `${day}/${month}/${year}`;

  dateElement.textContent = date;

}

function updateDateTime() {
    updateTime();
    updateDate();
}

// Atualiza a cada segundo
setInterval(updateDateTime, 1000);

// Executa imediatamente ao carregar
updateDateTime();