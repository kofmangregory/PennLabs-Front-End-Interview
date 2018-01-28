// toggling the display for shopping cart

function expand() {
  document.getElementById('expand').style.display = 'inline';
  document.getElementById('cart-button').style.display = 'none';
}

function compress() {
  document.getElementById('expand').style.display = 'none';
  document.getElementById('cart-button').style.display = 'inline';
}
