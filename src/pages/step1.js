import React, {useState} from 'react';
import { Banner, Layout, Box, ScoreCard, Button, p} from './styles';

const RockPSGame = () => {
    const [score, setScore ] = useState(0);

    return(
        <Layout>
            <Banner>
                <p className='bold'> ROCK <br/> PAPER <br/> SCISSORS</p>
                <ScoreCard>
                    <p className='score'>SCORE</p>
                    <p className='dark'>{score}</p>
                </ScoreCard>
            </Banner>
            <Box/>
        </Layout>
    )
};

export default RockPSGame;