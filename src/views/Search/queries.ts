import gql from "graphql-tag";

export const GET_SEARCH_PRODUCTS = gql`
  query SearchProducts(
    $query: String!
    $attributes: [AttributeScalar]
    $pageSize: Int
    $sortBy: ProductOrder
    $after: String
  ) {
    products(
      query: $query
      attributes: $attributes
      first: $pageSize
      sortBy: $sortBy
      after: $after
    ) {
      totalCount
      edges {
        node {
          id
          name
          thumbnail {
            url
            alt
          }
          thumbnail2x: thumbnail(size: 510) {
            url
          }
          category {
            id
            name
          }
          price {
            amount
            currency
            localized
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    attributes(first: 100) {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
  }
`;
