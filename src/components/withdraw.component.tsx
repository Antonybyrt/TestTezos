import { useConnect, useDisconnect, useIsConnected } from '../contexts/beacon';
import { useTezosToolkit } from '../contexts/Taquito';

function Withdraw() {

    const contractAddress = "KT1DJFkky5RmqWETrC5tPoJZpKyovAn9kooR";
    const tezos = useTezosToolkit();

    const connect = useConnect();
    const disconnect = useDisconnect();
    const isConnected = useIsConnected();


    const withdraw = async () => {
        if (!isConnected()) {
            await connect();
        }
        try {
            const contract = await tezos.wallet.at(contractAddress);
            const operation = await contract.methodsObject.withdraw().send();
            console.log('waiting for' + operation.opHash + 'to be confirmed');
            await operation.receipt();
        } catch (error:any) {
            alert(`Erreur: ${error.message}`);
        }
        
    }

    return (
        <div>
            <button onClick={withdraw}>WITHDRAW</button>
        </div>
    );
}

export default Withdraw;