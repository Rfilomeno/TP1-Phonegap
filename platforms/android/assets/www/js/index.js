
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.mensagem = {};
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('online', this.onOnline, false);
        document.addEventListener('offline',this.onOffline, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    
        onDeviceReady: function() {
        
        app.receivedEvent('deviceready');
            //teste
        app.receivedEvent2('deviceready');
        
         $('#modelo').text(device.model);
         $('#plataforma').text(device.platform);
         $('#versao').text(device.version);
         $('#fabricante').text(device.manufacturer);
         $('#serial').text(device.serial);
         $('#cordova').text(device.cordova);

        function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Desconhecido';
        states[Connection.ETHERNET] = 'via rede Ethernet';
        states[Connection.WIFI]     = 'WiFi';
        states[Connection.CELL_2G]  = '2G';
        states[Connection.CELL_3G]  = '3G';
        states[Connection.CELL_4G]  = '4G';
        states[Connection.CELL]     = 'conexão generica';
        states[Connection.NONE]     = 'sem conexão';

        $('#conexao').text(states[networkState]);
        };

    checkConnection();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        $('.vibra').click(function(){
            Materialize.toast("vibrou", 2000);
            navigator.vibrate(500);
        }),
            
        function(){
            
            
        }
        
        window.addEventListener("batterystatus", onBatteryStatus, false);

        function onBatteryStatus(status) {
            document.getElementById("carga").innerHTML = status.level;
            if (status.isPlugged == true){
            document.getElementById("conectado").innerHTML = "está";
            } else {
                document.getElementById("conectado").innerHTML = "não está";
                
            }
        }
        window.addEventListener("batterylow", onBatteryLow, false);

        function onBatteryLow(status) {
        Materialize.toast("Bateria baixa: " + status.level + "%", 2000);
        }
        window.addEventListener("batterycritical", onBatteryCritical, false);

        function onBatteryCritical(status) {
        Materialize.toast("Bateria PÉSSIMA: " + status.level + "% recarregue o aparelho!", 2000);
}
    },
    
    receivedEvent2: function(id){
        function onSuccess(acceleration) {
            var marginLeft=acceleration.x*40 -10;
            var marginTop=acceleration.y*40 -10;
            $('#xOut').text(acceleration.x);
            $('#yOut').text(acceleration.y);
            $('#zOut').text(acceleration.z);
            document.getElementById('acelerador').innerHTML = '<a style="margin-left: '+ marginLeft +
                        'px; margin-top:'+marginTop+'px;" class="btnAcell btn-floating btn-large waves-effect waves-light blue"><img src="icons/ic_sentiment_very_satisfied_white_24dp/android/drawable-xhdpi/ic_sentiment_very_satisfied_white_24dp.png"/></a>';
            
            
            
           
                   
}

function onError() {
    alert('onError!');
}
var options = { frequency: 500 };  // Update every 0.5 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }
};

$("#btmenuacell").click(function(){
    $('#ace').click();    
});
$("#btmenubat").click(function(){
    $('#bat').click();    
});
$("#btmenusis").click(function(){
    $('#sis').click();    
});
    


