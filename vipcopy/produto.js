     document.addEventListener('DOMContentLoaded', () => {
     const filterButtons = document.querySelectorAll('.filter-btn');
     const productCards = document.querySelectorAll('.product-card');
            
        filterButtons.forEach(button => {
        button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
                
           filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
                
            productCards.forEach(card => {
              if (category === 'all' || card.getAttribute('data-category') === category) {
             card.style.display = 'flex';
                } else {
                card.style.display = 'none';
                      }
                      });
                      });
            });
            
           const productLinks = document.querySelectorAll('.product-card .btn');
           productLinks.forEach(link => {
           link.addEventListener('click', (e) => {
                 e.preventDefault();
              const productName = e.target.parentElement.querySelector('.product-title').textContent;
               alert(`Você selecionou o produto: ${productName}. Em breve, você poderá ver todos os detalhes deste produto!`);
            });
           });
       });
     