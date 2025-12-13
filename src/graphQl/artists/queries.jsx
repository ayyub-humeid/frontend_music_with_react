import { gql } from "@apollo/client";

export const GET_ALL_ARTISTS = gql`
  query allArtists{
    allArtists{
      id
      name
      birthYear
      albums {
        title
        songs {
          title,duration
        }
      }
    }
  }
`;
