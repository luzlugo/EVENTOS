const productosContainer = document.querySelector('#Container')

const item = Habitaciones[0]

const div = document.createElement('div')
div.classList.add('producto')


div.innerHTML =`

<div id="Container"  class="habitacion1">
<div class="desc-hab">
    <img class="hab-img" src="${item.img}" alt="" width="600px" height="296px">
</div>

<div class="desc-hab-1 habitaciones-desc-index">
    <div class="titulo-hab-boton">
        <div class="hab-descr-ec">
            <h2 class="subtitle"> ${item.nombre} </h2>
            <p class="hab">
               ${item.descripcion}
            </p>
        </div>


        <div class="boton">
            <span class="hab precio">
               ${item.precio}
            </span>
            <br><br>
            <a class="boton boton-re" > RESERVAR  </a>
        </div>
    </div>


    <div class="lista-hab">

        <span class="hab">
            Caracteristicas:
        </span>
        <ul class="hab-ul">
            <li class="hab-li">
                <i class="fa-solid fa-wifi"></i>
                WIFI
            </li>

            <li class="hab-li">
                <i class="fa-solid fa-fan"></i>
                Ventilador
            </li>
            <li class="hab-li">
                <i class="fa-solid fa-shower"></i>
                Baño privado
            </li>
            <li class="hab-li">
                <i class="fa-solid fa-rug"></i>
                Toallas de baño
            </li>
            <li class="hab-li">
                <i class="fa-solid fa-kitchen-set"></i>
                Acceso a cocina
            </li>
            <li class="hab-li">
                <i class="fa-solid fa-square-parking"></i>
                Parqueo de acceso publico
            </li>
        </ul>
    </div>

    <div class="boton2">
        <span class="hab precio">
           ${item.precio}
        </span>
        <br><br>
        <a class="boton boton-re" target="blank"
            href="https://api.whatsapp.com/send?phone=573194792521">RESERVAR <i class="fa-brands fa-whatsapp fa-reser"></i></a>
    </div>

</div>


</div>


<hr class="hab-hr">

`
console.log(div)
productosContainer.append(div)

