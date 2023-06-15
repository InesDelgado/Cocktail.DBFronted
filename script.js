document.getElementById('buscar_Cocktail').addEventListener('click', buscarCocktail);

function buscarCocktail() {
    let nombre = document.getElementById('cocktail-input').value;
    fetch('https://inesdelgadohernandez.somee.com/api/Cocktail/buscar/' + nombre, //siempre mirar localHost!!!!!
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => mostrarData(data));

}

function mostrarData(data) {
    console.log(data);

    let container = document.getElementById('container');

    let nombreCocktail = document.createElement('h1');
    nombreCocktail.innerHTML = data.nombre;
    container.appendChild(nombreCocktail);
    nombreCocktail.className = 'nombre-cocktail';

    let receta = document.createElement('p');
    receta.innerHTML = data.receta;
    container.appendChild(receta);
    receta.className = 'receta-cocktail';

    let foto = document.createElement('img');
    foto.src = data.fotoSrc;
    container.appendChild(foto);
    foto.className = 'foto-cocktail';
}