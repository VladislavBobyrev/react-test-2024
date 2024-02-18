import logo from './logo.svg';
import './App.css';
import { AppHeader } from './components/AppHeader';
const person = [
  {
    name: "vladislav",
    age: 8
  },
  {
    name: "vladislav",
    age: 8
  },
  {
    name: "vladislav",
    age: 8
  }
]

function App() {
  return (
    <div>
        <AppHeader/>
        <ul>
        {person.map((user, index) =>
          {
            return (<li key={index}>
              <strong>{user.name}</strong>
              <p>{user.age}</p>
            </li>)
          })
        }
        </ul>
        <footer>
          footer
        </footer>
    </div>


  )
}

export default App;
