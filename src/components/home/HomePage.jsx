import { Grid } from '@mui/material'
import React from 'react'
import { Navigation } from '../Nevigation/Navigation'
import { HomeSection } from '../HomeSection/HomeSection'

export const HomePage = () => {
    return (
        <Grid container xs={12}>
            {/* <Grid xs={2.5} sm={2.5} lg={2.5} md={2.5} xl={2.5} > */}
            <Grid xs={0}lg={2.5} >
                {/* <p className='text-center'>first part</p> */}
                <Navigation />

            </Grid>
            <Grid  xs={12}lg={6} >
                {/* <p className='text-center'>middle part</p> */}
                <HomeSection />
            </Grid>
            <Grid  xs={0}lg={3} >
                <p className='text-center'>last part</p>
            </Grid>
        </Grid>
    )
}
