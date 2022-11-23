// enahced object literals

// si los parametros no van a cambiar
// se pueden retornar en un json sin transformar
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}


console.log(newUser("gndx",24,"MX", 1));