module.exports = repaint;

function repaint() {
  const items = document.getElementsByClassName('item');

  Array.from(items).forEach(item => {
    const height = item.clientHeight;
    item.style.height = height + 10 + 'px';
  })
}




function repaint2() {
  const items = document.getElementsByClassName('item');

  const itemsArray = Array.from(items);
  const heights = itemsArray.map(item => {
    const height = item.clientHeight;
    return { height, item };
  });

  heights.forEach(({ height, item }) => {
    item.style.height = height + 10 + 'px';
  })
}

