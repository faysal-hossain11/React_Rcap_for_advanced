
import { Suspense } from 'react';
import './App.css'
import User from './components/User';
import Friends from './components/Friends';
// import fetchFriends from '../lib/api';
import CounterApp from './components/CounterApp';
import ShowHideToggle from './components/ShowHideToggle';
import UserGrid from './components/UserGrid';
import ProductGrid from './components/ProductGrid';
import { fetchOnlineProducts } from '../lib/api';
import OnlineProducts from './components/online-product/OnlineProducts';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();

// }


function App() {

  // const friendsPromise = fetchFriends();
  const onlineProductsPromise = fetchOnlineProducts();
  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <Suspense fallback={<h2 className='text-2xl text-center'>Loading online products...</h2>}>
          <OnlineProducts onlineProductsPromise={onlineProductsPromise} />
        </Suspense>
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
