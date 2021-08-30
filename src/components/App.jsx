import { Profile } from './profile/Profile';
import { FriendList } from './friend-list/frend-list';



import friends from './friend-list/friends.json';
// import socialProfile from './social-profile/user.json';
// import statistics from './statistics/statistical-data.json';
// import transaction from './transaction-history/transactions.json';



export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <FriendList friends={friends} />
     
    </Container>
  );
};
// export const App = () => {
//   return <div>App</div>
// //   return <Profile
// //   name={user.name}
// //   tag={user.tag}
// //   location={user.location}
// //   avatar={user.avatar}
// //   stats={user.stats}
// // />;
// };

// ============
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
