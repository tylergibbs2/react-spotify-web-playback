import * as React from 'react';
import { StylesOptions } from '../types/common';
import { SpotifyDevice } from '../types/spotify';
interface Props {
    currentDeviceId?: string;
    deviceId?: string;
    devices: SpotifyDevice[];
    onClickDevice: (deviceId: string) => any;
    open: boolean;
    playerPosition: string;
    styles: StylesOptions;
}
export interface State {
    isOpen: boolean;
}
export default class Devices extends React.PureComponent<Props, State> {
    constructor(props: Props);
    private handleClickSetDevice;
    private handleClickToggleDevices;
    render(): JSX.Element;
}
export {};
