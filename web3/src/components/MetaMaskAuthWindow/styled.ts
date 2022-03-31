import styled from "styled-components";

export const Container = styled.div`
    &{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        max-width: 60%;
        background-color: gray;
    }
`

export const Adress = styled.span`
    &{
        margin-bottom: 1rem;
        font-weight: 600;
    }
`

export const GetAdressButton = styled.button`
    &{
        width: fit-content;
        padding: 0.5rem;
        background-color: orange;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        transition: .5s;
        cursor: pointer;
        }

    &:hover{
        background-color: orangered;
    }
`