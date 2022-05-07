/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V2ContainerResourceMetricStatus } from './V2ContainerResourceMetricStatus';
import { V2ExternalMetricStatus } from './V2ExternalMetricStatus';
import { V2ObjectMetricStatus } from './V2ObjectMetricStatus';
import { V2PodsMetricStatus } from './V2PodsMetricStatus';
import { V2ResourceMetricStatus } from './V2ResourceMetricStatus';
import { HttpFile } from '../http/http';

/**
* MetricStatus describes the last-read state of a single metric.
*/
export class V2MetricStatus {
    'containerResource'?: V2ContainerResourceMetricStatus;
    'external'?: V2ExternalMetricStatus;
    'object'?: V2ObjectMetricStatus;
    'pods'?: V2PodsMetricStatus;
    'resource'?: V2ResourceMetricStatus;
    /**
    * type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerResource",
            "baseName": "containerResource",
            "type": "V2ContainerResourceMetricStatus",
            "format": ""
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "V2ExternalMetricStatus",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "V2ObjectMetricStatus",
            "format": ""
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "V2PodsMetricStatus",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V2ResourceMetricStatus",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2MetricStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
