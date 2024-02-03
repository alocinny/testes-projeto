import './pag_consultas.css'

function mostrar_opcoes_menu(){
  var mostrar_menu = ReactDOM(document.getElementsByClassName("opcoes_do_menu")); 

  if(mostrar_menu.style.display==='none'){
    mostrar_menu.style.display = 'block';
  } else {
    mostrar_menu.style.display = 'none';
  }
}
