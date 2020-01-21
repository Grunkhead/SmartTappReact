import React from 'react';
import Moment from 'react-moment';


export default class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tap: null
        }
    }

    async componentDidMount() {

        // Only take ID out of the object.
        const { id } = this.props.match.params

        const uri = `http://145.24.222.249/taps/${id}`
        const res = await fetch(uri)

        this.setState({
            tap: await res.json()
        })
    }

    render() {
        return (
            <div> 
                {
                    !this.state.tap ? ( 
                        <div>Loading SmartTapp..</div>
                    ) : (
                        <div>
                            <h1>SmartTapp '{this.state.tap.name}'</h1>
                            <table>
                                <tr>
                                    <th style={{ backgroundColor: 'orange' }}>Description</th>
                                    <th style={{ backgroundColor: 'orange' }}>Something</th>
                                    <th style={{ backgroundColor: 'orange' }}>Updated At</th>
                                    <th style={{ backgroundColor: 'orange' }}>Created At</th>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid gray' }}>{this.state.tap.description}</td>
                                    <td style={{ border: '1px solid gray' }}>{this.state.tap.something}</td>
                                    <td style={{ border: '1px solid gray' }}><Moment format="DD-MM-YYYY HH:mm">{this.state.tap.updated_at}</Moment></td>
                                    <td style={{ border: '1px solid gray' }}><Moment format="DD-MM-YYYY HH:mm">{this.state.tap.created_at}</Moment></td>
                                </tr>
                            </table>
                        </div>
                    )
                } 
            </div>
        )
    }
}