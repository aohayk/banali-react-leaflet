import { EventedProps } from 'banali-core';
import { LatLngExpression, Tooltip as LeafletTooltip, TooltipOptions } from 'leaflet';
import { ReactNode } from 'react';
export interface TooltipProps extends TooltipOptions, EventedProps {
    children?: ReactNode;
    position?: LatLngExpression;
}
export declare const Tooltip: import("react").ForwardRefExoticComponent<TooltipProps & import("react").RefAttributes<LeafletTooltip>>;
