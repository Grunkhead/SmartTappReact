import React from 'react';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tap: null,
            message: null
        }
    }

    async componentDidMount() {
        // Only take ID out of the object.
        const { id } = this.props.match.params

        const res = await fetch(`http://145.24.222.249/taps/${id}`)
        const tap = await res.json()

        this.setState({
            loading: true,
            id: tap._id,
            name: tap.name,
            description: tap.description,
            something: tap.something
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const self = this

        fetch(`http://145.24.222.249/taps/${this.state.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: e.target.name.value,
                description: e.target.description.value,
                something: e.target.something.value
            })
        }).then(res => {
            if (res.ok) {
                self.setState({
                    message: 'Gegevens succesvol gewijzigd!'
                })
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Bestaande SmartTapp aanpassen</h1>
                {
                    this.state.message ? (
                        <div style={{ backgroundColor: '#5CB85C', color: 'white', padding: '10px' }}>{this.state.message}</div>
                    ) : (null)
                }
                {
                    !this.state.loading ? (
                        <div>Loading...</div>
                    ) : (
                        <form onSubmit={this.handleSubmit} style={{ display: 'inline-block', backgroundColor: 'gray', padding: '10px', margin: '10px' }}>
                            <div>
                                <label>Naam</label>
                                <br/>
                                <input style={{ margin: '5px' }} type="text" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                            </div>
                            <div>
                                <label>Description</label>
                                <br/>
                                <textarea style={{ margin: '5px' }} type="text" name="description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
                            </div>
                            <div>
                                <label>Something</label>
                                <br/>
                                <input style={{ margin: '5px' }} type="text" name="something" value={this.state.something} onChange={e => this.setState({ something: e.target.value })}/>
                            </div>
                            <input type="submit" value="Wijzig"/>
                        </form>
                    )
                }
            </div>
        )
    }
}