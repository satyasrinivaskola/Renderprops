//Main com to pass props for render
import react from 'react'
class Renederprops extends  react.Component{
    constructor(){
        super();
        this.state={
        count:0
    }
    }
    incrementcount=()=>{
        this.setState(prevState=>{
            return{count:prevState+1}
        })
    }
    render(){
        return
           <h2 >{this.props.render(this.state.count,this.incrementcount)}

                </h2>
                
        
        
    }
}
export default Renederprops