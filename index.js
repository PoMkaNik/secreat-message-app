const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
  // hide message form
  document.querySelector('#message-form').classList.add('hide');
  // show message panel
  document.querySelector('#message-show').classList.remove('hide');
  // add message to DOM
  document.querySelector('#message-show h1').textContent = message;
}
console.log(atob(hash.replace('#', '')));

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // show card with sharable link
  document.querySelector('#link-form').classList.remove('hide');
  // hide message form
  document.querySelector('#message-form').classList.add('hide');

  const input = document.querySelector('#message-input');
  // create encrypted message
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input');
  // create link to share with encrypted message
  linkInput.value = `${window.location}#${encrypted}`;
  // pre-select created link
  linkInput.select();
});
