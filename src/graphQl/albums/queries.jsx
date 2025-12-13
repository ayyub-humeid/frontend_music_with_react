import { gql } from "@apollo/client";

export const GET_ALL_ALBUMS = gql`
  query allAlbums{
    allAlbums{
      id
      title
        songs {
          title,duration
      }
          artist{
          name}
    }
  }
`;
