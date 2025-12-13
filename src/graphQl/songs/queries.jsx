import { gql } from "@apollo/client";
export const GET_ALL_SONGS = gql`
  query allSongs{
    allSongs{
    id,title,duration,trackNumber,album{
      title,artist{
        name
      }
    }
  }
  }
`;

