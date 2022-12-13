import logo from '../img/writeLogo.jpg';
import ProfileImg from './ProfileImg';
import profileImg from '../img/tonyProfile.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Navbar =()=>{
    return(
        <div class='items-center text-center flex justify-around border-b-2 border-slate-300 border-solid'>
            <img class='w-40 cursor-pointer' src={logo} alt="logo-not-found" />
            <input class=' bg-slate-200 h-6 rounded-md text-center' type="text" placeholder='Cerca'/>

            <div class='flex w-48 justify-around'>
                <FontAwesomeIcon class='cursor-pointer text-slate-300 w-7' size='3px' icon={faHouse} />
                <FontAwesomeIcon class='text-white bg-slate-300 cursor-pointer rounded-md w-7 h-7  p-1' size='3px' icon={faPlus} />
                <FontAwesomeIcon class='cursor-pointer text-slate-300 w-7' size='3px' icon={faHeart} />
                <FontAwesomeIcon class='cursor-pointer text-slate-300 w-5' size='3px' icon={faBookmark} />
                <ProfileImg profileImg={profileImg} />
            </div>
        </div>
    )
}

export default Navbar;