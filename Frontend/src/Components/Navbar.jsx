import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return (
        <div style={{'display':'flex','justifyContent':'space-between','gap':'20px','background':'lightgrey'}}>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>Register</Link>
            <Link  to={'/get-restaurants'}>Retaurants</Link>
        </div>
            
                    
        
    )
}