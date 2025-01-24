// Your code here.
let isDragging = false;
let startX, scrollLeft;

const itemsContainer = document.querySelector('.items');

itemsContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - itemsContainer.offsetLeft;
  scrollLeft = itemsContainer.scrollLeft;
  itemsContainer.classList.add('active'); 
});

itemsContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return; 
  
  const x = e.pageX - itemsContainer.offsetLeft;
  const scroll = (x - startX) * 5; 
  itemsContainer.scrollLeft = scrollLeft - scroll;
});

itemsContainer.addEventListener('mouseup', () => {
  isDragging = false;
  itemsContainer.classList.remove('active'); 
});

itemsContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  itemsContainer.classList.remove('active');
});
