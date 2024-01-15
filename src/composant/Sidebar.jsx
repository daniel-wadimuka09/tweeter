import { BiHomeCircle } from "react-icons/bi";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { IoMdListBox } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";




const Sidebar = () =>{
    return(
        <div className="sidebar">
            <ul>
                
                <li><a href="#"><BiHomeCircle/> Home</a></li>
                <li><a href="#"><CiHashtag/> Explore</a></li>
                <li><a href="#"><IoIosNotificationsOutline/> Notifications</a></li>
                <li><a href="#"><FaRegMessage/> Messages</a></li>
                <li><a href="#"><CiBookmark/> Bookmarks</a></li>
                <li><a href="#"><IoMdListBox /> Lists</a></li>
                <li><a href="#"><CgProfile  /> Profile</a></li>
                <li><a href="#"><CiCircleMore /> More</a></li>
            </ul>
        </div>
    )
}
export default Sidebar;