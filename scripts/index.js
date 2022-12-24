function myFunction() {
    var x = document.getElementById('rightnav');
    if (x.className === 'rightBar') {
      x.className += ' hide';
    } else {
      x.className = 'rightBar';
    }
  }