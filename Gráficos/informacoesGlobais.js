const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)
    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) *100)
    const porcentagemConectada = ((pessoasConectadas/pessoasMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Política: Cerca de <span>24%</span> dos deputados federais eleitos em 2022 se autodeclararam negros.

Educação Superior: Aproximadamente <span>12%</span> dos professores universitários se declaram negros, e <span>20%</span> dos alunos em instituições de ensino superior são negros.

Gerência Executiva: Estima-se que apenas <span>5%</span> dos cargos de gerência executiva em empresas brasileiras sejam ocupados por pessoas negras.

Entretenimento e Mídia: Aproximadamente <span>30%</span> das pessoas negras estão representadas em papéis de destaque na mídia e entretenimento.

Professores: Cerca de <span>35%</span> dos professores na educação básica se autodeclaram negros.
`
 
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()

