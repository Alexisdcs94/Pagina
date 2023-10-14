const buttons = document.querySelectorAll('a');
buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {

    let x = eclient.X - e.target.offsetLeft;
    let y = eclient.Y - e.target.offsetTop;

    let ripples = document.createElement('a');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px' ;
    this.appendChild(ripples);
  }
}