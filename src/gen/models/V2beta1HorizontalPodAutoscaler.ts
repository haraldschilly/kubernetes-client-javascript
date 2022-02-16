/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ObjectMeta } from './V1ObjectMeta';
import { V2beta1HorizontalPodAutoscalerSpec } from './V2beta1HorizontalPodAutoscalerSpec';
import { V2beta1HorizontalPodAutoscalerStatus } from './V2beta1HorizontalPodAutoscalerStatus';
import { HttpFile } from '../http/http';

/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
*/
export class V2beta1HorizontalPodAutoscaler {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V2beta1HorizontalPodAutoscalerSpec;
    'status'?: V2beta1HorizontalPodAutoscalerStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V2beta1HorizontalPodAutoscalerSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V2beta1HorizontalPodAutoscalerStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2beta1HorizontalPodAutoscaler.attributeTypeMap;
    }

    public constructor() {
    }
}

