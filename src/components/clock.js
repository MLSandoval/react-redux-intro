import React from 'react';

//connects the component to the redux store, ie makes state available to the component 
import  {connect} from 'react-redux';

import {tick} from '../actions'


class Clock extends React.Component{
    componentDidMount(){
        setInterval(this.props.tickActionCreator, 1000);
    }

    render(){
        console.log('Clock Props: ', this.props);
        return(
            <h1>{this.props.time}</h1>
        );
    }
}

//takes a single parameter, the entirety of the redux state, whatever this function returns will be added to the components props
function mapStateToProps(state){
    console.log('Redux state in Clock Component: ', state);
    return {
        //this time becomes a property inside of the props of this component
        time: state.clock.time
    };
}

//connect takes 2 arguments, the mapStateToProps function, and another
//the connect function returns a function that we curry to the component we are working on, ie we call connect with its parameter, return a function, and then call that function with the curried parameter that follows
//connect takes the second paramter, and object with methods, and then connects them to our components props
export default connect(mapStateToProps, {tickActionCreator: tick})(Clock);