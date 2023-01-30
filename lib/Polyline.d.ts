import { PathProps } from 'banali-core';
import { LatLngExpression, Polyline as LeafletPolyline, PolylineOptions } from 'leaflet';
import type { ReactNode } from 'react';
export interface PolylineProps extends PolylineOptions, PathProps {
    children?: ReactNode;
    positions: LatLngExpression[] | LatLngExpression[][];
}
export declare const Polyline: import("react").ForwardRefExoticComponent<PolylineProps & import("react").RefAttributes<LeafletPolyline<import("geojson").LineString | import("geojson").MultiLineString, any>>>;
