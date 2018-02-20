import React from 'react';
import { PropTypes } from 'prop-types';


const Featured  = ({featured}) => (
    <span>
        {
            featured ? (
                <a className="ui right corner yellow label">
                    <i className="star icon"></i>
                </a>
            ) : (
                <a className="ui right corner label">
                    <i className="empty star icon"></i>
                </a>
            )

        }

    </span>

);

Featured.propTypes = {
    featured : PropTypes.bool.isRequired
}

export default Featured;