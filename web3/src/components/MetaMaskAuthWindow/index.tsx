import React, {useState} from "react";
import {Container, Adress, GetAdressButton} from './styled'


const AdressComponent: React.FC = () => {
    const [metamaskAdress, setMetamaskAdress] = useState('')

    async function connectMetaMask() {
        if(!window.ethereum){
            alert('Metamask is not installed')
            return 
        }
        
        console.log('Metamask is installed. Waiting for acconts list.')

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })


        if(Array.isArray(accounts) && accounts){
            setMetamaskAdress(accounts[0])
        }
    }


    return(
        <Container>
            <Adress>
                {metamaskAdress ? metamaskAdress : 'MetaMask is locked - please login'}
            </Adress>
            <GetAdressButton onClick={()=>{
                connectMetaMask()
                }}>
                Get public key
            </GetAdressButton>
        </Container>
    )
}

export {AdressComponent}