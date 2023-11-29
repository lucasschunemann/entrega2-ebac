// Função para adicionar um novo contato à tabela
function addContact() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
  
    if (name && phone) {
      var tableBody = document.querySelector('#contactTable tbody');
      var newRow = tableBody.insertRow();
  
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
  
      cell1.textContent = name;
      cell2.textContent = phone;
  
      // Limpar os campos do formulário
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  