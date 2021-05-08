import React from 'react'

function Home({ jogos }) {
  console.log(jogos)

  return (
    <main>
      <h1>Google Sheets</h1>
      
      <ol>
        {jogos.map((jogo, indice) => {
          const posicao = indice + 1

          return (
            <li key={jogo.nome}>
              <span>
                <span>{posicao}</span>
                <span>{jogo.nome}</span>
              </span>
              <img src={jogo.imagem_capa} alt={`Capa do jogo: ${jogo.nome}`} />
            </li>
          )
        })}
      </ol>
    </main>
  )
}

export default Home;