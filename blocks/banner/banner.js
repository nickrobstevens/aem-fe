
export default function decorate(block) {

  // Get the content
  const picture = block.querySelector('picture');
  const title = block.querySelector('h1');
  const subtitle = block.querySelector('p');
  const button = block.querySelector('.button-container');

  // Reset the block
  block.textContent = '';
  
  // Background image
  const background = document.createElement('div');
  background.classList.add('background-wrapper');
  background.appendChild(picture);
  block.appendChild(background);

  // Card and content
  const inner = document.createElement('div');
  inner.classList.add('inner');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  if (title) { cardContent.appendChild(title); }
  if (subtitle) { cardContent.appendChild(subtitle); }
  if (button) { cardContent.appendChild(button); }
  
  card.appendChild(cardContent);
  inner.appendChild(card);
  block.appendChild(inner);
  
  
}
