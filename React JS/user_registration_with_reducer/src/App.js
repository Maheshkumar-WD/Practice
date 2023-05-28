
import './App.css';
import UserForm from './Components/Users/UserForm';
import Users from './Components/Users/Users';
import { useStore } from './store/store';


function App() {
  let store = useStore();
console.log(store);
  return (
    <div className="App">
      <div className='userWrapper_Flex'>
      <UserForm  dispatcher={store.dispatchFun.userDispatch} />
      <Users users={store.state.users} dispatcher={store.dispatchFun.userDispatch} />
      </div>
    </div>
  );
}

export default App;
