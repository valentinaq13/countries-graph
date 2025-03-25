import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRY_DETAIL = gql`
  query($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      capital
      languages {
        code
        name
      }
    }
  }
`;

export const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;
