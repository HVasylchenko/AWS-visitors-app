/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVisitor = /* GraphQL */ `
  query GetVisitor($id: ID!) {
    getVisitor(id: $id) {
      id
      currentNumber
      name
      surname
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVisitors = /* GraphQL */ `
  query ListVisitors(
    $filter: ModelVisitorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisitors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        currentNumber
        name
        surname
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNext = /* GraphQL */ `
  query GetNext($id: ID!) {
    getNext(id: $id) {
      next
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNexts = /* GraphQL */ `
  query ListNexts(
    $filter: ModelNextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        next
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
