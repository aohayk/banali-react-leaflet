/// <reference types="react" />
import { PathProps } from 'banali-core';
import type { GeoJsonObject } from 'geojson';
import { GeoJSON as LeafletGeoJSON, GeoJSONOptions } from 'leaflet';
import type { LayerGroupProps } from './LayerGroup.js';
export interface GeoJSONProps extends GeoJSONOptions, LayerGroupProps, PathProps {
    data: GeoJsonObject;
}
export declare const GeoJSON: import("react").ForwardRefExoticComponent<GeoJSONProps & import("react").RefAttributes<LeafletGeoJSON<any>>>;
