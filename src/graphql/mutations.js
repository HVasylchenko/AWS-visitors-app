/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVisitor = /* GraphQL */ `
  mutation CreateVisitor(
    $input: CreateVisitorInput!
    $condition: ModelVisitorConditionInput
  ) {
    createVisitor(input: $input, condition: $condition) {
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
export const updateVisitor = /* GraphQL */ `
  mutation UpdateVisitor(
    $input: UpdateVisitorInput!
    $condition: ModelVisitorConditionInput
  ) {
    updateVisitor(input: $input, condition: $condition) {
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
export const deleteVisitor = /* GraphQL */ `
  mutation DeleteVisitor(
    $input: DeleteVisitorInput!
    $condition: ModelVisitorConditionInput
  ) {
    deleteVisitor(input: $input, condition: $condition) {
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
export const createNext = /* GraphQL */ `
  mutation CreateNext(
    $input: CreateNextInput!
    $condition: ModelNextConditionInput
  ) {
    createNext(input: $input, condition: $condition) {
      next
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNext = /* GraphQL */ `
  mutation UpdateNext(
    $input: UpdateNextInput!
    $condition: ModelNextConditionInput
  ) {
    updateNext(input: $input, condition: $condition) {
      next
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNext = /* GraphQL */ `
  mutation DeleteNext(
    $input: DeleteNextInput!
    $condition: ModelNextConditionInput
  ) {
    deleteNext(input: $input, condition: $condition) {
      next
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
