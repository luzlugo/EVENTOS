const modalContenedor = document.querySelector('#modal-contenedor')
const openmodal = document.querySelector('#boton-carrito')
const closeModal = document.querySelector('#carrito-cerrar')

openmodal.addEventListener('click', () => {

    modalContenedor.classList.add('modal-contenedor--visible')

})

closeModal.addEventListener('click',()=>{

modalContenedor.classList.remove('modal-contenedor--visible')

})