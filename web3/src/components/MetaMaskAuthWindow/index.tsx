import React, {useState, useEffect} from "react";
import {Container, Adress, GetAdressButton} from './styled'
import Web3 from "web3";

const AdressComponent: React.FC = () => {
    const [metamaskAdress, setMetamaskAdress] = useState('')

    function checkWalletIsConnected(){

    }

    async function connectMetaMask(setter: React.SetStateAction<string>) {
        if(!window.ethereum){
            alert('Metamask is not installed')
            return 
        }
        
        const accounts:  = await window.ethereum.request({
            method: "eth_requestAccounts"
        })

        setter(accounts[0])
    }

    function onAdressChanged(){

    }

    useEffect(checkWalletIsConnected,[

    ])

    useEffect(onAdressChanged, [metamaskAdress])

    return(
        <Container>
            <Adress>
                {metamaskAdress}
            </Adress>
            <GetAdressButton onClick={()=>{
                connectMetaMask() 
                console.log('123')
                }}>
                Metamask
            </GetAdressButton>
        </Container>
    )
}

export {AdressComponent}