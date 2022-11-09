import { Outlet } from 'react-router-dom';

import { DataContextProvider } from './context/DataContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </DataContextProvider>
    </div>
  );
}

export default App;
