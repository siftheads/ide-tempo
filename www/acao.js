// This is a JavaScript file
$(document).on("click","buscar",function(){
  $a.ajax({
  type:"get",
  url:"https://viacep.com.br/ws/"+S("#cep").val()+"/json/",
  sucess: function(data){
    var conteudo;
    conteudo = "<p><strong>Logradouro:</strong>"+data.logradouro+"</p>";
    conteudo += "<p><strong>Bairro:</strong>"+data.bairro+"</p>";
    conteudo += "<p><strong>Cidade:</strong>"+data.logradouro+"</p>";
    conteudo += "<p><strong>Estado:</strong>"+data.uf+"</p>";

    $("#dados").html(conteudo);
  },
  erro:function(){
    alert("deu erro!");
  }
  });
});