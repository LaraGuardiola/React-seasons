import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//*functional component cannot handle async

/*const App = () => {
    
    return <div>Latitude: </div>
}*/

//*class-based component

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { lat: null, errorMessage: '' }
    }

    //*LIFECYCLE METHODS (most used ones, there are others)

    //component was rendered to screen - IDEAL PLACE TO DO DATA-LOADING
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
        console.log('component was just rendered to the screen')
    }

    //called evey time component is updated - GOOD PLACE TO DO MORE DATA-LOADING WHEN STATE/PROPS CHANGE
    componentDidUpdate() {
        console.log('component was just updated - it rendered as well!')
    }

    //conditional rendering in case we have lat and no error message, and viceversa
    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        //passing props through state
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        //if no prop is added, default prop from Spinner will be called
        return <Spinner message="Please accept location request" />
    }

    
    render() {
        //border red classes are not used, just to ilustrate that is way better to modularize conditional rendering so if u want to wrap all conditions under one element is way easier
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
    }
}

//version 17 of react (still valid in april 2022)
/*ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)*/

//*version 18 of react
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)