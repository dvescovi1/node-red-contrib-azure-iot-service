# Azure IoT Service Node-RED node
The Azure IoT Service Node-RED node is a node that can be used to connect Node-RED to the Azure IoT platform. The node has been developed using the [Azure IoT Node.js SDK](https://github.com/Azure/azure-iot-sdk-node/).

The Azure IoT Service node represents a **single IoT hub service** on the Azure IoT platform. 

> NB: It is our assumption that you have a basic understanding of [Node-RED](https://nodered.org/) and the [Azure IoT platform](https://azure.microsoft.com/en-us/product-categories/iot/).

## Deploy the Azure IoT hub service node
In the [deploy](https://github.com/dvescovi1/node-red-contrib-azure-iot-service/blob/master/DEPLOY.md) document we describe how to deploy the node to Node-RED.

## Configure an Azure IoT hub service node
In the [configure](https://github.com/dvescovi1/node-red-contrib-azure-iot-device/blob/master/CONFIGURE.md) document we describe how to setup an individual Azure IoT hub service node.

## Use an Azure IoT hub service node
In the [use](https://github.com/dvescovi1/node-red-contrib-azure-iot-service/blob/master/USE.md) document we describe how to use the Azure IoT hub service node to interact with the Azure IoT platform.
- invoke Direct Methods on a device
- receiving telemetry from a device
- send C2D messages

## Future plans for development
It is our intention to add the following features to the Azure IoT Device Node-RED node:
* Full [Azure IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp/overview-iot-plug-and-play) support.