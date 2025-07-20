import React from 'react';
import Hero from './Hero';
import Page from './baner/Page';
import Advocate from './Advocate';
import ExpartTeam from './Expart/ExpartTeam';
import Appointment from './Appointment/Appointment';
import News from './News/News';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Page></Page>
            <Advocate></Advocate>
            <ExpartTeam></ExpartTeam>
            <Appointment title='Make An Appointment' button='Confirm'></Appointment>
            <News></News>

        </div>
    );
};

export default Home;