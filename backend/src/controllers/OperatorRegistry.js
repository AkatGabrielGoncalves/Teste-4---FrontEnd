const client = require('./../database')

exports.index = async (req, res) => {
  try {
    const { search } = req.query
    let { page, perPage } = req.body

    if (perPage > 15) perPage = 15

    const normalizedSearch = search.trim().replace(/\s+/g, ' | ');

    const result = await client.query({
      text: `SELECT * FROM cadastro_op co
      WHERE to_tsvector('Portuguese', co.razao_social) @@ to_tsquery('Portuguese', $1)
      OR to_tsvector('Portuguese', co.nome_fantasia) @@ to_tsquery('Portuguese', $1);
      `,
      values:[normalizedSearch]
    })

    res.status(200).json(result)
  } catch (err) {

  }
}