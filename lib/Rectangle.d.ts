import { PathProps } from 'banali-core';
import { LatLngBoundsExpression, Rectangle as LeafletRectangle, PathOptions } from 'leaflet';
import type { ReactNode } from 'react';
export interface RectangleProps extends PathOptions, PathProps {
    bounds: LatLngBoundsExpression;
    children?: ReactNode;
}
export declare const Rectangle: import("react").ForwardRefExoticComponent<RectangleProps & import("react").RefAttributes<LeafletRectangle<any>>>;
