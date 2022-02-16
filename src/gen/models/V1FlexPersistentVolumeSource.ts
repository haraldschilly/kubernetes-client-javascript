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
* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
*/
export class V1FlexPersistentVolumeSource {
    /**
    * Driver is the name of the driver to use for this volume.
    */
    'driver': string;
    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
    */
    'fsType'?: string;
    /**
    * Optional: Extra command options if any.
    */
    'options'?: { [key: string]: string; };
    /**
    * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef'?: V1SecretReference;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "options",
            "baseName": "options",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1SecretReference",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1FlexPersistentVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

