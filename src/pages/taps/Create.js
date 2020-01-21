import React from 'react';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(event.target[0].value)

        fetch('http://145.24.222.249/taps', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                description: event.target.description.value,
                something: event.target.something.value
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Nieuwe SmartTapp maken</h1>
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