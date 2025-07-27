import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {

  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {

    const li = document.createElement('li');
    li.classList.add('card');

    const picture = row.firstElementChild;
    picture.classList.add('card-image');
    
    const content = row.querySelector('div + div');
    content.classList.add('card-content');

    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z"/></svg>';
    content.appendChild(icon);

    li.appendChild(picture);
    li.appendChild(content);
    
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
