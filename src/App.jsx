
import { Suspense, useState } from 'react';
import './App.css'
import User from './components/User';
import Friends from './components/Friends';
import CounterApp from './components/CounterApp';
import ShowHideToggle from './components/ShowHideToggle';
import UserGrid from './components/UserGrid';
import ProductGrid from './components/ProductGrid';
import OnlineProducts from './components/online-product/OnlineProducts';
import IplPlayers from './components/IPL/IplPlayers';
import Header from './components/Header';
import SelectedPlayers from './components/IPL/SelectedPlayers';
import { ToastContainer } from 'react-toastify';


const fetchIPLPlayers = async () => {
  const res = await fetch('../public/iplplayears.json');
  return res.json();
}


const iplPlayersPromise = fetchIPLPlayers();



function App() {
  const [toggle, setToggle] = useState(true);
  const [pursesPlayers, setPursesPlayers] = useState([]);
  

  const handleDeletePlayer = (playerId) => {
    const removedPlayer = pursesPlayers.filter((player) => player?.id !== playerId)
    setPursesPlayers(removedPlayer);
  }


  return (
    <>
      <Header />
      <div className='max-w-[1440px] mx-auto'>

        <div className='flex items-center justify-between mb-8'>
          <div>
            <h1 className='text-2xl font-bold '>IPL Players</h1>
            <p className='  mt-2'>Choose your favorite IPL players</p>
          </div>
          <div className="inline-flex">
            <button className={`py-2 px-5 border border-sky-300 border-r-0 rounded-l-md font-semibold ${toggle ? "bg-sky-300 text-black" : ""}`} onClick={() => setToggle(true)}>
              Available
            </button>
            <button className={`py-2 px-5 border border-sky-300 rounded-r-md font-semibold ${!toggle ? "bg-sky-300 text-black" : ""}`} onClick={() => setToggle(false)}>
              Selected ({pursesPlayers.length})
            </button>
          </div>

        </div>

        {/* IPL Players Section */}
        {toggle ? (
          <Suspense fallback={<h2 className='text-2xl text-center'>Loading IPL Players...</h2>}>
            <IplPlayers
              iplPlayersPromise={iplPlayersPromise}
              pursesPlayers={pursesPlayers}
              setPursesPlayers={setPursesPlayers}
            />
          </Suspense>
        ) : <SelectedPlayers pursesPlayers={pursesPlayers} handleDeletePlayer={handleDeletePlayer} />}



      </div>

      <ToastContainer />
    </>
  )
}

export default App
