import styled from 'styled-components';


export const Container = styled.header`
    height: 5rem;
    border-bottom: 1px solid #29292e;

`;

export const Content = styled.div`
    max-width: 1120px;
    height: 5rem;
    margin:  0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    hgroup {
        
        display: flex;
        align-items: center;
        flex-direction: column;

        h1{
            
            font-family: 'Roboto,sans-serif';
            color: #fff;
            display: block;
            margin-block-start: 1.8rem;
            font-size: 1.7rem;
        }

        p {
            font-size: 0.75rem;
            font-family: 'Roboto,sans-serif';
            color: #fff;
            margin-block-end: 2rem;
        }    
    }


    nav {
        margin-left: 5rem;
        height: 5rem;

        a{

            display: inline-block;
            position: relative;
            padding: 0 0.5rem;
            height: 5rem;
            line-height: 5rem;
            color: var(--gray-300);
            font-size: 0.9rem;
            transition: color 0.2s;

            svg {
                padding-top: 0.10rem;
                margin-right: 0.25rem;
                width: 14px;
                height: 14px;    
            }

            & + a {
                margin-left: 2rem;
            }

            &:hover {
                color: var(--white);
            }

            &.active {
                color: var(--white);
                font-weight: bold;
            }

            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background-color: var(--yellow-500);
            }
        }
    }

    button {
        margin-left: auto;
    }
`;

