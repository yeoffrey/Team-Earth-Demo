/*
This code contains the functionality to connect to bluetooth through the browser.
The feature was wizard of oz'd but the commented code should prompt the user to connect a device.
*/

import React, { useState } from 'react';

function BluetoothButton() {
  const [device, setDevice] = useState(null);

  /* Method for connecting to a device */
  const connectToDevice = async () => {
    // Actual working bluetooth.
    // try {
    //   const options = { filters: [{ services: ['battery_service'] }] };
    //   const device = await navigator.bluetooth.requestDevice(options);
    //   setDevice(device);
    //   const server = await device.gatt.connect();
    //   const service = await server.getPrimaryService('battery_service');
    //   const characteristic = await service.getCharacteristic('battery_level');
    //   const value = await characteristic.readValue();
    //   console.log(`Battery level: ${value.getUint8(0)}%`);
    // } catch (error) {
    //   console.error(error);
    // }

    // Wizard of Oz
    setDevice("hexiwear");

  };

  return (
    <button className="btn btn-primary" onClick={connectToDevice}>
      {device ? 'Connected' : 'Connect to Bluetooth'}
    </button>
  );
}

export default BluetoothButton;
