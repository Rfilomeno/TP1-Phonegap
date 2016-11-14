var acelera = function onSuccess(acceleration) {
    $('xOut').text('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    $('xOut').text('onError!');
}

navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);