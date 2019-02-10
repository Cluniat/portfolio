import React, { Component } from 'react';
import './Header.scss';
import { PropTypes } from 'prop-types';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: null
        }
    }

    render() {
        return (
            <div className="header">
                coucou {this.props.name}
            </div>
        );
    }

}

Header.propTypes = {
    name: PropTypes.string.isRequired,
}


export default Header;
