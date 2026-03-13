

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */

/* ===== OBTER ELEMENTOS ===== */
let unidadeA
let unidadeB

const resultadoA = document.querySelector('.unidadeA__mensagem');
const resultadoB = document.querySelector('.unidadeB__mensagem');

const btnInstanciarA = document.querySelector('.unidadeA__instanciar');
const btnInstanciarB = document.querySelector('.unidadeB__instanciar');

const btnAbrirUnidadeA = document.querySelector('.unidadeA__abrir');
const btnAbrirUnidadeB = document.querySelector('.unidadeB__abrir');

const btnFecharUnidadeA = document.querySelector('.unidadeA__fechar')
const btnFecharUnidadeB = document.querySelector('.unidadeB__fechar')

const btnComparar = document.querySelector('.botao--comparar')
const btnReset = document.querySelector('.botao--reset')
const resultadoComparacao = document.querySelector('.relatorio--oculto')

/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
function validarDados(cidade, codigo, ano, cursos) {
  if (cidade === '' || codigo === '' || ano === '' || cursos === '') {
    return false
  } else {
    return true
  }
};

/* ===== INSTANCIAR ESCOLA A ===== */
const instanciarEscolaA = () => {
  const cidadeA = document.querySelector('.unidadeA__cidade').value;
  const codigoA = document.querySelector('.unidadeA__codigo').value;
  const anoA = document.querySelector('.unidadeA__ano').value;
  const cursosA = document.querySelector('.unidadeA__cursos').value;
  if (validarDados(cidadeA, codigoA, anoA, cursosA)) {
    resultadoA.textContent = `Unidade criada.`
    return new Senai(codigoA, cidadeA, anoA, cursosA);
  } else {
    resultadoA.textContent = `Preencha todos os campos para criar a escola.`
    return false
  }
};

btnInstanciarA.addEventListener('click', () => {
  unidadeA = instanciarEscolaA()
})

/* ===== INSTANCIAR ESCOLA B ===== */
const instanciarEscolaB = () => {
  const cidadeB = document.querySelector('.unidadeB__cidade').value;
  const codigoB = document.querySelector('.unidadeB__codigo').value;
  const anoB = document.querySelector('.unidadeB__ano').value;
  const cursosB = document.querySelector('.unidadeB__cursos').value;
  if (validarDados(cidadeB, codigoB, anoB, cursosB)) {
    resultadoB.textContent = `Unidade criada.`
    return new Senai(codigoB, cidadeB, anoB, cursosB);
  } else {
    resultadoB.textContent = `Preencha todos os campos para criar a escola.`
    return false
  }
}

btnInstanciarB.addEventListener('click', () => {
  unidadeB = instanciarEscolaB()
})

/* ===== ABRIR ESCOLA ===== */
btnAbrirUnidadeA.addEventListener('click', () => {
  unidadeA.abrirEscola()
  resultadoA.textContent = `Aberta: Bem-vindos ao SENAI ${unidadeA.cidade}.`
});

btnAbrirUnidadeB.addEventListener('click', () => {
  unidadeB.abrirEscola()
  resultadoB.textContent = `Aberta: Bem-vindos ao SENAI ${unidadeB.cidade}.`
});

/* ===== FECHAR ESCOLA ===== */
btnFecharUnidadeA.addEventListener('click', () => {
  unidadeA.fecharEscola()
  resultadoA.innerHTML = `Fechada: Atividades encerradas.`
});
btnFecharUnidadeB.addEventListener('click', () => {
  unidadeB.fecharEscola()
  resultadoB.innerHTML = `Fechada: Atividades encerradas.`
});

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */

btnComparar.addEventListener('click', () => {
  if (unidadeA.qtdeCursos < unidadeB.qtdeCursos) {
    resultadoComparacao.style.display = 'flex';
    resultadoComparacao.innerHTML =
    `
    <p>O SENAI ${unidadeA.cidade} lidera com mais cursos.</p>
    <div class="relatorio__detalhes">
      <p class="relatorio__linha relatorio__linha--a">Unidade A<br>Código ${unidadeA.codigo} – Cidade ${unidadeA.cidade}<br>Fundação ${unidadeA.anoConstrucao} (${unidadeA.idade} anos)<br>Oferta ${unidadeA.qtdeCursos} cursos</p>
      <p class="relatorio__linha relatorio__linha--b">Unidade B<br>Código ${unidadeB.codigo} – Cidade ${unidadeB.cidade}<br>Fundação ${unidadeB.anoConstrucao} (${unidadeB.idade} anos)<br>Oferta ${unidadeB.qtdeCursos} cursos</p>
    </div>
    `
  } else if (unidadeA.qtdeCursos > unidadeB.qtdeCursos) {
    resultadoComparacao.style.display = 'flex';
    resultadoComparacao.innerHTML =
    `
    <p>O SENAI ${unidadeB.cidade} lidera com mais cursos.</p>
    <div class="relatorio__detalhes">
      <p class="relatorio__linha relatorio__linha--a">Unidade A<br>Código ${unidadeA.codigo} – Cidade ${unidadeA.cidade}<br>Fundação ${unidadeA.anoConstrucao} (${unidadeA.idade} anos)<br>Oferta ${unidadeA.qtdeCursos} cursos</p>
      <p class="relatorio__linha relatorio__linha--b">Unidade B<br>Código ${unidadeB.codigo} – Cidade ${unidadeB.cidade}<br>Fundação ${unidadeB.anoConstrucao} (${unidadeB.idade} anos)<br>Oferta ${unidadeB.qtdeCursos} cursos</p>
    </div>
    `
  } else {
    resultadoComparacao.style.display = 'flex';
    resultadoComparacao.innerHTML =
    `
    <p>Ambas as unidades possuem a mesma quantidade de cursos.</p>
    <div class="relatorio__detalhes">
      <p class="relatorio__linha relatorio__linha--a">Unidade A<br>Código ${unidadeA.codigo} – Cidade ${unidadeA.cidade}<br>Fundação ${unidadeA.anoConstrucao} (${unidadeA.idade} anos)<br>Oferta ${unidadeA.qtdeCursos} cursos</p>
      <p class="relatorio__linha relatorio__linha--b">Unidade B<br>Código ${unidadeB.codigo} – Cidade ${unidadeB.cidade}<br>Fundação ${unidadeB.anoConstrucao} (${unidadeB.idade} anos)<br>Oferta ${unidadeB.qtdeCursos} cursos</p>
    </div>
    `
  }
});

/* ===== NOVA CONSULTA ===== */
function limpar() {
  resultadoComparacao.style.display = 'none'
  resultadoA.textContent = 'Aguardando criação...'
  resultadoB.textContent = 'Aguardando criação...'

  const cidadeA = document.querySelector('.unidadeA__cidade').value = '';
  document.querySelector('.unidadeA__codigo').value = '';
  document.querySelector('.unidadeA__ano').value = '';
  document.querySelector('.unidadeA__cursos').value = '';

  document.querySelector('.unidadeB__cidade').value = '';
  document.querySelector('.unidadeB__codigo').value = '';
  document.querySelector('.unidadeB__ano').value = '';
  document.querySelector('.unidadeB__cursos').value = '';

  cidadeA.focus();
}

btnReset.addEventListener('click', () => { limpar() })