import logoPath from '../assets/images/logo.svg';

/* <div class="container">
      <div class="header"><img src=${logoPath}>Weather App</div>
      <div class="display">
        <form>
          <input type="text" id="search-bar" placeholder="City, Pin-code, etc." />
          <button type="submit">Search</button>
        </form>
        <div class="display-box"></div>
      </div>
    </div> */

const container = document.querySelector('.container');

const headerDiv = document.createElement('div');
headerDiv.classList.add('header');
headerDiv.innerHTML = `
    <img class="logo-img" src="${logoPath}">
    <p class="logo-text">Weather App</p>`;
container.appendChild(headerDiv);

const display = document.createElement('div');
display.classList.add('display');
container.appendChild(display);

const form = document.createElement('form');
display.appendChild(form);

const input = document.createElement('input');
input.type = 'text';
input.id = 'search-bar';
input.placeholder = 'City, Pin-code, IP Address, etc.';
form.appendChild(input);

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Search';
form.appendChild(button);

const createFooter = document.createElement('div');
createFooter.classList.add('footer');
createFooter.innerHTML = '<p>© Jay Singh <a href="https://github.com/mathdebate09/weather-app" target="_blank">(mathdebate09)</a></p>'
container.appendChild(createFooter);