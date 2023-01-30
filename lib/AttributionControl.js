import { createControlComponent } from 'banali-core';
import { Control } from 'leaflet';
export const AttributionControl = createControlComponent(function createAttributionControl(props) {
    return new Control.Attribution(props);
});
