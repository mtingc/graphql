const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  // Resolver to fetch a book by ID
  book: async ({ id }) => {
    try {
      const book = await Book.findById(id).populate("author");
      return book;
    } catch (error) {
      console.error("Error fetching book by ID:", error);
      throw error;
    }
  },
  // Resolver to fetch the list of books
  books: async () => {
    try {
      const books = await Book.find().populate("author");
      return books;
    } catch (error) {
      console.error("Error fetching author's books:", error);
      throw error;
    }
  },
  // Resolver to fetch an author by ID
  author: async ({ id }) => {
    try {
      const author = await Author.findById(id).populate("books");
      return author;
    } catch (error) {
      console.error("Error fetching author by ID:", error);
      throw error;
    }
  },
  // Resolver to fetch the list of authors
  authors: async () => {
    try {
      const authors = await Author.find().populate("books");
      return authors;
    } catch (error) {
      console.error("Error fetching book's author:", error);
      throw error;
    }
  },
  // Resolver to create a new author
  createAuthor: async ({ name }) => {
    try {
      // Create and save a new author
      const author = new Author({ name });
      await author.save();
      return author;
    } catch (error) {
      console.error("Error creating author:", error);
      throw error;
    }
  },
  // Resolver to create a new book
  createBook: async ({ name, authorId }) => {
    try {
      // Find the corresponding author
      const author = await Author.findById(authorId);
      if (!author) {
        throw new Error("Author not found");
      }

      // Create and save a new book associated with the author
      const book = new Book({ name, author });
      await book.save();

      // Add the book to the author's books array
      author.books.push(book);
      await author.save();

      return book;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  },
};

module.exports = resolvers;
