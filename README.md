# GraphQL Server

Crear un pequeño backend GraphQL que permita generar queries y mutations para consultar y modificar una base de datos no SQL (MongoDB).

## Environment Variables

The following environment variables are used in this project:

- `PORT`: The port number on which the server will run. Default is 4000.
- `DB_USER`: MongoDB Atlas username.
- `DB_PASSWORD`: MongoDB Atlas password.
- `DB_CLUSTER`: MongoDB Atlas cluster.

To set these variables, you can create a `.env` file in the root directory of the project.

## Examples

Here are some example queries that you can try in the GraphQL Playground:

```graphql
# Author Schema
mutation CreateNewAuthor {
  createAuthor(name: "Gabriel García Márquez") {
    _id
    name
  }
}
query GetAuthorById {
  AnAuthor: author(id: "64ee363864ba8cac6c7471c6") {
    _id
    name
    books {
      name
    }
  }
}
query GetAuthors {
  GetAuthors: authors {
    _id
    name
    books {
      name
    }
  }
}

# Book Schema
mutation CreateNewBook {
  createBook(name: "Cien años de soledad", authorId: "64ee40a36296729d27b1e47e") {
    _id
    name
    author {
      name
    }
  }
}
query GetBookById {
  ABook: book(id: "64ee36a664ba8cac6c7471c9") {
    _id
    name
    author {
      name
    }
  }
}
query GetBooks {
  GetBooks: books {
    _id
    name
    author {
      name
    }
  }
}
