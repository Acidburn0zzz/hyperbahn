// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

module.exports = DiscoveryBridge;

function DiscoveryBridge(discoveryWorker) {
    if (!(this instanceof DiscoveryBridge)) {
        return new DiscoveryBridge(discoveryWorker);
    }

    var self = this;

    self._discoveryWorker = discoveryWorker;
}

DiscoveryBridge.prototype.createLogger =
function createLogger() {
    var self = this;

    return self._discoveryWorker.logger;
};

DiscoveryBridge.prototype.createBatchStats =
function createBatchStats() {
    var self = this;

    return self._discoveryWorker.clients.batchStats;
};

DiscoveryBridge.prototype.unsafeIsExitFor =
function unsafeIsExitFor(serviceName) {
    var self = this;

    return self._discoveryWorker.serviceProxy.egressNodes.isExitFor(serviceName);
};

DiscoveryBridge.prototype.unsafeExitsFor =
function unsafeExitsFor(serviceName) {
    var self = this;

    return self._discoveryWorker.serviceProxy.egressNodes.exitsFor(serviceName);
};

DiscoveryBridge.prototype.unsafeGetServicePeer =
function unsafeGetServicePeer(serviceChannel, hostPort) {
    var self = this;

    return self._discoveryWorker.serviceProxy._getServicePeer(serviceChannel, hostPort);
}
