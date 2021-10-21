const client = require('../database/connect')

exports.index = async (req, res) => {
  try {
    let { search, page, perPage } = req.query
    console.log(req.query)

    if (!page | !perPage) {
      page = 0
      perPage = 5
    }

    page -= 1

    if (page < 0) page = 0
    if (perPage < 0) perPage = 5
    if (perPage > 15) perPage = 15

    const offset = page * perPage

    const normalizedSearch = search.trim().replace(/\s+/g, ' | ');

    const { rows, fields } = await client.query({
      text: `SELECT *, count(*) OVER() count FROM cadastro_op co
      WHERE to_tsvector('Portuguese', co.razao_social) @@ to_tsquery('Portuguese', $1)
      OR to_tsvector('Portuguese', co.nome_fantasia) @@ to_tsquery('Portuguese', $1)
      LIMIT $2
      OFFSET $3
      ;`,
      values:[normalizedSearch, perPage, offset]
    })

    res.status(200).json({ rows, fields })
  } catch (err) {
    res.status(400).json({ error: ['Error has ocurred'] })
    console.log('Error has occured.', err)
  }
}