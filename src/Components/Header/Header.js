import React, { Component } from 'react';
import './Header.scss';
import { PropTypes } from 'prop-types';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">

                <div className={"identity"}>
                    <div className={"photo"}>Ceci est une photo</div>
                    <div className={"entire-name"}>
                        <div className={'surname'}>Philippine</div>
                        <div className={'name'}>Cluniat</div>
                    </div>
                </div>


            </div>
        );
    }

}

Header.propTypes = {}


export default Header;
