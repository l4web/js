import React from 'react';
import PropTypes from 'prop-types';

const Price  = ({cents}) => (
    <span>
        {cents/100}
    </span>
);

Price.propTypes = {
    cents: PropTypes.number.isRequired
};

export default Price;