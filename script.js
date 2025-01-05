// script.js
const tops = document.getElementById('tops')
const bottoms = document.getElementById('bottoms')
const shoes = document.getElementById('shoes')

// Function to highlight the selected item
function selectItem(event) {
    const items = event.currentTarget.querySelectorAll('img');
    items.forEach(item => item.classList.remove('selected'));
    event.target.classList.add('selected');
}

function populateClothes(){
    
}
// Add event listeners to each section's items
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', selectItem);
});