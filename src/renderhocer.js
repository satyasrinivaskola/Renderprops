import react from 'react'
class Renderhover extends  react.Component{
   
    render(){
        const{count,incrementcount} =this.props
        return(
            <div>Hello renderhover

<h2 onMouseOver={incrementcount}>Hovered{count} times</h2>
            </div>
        )
    }
}
export default Renderhover