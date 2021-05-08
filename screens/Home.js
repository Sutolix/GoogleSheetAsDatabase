import React from 'react'

function Home({ jogos }) {
  return (
    <main className="container">
      <h1>Google Sheets</h1>
      
      <ol className="items">
        {jogos.map((jogo, indice) => {
          const posicao = indice + 1

          return (
            <li key={jogo.nome} className="item-row">
              <div className="item-title">
                <span className="item-position">{posicao}</span>
                <span className="item-divider"> - </span>
                <span className="item-name">{jogo.nome}</span>
              </div>
              <div className="item-info">
                <div className="item-image">
                  <img src={jogo.imagem_capa} alt={`Capa do jogo: ${jogo.nome}`} />
                </div>
                <p className="item-description">{jogo.descricao}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </main>
  )
}

export default Home;