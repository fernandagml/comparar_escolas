

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
const cidadeA = document.querySelector('.unidadeA__cidade');
const codigoA = document.querySelector('.unidadeA__codigo input[type="number"]');
const anoA = document.querySelector('.unidadeA__ano input[type="number"]');
const cursosA = document.querySelector('.unidadeA__cursos input[type="number"]');

const cidadeB = document.querySelector('.unidadeB__cidade');
const codigoB = document.querySelector('.unidadeB__codigo input[type="number"]');
const anoB = document.querySelector('.unidadeB__ano input[type="number"]');
const cursosB = document.querySelector('.unidadeB__cursos input[type="number"]');

const resultadoA = document.querySelector('.unidadeA__mensagem');
const resultadoB = document.querySelector('.unidadeB__mensagem');

const instanciarA = document.querySelector('.unidadeA__instanciar');
const instanciarB = document.querySelector('.unidadeB__instanciar');

/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
function validarDados() {
  // if ((isNaN(cidadeA) || isNaN(codigoA) || isNaN(anoA) || isNaN(cursosA)) || (isNaN(cidadeB) || isNaN(codigoB) || isNaN(anoB) || isNaN(cursosB))){
  //   resultadoA.innerHTML = `Preencha todos os campos para criar a escola.`
  // } else if (isNaN(cidadeB) || isNaN(codigoB) || isNaN(anoB) || isNaN(cursosB)) {
  //   resultadoB.innerHTML = `Preencha todos os campos para criar a escola.`
  // };
  if ((isNaN(cidadeA) || isNaN(codigoA) || isNaN(anoA) || isNaN(cursosA)) || (isNaN(cidadeB) || isNaN(codigoB) || isNaN(anoB) || isNaN(cursosB))) return (resultadoA.innerHTML = `Preencha todos os campos para criar a escola.`) + (resultadoB.innerHTML = `Preencha todos os campos para criar a escola.`);
};

/* ===== INSTANCIAR ESCOLA A ===== */
const escolaA = new Senai(codigoA, cidadeA, anoA, cursosA);
instanciarA.addEventListener('click', () => {validarDados()})

/* ===== INSTANCIAR ESCOLA B ===== */
const escolaB = new Senai(codigoB, cidadeB, anoB, cursosB);
instanciarB.addEventListener('click', () => {validarDados()})

/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
const compararEscolas = (e1, e2) => {
  console.log(`> Comparando oferta de cusos: ${e1.cidade} vs ${e2.cidade}...`)

  if (e1.qntdCursos > e2.qntdCursos) return console.log(`Resultado: O SENAI ${e1.cidade} possui mais cursos.`);
  if (e2.qntdCursos > e1.qntdCursos) return console.log(`Resultado: O SENAI ${e2.cidade} possui mais cursos.`);
  else console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);

  console.log(`Status: ${e1.cidade} (${e1.qntdCursos}) | ${e2.cidade} (${e2.qntdCursos})\n`);
};


/* ===== NOVA CONSULTA ===== */


