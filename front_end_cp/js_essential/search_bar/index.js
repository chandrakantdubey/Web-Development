let userInput = document.getElementById('searchInput');

userInput.addEventListener('keyup', (e) => {
  let searchQuery = e.target.value.toLowerCase();
  let nameArr = document.querySelectorAll('.name');
  for (let counter = 0; counter < nameArr.length; counter++) {
    const currentName = nameArr[counter].textContent.toLowerCase();
    if (currentName.includes(searchQuery)) {
      nameArr[counter].style.display = 'block';
    } else {
      nameArr[counter].style.display = 'none';
    }
  }
});
