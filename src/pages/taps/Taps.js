import React from 'react';
import Card from '../../components/Card';

export default class Taps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taps: null
        }
    }

    async componentDidMount() {
        
        const res = await fetch('http://145.24.222.249/taps')
        const data = await res.json()
        
        this.setState({ 
            taps: data['items']
        })
    }

    handleDelete = tapId => {

        fetch(`http://145.24.222.249/taps/${tapId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        const taps = this.state.taps.filter(x => x._id !== tapId)
        
        this.setState({
            taps: taps
        });
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
                            {
                                this.state.taps.map(x => <Card onDelete={this.handleDelete} tap={x}></Card>)
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}