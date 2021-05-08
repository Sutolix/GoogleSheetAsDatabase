import Home from '../screens/Home'

export async function getServerSideProps() {
  const dadosDaApi = await fetch('http://localhost:3000/api/jogos')
  .then((res) => {
    if(res.ok) {
      return res.json()
    }
  })
  .then((res) => {
    return res
  })

  return {
    props: {
      jogos: dadosDaApi.games
    }
  }
}

export default Home;