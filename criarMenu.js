function criarMenu() {
    return `
        <img src="img/logo-removebg-preview.png" class="logo" alt="VipCopy">
        <p class="cel">&phone; Ligue Agora (85)997976979</p>
        <nav>
            <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li class="submenu-parent">
                    <a href="#">Empresa</a>
                    <ul class="submenu">
                        <li><a href="#">Nossa História</a></li>
                        <li><a href="#">Missão,visão e princípios</a></li>
                        <li><a href="#">Sobre nós</a></li>
                    </ul>
                </li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Suporte</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
        </nav>
    `;
}
const menuContainer = document.getElementById('menu-container');
menuContainer.innerHTML = criarMenu();