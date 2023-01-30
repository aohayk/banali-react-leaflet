import { FitBoundsOptions, LatLngBoundsExpression, Map as LeafletMap, MapOptions } from 'leaflet';
import React, { CSSProperties, ReactNode } from 'react';
export interface MapContainerProps extends MapOptions {
    bounds?: LatLngBoundsExpression;
    boundsOptions?: FitBoundsOptions;
    children?: ReactNode;
    className?: string;
    id?: string;
    placeholder?: ReactNode;
    style?: CSSProperties;
    whenReady?: () => void;
}
export declare const MapContainer: React.ForwardRefExoticComponent<MapContainerProps & React.RefAttributes<LeafletMap>>;
