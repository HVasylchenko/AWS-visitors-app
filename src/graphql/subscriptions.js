/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVisitor = /* GraphQL */ `
  subscription OnCreateVisitor($filter: ModelSubscriptionVisitorFilterInput) {
    onCreateVisitor(filter: $filter) {
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
export const onUpdateVisitor = /* GraphQL */ `
  subscription OnUpdateVisitor($filter: ModelSubscriptionVisitorFilterInput) {
    onUpdateVisitor(filter: $filter) {
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
export const onDeleteVisitor = /* GraphQL */ `
  subscription OnDeleteVisitor($filter: ModelSubscriptionVisitorFilterInput) {
    onDeleteVisitor(filter: $filter) {
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
export const onCreateNext = /* GraphQL */ `
  subscription OnCreateNext($filter: ModelSubscriptionNextFilterInput) {
    onCreateNext(filter: $filter) {
      next
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNext = /* GraphQL */ `
  subscription OnUpdateNext($filter: ModelSubscriptionNextFilterInput) {
    onUpdateNext(filter: $filter) {
      next
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNext = /* GraphQL */ `
  subscription OnDeleteNext($filter: ModelSubscriptionNextFilterInput) {
    onDeleteNext(filter: $filter) {
      next
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
