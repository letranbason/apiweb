async function getData() {
  try {
    const response = await fetch('https://api.example.com/endpoint');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();

const options = {
  method: 'POST',
  body: JSON.stringify({ foo: 'bar' }),
  headers: {
    'Content-Type': 'application/json'
  }
};

const response = await fetch('https://api.example.com/endpoint', options);

import axios from 'axios';

async function getData() {
  try {
    const response = await axios.get('https://api.example.com/endpoint');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getData();

async function getData() {
  try {
    const response = await axios.get('https://api.example.com/endpoint');
    const data = response.data;

    // Render the data in the page
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear any existing content
    for (const item of data) {
      const element = document.createElement('div');
      element.innerText = item.name;
      container.appendChild(element);
    }
  } catch (error) {
    console.error(error);
  }
}

getData();

