import { HeartIcon } from "./PlayingCard"
import { ClubIcon } from "./PlayingCard"

export default function TopBar(){
    return(
        <div className='top-bar'>
            <HeartIcon color="red" width="64" height="64"/>
            <h1>SAM KATEVATIS</h1>
            <ClubIcon color="black" width="50" height="50"/>
        </div>
    )

}