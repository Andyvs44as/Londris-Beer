let carrinho = [];
let total = 0;

function adicionarCarrinho(produto, preco) {
  carrinho.push({produto, preco});
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('itensCarrinho');
  lista.innerHTML = '';
  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.produto} - R$ ${item.preco}`;
    const remover = document.createElement('button');
    remover.textContent = 'Remover';
    remover.onclick = () => removerItem(index);
    li.appendChild(remover);
    lista.appendChild(li);
  });
  document.getElementById('total').textContent = total.toFixed(2);
}

function removerItem(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index,1);
  atualizarCarrinho();
}

function finalizarCompra() {
  if(carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
  } else {
    alert('Compra finalizada! Total: R$ ' + total.toFixed(2));
    carrinho = [];
    total = 0;
    atualizarCarrinho();
  }
}

function fazerLogin() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if(usuario === 'admin' && senha === '1234') {
    alert('Login realizado com sucesso!');
  } else {
    alert('Usuário ou senha incorretos.');
  }
}

// Kit de Essências
const saboresPorMarca = {
  'ZOMO': ['Bala de Morango', 'Uva', 'Melancia Atômica', 'Watermelon Mint', 'Switt Alps', 'Tutti Frutti', 'Strong Orange', 'Cereja', 'Menta', 'Strong Mint'],
  'ZIGGY': ['Menta', 'Laranja e Morango', 'Limão', 'Melão', 'Tutti Frutti', 'Watermelon Bomb', 'Berry', 'Uva', 'Frutas Roxas', 'Frutas Amarelas', 'Sorvete de pistache', 'Goiaba', 'Banana Tropical', 'Maracujá', 'Abacaxi Tropical', 'Yogurt', 'Tropical', 'Cereja', 'Frutas Verdes', 'Manga Tropical'],
  'NAY': ['maracujá', 'Blueberry', 'Uva', 'Cereja', 'Uva com Blueberry', 'Melão', 'Menta', 'Yogurt Fruts', 'Bubble Blend', 'Fresh Watermelon'],
  'SENSE': ['Spiced Chai', 'Candy Fruit', 'Absolut Mint'],
  'IGNITE': ['Limão', 'Banana', 'Uva', 'Melancia'],
  'ADALYA': ['Ice Watermelon', 'Ice Bonbon', 'Swit Bonbon'],
  'MAGIC': ['Maracujá', 'space Mix', 'Space Mint', 'Space Lemon Mint', 'Milho', 'Space Guava', 'Space Citic', 'Space Pear Strawberry', 'Space Pineaple Red Fruit'],
  'ONIX': ['Uva', 'Maçã', 'Orange', 'Mango', 'Drops', 'Red Drops', 'Goiaba e Morango', 'Chiclete Canela', 'Danon', 'Mint', 'Pear', 'Yellow Dops', 'High Passion', 'High Mint', 'High Fruit', 'High Lemon', 'High Fusion'],
  'SMYRNA': ['True love']
};

const precoPorMarca = {
  'ZOMO': 13,
  'ZIGGY': 16,
  'NAY': 15,
  'SENSE': 14,
  'IGNITE': 14,
  'ADALYA': 19,
  'MAGIC': 14,
  'ONIX': 17,
  'SMYRNA': 16
};

// Estoque de cada sabor
let estoqueEssencias = {
  'ZOMO': { 'Bala de Morango': 2, 'Uva': 9, 'Melancia Atômica': 4, 'Watermelon Mint': 25, 'Switt Alps': 23, 'Tutti Frutti': 14, 'Strong Orange': 8, 'Cereja': 3, 'Menta': 16, 'Strong Mint': 22 },
  'ZIGGY': { 'Menta': 3, 'Laranja e Morango': 5, 'Limão': 2, 'Melão': 0, 'Tutti Frutti': 1, 'Watermelon Bomb': 4, 'Berry': 3, 'Uva': 0, 'Frutas Roxas': 1, 'Frutas Amarelas': 0, 'Sorvete de pistache': 2, 'Goiaba': 3, 'Banana Tropical': 1, 'Maracujá': 0, 'Abacaxi Tropical': 4, 'Yogurt': 2, 'Tropical': 3, 'Cereja': 1, 'Frutas Verdes': 0, 'Manga Tropical': 2 },
  'NAY': { 'maracujá': 0, 'Blueberry': 0, 'Uva': 8, 'Cereja': 0, 'Uva com Blueberry': 6, 'Melão': 0, 'Menta': 7, 'Yogurt Fruts': 5, 'Bubble Blend': 7, 'Fresh Watermelon': 8 },
  'SENSE': { 'Spiced Chai': 3, 'Candy Fruit': 0, 'Absolut Mint': 1 },
  'IGNITE': { 'Limão': 0, 'Banana': 2, 'Uva': 3, 'Melancia': 0 },
  'ADALYA': { 'Ice Watermelon': 4, 'Ice Bonbon': 0, 'Swit Bonbon': 1 },
  'MAGIC': { 'Maracujá': 2, 'space Mix': 0, 'Space Mint': 1, 'Space Lemon Mint': 3, 'Milho': 0, 'Space Guava': 2, 'Space Citic': 1, 'Space Pear Strawberry': 4, 'Space Pineaple Red Fruit': 0 },
  'ONIX': { 'Uva': 0, 'Maçã': 2, 'Orange': 1, 'Mango': 3, 'Drops': 0, 'Red Drops': 2, 'Goiaba e Morango': 1, 'Chiclete Canela': 0, 'Danon': 3, 'Mint': 2, 'Pear': 1, 'Yellow Dops': 0, 'High Passion': 1, 'High Mint': 2, 'High Fruit': 0, 'High Lemon': 3, 'High Fusion': 2 },
  'SMYRNA': { 'True love': 28 }
};

function mostrarSabores(marca) {
  const container = document.getElementById('saboresKit');
  container.innerHTML = '';

  saboresPorMarca[marca].forEach(sabor => {
    const estoque = estoqueEssencias[marca][sabor] || 0;
    const disponivel = estoque > 0;

    const div = document.createElement('div');
    div.classList.add('produto');

    // Adiciona classe para animação de bloqueio
    if (!disponivel) {
      div.classList.add('indisponivel');
    }

    div.innerHTML = `
      <p><strong>${marca}</strong></p>
      <p>${sabor}</p>
      <p>R$ ${precoPorMarca[marca]},00</p>
      <p>Estoque: ${estoque > 0 ? estoque : 'Indisponível'}</p>
      ${disponivel ? `
        <label>Quantidade: <input type="number" min="1" max="${estoque}" value="1" id="qtd-${marca}-${sabor.replace(/\s/g, '')}"></label>
        <button onclick="adicionarComQuantidade('${marca}', '${sabor}')">Adicionar</button>
      ` : `<button disabled>Indisponível</button>`}
    `;
    container.appendChild(div);
  });
}

function adicionarComQuantidade(marca, sabor) {
  const input = document.getElementById(`qtd-${marca}-${sabor.replace(/\s/g, '')}`);
  const qtd = parseInt(input.value) || 1;
  const estoqueAtual = estoqueEssencias[marca][sabor];

  if (qtd <= estoqueAtual) {
    adicionarCarrinho(`${marca} - ${sabor}`, precoPorMarca[marca] * qtd);
    estoqueEssencias[marca][sabor] -= qtd;
    mostrarSabores(marca); // Atualiza a tela
  } else {
    alert("Quantidade maior que o estoque disponível!");
  }
}
