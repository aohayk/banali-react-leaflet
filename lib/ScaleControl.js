import { createControlComponent } from 'banali-core';
import { Control } from 'leaflet';
export const ScaleControl = createControlComponent(function createScaleControl(props) {
    return new Control.Scale(props);
});
