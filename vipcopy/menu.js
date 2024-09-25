function carregarMenu() {
    const menuHTML = `
        <ul class="menu">
            <li><a href="index.html">Home</a></li>
            <li class="submenu-parent">
                <a href="#">Empresa</a>
                <ul class="submenu">
                    <li><a href="#">Nossa História</a></li>
                    <li><a href="#">Missão, visão e princípios</a></li>
                    <li><a href="#">Sobre nós</a></li>
                </ul>
            </li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="contato.html">Contato</a></li>
        </ul>
    `;

    // Insere o HTML do menu no elemento que tiver a classe 'menu-container'
    document.querySelector('.menu-container').innerHTML = menuHTML;
    
}
window.onload = carregarMenu;