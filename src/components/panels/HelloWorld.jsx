import React from 'react';

export default class HelloWorld extends React.Component {

    constructor(props) {
        super(props);
    }

    getContacts = () => {
        this.props.onFetchContacts();
    }

    render() {
        const contact = this.props.contact;
        return (
            <div>
                <h1>Hello World React Redux Rest ! </h1>
                <button onClick={this.getContacts}>Get Contacts</button>
                {contact.name && 
                <div>
                    Name: {contact.name.first + ' ' + contact.name.last}
                </div>}
            </div>
        );
    }

    componentDidMount() {
        this.props.onScreenload();
    }

}