import React from 'react'
import { Typography } from '@mui/material';
import { fontSize } from '@mui/system';

export default function Title() {
    return (
        <div>
            <Typography align="center" sx={{
                fontSize: 30,
                color: "#00B0BB",
                fontWeight: 600,
                }}
                >
                Kindly. 
            </Typography>
        </div>
    )
}