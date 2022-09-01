import React from 'react';
import './App.css';
import Main from './pages/main/Main';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <div className="App">
      <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} maxSnack={2}>
        <Main />
      </SnackbarProvider>
    </div>
  );
}

export default App;
