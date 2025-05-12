
let balance = localStorage.getItem('localBalance') ? parseFloat(localStorage.getItem('localBalance')) : 1000;
document.querySelector('.balance-coin').innerHTML = balance; 


      //Анимация иконок (камень, ножницы, бумага)
      const icons = document.querySelectorAll('.icon-noz, .icon-cam, .icon-bum');
    
      function getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
      }
    
      function animateSVG(icon) {
        const randomRotation = getRandomValue(-15, 15); // Измените на нужный диапазон поворота
        const randomTranslation = getRandomValue(-15, 15); // Измените на нужный диапазон смещения
    
        icon.style.transform = `rotate(${randomRotation}deg) translateY(${randomTranslation}px)`;
    
        // Измените интервал между анимациями
        setTimeout(() => animateSVG(icon), getRandomValue(200, 600));
      }
    
      
      icons.forEach(icon => {
        animateSVG(icon);
      });