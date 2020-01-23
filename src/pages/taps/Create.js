import React from 'react';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const self = this

        fetch('http://145.24.222.249/taps', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                name: e.target.name.value,
                description: e.target.description.value,
                something: e.target.something.value
            })
        }).then(res => {
            if (res.ok) {
                self.setState({
                    message: 'SmartTapp succesvol aangemaakt!'
                })
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Nieuwe SmartTapp maken</h1>
                {
                    this.state.message ? (
                        <div style={{ backgroundColor: '#5CB85C', color: 'white', padding: '10px' }}>{this.state.message}</div>
                    ) : (null)
                }
                <form onSubmit={this.handleSubmit} style={{ display: 'inline-block', backgroundColor: 'gray', padding: '10px', margin: '10px' }}>
                    <div>
                        <label>Naam</label>
                        <br/>
                        <input style={{ margin: '5px' }} type="text" name="name"/>
                    </div>
                    <div>
                        <label>Description</label>
                        <br/>
                        <textarea style={{ margin: '5px' }} type="text" name="description"/>
                    </div>
                    <div>
                        <label>Something</label>
                        <br/>
                        <input style={{ margin: '5px' }} type="text" name="something"/>
                    </div>
                    <input type="submit" value="Maken"/>
                </form>
            </div>
        )
    }
}