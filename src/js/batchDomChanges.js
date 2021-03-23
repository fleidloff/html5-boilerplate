function batchDomChanges() {
  const item = document.getElementsByClassName('item')[0];

  const height = item.clientHeight;
  item.style.height = height + 10 + 'px';
  item.style.height = height + 11 + 'px';
  item.style.height = height + 12 + 'px';
  item.style.height = height + 13 + 'px';
  item.style.height = height + 14 + 'px';
  item.style.height = height + 15 + 'px';
  item.style.height = height + 16 + 'px';
  item.style.height = height + 17 + 'px';
  item.style.height = height + 18 + 'px';
  item.style.height = height + 19 + 'px';
}

function batchDomChange2() {
  const item = document.getElementsByClassName('item')[0];

    const height = item.clientHeight;
    item.style.display = 'none';
    setTimeout(() => item.style.height = height + 10 + 'px', 0);
    setTimeout(() => item.style.height = height + 11 + 'px', 10);
    setTimeout(() => item.style.height = height + 12 + 'px', 20);
    setTimeout(() => item.style.height = height + 13 + 'px', 30);
    setTimeout(() => item.style.height = height + 14 + 'px', 40);
    setTimeout(() => item.style.height = height + 15 + 'px', 50);
    setTimeout(() => item.style.height = height + 16 + 'px', 60);
    setTimeout(() => item.style.height = height + 17 + 'px', 70);
    setTimeout(() => item.style.height = height + 18 + 'px', 80);
    setTimeout(() => item.style.height = height + 19 + 'px', 90);
    setTimeout(() => item.style.display = 'block', 150);
}

module.exports = batchDomChanges;
