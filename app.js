var users = []

function addUser() {

    const input = document.getElementById("nameInput")
    const name = input.value

    if (name == "") {
        alert("Nombre vacío")
    }

    users.push(name)

    renderUsers()

    input.value = ""
}

function renderUsers() {

    const list = document.getElementById("userList")

    list.innerHTML = ""

    for (var i = 0; i < users.length; i++) {

        list.innerHTML += "<li onclick='deleteUser(" + i + ")'>" 
            + users[i] + 
            "</li>"
    }
}

function deleteUser(index) {
    users.splice(index, 1)
    renderUsers()
}

function loadUsers() {
    const data = localStorage.getItem("users")
    users = JSON.parse(data)
}

loadUsers()
