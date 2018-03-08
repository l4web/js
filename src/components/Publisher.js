import React from 'react';
import PropTypes from 'prop-types';


class Publisher extends React.Component {

    render() {
        const {publisher, showPublisherForm, deletePublisher} = this.props;
        return (
            <tr>
                <td>{publisher.name}</td>
                <td className="positive">
                    <i className="icon green edit" onClick={() => showPublisherForm(publisher)}></i>
                    <i className="icon red trash" onClick={() => deletePublisher(publisher)}></i>
                </td>
            </tr>
        )
}




}

Publisher.propTypes = {
        publisher: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        showPublisherForm: PropTypes.func.isRequired,
        deletePublisher: PropTypes.func.isRequired
    };


export default Publisher;