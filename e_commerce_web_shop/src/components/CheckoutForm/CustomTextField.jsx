import React from 'react';
import { TextField, Grid, Typography } from '@mui/material';
import { useFormContext, Controller} from 'react-hook-form';

const FormInput = ({name, label}) => {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant='body2'>{label}</Typography>
            <Controller
                render={({ field }) => <TextField {...field} style={{width:'100%'}}/>}
                name={name}
                control={control}
                rules={{ required: true }}
                defaultValue=''
            />
        </Grid>
    )
}

export default FormInput;