import React from 'react';
import PropTypes from 'prop-types';

const Message  = (props) => {

    let messageClass,
        iconClass;

    switch(props.type) {
        case 'info':
            messageClass='ui icon message blue';
            iconClass='info icon';
            break;
        case 'success':
            messageClass=' ui icon message green';
            iconClass='thumbs up icon';
            break;
        case 'error':
            messageClass='ui icon message red';
            iconClass='warning sign icon';
            break;
        default:
            messageClass='ui icon message blue';
            iconClass='info icon';
    }
    return(
    <div className={messageClass}>
        <i className={iconClass}/>
        <div className="content">
            <div className="header">{props.header}</div>
            <p>{props.content}</p>
        </div>

    </div>
    )
};

Message.propTypes = {
    type: PropTypes.string,
    header:PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

Message.defaultProps = {
    type: 'info',
    header: '',
    content: ''
};

export default Message;