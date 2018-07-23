myMsg = "helloFromESP8266"
myTopic = "mark/button"
thingNumber = "huzzah2/"
myMQTT = mqtt.Client("huzzah2", 12000)
myMQTT:connect("192.168.0.123", 1883, 0, function(conn) 
    print("connected to mqtt")
    dofile("buildRowIndex.lc")
    dofile("subscribeMqtt.lua")
    dofile("doLights.lua")
end) 
