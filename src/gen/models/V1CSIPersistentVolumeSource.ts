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

import { V1SecretReference } from './V1SecretReference';
import { HttpFile } from '../http/http';

/**
* Represents storage that is managed by an external CSI volume driver (Beta feature)
*/
export class V1CSIPersistentVolumeSource {
    'controllerExpandSecretRef'?: V1SecretReference;
    'controllerPublishSecretRef'?: V1SecretReference;
    /**
    * Driver is the name of the driver to use for this volume. Required.
    */
    'driver': string;
    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\".
    */
    'fsType'?: string;
    'nodePublishSecretRef'?: V1SecretReference;
    'nodeStageSecretRef'?: V1SecretReference;
    /**
    * Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
    */
    'readOnly'?: boolean;
    /**
    * Attributes of the volume to publish.
    */
    'volumeAttributes'?: { [key: string]: string; };
    /**
    * VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
    */
    'volumeHandle': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "controllerExpandSecretRef",
            "baseName": "controllerExpandSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "controllerPublishSecretRef",
            "baseName": "controllerPublishSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string",
            "format": ""
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodePublishSecretRef",
            "baseName": "nodePublishSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "nodeStageSecretRef",
            "baseName": "nodeStageSecretRef",
            "type": "V1SecretReference",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeAttributes",
            "baseName": "volumeAttributes",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "volumeHandle",
            "baseName": "volumeHandle",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1CSIPersistentVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

