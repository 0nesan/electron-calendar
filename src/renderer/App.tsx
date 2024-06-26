import React, { useEffect } from 'react';

interface ElectronAPI {
    send: (channel: string, data: any) => void;
    receive: (channel: string, func: (...args: any[]) => void) => void;
}

const App = () => {
    useEffect(() => {
        const { electron } = window as unknown as { electron: ElectronAPI };

        electron.receive('fromMain', (data) => {
            console.log(data);
        });
    }, []);

    const sendMessage = () => {
        const { electron } = window as unknown as { electron: ElectronAPI };
        electron.send('toMain', 'Hello from React!');
    };

    return (
        <div>
            <h1>project</h1>
            <button onClick={sendMessage}>Send Message to Main</button>
        </div>
    );
};

export default App;