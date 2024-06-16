import { useConnect, useDisconnect, useIsConnected } from '../contexts/beacon';
import { useTezosToolkit } from '../contexts/Taquito';

function Register() {

    const contractAddress = "KT1DJFkky5RmqWETrC5tPoJZpKyovAn9kooR";

    const tezos = useTezosToolkit();

    const connect = useConnect();
    const disconnect = useDisconnect();
    const isConnected = useIsConnected();


    const register = async () => {
        if (!isConnected()) {
            await connect();
        }
        const contract = await tezos.wallet.at(contractAddress);
        const operation = await contract.methodsObject.register().send();
        console.log('waiting for' + operation.opHash + 'to be confirmed');
        await operation.receipt();
    }

    return (
        <div>
            <button onClick={register}>REGISTER</button>
        </div>
    );
}

export default Register;