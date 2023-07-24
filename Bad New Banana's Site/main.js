document.getElementById('player-Fearigo-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('player-Fearigo-modal').classList.add('active');
});

document.getElementById('player-Fearigo-modal-close').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('player-Fearigo-modal').classList.remove('active');
});




let modals = document.getElementsByClassName('modal');
let btns = document.getElementsByClassName("player-link");
let spans = document.getElementsByClassName("close-button");

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function() {
        let modal = document.getElementById(this.getAttribute('data-target'));
        modal.style.display = "block";
    }
}

for(let i = 0; i < spans.length; i++){
    spans[i].onclick = function() {
        let modal = this.parentNode.parentNode;
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}
	

	
//final
	window.onload = function() {
  // Sorting for playerStats
  var table1 = document.getElementById("playerStats");
  var tbody1 = table1.getElementsByTagName("tbody")[0];
  var rows1 = [].slice.call(tbody1.rows, 0);

  rows1.sort(function(a, b) {
    var aBA = parseFloat(a.cells[13].innerText || a.cells[13].textContent);
    var bBA = parseFloat(b.cells[13].innerText || b.cells[13].textContent);

    var aOBP = parseFloat(a.cells[14].innerText || a.cells[14].textContent);
    var bOBP = parseFloat(b.cells[14].innerText || b.cells[14].textContent);

    var aSLG = parseFloat(a.cells[15].innerText || a.cells[15].textContent);
    var bSLG = parseFloat(b.cells[15].innerText || b.cells[15].textContent);

    var aOPS = parseFloat(a.cells[16].innerText || a.cells[16].textContent);
    var bOPS = parseFloat(b.cells[16].innerText || b.cells[16].textContent);

    if (aBA !== bBA) {
        return bBA - aBA;
    } else if (aOBP !== bOBP) {
        return bOBP - aOBP;
    } else if (aSLG !== bSLG) {
        return bSLG - aSLG;
    } else {
        return bOPS - aOPS;
    }
  })

  for (var i = 0; i < rows1.length; i++) {
    tbody1.appendChild(rows1[i]);
  }

  // Sorting for subStats
  var table2 = document.getElementById("subStats");
  var tbody2 = table2.getElementsByTagName("tbody")[0];
  var rows2 = [].slice.call(tbody2.rows, 0);

  rows2.sort(function(a, b) {
    var aBA = parseFloat(a.cells[12].innerText || a.cells[12].textContent);
    var bBA = parseFloat(b.cells[12].innerText || b.cells[12].textContent);

    var aOBP = parseFloat(a.cells[13].innerText || a.cells[13].textContent);
    var bOBP = parseFloat(b.cells[13].innerText || b.cells[13].textContent);

    var aSLG = parseFloat(a.cells[14].innerText || a.cells[14].textContent);
    var bSLG = parseFloat(b.cells[14].innerText || b.cells[14].textContent);

    var aOPS = parseFloat(a.cells[15].innerText || a.cells[15].textContent);
    var bOPS = parseFloat(b.cells[15].innerText || b.cells[15].textContent);

    if (aBA !== bBA) {
        return bBA - aBA;
    } else if (aOBP !== bOBP) {
        return bOBP - aOBP;
    } else if (aSLG !== bSLG) {
        return bSLG - aSLG;
    } else {
        return bOPS - aOPS;
    }
  })

  for (var i = 0; i < rows2.length; i++) {
    tbody2.appendChild(rows2[i]);
  }
};
