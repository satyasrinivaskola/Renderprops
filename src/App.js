import react from 'react';

import Rendercounter from './rendercounter'; // Correct import name
import Renederprops from './renderpropscounter'; 
import Renderhover from './renderpropscounter'; // Correct import name
class PracticeCom extends react.Component {
    render() {
        return (
            <div>
                
                <h2>Class component practice</h2>
                <Rendercounter/>
            
                <Renederprops render={(count,incrementcount)=>(
                    <Renderhover count={count} incrementcount={incrementcount}/>

                )}/>
            </div>
        );
    }
}

export default PracticeCom; // Correct export name



