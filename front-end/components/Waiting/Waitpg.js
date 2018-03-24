import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'Apr 01, 2018 10:00:00',
        };
    }

    //Add a div with an image with the corresponding show as the background image.
    //Add info about the show
    //Choose font for Summary  
    render() {
        return (

            <div class='container-fluid' className='Wait-Page' >
                <img className='Wait-img' src='http://images.amcnetworks.com/amc.com/wp-content/uploads/2017/09/the-walking-dead-season-8-key-art-rick-lincoln-daryl-reedus-1200x707.jpg' />

                <div class='row' className="Summary">

                    <div class='col-lg-6' className="blurb">
                        <h1 className="Wait-title"> Title: "Name" </h1>
                        <p>Season: 3 Episode: 3</p>
                        <p> Network: "name" </p>
                        <p className='summ'> Summary: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                    </div>
                </div>

                <div className="Wait-Bottom">
                    <div className="App-date">{this.state.deadline}</div>
                    Time Left: <Clock className='Countdown' deadline={this.state.deadline} />
                </div>
            </div>
        );
    }
}

export default App;
