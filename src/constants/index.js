import { gql } from "@apollo/client";

export const getAllUsers = gql`
  query getAllUsers {
    users {
      id
      name
      username
      age
    }
  }
`;

export const addUser = gql`
  mutation addUser($userData: userAdditionInput!) {
    addUser(input: $userData) {
      name
      username
      age
    }
  }
`;

export const updateUser = gql`
  mutation updateUser($id: userUpdateInput!) {
    updateUser(input: $id) {
      name
      username
    }
  }
`;

export const deleteUser = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      name
      username
    }
  }
`;
