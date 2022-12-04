import './App.css';
import AddForm from './components/AddForm.js';
import Header from './components/Header.js';
import Posts from './components/Posts.js';
import UpdateForm from './components/UpdateForm.js';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <AddForm/>
    // </div>
    <>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Posts />
              </>
            }
          />
          <Route
            path="/add"
            element={
              <>
                <Header />
                <AddForm />
              </>
            }
          />
          <Route
            path="/update"
            element={
              <>
              <Header />
              <UpdateForm />
              </>
            }
            />
        </Routes>
      </div>
    </>
  );
}

export default App;
