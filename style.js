/*
    * * * * * * * *
    
    DESAFIO PLANILHA DE GASTOS:
    
    Nesse exercício é necessário preencher na tela os dados do objeto 'financas'.
    
    1. Desenvolva uma função que exibe o financas.saldo no lugar do texto
    'Carregando saldo...'.
    
    2. Desenvolva uma função que exibe financas.transacoes na tabela no lugar do
    texto 'Carregando dados...'. Para cada transacao será necessário criar
    uma nova linha na tabela, e para cada propriedade uma nova coluna. As
    colunas devem ter o atributo classe como 'coluna-*****' substituindo o
    ***** pelo nome da propriedade, como 'coluna-descricao', 'coluna-categoria'
    ou 'coluna-valor'.
    
    3. Para que os botões Adicionar despesa e Adicionar receita funcionem é
    necessário atribuir as funções de prompt criadas na primeira semana ao clique
    desses botões. E depois de adicionar o resultado ao objeto financas, chame as 
    funções de exibicação de dados criadas nos exercícios acima para que os valores
    da tela sejam atualizados.
    
    * * * * * * * *
*/

const financas = {
    saldo: 10,
    transacoes: [
      {
        descricao: 'Salgado na faculdade',
        categoria: 'Despesa',
        valor: 5.5
      },
      {
        descricao: 'Livro Clean Code',
        categoria: 'Despesa',
        valor: 50
      },
      {
        descricao: 'Grana do estágio',
        categoria: 'Receita',
        valor: 80
      },
      {
        descricao: 'Capinha pro celular',
        categoria: 'Despesa',
        valor: 15
      },
    ]
  };
  
  /*
      !!BÔNUS!!
      Essa função recebe como parâmetro um número e o retorna formatado
      como moeda, assim a informação fica mais legível na tela ;)
  */
  function formatarValor(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
  
  function exibirFinancas() {
    console.log('Saldo: ', formatarValor(financas.saldo));
    financas.transacoes.forEach((transacao, i) => {
      console.log('');
      
      console.log('Transacao ', i + 1, ':');
      console.log('[', transacao.categoria, ']', transacao.descricao);
      console.log(formatarValor(transacao.valor));
    });
  }
  
  exibirFinancas();
  
  function adicionarDespesa() {
    const descricaoDespesa = window.prompt('Qual a descricao de sua despesa?');
    const valorDespesa = window.prompt('Qual o valor de sua despesa?');
    
    if (valorDespesa.indexOf(',') > 0) {
      alert('Você deve digitar números com o símbolo decimal ponto, e não vírgula');
      return
    }
    
    if (isNaN(valorDespesa)) {
      alert('Você deve digitar um número no campo valor!');
      return;
    }
    
    const valor = Number(valorDespesa);
    
    const despesa = {
      descricao: descricaoDespesa,
      valor: valor,
      categoria: 'Despesa'
    };
    
    financas.transacoes.push(despesa);
    financas.saldo = financas.saldo - valor;
    
    setSaldo();
    adicionaTransacoes();
  }
  
  function adicionarReceita() {
    const descricaoReceita = window.prompt('Qual a descricao de sua receita?');
    const valorReceita = window.prompt('Qual o valor de sua receita?');
    
    if (valorReceita.indexOf(',') > 0) {
      alert('Você deve digitar números com o símbolo decimal ponto, e não vírgula');
      return
    }
    
    if (isNaN(valorReceita)) {
      alert('Você deve digitar um número no campo valor!');
      return;
    }
    
    const valor = Number(valorReceita);
    
    const receita = {
      descricao: descricaoReceita,
      valor: valor,
      categoria: 'Receita'
    };
    
    financas.transacoes.push(receita);
    financas.saldo = financas.saldo + valor;
    
    setSaldo();
    adicionaTransacoes();
  }
  
  // adicionarDespesa();
  // adicionarReceita();
  
  exibirFinancas();
  
  function setSaldo() {
    document.getElementById('saldo').innerHTML = `Saldo: R$ ${financas.saldo}`;
  }
  
  setSaldo();
  
  function adicionaTransacoes() {
    let tabela = '';
  
    financas.transacoes.reverse().forEach(transacao => {
      let colunaDescricao = `<td class="coluna-descricao">${transacao.descricao}</td>`;
      let colunaCategoria = ` <td class="coluna-categoria">${transacao.categoria}</td>`;
      let colunaValor = `<td class="coluna-valor">${transacao.valor}</td>`;
      let linha = `<tr>${colunaDescricao}${colunaCategoria}${colunaValor}</tr>`
      tabela += linha
    });
    document.getElementById('lista-transacoes-conteudo').innerHTML = tabela;
  }
  
  adicionaTransacoes();
  
  // Aqui estamos criando os eventos de clique nos botões
  document.getElementById('botao-despesa').addEventListener('click', adicionarDespesa);
  document.getElementById('botao-receita').addEventListener('click', adicionarReceita);