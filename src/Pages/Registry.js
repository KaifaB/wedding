import React from 'react'
import Target from '../img/target-logo.png'
import PotteryBarn from '../img/pottery-barn-logo.png'

class Registry extends React.Component {
    render() {
      return (
      <div className="registry">
        <a href="https://target.com">
          <div className="target">
            <img alt="target" src={Target}/>
            <h1>Target Registry</h1>
          </div>
        </a>
        <a href="https://www.potterybarn.com">
          <div className="pottery-barn">
            <img alt="pottery-barn" src={PotteryBarn}/>
            <h1>Pottery Barn Registry</h1>
          </div>
        </a>
      </div>
      );
    }
  }

  export default Registry;