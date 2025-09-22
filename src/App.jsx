
import { Suspense, useState } from 'react';
import './App.css'
import User from './components/User';
import Friends from './components/Friends';
// import fetchFriends from '../lib/api';
import CounterApp from './components/CounterApp';
import ShowHideToggle from './components/ShowHideToggle';
import UserGrid from './components/UserGrid';
import ProductGrid from './components/ProductGrid';
// import { fetchOnlineProducts } from '../lib/api';
import OnlineProducts from './components/online-product/OnlineProducts';
// import iplPlayersJson from '../public/iplplayears.json';
import IplPlayers from './components/IPL/IplPlayers';
import Header from './components/Header';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();

// }


const fetchIPLPlayers = async () => {
  const res = await fetch('../public/iplplayears.json');
  return res.json();
}


const iplPlayersPromise = fetchIPLPlayers();
function App() {
  const [toggle, setToggle] = useState(true);

  // const friendsPromise = fetchFriends();
  // const onlineProductsPromise = fetchOnlineProducts();
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
              Selected
            </button>
          </div>

        </div>

        {/* IPL Players Section */}
        {toggle ? (
          <Suspense fallback={<h2 className='text-2xl text-center'>Loading IPL Players...</h2>}>
          <IplPlayers iplPlayersPromise={iplPlayersPromise} />
        </Suspense>
        ): <h2>Selected</h2>}



        {/* <Suspense fallback={<h2 className='text-2xl text-center'>Loading online products...</h2>}>
          <OnlineProducts onlineProductsPromise={onlineProductsPromise} />
        </Suspense> */}
        {/* <ProductGrid /> */}
        {/* <UserGrid /> */}
        {/* show hide component */}
        {/* <ShowHideToggle /> */}

        {/* this is the counter app section */}
        {/* <CounterApp /> */}
        {/* this is the counter app section */}




        {/* <Suspense fallback={<h2>Loading...</h2>}>
          <User fetchUsers={fetchUsers} />
        </Suspense> */}


        {/* this is the friends area for fetch api calling    */}

        {/* <Suspense fallback={<h2>Data Loading...</h2>}>
          <Friends friendsPromise={friendsPromise} />
        </Suspense> */}

      </div>
    </>
  )
}

export default App
