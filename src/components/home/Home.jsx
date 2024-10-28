import Navbar from '../navbar/Navbar';
import React, { useState } from 'react';
import { Footer } from '../footer/Footer';
import { Heroes } from '../heroes/Heroes';
import { MainSection } from '../mainSection/MainSection.jsx';

const Home = ({ isAuthenticated, user, handleLogin }) => {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
        </div>
    );
};

export default Home;