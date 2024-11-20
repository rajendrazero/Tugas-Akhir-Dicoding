function color() {
  let root = document.documentElement;
  
  if (root.style.getPropertyValue('--main') === "#fff") {
    root.style.setProperty('--main', '#333');
    root.style.setProperty('--bg-second', '#ccc');
  } else {
    root.style.setProperty('--main', '#fff');
    root.style.setProperty('--bg-second', '#f4f4f4');
  }
  
}