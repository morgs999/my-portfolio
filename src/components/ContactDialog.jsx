import * as React from 'react';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import emailjs from '@emailjs/browser';

export default function ContactDialog({ open, handleClose }) {
    const form = useRef();
    const sendEmail = (e) => {
        // e.preventDefault();
        console.log(form.current);
        emailjs
            .sendForm('service_chh28n7', 'template_rpbod4p', form.current, {
                publicKey: 'I91x20SLJJA_MZIIw',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };

    return (
        <>
            {/* <form ref={form} onSubmit={sendEmail}> </form>*/}
            <Dialog
                id='form'
                ref={form}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        form.current = formJson;
                        // console.log(formJson);
                        sendEmail();
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Contact Morgan</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please feel free to reach out with any inquiries or opportunities.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        name="name"
                        label="Name "
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        required
                        multiline
                        rows={4}
                        margin='dense'
                        id='message'
                        name='message'
                        label='Message '
                        fullWidth
                        variant='outlined'
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Email Me</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
