let i = 0;
let text = 'My goal is to work everyday to solve problems for businesses and organizations. Clients and customers are at the heart of any success.';
    const textSpeed = 45;

function typingKeys() {
  if (i < text.length) {
    document.getElementById("typedInput").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingKeys, textSpeed);
  }
}

// I really liked the Javascript effect of typing text on the page itself..I found a cool reference at https://codepen.io/iion91/pen/NWqBdgq //