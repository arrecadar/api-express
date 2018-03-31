/**
 * Books Repository
 */
let books = [
  {
    id: 1,
    title: 'The Game of Thrones - A Song of Ice and Fire - Book 1',
    author: 'George R. R. Martin',
    value: 16.9
  },
  {
    id: 2,
    title: 'A Clash of Kings - A Song of Ice and Fire - Book 2',
    author: 'George R. R. Martin',
    value: 17.2
  },
  {
    id: 3,
    title: 'A Storm of Swords - A Song of Ice and Fire - Book 3',
    author: 'George R. R. Martin',
    value: 20.2
  },
  {
    id: 4,
    title: 'A Feast for Crowns - A Song of Ice and Fire - Book 4',
    author: 'George R. R. Martin',
    value: 23.8
  },
  {
    id: 5,
    title: 'A Dance with Dragons - A Song of Ice and Fire - Book 5',
    author: 'George R. R. Martin',
    value: 24
  }
]

const find = async () => books

const findOne = async (id) => books.find(book => book.id === parseInt(id))

const create = async (book) => {
  books.push({
    id: books.length + 1,
    ...book
  })

  return books
}

const update = async (id, data) => {
  const book = books.find(b => b.id === id)
  Object.assign(book, data)

  return books
}

const remove = async (id) => {
  books = books.filter(b => b.id !== id)
  return books
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
}
