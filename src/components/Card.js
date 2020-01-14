import React from 'react';

import {
    Link
} from "react-router-dom";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tap: this.props.tap
        }
    }

    render() {
        return (
            <div style={{ display: 'inline-block', backgroundColor: 'gray', padding: '10px', margin: '10px' }}>
                {
                    this.state.tap.connected ? (
                        <div style={{ padding: '10px', backgroundColor: 'green'}}>Verbonden</div>
                    ) : (
                        <div style={{ padding: '10px', backgroundColor: 'red'}}>Niet verbonden</div>
                    )
                }
                <h2>{this.state.tap.name}</h2>
                <div style={{ backgroundColor: 'orange', padding: '5px', marginBottom: '5px' }}>
                    <Link to="/taps/edit">Aanpassen</Link>
                </div>
                <div style={{ backgroundColor: 'orange', padding: '5px' }}>
                    <Link to="/taps/destroy">Verwijderen</Link>
                </div>
            </div>
        )
    }
}