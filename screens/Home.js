import React from 'react'
import Head from 'next/head'

function Home({ jogos }) {
  return (
    <>
      <Head>
        <title>Google Sheets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                  <div className="item-content">
                    <p className="item-description">{jogo.descricao}</p>
                    <a className="item-about" href={jogo.sobre} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </main>
    </>
  )
}

export default Home;