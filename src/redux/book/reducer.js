import {
  FETCH_BOOKS,
  FETCH_A_BOOK,
  FETCH_SEARCHED_BOOKS,
  FETCH_AUTHOR_DETAIL,
  FETCH_AUTHOR_WORK_DETAIL,
  ADD_TO_BOOKSHELF,
  REMOVE_FROM_BOOKSHELF,
  GET_BOOKSHELF,
  ERROR,
  LOADING,
} from "./type";

let initialState = {
  book: [],
  books: [],
  searchBooks: [],
  bookShelf: [],
  author: [],
  authorWorks: [],
  error: null,
  loading: false,
};
const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: payload,
        error: null,
        searchBooks: [],
        loading: false,
      };
    case FETCH_A_BOOK:
      return {
        ...state,
        book: payload,
        error: null,
        loading: false,
      };
    case FETCH_SEARCHED_BOOKS:
      return {
        ...state,
        searchBooks: payload,
        error: null,
        loading: false,
      };
    case FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: payload,
        error: null,
        loading: false,
      };
    case FETCH_AUTHOR_WORK_DETAIL:
      return {
        ...state,
        authorWorks: payload,
        error: null,
        loading: false,
      };
    case GET_BOOKSHELF:
      return {
        ...state,
        bookShelf: payload,
        error: null,
        loading: false,
      };
    case ADD_TO_BOOKSHELF:
      return {
        ...state,
        bookShelf: payload,
        error: null,
        loading: false,
      };
    case REMOVE_FROM_BOOKSHELF:
      return {
        ...state,
        bookShelf: payload,
        error: null,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        error: null,
        loading: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default bookReducer;
