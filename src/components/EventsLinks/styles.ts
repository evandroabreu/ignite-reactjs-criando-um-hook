import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Leagues = styled.div`
    
    header{
        border-right: 1px solid #29292e;
        padding: 23px 20px 9px ;
        p{            
            margin-top: 0;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            line-height: 13px;
            font-size: 0.85rem;
            color: #2ec193;
            font-weight: 700;
        }
    }

    ul{
        list-style: none;            
        padding-left: 20px;
        box-sizing: border-box;
        display: block;
        border-right: 1px solid #29292e;

        li{
            font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Tahoma,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Open Sans,sans-serif;
            line-height: 25px;
            height: 25px;
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 0.85rem;
            color: #c3c3c3;

            &:hover {
                background-color: #404040;
                color: #ddd;
            }

        }
    }

    footer {
        padding-bottom: 1rem;
    }

`
export const LeagueList = styled.div`
    overflow-y: scroll; 
    height:400px;

`

export const DateLinks = styled.div`
    min-width: 15rem;
    
    header{
        border-right: 1px solid #29292e;
        p{
            padding: 23px 20px 9px ;
            margin-top: 0;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            line-height: 13px;
            font-size: 0.85rem;
            color: #2ec193;
            font-weight: 700;
        }
    }

    ul{
        list-style: none;            
        padding-left: 20px;
        box-sizing: border-box;
        display: block;
        border-right: 1px solid #29292e;

        li{
            font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Segoe UI,Tahoma,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Open Sans,sans-serif;
            line-height: 25px;
            height: 25px;
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 0.85rem;
            color: #c3c3c3;

            &:hover {
                background-color: #404040;
                color: #ddd;
            }

        }
    }
`;

