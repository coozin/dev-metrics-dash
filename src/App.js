import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import DateBar from './components/DateBar';
import TabContent from './components/TabContent';

import './App.css';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="app">
        <DateBar />
        <TabContent />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
