// FormDialog.js
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Context from './Context';

export default function FormDialog() {

  const MyContext = React.useContext(Context)

  const handleClose = () => {
    MyContext.setData(prevData => ({
      open: false,
      error:false,
      helptext:'',
      PlateNotext:''
    }));
  };

  const validatePlatNo = (plateNo)=>{
    const Regex = /^[A-Z]{3}-[0-9]{4}$/
    return Regex.test(plateNo);
  }

  const handlechange = (e) => {
    const { value } = e.target;
    MyContext.setData(prevData => ({
      ...prevData,
      PlateNotext: value,
      // error: value.trim() === '',
      // helptext: ''
    }));
  };

  const handleSubmit = () => {
    if(!validatePlatNo(MyContext.data.PlateNotext)){
      MyContext.setData( pre => ({...pre, error: true, helptext:'請輸入正規車牌'}))
    }
    else
    {
      handleClose();
    }
    
  };

  return (
    <React.Fragment>
      <Dialog
        open={MyContext.data.open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleSubmit();
          },
        }}
      >
        <DialogTitle>test</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="plateNo"
            name="plateNo"
            type="text"
            fullWidth
            variant="standard"
            onChange={handlechange}
            value={MyContext.data.PlateNotext}
            error={MyContext.data.error}
            helperText={MyContext.data.helptext}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button type="submit">送出</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
