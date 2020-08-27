import styled from 'styled-components';
import { device } from '../../styles/variables';
const Container = styled.article`
    flex: 1;
    background-color: #FAFAFA;
    padding-top: 2rem;
`;

const Wrapper = styled.div`
    padding: 0 1rem;

    @media ${device.MobileLandscape}, ${device.TabletLandscape} {
        padding: 0 3rem 3rem;
    }

    @media ${device.Laptops} {
        padding: 0 4rem 4rem;
    }
`;

const Logo = styled.div`
    width: 3rem;
    height: 3rem;
    margin: 0 auto 3rem;

    img {
        width: 100%; 
        height: 100%;
    }
`;

const Content = styled.div`
    text-align: center;
    font-size: 0.9rem;
    
    h1 {
        margin-block-start: 0.5rem;
        margin-block-end: 0.5rem;
        font-size: 1.3rem;
    }

`;

const Specs = styled.div`
    color: #848484;
    font-size: 0.9rem;
    padding: 2rem 0;
    width: 340px;
    word-break: break-all;
    margin: 0 auto;

    span {
        margin: 0.5rem;
        display: inline-block;

        &:first-child {
            margin-left: 0;
        }
    }
`;

export { Container, Wrapper, Logo, Content, Specs };