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

import { HttpFile } from '../http/http';

/**
* Overhead structure represents the resource overhead associated with running a pod.
*/
export class V1Overhead {
    /**
    * PodFixed represents the fixed resource overhead associated with running a pod.
    */
    'podFixed'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "podFixed",
            "baseName": "podFixed",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1Overhead.attributeTypeMap;
    }

    public constructor() {
    }
}

