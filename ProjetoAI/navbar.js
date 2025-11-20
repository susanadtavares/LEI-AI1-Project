//Funções para a Barra Lateral
function showSideBar() {
    const sidebar = document.querySelector('.navbar-side')
    sidebar.classList.add('active');
}

function hideSidebar() {
    const sidebar = document.querySelector('.navbar-side')
    sidebar.classList.remove('active');
}