document.addEventListener('DOMContentLoaded', function() {
let signActive = document.querySelector('.sign_active1');
let sign = document.querySelector('.sign1');

signActive.addEventListener('click', () => {
  sign1.classList.remove('none');
});
  });

  
//slider_images
document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.slider_image_2');
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach(function(image) {
        image.classList.remove('active');
      });
      images[index].classList.add('active');
    }
  
    document.querySelector('.slider_arrows_l').addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex);
    });
  
    document.querySelector('.slider_arrows_r').addEventListener('click', function() {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      showImage(currentIndex);
    });
  
    showImage(currentIndex);
  });

  //slider_squares
  document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.slider_square');
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach(function(image) {
        image.classList.remove('active');
      });
      images[index].classList.add('active');
    }
  
    document.querySelector('.slider_arrows_l').addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex);
    });
  
    document.querySelector('.slider_arrows_r').addEventListener('click', function() {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      showImage(currentIndex);
    });
  
    showImage(currentIndex);
  });

  //tabbs


  document.addEventListener('DOMContentLoaded', function() {
    var brands = document.querySelectorAll('.brand');
    var brandTexts = document.querySelectorAll('.brand_text');

    brands.forEach(function(brand, index) {
      brand.addEventListener('click', function() {

        brands.forEach(function(b) {
          b.classList.remove('active');
        });
        brandTexts.forEach(function(text) {
          text.classList.remove('active');
        });

        this.classList.add('active');
        brandTexts[index].classList.add('active');
      });
    });
  });

  //filter 2

    document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.categories_image');

    function swapImages(direction) {
      if (direction === 'right') {
        var lastImage = images[images.length - 1];
        for (var i = images.length - 1; i > 0; i--) {
          images[i].innerHTML = images[i - 1].innerHTML;
        }
        images[0].innerHTML = lastImage.innerHTML;
      } else if (direction === 'left') {
        var firstImage = images[0];
        for (var i = 0; i < images.length - 1; i++) {
          images[i].innerHTML = images[i + 1].innerHTML;
        }
        images[images.length - 1].innerHTML = firstImage.innerHTML;
      }
    }

    document.getElementById('leftArrow').addEventListener('click', function() {
      swapImages('left');
    });

    document.getElementById('rightArrow').addEventListener('click', function() {
      swapImages('right');
    });
  });

  //accordion

  document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.filter_main_button');
    var productBlocks = document.querySelectorAll('.filter_main_images_product');
    var hiddenProductBlocks = document.querySelectorAll('.filter_main_images_product:nth-child(n+9)');

    button.addEventListener('click', function(event) {
      event.preventDefault(); 

      if (button.classList.contains('active')) {

        for (var i = 0; i < hiddenProductBlocks.length; i++) {
          hiddenProductBlocks[i].style.display = 'none';
        }
        button.classList.remove('active');
        button.textContent = 'Show more';
        button.classList.remove('hide-button'); 
      } else {
        for (var i = 0; i < hiddenProductBlocks.length; i++) {
          hiddenProductBlocks[i].style.display = 'block';
        }
        button.classList.add('active');
        button.textContent = 'Скрыть';
        button.classList.add('a_but');
      }
    });
  });

  //filter
  document.addEventListener('DOMContentLoaded', function() {
    var productBlocks = document.querySelectorAll('.filter_main_images_product');
    var filterCheckbox1 = document.getElementById('filterCheckbox_Best_sellers');
    var filterCheckbox2 = document.getElementById('filterCheckbox_NEW_Arivals');

    filterCheckbox1.addEventListener('change', function() {
      applyFilters();
    });

    filterCheckbox2.addEventListener('change', function() {
      applyFilters();
    });

    function applyFilters() {
      var filterCheckbox1 = document.getElementById('filterCheckbox_Best_sellers');
      var filterCheckbox2 = document.getElementById('filterCheckbox_NEW_Arivals');

      var filterValue1 = filterCheckbox1.checked ? 'Best_sellers' : '';
      var filterValue2 = filterCheckbox2.checked ? '1' : '';

      for (var i = 0; i < productBlocks.length; i++) {
        var block = productBlocks[i];
        var blockFilter1 = block.getAttribute('data-filter1');
        var blockFilter2 = block.getAttribute('data-filter2');

        if ((filterValue1 === '' || blockFilter1 === filterValue1) && (filterValue2 === '' || blockFilter2 === filterValue2)) {
          block.style.display = 'block';
        } else {
          block.style.display = 'none';
        }
      }
    }
  });

  


  