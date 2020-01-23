import React from 'react';
import Card from '../../components/Card';

export default class Taps extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taps: null,
            message: null
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    async componentDidMount() {
        
        const res = await fetch('http://145.24.222.249/taps')
        const data = await res.json()
        
        this.setState({ 
            taps: data['items']
        })
    }

    handleDelete = tap => {
        const self = this
        const tapId = tap._id
        const taps = this.state.taps

        fetch(`http://145.24.222.249/taps/${tapId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                self.setState({
                    message: `SmartTapp ${tap.name} succesvol verwijderd!`
                })            
            }
        })

        this.setState({
            taps: taps.filter(tap => tap._id !== tapId)
        });
    }

    render() {
        return (
            <div>
                <h1>Mijn SmartTapps</h1>
                {
                    this.state.message ? (
                        <div style={{ backgroundColor: '#5CB85C', color: 'white', padding: '10px' }}>{this.state.message}</div>
                    ) : (null)
                }
                {
                    !this.state.taps ? (
                        <div>Loading SmartTapps..</div>
                    ) : (
                        <div>
                            {
                                this.state.taps.map(tap => <Card onDelete={this.handleDelete} key={tap._id} tap={tap}></Card>)
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}