import React from 'react';
import { Link } from "react-router-dom";

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
                <h2>{this.state.tap.name}</h2>
                <div style={{ backgroundColor: 'orange', padding: '5px', marginBottom: '5px' }}>
                    <Link to={`/taps/${this.state.tap._id}/show`}>Waterverbruik</Link>
                </div>
                <div style={{ backgroundColor: 'orange', padding: '5px', marginBottom: '5px' }}>
                    <Link to={`/taps/${this.state.tap._id}/edit`}>Aanpassen</Link>
                </div>
                <div style={{ backgroundColor: 'orange', padding: '5px' }}>
                    <Link onClick={
                        () => this.props.onDelete(this.props.tap._id)
                    }>Verwijderen</Link>
                </div>
            </div>
        )
    }
}