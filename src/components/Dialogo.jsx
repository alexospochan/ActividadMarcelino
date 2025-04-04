import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Dialogo(props) {
  const { open, onClose, data } = props;
  const { nombre, cantidad, categoria } = data;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Información del Producto"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          NOMBRE: {nombre}<br />
          CANTIDAD: {cantidad}<br />
          CATEGORIA: {categoria}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}