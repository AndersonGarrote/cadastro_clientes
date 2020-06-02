var clients = [];

function submitForm() {

    var newClient = {
        name : document.getElementById("inputName").value,
        email : document.getElementById("inputEmail").value,
        phone : document.getElementById("inputPhone").value,
        cep : document.getElementById("inputCEP").value,
        street : document.getElementById("inputStreet").value,
        number : document.getElementById("inputNumber").value,
        district : document.getElementById("inputDistrict").value,
        city : document.getElementById("inputCity").value,
        state : document.getElementById("inputState").value,
    }
    
    clients.push(newClient);
    
    updateClientList();
    
    //Clear fields
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";;
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputCEP").value = "";
    document.getElementById("inputStreet").value = "";
    document.getElementById("inputNumber").value = "";
    document.getElementById("inputDistrict").value = "";
    document.getElementById("inputCity").value = "";
    document.getElementById("inputState").value = "";
}

function removeClientButtonPressed(id) {
    removeClient(id);
    updateClientList();
}

function removeClient(id) {
    clients.splice(id,1);
}


function updateClientList() {
    document.getElementById("clientsList").innerHTML = "";
    
    if (clients.length > 0) {
        for (let idx = 0; idx < clients.length; idx++) {
            const element = clients[idx];
            createCard(element,idx);
        }
    } else {
        showEmptyListMessage();
    }
}

function createCard(value, idx){
    
    var newCard = document.createElement("div");
    newCard.className = "card";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    
    cardTitle.innerText = value.name;

    var cardText = document.createElement("p");
    cardText.className = "card-text"; 

    cardText.textContent += "E-mail: " + value.email + " ";    
    cardText.textContent += "Telefone: " + value.phone+ " ";
    cardText.textContent += "CEP: " + value.cep + " ";
    cardText.textContent += "Logradouro: " + value.street + " ";
    cardText.textContent += "Número: " + value.number + " ";
    cardText.textContent += "Bairro: " + value.district + " ";
    cardText.textContent += "Cidade: " + value.city + " ";
    cardText.textContent += "Estado: " + value.state + " ";
        
    var cardButton = document.createElement("button");
    cardButton.className = "btn btn-danger";
    cardButton.onclick = function() {removeClientButtonPressed(idx)};
    cardButton.textContent = "Remover Cliente"; 

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    newCard.appendChild(cardBody);
    document.getElementById("clientsList").appendChild(newCard);
}

function showEmptyListMessage() {
    var infoText = document.createElement("div");
    infoText.className = "alert alert-info"; 

    infoText.textContent += "Não há clientes cadastrados! Adicione clientes usando o formulário ao lado.";
    
    document.getElementById("clientsList").appendChild(infoText);
}
