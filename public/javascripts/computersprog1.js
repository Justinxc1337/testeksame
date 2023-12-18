function fyldtabel() {
  var minArray =[
    {titel: 'Titel', forfatter:'Forfatter', forlag: 'Forlag', udgave: 'Udgave', pris: 'Pris'},
    {titel: 'Introduction to Java', forfatter:'Liang, Daniel Y', forlag: 'Pearson', udgave: 11, pris: 250},
    {titel: 'Python Crash Course', forfatter:'Eric Matthes', forlag: 'No starch', udgave: 2, pris: 300},
  ]
  var html ="<table border='1|1'>";

  // Tilføjet 500 mm delay for at fremvise at tabellen kommer fra JavaScript og ikke HTML
  setTimeout(() => {

  for (var i = 0; i < minArray.length; i++) {
    html+="<tr>";
    html+="<td>"+minArray[i].titel+"</td>";
    html+="<td>"+minArray[i].forfatter+"</td>";
    html+="<td>"+minArray[i].forlag+"</td>";
    html+="<td>"+minArray[i].udgave+"</td>";
    html+="<td>"+minArray[i].pris+"</td>";
    html+="</tr>";
  }

  document.getElementById("table").innerHTML = html;
  }, 500);
}
  
fyldtabel()