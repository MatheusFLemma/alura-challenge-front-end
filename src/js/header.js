// ==================== ABRIR E FECHAR SEARCH BAR ====================

// ========== SELEÇÃO DOS BOTÕES ==========
const searchBarOpen = document.getElementById("search-bar-open");
const searchBarClose = document.getElementById("search-bar-close");
const btnMenu = document.getElementById("btn-menu");
const iconMenu = document.getElementById("icon-menu");

// ========== FUNÇÃO PARA ADICIONAR OU RETIRAR A CLASSE HIDDEN DO SEARCH BAR ==========
function toggleMenuSearchBar() {
  const searchBarMobile = document.getElementById("search-bar-mobile");

  searchBarMobile.classList.toggle("hidden");
}

// ========== FUNÇÃO PARA ADICIONAR OU RETIRAR A CLASSE HIDDEN DO MENU LATERAL ==========
function toggleSideMenu() {
  const menu = document.getElementById("menu-nav-bar");

  menu.classList.toggle("hidden");
}

// ========== FUNÇÃO PARA MUDAR O ÍCONE AO ABRIR O MENU LATERAL ==========
function toggleIcon() {
  const icon = document.getElementById("icon-menu");

  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
}

// ========== ACIONAR FUNÇÃO A PARTIR DO CLICK ==========
searchBarOpen.addEventListener("click", toggleMenuSearchBar);
searchBarClose.addEventListener("click", toggleMenuSearchBar);
btnMenu.addEventListener("click", toggleSideMenu);
iconMenu.addEventListener("click", toggleIcon);
