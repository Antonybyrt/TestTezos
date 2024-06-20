import { useConnect, useDisconnect, useIsConnected } from '../contexts/beacon';
import { useTezosToolkit } from '../contexts/Taquito';
import { UnitValue } from '@taquito/taquito';

function Visit() {

    const contractAddress = "KT1DJFkky5RmqWETrC5tPoJZpKyovAn9kooR";

    const tezos = useTezosToolkit();

    const connect = useConnect();
    const disconnect = useDisconnect();
    const isConnected = useIsConnected();


    const visit = async () => {
        if (!isConnected()) {
            await connect();
        }
        try {
            const contract = await tezos.wallet.at(contractAddress);
            const operation = await contract.methodsObject.visit(UnitValue).send({ amount: 1 });
            console.log('waiting for' + operation.opHash + 'to be confirmed');
            await operation.receipt();
        } catch (error:any) {
            alert(`Erreur: ${error.message}`);
        }
        
    }

    return (
        <div>
            <button onClick={visit}>VISIT</button>
        </div>
    );
}

export default Visit;