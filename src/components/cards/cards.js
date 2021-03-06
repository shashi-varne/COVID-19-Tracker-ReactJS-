import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-countup';

const Cards = (props) => {
    console.log({ props })
    const { info: { confirmed, recovered, deaths, lastUpdate } } = props;
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div class=''>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className='card infected'>
                    <CardContent className='cardContent'>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={1} separator="," />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toString().substring(0, 15)}</Typography>
                        <Typography variant='body2'>Number of Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className='card recovered'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={1} separator="," />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toString().substring(0, 15)}</Typography>
                        <Typography variant='body2'>Number of Recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className='card deaths' >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={1} separator="," />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toString().substring(0, 15)}</Typography>
                        <Typography variant='body2'>Number of Deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
