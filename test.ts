/**
 * IR tests
 */

makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC);
makerbit.onIrButton(IrButton.Add, IrButtonAction.Pressed, () => {});
makerbit.onIrButton(IrButton.CH, IrButtonAction.Released, () => {});
makerbit.onIrDatagram(() => {});
const received: boolean = makerbit.wasIrDataReceived();
const button: number = makerbit.irButton();
const datagram: string = makerbit.irDatagram();
const buttonCode: number = makerbit.irButtonCode(IrButton.Number_9);
