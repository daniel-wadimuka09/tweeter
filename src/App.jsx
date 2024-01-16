

import './App.css'
import Sidebar from './composant/Sidebar'
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



function App() {

  return (
 <div className='flex  bg-black text-white '>

    <div className="w-2/4 h-screen bg-black  ">
        <Sidebar/>
    </div>

    <div className='container border-x w-2/5  '>
      <Baby/>
      <TweetBox/>
      <TweetCard/>
      <Tweet/>
      <SocialCard/>
      <Tweeter/>
      <Social/>
      
      
      
    </div>

    <div className="w-2/4 h-screen bg-black ">
         
      <div className="grid gap-6 grid-cols-21" >
      <Rechercher/>
      <Interface/>
      <Cardinterface/>
      </div>
      
    </div>
 </div>
    
  )
}

export default App