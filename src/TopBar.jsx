import { HeartIcon } from "./PlayingCard"
import { ClubIcon } from "./PlayingCard"
import { useNavigate } from "react-router-dom"

export default function TopBar(){
    const navigate = useNavigate()

    return(
        <div className='top-bar' onClick={() => navigate('/home')}> 
            <HeartIcon color="red" width="64" height="64"/>
            <h1>SAM KATEVATIS</h1>
            <ClubIcon color="black" width="50" height="50"/>
        </div>
    )

} 