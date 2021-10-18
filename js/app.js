document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit); 
    
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('reset', handleResetClick);
    
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const footballLegendName = createFootballLegendName(event.target);
    const footballName = document.querySelector('#football-legends');
    footballName.appendChild(footballLegendName);
  
    event.target.reset();
  }
  
  const createFootballLegendName = function (form) {
    const footballLegendName = document.createElement('li');
    footballLegendName.classList.add('football-legend-name');
  
    const name = document.createElement('h2');
    name.textContent = form.name.value;
    footballLegendName.appendChild(name);
  
    const club = document.createElement('h3');
    club.textContent = form.club.value;
    footballLegendName.appendChild(club);
  
    const classification = document.createElement('p');
    classification.textContent = form.classification.value;
    footballLegendName.appendChild(classification);
  
    return footballLegendName;
  }
  
  const handleDeleteAllClick = function (event) {
    const footballName = document.querySelector('#football-legends');
    footballName.innerHTML = '';
  }
  