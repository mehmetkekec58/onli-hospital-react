import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import { SnackbarProvider} from 'notistack';
function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={4}>
     <Main/>
     </SnackbarProvider>
    </div>
  );
}

export default App;
