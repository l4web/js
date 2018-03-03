import React from 'react';
import PropTypes from 'prop-types';

const Publisher  = ({publisher, showPublisherForm, deletePublisher}) => (
    <tr>
        <td>{publisher.name}</td>
        <td className="positive">
            <i className="icon green edit" onClick={() => showPublisherForm(publisher)}></i>
            <i className="icon red trash" onClick={() => deletePublisher(publisher)}></i>
        </td>
    </tr>
);
Publisher.propTypes = {
    publisher: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    showPublisherForm: PropTypes.func.isRequired,
    deletePublisher: PropTypes.func.isRequired
};

export default Publisher;