// In this file we are learn lexical Scoping 

function init(){
    let name = "Mozilafirefox"
    function displayname() {
        console.log(`display name is ${name}`)
        displayname()
    }
}

init()