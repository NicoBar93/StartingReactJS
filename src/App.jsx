import './App.css';
import Header from './components/Header.jsx';
import {CORE_CONCEPTS} from './data.js'; 
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';



function App() {


  return (
    <>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((value) => <Card {...value} />)}
          </ul>
        </section>
        <section id='examples'>
          <Button />
        </section>
      </main>
    </>
  )
}

export default App
