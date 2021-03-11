
const elements = document.querySelectorAll('[data-copy]');
console.log(elements);
Array.from(elements).forEach(itemToCopy => {
  console.log(itemToCopy.getAttribute("data-copy"));
  for (let i=0; i< parseInt(itemToCopy.getAttribute("data-copy"), 10); i++) {
    itemToCopy.appendChild(itemToCopy.childNodes[0].cloneNode(true));
  }
})