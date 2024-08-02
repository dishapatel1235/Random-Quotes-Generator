import './App.css';
import './input.css';
import StatementCard from './StatementCard';
import Navbar from './components/Navbar';
import { useState,useEffect } from 'react'
import axios from "axios"

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  const handleSave = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };
  
  return (
    <>
      <Navbar />
      <div className="App">
      <button className="text-2xl p-3 bg-slate-700 text-white toUppercase hover:bg-slate-800 "onClick={fetchQuote}> Click Here to Generate a New Quote</button>
      <StatementCard quote={quote} onSave={handleSave} />
      <div className='py-2'><div className='p-2 bg-slate-700 text-white rounded-md'>Saved Quotes</div></div>
      <ul>
        {savedQuotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
    </>
  )
}
export default App;
