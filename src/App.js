import { SnackbarProvider } from 'notistack';

import DateBar from './components/DateBar';
import TabContent from './components/TabContent';

import './App.css';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="app">
        <DateBar />
        <TabContent />
      </div>
    </SnackbarProvider>
  );
}

export default App;
