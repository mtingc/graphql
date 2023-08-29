const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    """
    Get a list of all authors.
    """
    authors: [Author]!

    """
    Get a list of all books.
    """
    books: [Book]!

    """
    Get an author by their ID.
    """
    author(id: ID!): Author

    """
    Get a book by its ID.
    """
    book(id: ID!): Book
  }

  type Mutation {
    """
    Create a new author.
    """
    createAuthor(name: String!): Author!

    """
    Create a new book associated with an author.
    """
    createBook(name: String!, authorId: ID!): Book!
  }

  """
  Represents an author of books.
  """
  type Author {
    _id: ID!
    name: String!
    books: [Book]!
  }

  """
  Represents a book written by an author.
  """
  type Book {
    _id: ID!
    name: String!
    author: Author!
  }
`);

module.exports = schema;
