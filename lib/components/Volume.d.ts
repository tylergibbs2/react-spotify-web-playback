import * as React from 'react';
import { StylesOptions } from '../types/common';
interface Props {
    playerPosition: string;
    setVolume: (volume: number) => any;
    styles: StylesOptions;
    volume: number;
}
interface State {
    isOpen: boolean;
    volume: number;
}
export default class Volume extends React.PureComponent<Props, State> {
    private timeout;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    private handleClick;
    private handleChangeSlider;
    private handleAfterEnd;
    render(): JSX.Element;
}
export {};
