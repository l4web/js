import React from 'react';
import { PropTypes } from 'prop-types';


const Featured  = ({featured, toggleFeatured, id}) => (
    <span>
        {
            featured ? (
                <a onClick={() => toggleFeatured(id)} className="ui right corner yellow label">
                    <i className="star icon"/>
                </a>
            ) : (
                <a onClick={() => toggleFeatured(id)} className="ui right corner label">
                    <i className="empty star icon"/>
                </a>
            )

        }

    </span>

);

Featured.propTypes = {
    featured : PropTypes.bool.isRequired,
    toggleFeatured: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Featured;