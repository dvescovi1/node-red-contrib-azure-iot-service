var Client = require('azure-iothub').Client;

module.exports = function (RED) {

	function directmethod(config) {

		RED.nodes.createNode(this, config);
		var node = this;
		var ready = false;
		var connectionString = node.credentials.connectionString;
		var deviceId = config.deviceId;
		var method = config.method;
		var reconnectTimeout = null;
		var serviceClient = null;

		// connection string is not valid. Stop the init & send an error
		if (!connectionString) {
			return node.error("Missing connectionString");
		}

		var cleanServiceClient = () => {
			if (serviceClient) {
				ready = false;
				serviceClient.removeAllListeners();
				serviceClient.close((err, res) => { });
				serviceClient = null;
			}
		}

		var disconnectHandler = () => {
			cleanServiceClient();
			node.status({ fill: "red", shape: "dot", text: "Disconnected" });
		}

		var connect = () => {
			if (reconnectTimeout) clearTimeout(reconnectTimeout);
			cleanServiceClient();
			node.status({ fill: "yellow", shape: "dot", text: "Connecting" });
			serviceClient = Client.fromConnectionString(connectionString);
			serviceClient.open(function (err) {
				if (err) {
					ready = false;
					node.error('Could not connect: ' + err.message);
					node.status({ fill: "red", shape: "dot", text: "Disconnected" });
					reconnectTimeout = setTimeout(connect, 4000);
				} else {
					ready = true;
					node.status({ fill: "green", shape: "dot", text: "Connected" });
					serviceClient.on('disconnect', function () {
						disconnectHandler(node);
						reconnectTimeout = setTimeout(connect, 4000);
					});
				}
			});
		}

		// connect on node startup
		connect();


		node.on("input", function (msg) {

			// Invoke method only in the case the node is up and running
			if (serviceClient && ready) {
				var methodParams = {
					methodName: method,
					payload: msg.payload,
					responseTimeoutInSeconds: 5 // set response timeout as 5 seconds
				  };
				  
				  node.status({ fill: "yellow", shape: "dot", text: "Sending" });
				  serviceClient.invokeDeviceMethod(deviceId, methodParams, function (error, result) {
					if (error) {
						node.status({ fill: "red", shape: "dot", text: "Error" });
						return node.send({ payload: { error: error, source: msg } });	
					}
					
					if (result){
						node.status({ fill: "green", shape: "dot", text: "Sent" });
						return node.send({ payload: { result: result.constructor.name, source: msg } });
					}

					node.status({ fill: "red", shape: "dot", text: "Error" });
					return node.send({ payload: { error: 'Unknown result', source: msg } });
				});
				
				return;

			}

			// notify the user if the node is not ready 
			if (!serviceClient) {
				node.status({ fill: "red", shape: "dot", text: "Not initialized" });
				return node.error('Iot service client not initialized');
			}
			if (!ready) {
				node.status({ fill: "red", shape: "dot", text: "Not ready" });
				return node.error('Iot service client not ready');
			}
		});

		node.on('close', function () {
			disconnectHandler();
		});
	};

	RED.nodes.registerType("directmethod", directmethod,
		{
			credentials: {
				connectionString: { type: "text" }
			}
		}
	);
}
