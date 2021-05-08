import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async function(req, res) {

  const doc = new GoogleSpreadsheet('114qGjVJHL-x08JGXU4Wx2GE43xEYGbK7PL9AVeLaLJo');

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0]
  const rows = await sheet.getRows()

  console.log(rows)

  const jogos = rows.map(({nome, imagem_capa, 'descrição': descricao}) => {
      return {
        nome,
        imagem_capa,
        descricao
      }
  })

  res.send({
    title: doc.title,
    games: jogos
  })
}