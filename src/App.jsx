
import { Suspense } from 'react';
import './App.css'
import User from './components/User';
import Friends from './components/Friends';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();

}


function App() {

  const friendsPromise = fetchFriends();

  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        {/* <Suspense fallback={<h2>Loading...</h2>}>
          <User fetchUsers={fetchUsers} />
        </Suspense> */}


        {/* this is the friends area for fetch api calling    */}

        <Suspense fallback={<h2>Friends Loading...</h2>}>
          <Friends friendsPromise={friendsPromise} />
        </Suspense>

      </div>
    </>
  )
}

export default App
