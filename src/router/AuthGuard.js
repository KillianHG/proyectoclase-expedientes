export default (to, from, next) => {
    let a = true
    if (a) {
        next()
    } else {
        next('/validarusuario')
    }
}
