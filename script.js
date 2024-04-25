const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const editora = document.getElementById('editora').value;
  const ano = document.getElementById('ano').value;
  const genero = document.getElementById('genero').value;
  const estado = document.getElementById('estado').value;
  const nomeDoador = document.getElementById('nomeDoador').value;
  const contatoDoador = document.getElementById('contatoDoador').value;

  // Validação opcional (evita envio de dados incompletos)
  if (titulo === '' || autor === '' || editora === '' || ano === '' || genero === '' || estado === '') {
    alert('Preencha todos os campos obrigatórios!');
    return; // Interrompe a execução do código caso a validação falhe
  }

  // Salva os dados do formulário no localStorage
  const livro = {
    titulo: titulo,
    autor: autor,
    editora: editora,
    ano: ano,
    genero: genero,
    estado: estado,
    nomeDoador: nomeDoador,
    contatoDoador: contatoDoador
  };

  // Verifica se já existem dados salvos no localStorage
  let historico = JSON.parse(localStorage.getItem('historico')) || [];

  // Adiciona o novo livro à lista de livros salvos
  historico.push(livro);

  // Salva a lista atualizada de livros no localStorage
  localStorage.setItem('historico', JSON.stringify(historico));

  alert('Livro cadastrado com sucesso!');
});
// Função para buscar os dados do localStorage e exibir na tela
function exibirLivros() {
  const historico = JSON.parse(localStorage.getItem('historico')) || [];

  // Verifica se há dados no histórico
  if (historico.length === 0) {
    document.getElementById('listaLivros').innerHTML = '<p>Nenhum livro cadastrado.</p>';
    return;
  }

  // Cria uma tabela para exibir os livros
  let tabela = '<table>';
  tabela += '<tr><th>Título</th><th>Autor</th><th>Editora</th><th>Ano</th><th>Gênero</th><th>Estado</th><th>Nome do Doador</th><th>Contato do Doador</th></tr>';
  
  // Itera sobre os livros no histórico
  historico.forEach(livro => {
    tabela += `<tr>
      <td>${livro.titulo}</td>
      <td>${livro.autor}</td>
      <td>${livro.editora}</td>
      <td>${livro.ano}</td>
      <td>${livro.genero}</td>
      <td>${livro.estado}</td>
      <td>${livro.nomeDoador}</td>
      <td>${livro.contatoDoador}</td>
    </tr>`;
  });

  tabela += '</table>';

  // Exibe a tabela na div 'listaLivros'
  document.getElementById('listaLivros').innerHTML = tabela;
}

// Chama a função para exibir os livros ao carregar a página
window.onload = exibirLivros;
