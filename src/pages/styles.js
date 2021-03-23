import styled from 'styled-components';

const Theme = {
    primaryBorderRadius: "3px",
    secBorderRadius: '5px',
    white: '#f5f5f5',
    darkColor: 'hsl(229, 25%, 31%)',
    blueColor: 'hsl(229, 64%, 46%)',
};

export const Modal = styled.div`
    width: 200px;
    height: 200px;
`;

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vh;
    height: 100vh;
    margin: 0;
    padding: 30px;
    background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    color: ${Theme.white};
`;
export const Box = styled.div`
    padding: 15px;
    width: 100%;
    background-color: red;
`;
export const Banner = styled.div`
    width: 50%;
    height: 80px;
    display: inline-flex;
    justify-content: space-between;
    border: 1px solid hsl(217, 16%, 45%);
    padding: 15px;
    border-radius: ${Theme.secBorderRadius};
    align-text: right;

    &p {
        font-size: 24px;
    }
`

export const ScoreCard = styled.div`
    width: 80px;
    background-color:${Theme.white};
    border-radius: ${Theme.primaryBorderRadius};
    align-text: center;
    &.score {
        color: ${Theme.blueColor};
        font-size: 8px;
    }
    &p.dark {
        color: ${Theme.darkColor};
        font-size: 20px;
    }

`;

export const Button = styled.div`
    border-radius: ${Theme.primaryBorderRadius};
`