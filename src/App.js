import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Home from './pages';
import Store from './pages/Store';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </div>
  );
}
function MainLayout() {
  return (
    <main>
      <MyNav />
      <Outlet />
      <MyFooter />
    </main>
  )
}
export default App;
