import { gql } from "@apollo/client";

export const CONTENT_QUERY = gql`
  query ContentQuery($limit: Int!, $offset: Int!, $keyword: String!) {
    contentCards(filter: {limit: $limit, offset: $offset, keywords: $keyword, types: [PODCAST]}) {
        edges {
            ... on Podcast {
                name
                image {
                    ...Image
                }
                categories {
                    ...Category
                }
                experts {
                    ...Expert
                }
            }
        }
   
        meta {
            total
            limit
            offset
        }
    }
   }
   fragment Image on Image {
    uri
   }
   fragment Category on Category {
    name
   }
   fragment Expert on Expert {
    firstName
    lastName
    title
    company
   }
`;
