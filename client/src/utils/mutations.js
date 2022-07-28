import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation loginUser($username: String!, $password: String!){
    loginUser(username: $username, password: $password){
        token
        user {
            _id
            username
            email
            password
            bookCount
            SavedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            password
            bookCount
            SavedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook(
    $authors: [String]
    $description: String!
    $title: String!
    $bookId: String
    $image: String
    $link: String
) {
    savedBook(
        authors: $authors
        description: $description
        title: $title
        bookId: $bookId
        image: $image
        link: $link
    ) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!){
    removeBook(bookId: $bookId){
        _id
        username
        email
        password
        bookCount
        SavedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;