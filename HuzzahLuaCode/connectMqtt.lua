myMsg = "helloFromESP8266"
myTopic = "mark/button"
thingNumber = "huzzah6"
myMQTT = mqtt.Client("huzzah6", 12000)
myMQTT:connect("192.168.1.100", 1883, 0, function(conn) 
    print("connected to mqtt")
    dofile("subscribeMqtt.lua")
    dofile("doLights.lua")
end) 
