import React from 'react'

class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: 0
    };
  }
    render() {
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
        <div className="rsvp">
          <h1>Reserve Your Spot!</h1>
          <form action="submit">
            <div className="contain-rsvp">
              <h1>You</h1>
              <div className="name flex-spread">
                <label htmlFor="name">Full Name:</label>
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
              <h1>Your Guests</h1>
              <div className="guests">
                <div>
                  <label>Guests:</label>
                </div>
                <div className="guest-numbers">
                  <div>
                    <label htmlFor="add-2">0</label>
                    <input name="rsvp" type="radio" id="add-2" value="0" onClick={pickGuests}/>
                  </div>
                  <div>
                    <label htmlFor="add-1">+1</label>
                    <input name="rsvp" type="radio" id="add-1" value="1" onClick={pickGuests}
                    />
                  </div>
                  <div>
                    <label htmlFor="add-2">+2</label>
                    <input name="rsvp" type="radio" id="add-2" value="2" onClick={pickGuests}/>
                  </div>
                  <div>
                    <label htmlFor="add-3">+3</label>
                    <input name="rsvp" type="radio" id="add-3" value="3" onClick={pickGuests}/>
                  </div>
                </div>
              </div>
              {guests()}
            </div>
            <div className="submit-area">
              <button type="submit" value="RSVP">RSVP</button>
            </div>
          </form>
        </div>
        
      );
    }
  }

  export default RSVP;