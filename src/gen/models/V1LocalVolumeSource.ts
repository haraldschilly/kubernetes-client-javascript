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
* Local represents directly-attached storage with node affinity (Beta feature)
*/
export class V1LocalVolumeSource {
    /**
    * Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default value is to auto-select a fileystem if unspecified.
    */
    'fsType'?: string;
    /**
    * The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
    */
    'path': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LocalVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

