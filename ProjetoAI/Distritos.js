//Função para os Botões
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });

    // Mostra a secção clicada
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
    activeSection.classList.add('active');

    // Atualiza a aba ativa
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

// Define a secção inicial ativa
document.querySelector('.content').style.display = 'block';


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
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const year = now.getFullYear();
    const date = `${day}/${month}/${year}`;

    dateElement.textContent = date;

}

//Combina as duas funções
function updateDateTime() {
    updateTime();
    updateDate();
}

// Atualiza a cada segundo
setInterval(updateDateTime, 1000);

// Executa logo ao carregar
updateDateTime();


//Funções para a Barra Lateral
function showSideBar() {
    const sidebar = document.querySelector('.navbar-side')
    sidebar.classList.add('active');
}

function hideSidebar() {
    const sidebar = document.querySelector('.navbar-side')
    sidebar.classList.remove('active');
}

