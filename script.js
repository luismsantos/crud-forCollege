var url = '' //ip of webservice

$(function () {
  carregarProdutos()
})

function carregarProdutos(){
  $.get(url, function (produtos) {
    $('#tabela>tbody>tr').remove()
    
  var linha = ''
  for(i = 0; i < produtos.length; i++) {
    linha = '<tr>' +
    '<td>' + produtos[i].idProduto + '</td>' + 
    '<td>' + produtos[i].nome + '</td>' + 
    '<td>' + produtos[i].valor + '</td>' + 
    '<td><button class="btn btn-warning btn-sm">Editar</button></td>'+
    '<td><button class="btn btn-danger btn-sm">Apagar</button></td>' +
    '</tr>'
    $('#tabela>tbody').append(linha)

    linha = ''
  }
  })
}

function novoProduto(){
  $('#nome').val('')
  $('#valor').val('')
  $('#dlgProdutos').modal('show')
}

function criarProduto() {
  produto = {
    nome: $('#nomeProduto').val(),
    valor: $('#valorProduto').val()
  }

  $.ajax({
    type: "POST",
    url: url,
    contentType: 'application/json',
    data: JSON.stringify(produto),
    success: function (response){
      carregarProdutos()
      $('#dlgProdutos').modal('hide')
    },
    error: function(erro) {
      console.log(erro)
    }
   })
}
