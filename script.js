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

document.getElementById('buscar-boton').addEventListener('click', buscarRandomCocktail);

function buscarRandomCocktail() {
    ;
    fetch('https://inesdelgadohernandez.somee.com/api/cocktail/aleatorio',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => mostrarData(data));
}

document.getElementById('todos-boton').addEventListener('click', buscarTodosCocktail);

function buscarTodosCocktail() {
    fetch('https://inesdelgadohernandez.somee.com/api/cocktail/todos',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => mostrarTodosCocktail(data));
}

function mostrarTodosCocktail(data) {
    console.log(data);
    let container = document.getElementById('container');

    data.forEach(cocktail => {
        let nombreCocktail = document.createElement('h1');
        nombreCocktail.innerHTML = cocktail.nombre;
        container.appendChild(nombreCocktail);
        nombreCocktail.className = 'nombre-cocktail';

        let receta = document.createElement('p');
        receta.innerHTML = cocktail.receta;
        container.appendChild(receta);
        receta.className = 'receta-cocktail';

        let foto = document.createElement('img');
        foto.src = cocktail.fotoSrc;
        container.appendChild(foto);
        foto.className = 'foto-cocktail';
    });
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