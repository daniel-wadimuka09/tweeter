

import './App.css'
import Sidebar from './composant/Sidebar'
import Baby from './Baby'
import TweetBox from './ TweetBox'
import TweetCard from './composant/TweetCard'
import Tweet from './Tweet'
import Tweeter from './Tweeter'
import SocialCard from './SocialCard'
import Social from './Social'




function App() {

  return (
 <div className='flex bg-black text-white'>

    <div className="w-1/5 h-screen bg-black">
        <Sidebar/>
    </div>

    <div className='container border-x '>
      <Baby/>
      <TweetBox/>
      <TweetCard/>
      <Tweet/>
      <SocialCard/>
      <Tweeter/>
      <Social/>
      
      
      
    </div>

    <div className="w-1/5 h-screen bg-black">
      <h1></h1>
    </div>
 </div>
    
  )
}

export default App