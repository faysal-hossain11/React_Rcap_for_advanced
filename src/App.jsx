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
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


  return (
    <>
      <Header />


      <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>











      {/* <div className='max-w-[1440px] mx-auto'>

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

        {toggle ? (
          <Suspense fallback={<h2 className='text-2xl text-center'>Loading IPL Players...</h2>}>
            <IplPlayers
              iplPlayersPromise={iplPlayersPromise}
              pursesPlayers={pursesPlayers}
              setPursesPlayers={setPursesPlayers}
            />
          </Suspense>
        ) : <SelectedPlayers pursesPlayers={pursesPlayers} handleDeletePlayer={handleDeletePlayer} />}



      </div> */}

      <ToastContainer />
    </>
  )
}

export default App
