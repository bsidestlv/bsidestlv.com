// Shuffle
document.querySelectorAll('.shuffle')
  .forEach(function (listElt) {
    if (listElt.children.length) {
      for (var i = listElt.children.length; i >= 0; i--) {
        listElt.appendChild(listElt.children[Math.random() * i | 0]);
      }
    }
  });
