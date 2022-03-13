import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} /> {/* set users as a empty array */}
    </div>
  );
}

export default App;
