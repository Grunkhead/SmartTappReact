import React from 'react';

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange() {

    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <h1>Bestaande SmartTapp aanpassen</h1>
                <form style={{ display: 'inline-block', backgroundColor: 'gray', padding: '10px', margin: '10px' }}>
                    <div>
                        <label>Naam</label>
                        <br/>
                        <input style={{ margin: '5px' }} type="text" name="name"/>
                    </div>
                    <div>
                        <label>Identificatienummer</label>
                        <br/>
                        <input style={{ margin: '5px' }} type="text" name="tapId"/>
                    </div>
                    <input type="submit" value="Aanpassen"/>
                </form>
            </div>
        )
    }
}