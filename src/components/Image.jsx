import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

/** Example of query
const query = graphql`
query {
    placeholderImage: file(
        relativePath: { eq: "gatsby-astronaut.png" }
    ) {
        childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`;
 */

export const Image = ({ data, ...props }) => (
    <Img
        {...props}
        fluid={data.placeholderImage.childImageSharp.fluid}
    />
);

Image.propTypes = {
    data: PropTypes.object,
};
