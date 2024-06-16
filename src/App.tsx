import React from 'react';
import './App.css';
import { SettingsProvider } from './contexts/Settings';
import { TaquitoProvider } from './contexts/Taquito';
import { BeaconProvider } from './contexts/beacon';
import { ContractProvider } from './contexts/Contract';
import Register from './components/register.component';
import Visit from './components/visit.component';
import Withdraw from './components/withdraw.component';
import tezosLogo from './logo.svg'; 

function App() {
  return (
    <SettingsProvider>
      <TaquitoProvider>
        <BeaconProvider>
          <ContractProvider>
            <div className="App">
              <header className="App-header">
                <img src={tezosLogo} className="App-logo" alt="Tezos logo" />
                <h1>Exemple d'intéraction avec un smart contract sur le testnet de Tezos.</h1>
                <div className="App-content">
                  <Register />
                  <Visit />
                  <Withdraw />
                </div>
              </header>
            </div>
          </ContractProvider>
        </BeaconProvider>
      </TaquitoProvider>
    </SettingsProvider>
  );
}

export default App;
