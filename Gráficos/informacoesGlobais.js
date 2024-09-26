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
    paragrafo.innerHTML = `Política: Cerca de <spam> 24% </spam> dos deputados federais eleitos em 2022 se autodeclararam negros.

Educação Superior: Aproximadamente 12% dos professores universitários se declaram negros, e 20% dos alunos em instituições de ensino superior são negros.

Gerência Executiva: Estima-se que apenas 5% dos cargos de gerência executiva em empresas brasileiras sejam ocupados por pessoas negras.

Entretenimento e Mídia: Aproximadamente 30% das pessoas negras estão representadas em papéis de destaque na mídia e entretenimento.

Professores: Cerca de 35% dos professores na educação básica se autodeclaram negros.
 `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()

