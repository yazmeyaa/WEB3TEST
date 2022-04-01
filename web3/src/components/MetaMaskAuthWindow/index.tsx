import React, {useState, useEffect} from "react";
import {Container, Adress, GetAdressButton} from './styled'
import { Maybe } from "@metamask/providers/dist/utils";


const AdressComponent: React.FC = () => {
    const [metamaskAdress, setMetamaskAdress] = useState('')

    function checkWalletIsConnected(){

    }

    async function connectMetaMask() {
        if(!window.ethereum){
            alert('Metamask is not installed')
            return 
        }
        
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })

        if(Array.isArray(accounts) && accounts){
            setMetamaskAdress(accounts[0])
        }
    }

    function onAdressChanged(){

    }

    useEffect(checkWalletIsConnected,[

    ])

    useEffect(onAdressChanged, [metamaskAdress])

    return(
        <Container>
            <Adress>
                {metamaskAdress && <span>{metamaskAdress}</span>}
            </Adress>
            <GetAdressButton onClick={()=>{
                connectMetaMask()
                }}>
                Metamask
            </GetAdressButton>
        </Container>
    )
}

export {AdressComponent}