

import './App.css'
import Sidebar from './Sidebar'
import Baby from './Baby'
import TweetBox from './ TweetBox'
import TweetCard from './composant/TweetCard'
import Tweet from './Tweet'
import Tweeter from './Tweeter'
import SocialCard from './SocialCard'
import Social from './Social'
import Rechercher from './Rechercher'
import Interface from './Interface'
import Cardinterface from './Cardinterface'
import UserProfil from './UserProfil'



function App() {

  return (
 <div className='flex  bg-black text-white py-8'>

    <div className=" container  w-2/4 h-4/5 px-11 m-4 ">
        <Sidebar/>
        <UserProfil/>
    </div>

    <div className=' container border-x  w-5/2 py-5 m-3 '>
      <Baby/>
      <TweetBox/>
      <TweetCard/>
      <Tweet/>
      <SocialCard/>
      <Tweeter/>
      <Social/> 
    </div>

    <div className="  py-8 ml-5   container w-3/4 " >
         
      <div className="grid gap-6 grid-cols-21  container w-3/5 border-y" >
      <Rechercher/>
      <Interface/>
      <Cardinterface/>
      </div>
      
    </div>
 </div>
    
  )
}

export default App