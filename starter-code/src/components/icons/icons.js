import React from "react";
import "./icons.css";
class Icons extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="Icons">
                <div className="indiviual">
                    <img src="images/icon1.png" className='icons4'></img>
                    <h4>Declarative</h4>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div className="indiviual">
                    <img src="images/icon2.png" className='icons4'></img>
                    <h4>Components</h4>
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div className="indiviual">
                    <img src="images/icon3.png" className='icons4'></img>
                    <h4>Single-Way</h4>
                    <p>A set of immutable values are passed to the components</p>
                </div>
                <div className="indiviual">
                    <img src="images/icon4.png" className='icons4'></img>
                    <h4>JSX</h4>
                    <p>Statically typed desinged to run on modern browsers</p>
                </div>
            </div>
        );
    }
}

export default Icons;