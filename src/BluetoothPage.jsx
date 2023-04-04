import React, { useState } from 'react';

function BluetoothScreen() {
  const [device, setDevice] = useState(null);

  const connectToDevice = async () => {
    try {
      const options = { filters: [{ services: ['battery_service'] }] };
      const device = await navigator.bluetooth.requestDevice(options);
      setDevice(device);
      const server = await device.gatt.connect();
      const service = await server.getPrimaryService('battery_service');
      const characteristic = await service.getCharacteristic('battery_level');
      const value = await characteristic.readValue();
      console.log(`Battery level: ${value.getUint8(0)}%`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {device ? (
        <p>Connected to {device.name}</p>
      ) : (
        <button onClick={connectToDevice}>Connect to Bluetooth</button>
      )}
    </div>
  );
}

export default BluetoothScreen;
