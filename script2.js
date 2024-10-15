console.log("USERS 1 Y 2");

/* CARTAS PLACEHOLDER */
const ids = [];
for(let i = 0; i < 6; i++) {
    ids.push(`
    <div class="card m-5 col-4">
        <div class="card" aria-hidden="true">
            <img src="..." class="card-img-top">
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <p class="placeholder col-6" id="cartas">
                        <span>jn</span>
                    </p>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-7"></span>
                </p>
            </div>
        </div>
    </div>
    `);
}

/* IMPRIMIRLAS */
const cartasPlaceholder = document.getElementById("cartas");
cartasPlaceholder.innerHTML = ids.join("");

/* CARTAS DE USUARIOS */
const cambiarCarta = (obtenerUsuarios) => {
    const cartasSpan = document.getElementById('cartas');
    cartasSpan.innerHTML = "";
    obtenerUsuarios.forEach((usuario) => {
        const nuevaCarta = `
        <div class="card m-5 col-4">
          <img src="${usuario.avatar}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${usuario.first_name} ${usuario.last_name}</h5>
            <p class="card-text">ID: ${usuario.id}</p>
            <p class="card-text">E-mail: ${usuario.email}</p>
          </div>
        </div>
      `;
        cartasSpan.innerHTML += nuevaCarta;
    });
};

/* CAMBIO DE PLACEHOLDER A CARTA DEUSUARIOS */
const imprimirCartas2seg = (usuarios) => {
    setTimeout(() => cambiarCarta(usuarios), 2000);
};

/* OBTENEMOS LOS DATOS DE LA URL*/
const datosUsers = async (url) => {
    const resolve = await fetch(url);
    const users = await resolve.json();
    imprimirCartas2seg(users.data);
}
datosUsers("https://reqres.in/api/users?page=2");
