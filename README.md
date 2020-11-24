# Azure IoT Service Node-RED node
The Azure IoT Service Node-RED node is a node that can be used to connect Node-RED to the Azure IoT platform. The node has been developed using the [Azure IoT Node.js SDK](https://github.com/Azure/azure-iot-sdk-node/).

The Azure IoT Service node represents a **single device** on the Azure IoT platform. 

> NB: It is our assumption that you have a basic understanding of [Node-RED](https://nodered.org/) and the [Azure IoT platform](https://azure.microsoft.com/en-us/product-categories/iot/).

## Deploy the Azure Device node
In the [deploy](https://github.com/iotblackbelt/node-red-contrib-azure-iot-device/blob/master/DEPLOY.md) document we describe how to deploy the node to Node-RED.

## Configure an Azure IoT Device node
In the [configure](https://github.com/iotblackbelt/node-red-contrib-azure-iot-device/blob/master/CONFIGURE.md) document we describe how to setup an individual Azure IoT Device node.

## Use an Azure IoT Device node
In the [use](https://github.com/iotblackbelt/node-red-contrib-azure-iot-device/blob/master/USE.md) document we describe how to use the Azure IoT Device node to interact with the Azure IoT platform.
- sending telemetry
- receiving and responding to commands
- receiving desired properties
- updating reported properties
- receiving C2D messages

## Future plans for development
It is our intention to add the following features to the Azure IoT Device Node-RED node:
* Full [Azure IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp/overview-iot-plug-and-play) support.