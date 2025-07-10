import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Players from './components/players/players'
import Footer from './components/footer/footer';

function App() {
  const [players,setPlayers]=useState([]);
  const [userCoins, setUserCoins] = useState(0);
  const [selectedPlayerIds, setSelectedPlayerIds] = useState([]);
  const [displayMode, setDisplayMode] = useState('available');
  useEffect(()=>{
    fetch('players.json')
    .then(res=>res.json())
    .then(data=>setPlayers(data))
  },[])
  const claimFreeCredit = () => {
      setUserCoins(prevCoins => prevCoins + 2000000);
  };

  const MAX_PLAYERS = 6;

  const handlePlayerSelection = (playerId) => {
        
        const playerToSelect = players.find(p => p.id === playerId);
        if (!playerToSelect){
          console.error('Player not found:', playerId);
          return;
        } 
        const price=parseInt(playerToSelect.price);

        if (selectedPlayerIds.includes(playerId)) {
            setSelectedPlayerIds(prevSelected => prevSelected.filter(id => id !== playerId));
            // setUserCoins(prevCoins => prevCoins + price);
        } else {
            if (selectedPlayerIds.length < MAX_PLAYERS) {
                if (userCoins >= price) {
                    setSelectedPlayerIds(prevSelected => [...prevSelected, playerId]);
                    setUserCoins(prevCoins => prevCoins - price);
                } else {
                    alert("You don't have enough money to select this player!");
                }
            } else {
                alert(`You can only select up to ${MAX_PLAYERS} players.`);
            }
        }
  };
  const currentlySelectedPlayers = players.filter(player => selectedPlayerIds.includes(player.id));
  return (
    <>
      <Header 
        claimFreeCredit={claimFreeCredit}
        userCoins={userCoins}
      ></Header>
      <Players 
        players={players}
        userCoins={userCoins}
        handlePlayerSelection={handlePlayerSelection}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
        selectedPlayerIds={selectedPlayerIds}
        MAX_PLAYERS={MAX_PLAYERS}
        currentlySelectedPlayers={currentlySelectedPlayers}
      ></Players>
      <Footer></Footer>
    </>
  )
}

export default App
