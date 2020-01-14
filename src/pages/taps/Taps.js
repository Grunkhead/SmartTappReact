import React from 'react';
import Card from '../../components/Card';

import {
    Link
} from "react-router-dom";

export default class Taps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taps: null
        }
    }

    async componentDidMount() {
        // Voor Bas, URL is niet cool.
        const uri = 'http://62.45.213.70:1337/taps'
        const res = await fetch(uri)
        
        this.setState({ taps: await res.json() })
    }

    render() {
        return (
            <div>
                <h1>Mijn SmartTapps</h1>
                {
                    !this.state.taps ? (
                        <div>Loading SmartTapps..</div>
                    ) : (
                        <div>
                            {this.state.taps.map(x => <Card tap={x}></Card>)}
                        </div>
                    )
                }
            </div>
        )
    }
}