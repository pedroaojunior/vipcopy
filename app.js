import emailjs from 'emailjs-com';

function enviarFormulario() {
    // Código para capturar os dados do formulário e enviar o email
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    emailjs.sendForm('service_8dvvoav','template_9xjk2zo', form,'pedroaojunior@gmail.com')
        .then((result) => {
            console.log(result.text);
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            console.log(error.text);
            alert('Ocorreu um erro ao enviar a mensagem.');
        });
}

// Função para adicionar o menu no elemento com a classe 'menu-container'
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
// Chama a função quando a página carrega
//window.onload = carregarMenu;


// function produto() {
//     document.addEventListener('DOMContentLoaded', () => {
//         const filterButtons = document.querySelectorAll('.filter-btn');
//         const productCards = document.querySelectorAll('.product-card');
        
//         filterButtons.forEach(button => {
//           button.addEventListener('click', () => {
//             const category = button.getAttribute('data-category');
            
//             filterButtons.forEach(btn => btn.classList.remove('active'));
//             button.classList.add('active');
            
//             productCards.forEach(card => {
//               if (category === 'all' || card.getAttribute('data-category') === category) {
//                 card.style.display = 'flex';
//               } else {
//                 card.style.display = 'none';
//               }
//             });
//           });
//         });
        
//         const productLinks = document.querySelectorAll('.product-card .btn');
//         productLinks.forEach(link => {
//           link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const productName = e.target.parentElement.querySelector('.product-title').textContent;
//             alert(`Você selecionou o produto: ${productName}. Em breve, você poderá ver todos os detalhes deste produto!`);
//           });
//         });
//       });
// }