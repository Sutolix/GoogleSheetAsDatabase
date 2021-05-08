import Home from '../screens/Home'

export async function getServerSideProps() {
  const dadosDaApi = await fetch(`${process.env.BASE_API_URL}/api/jogos`)
  .then((res) => {
    if(res.ok) {
      return res.json()
    }
  })
  .then((res) => {
    return res
  })
  
  console.log(`process.env.BASE_API_URL}/api/jogos`);
  
  return {
    props: {
      jogos: dadosDaApi.games
    }
  }
}

export default Home;