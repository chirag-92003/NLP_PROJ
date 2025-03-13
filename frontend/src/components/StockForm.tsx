import React from 'react'
import {Box, Typography, TextField, Button} from '@mui/material'
import styled from 'styled-components'


const FormContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width:100%;
`
function StockForm() {

    function HandleSubmit(event:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        console.log("clicked"); //to check if the button is clicked
    }
    return (
        <FormContainer>
            <form>
                <Typography variant="subtitle1" fontSize={20}>Stock Price Tracker</Typography><br />
                <TextField label="Stock Symbol" variant="outlined" sx={{marginBottom:2}}/><br />
                <Button variant="contained" color='success' type='submit' onClick={HandleSubmit} >Get Stock Price</Button>
            </form>
        </FormContainer>
    )
}

export default StockForm
