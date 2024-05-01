import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React from 'react';
import Context from './Context';
import FormDialog from './Form';

const Diadata = {
  open: false,
  error:false,
  helptext:'',
  PlateNotext:''
 }

function App() {
const [ data,setData ] = React.useState(Diadata)

 const global = {
  data,setData
 }
 
 const handleClickOpen = () => {
  setData(prevData => ({
    ...prevData,
    open: true
  }));
};
 
  return (
    <Context.Provider value={global}>
      <div className="App">
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleClickOpen}>車牌視窗</Button>
          </Stack>
          <FormDialog/>
      </div>
    </Context.Provider>
  );
}

export default App;
