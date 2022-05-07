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

import { V1LabelSelector } from './V1LabelSelector';
import { V2beta1CrossVersionObjectReference } from './V2beta1CrossVersionObjectReference';
import { HttpFile } from '../http/http';

/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
export class V2beta1ObjectMetricStatus {
    /**
    * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
    */
    'averageValue'?: string;
    /**
    * currentValue is the current value of the metric (as a quantity).
    */
    'currentValue': string;
    /**
    * metricName is the name of the metric in question.
    */
    'metricName': string;
    'selector'?: V1LabelSelector;
    'target': V2beta1CrossVersionObjectReference;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "averageValue",
            "baseName": "averageValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "currentValue",
            "baseName": "currentValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "metricName",
            "baseName": "metricName",
            "type": "string",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "V1LabelSelector",
            "format": ""
        },
        {
            "name": "target",
            "baseName": "target",
            "type": "V2beta1CrossVersionObjectReference",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2beta1ObjectMetricStatus.attributeTypeMap;
    }

    public constructor() {
    }
}
