import gql from "graphql-tag";

export const CHECKOUT_FRAGMENT = gql`
  fragment Checkout on Checkout {
    token
    id
    totalPrice {
      net {
        amount
      }
      gross {
        amount
        localized
      }
      currency
    }
    subtotalPrice {
      net {
        amount
      }
      gross {
        amount
        localized
      }
      currency
    }
    billingAddress {
      firstName
      lastName
      companyName
      streetAddress1
      streetAddress2
      city
      postalCode
      country {
        code
        country
      }
      countryArea
      phone
    }
    shippingAddress {
      firstName
      lastName
      companyName
      streetAddress1
      streetAddress2
      city
      postalCode
      country {
        code
        country
      }
      countryArea
      phone
    }
    email
    availableShippingMethods {
      id
      name
      price {
        currency
        amount
        localized
      }
    }
    shippingMethod {
      id
      name
      price {
        currency
        amount
        localized
      }
    }
    shippingPrice {
      net {
        amount
      }
      gross {
        amount
        localized
      }
      currency
    }
    lines {
      id
      quantity
      totalPrice {
        net {
          amount
        }
        gross {
          amount
          localized
        }
        currency
      }
      variant {
        id
        name
        price {
          amount
          currency
          localized
        }
        product {
          id
          name
          thumbnail {
            url
            alt
          }
          thumbnail2x: thumbnail(size: 510){
            url
          }
        }
      }
      quantity
    }
  }
`;

export const GET_CHECKOUT = gql`
  ${CHECKOUT_FRAGMENT}
  query getCheckout($token: UUID!) {
    checkout(token: $token) {
      ...Checkout
    }
  }
`;

export const UPDATE_CHECKOUT_LINE = gql`
  ${CHECKOUT_FRAGMENT}
  mutation updateCheckoutLine($checkoutId: ID!, $lines: [CheckoutLineInput]!) {
    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {
      checkout {
        ...Checkout
      }
      errors {
        field
        message
      }
    }
  }
`;
