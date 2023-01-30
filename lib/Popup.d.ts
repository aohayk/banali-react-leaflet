import { EventedProps } from '@react-leaflet/core';
import { LatLngExpression, Popup as LeafletPopup, PopupOptions } from 'leaflet';
import { ReactNode } from 'react';
export interface PopupProps extends PopupOptions, EventedProps {
    children?: ReactNode;
    position?: LatLngExpression;
}
export declare const Popup: import("react").ForwardRefExoticComponent<PopupProps & import("react").RefAttributes<LeafletPopup>>;
