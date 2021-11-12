import React from 'react'

import Break from '../img/floral-design.png'

class Whole extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            today: Date.now(),
            guests: 0
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ today: Date.now() }), 1000);
      }

    render() {
        

        // Set the date we're counting down to
        var countDownDate = new Date("Aug 25, 2022 00:00:00").getTime();

        // Update the count down every 1 second

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - this.state.today;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //sets state after radio button for guests is clicked
      const pickGuests = (e) => {
        this.setState({ guests: e.target.value})
      }
      //sets amount of guest forms
      const guests = () => {
        var indents = [];
        for(let i=0; i<this.state.guests; i++){
          indents.push(
            <div key={i} className="guest">
              <div className="name flex-spread">
                <label htmlFor="name">Guest #{i+1} Name:</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="name flex-spread">
                <label htmlFor="meal">Meal:</label>
                <select name="meal" id="meal">
                  <option value="chicken">Chicken </option>
                  <option value="steak">Steak</option>
                  <option value="seafood">Seafood</option>
                </select>
              </div>
            </div>
          );
        }
        return indents;
      }
      return (
      <div className="body">
          <div className="contain-hero">
              <div className="hero">
                <div className="overlay">
                    <h1>Kevin & Ginny</h1>
                    <img className="break" src={Break} alt="floral-design" />
                    <p>Invite you to share in their joy as they exchange wedding vows!</p>
                </div>
              </div>
          </div>
          <div className="countdown">
            <h1>WE ARE GETTING MARRIED!</h1>
            <img className="break" src={Break} alt="floral-design" />
            <p>Count down with us on our journey to forever..</p>
            <div className="clock">
                <div className="column-flex">
                    <div className="box"><b>{days}</b></div>
                    <label>Days</label>
                </div>
                <div className="column-flex">
                    <div className="box"><b>{hours}</b></div>
                    <label>Hours</label>
                </div>
                <div className="column-flex">
                    <div className="box"><b>{minutes}</b></div>
                    <label>Minutes</label>
                </div>
                <div className="column-flex">
                    <div className="box"><b>{seconds}</b></div>
                    <label>Seconds</label>
                </div>
            </div>
            <div className="date-box">
                <h2>25 August 2022</h2>
            </div>
            <div className="frame"></div>
          </div>
          <div className="info">

          </div>
          <div className="new-rsvp">
            <div className="holder">
                <div className="held">
                    <div className="inner">
                        <form>
                        <div className="contain-rsvp">
                            <div className="name">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div className="name">
                                <label htmlFor="meal">Meal:</label>
                                <select name="meal" id="meal">
                                <option value="chicken">Chicken </option>
                                <option value="steak">Steak</option>
                                <option value="seafood">Seafood</option>
                                </select>
                            </div>
                            <div className="guests">
                                <div>
                                    <label>Guests:</label>
                                </div>
                                <div className="guest-numbers">
                                    <div className="radio-whole">
                                        <label htmlFor="add-2">0</label>
                                        <input name="rsvp" type="radio" id="add-2" value="0" onClick={pickGuests}/>
                                    </div>
                                    <div className="radio-whole">
                                        <label htmlFor="add-1">+1</label>
                                        <input name="rsvp" type="radio" id="add-1" value="1" onClick={pickGuests}
                                        />
                                    </div>
                                    <div className="radio-whole">
                                        <label htmlFor="add-2">+2</label>
                                        <input name="rsvp" type="radio" id="add-2" value="2" onClick={pickGuests}/>
                                    </div>
                                    <div className="radio-whole">
                                        <label htmlFor="add-3">+3</label>
                                        <input name="rsvp" type="radio" id="add-3" value="3" onClick={pickGuests}/>
                                    </div>
                                </div>
                            </div>
                            {guests()}
                            </div>
                            <button id="submit" type="submit" value="RSVP">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
          </div>
      </div>
      );
    }
  }

  export default Whole;