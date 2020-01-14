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

        const uri = `http://62.45.213.70:1337/taps?id=${id}`
        const res = await fetch(uri)

        let data = await res.json()
        data = data[0]
        console.log(data)

        this.setState({
            tap: data
        })
    }


    handleChange() {

    }

    handleSubmit() {

    }

    // formatDate(date) {
    //     date = new Date(date)
    //     return (`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)
    // }

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
                                    <th style={{ backgroundColor: 'orange' }}>Waterverbruik(ML)</th>
                                    <th style={{ backgroundColor: 'orange' }}>Starttijd</th>
                                    <th style={{ backgroundColor: 'orange' }}>Eindtijd</th>
                                </tr>
                                {this.state.tap.sessions.map(x => 
                                    <tr>
                                        <td style={{ border: '1px solid gray' }}>{x.water_usage}</td>
                                        <td style={{ border: '1px solid gray' }}><Moment format="DD-MM-YYYY HH:mm">{x.start_time}</Moment></td>
                                        <td style={{ border: '1px solid gray' }}><Moment format="DD-MM-YYYY HH:mm">{x.end_time}</Moment></td>
                                    </tr>
                                )}
                            </table>
                        </div>
                    )
                } 
            </div>
        )
    }
}