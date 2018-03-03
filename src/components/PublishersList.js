import React from 'react';
import PropTypes from 'prop-types';
import Publisher from "./Publisher";
import PublisherForm from "./PublisherForm";
class PublishersList extends React.Component {
    state = {
        showPublisherForm: false,
        selectedPublisher: {}
    };
    showPublisherForm = publisher => this.setState({showPublisherForm: true, selectedPublisher: publisher });
    hidePublisherForm = () => this.setState({showPublisherForm: false});
    savePublisher = publisher => {
        this.hidePublisherForm();
        this.props.savePublisher(publisher);
    };
    render() {
        const {publishers, hidePublishersList, deletePublisher} = this.props;
        return (

            <div className="ui grid card fluid">
                <div className="content">
                <div className="row">
                    <h4 className="ui header" onClick={hidePublishersList}>
                        <i className="ui icon close"/>
                        <div className="content">
                            Publishers
                        </div>
                    </h4>
                </div>
                { !this.state.showPublisherForm &&
                    <div className="row">
                        <a className="fluid ui button primary" onClick={this.showPublisherForm}>Add Publisher</a>
                    </div>
                }
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { publishers.map(publisher => (
                        <Publisher key={publisher._id} deletePublisher={deletePublisher} showPublisherForm={this.showPublisherForm} publisher={publisher}/>
                    )) }
                    </tbody>
                </table>
                {
                    this.state.showPublisherForm && <PublisherForm submit={this.savePublisher} hidePublishersForm={this.hidePublisherForm} publisher={this.state.selectedPublisher}/>
                }
                </div>
            </div>
        )
    }
}


PublishersList.propTypes = {
    publishers : PropTypes.arrayOf(PropTypes.object).isRequired,
    hidePublishersList: PropTypes.func.isRequired,
    deletePublisher: PropTypes.func.isRequired,
    savePublisher: PropTypes.func.isRequired
};
PublishersList.defaultProps = {
    publishers: []
};

export default PublishersList;