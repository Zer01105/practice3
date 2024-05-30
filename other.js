var activeSign = document.getElementById('active_sign');
  var sign1 = document.getElementById('sign1');

  activeSign.addEventListener('click', function() {
    if (sign1.classList.contains('none')) {
      sign1.classList.remove('none');
    } else {
      sign1.classList.add('none');
    }
  });  