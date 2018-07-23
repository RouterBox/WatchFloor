myMQTT:subscribe("wiimote/motion", 0, function(conn) print("subscribe success") end)
myMQTT:subscribe(thingNumber.."#", 0, function(conn) print("subscribe success") end)

ws2812.init()
mytimer = tmr.create()
buffer = ws2812.newBuffer(300, 3)
myMQTT:on("message", function(client, topic, data) 
    print(topic)
    print(data)
    if not (topic == thingNumber.."bullet")then 
        mytimer:unregister()
    end
  if(topic == "wiimote/motion")then
    print(data)
    lightValues = cjson.decode(data)
    buffer = ws2812.newBuffer(300, 3)
    red = lightValues["red"]
    green = lightValues["green"]
    blue = lightValues["blue"]
    buffer:fill(green, red, blue)
    print("------------")
    ws2812.write(buffer)
  end
  if(topic == thingNumber.."wipeToColor")then
    wipeToAColor(data)
  end
  if(topic == thingNumber.."randomColorWipes")then
    randomColorWipes()
  end
  if(topic == thingNumber.."floorHeight")then
    rowNumber = tonumber(data)
    buffer = ws2812.newBuffer(300, 3)
    for lightnum=1, 300 do
        if (rowIndex[lightnum] <= rowNumber) then
            buffer:set(lightnum, green, red, blue) 
        end
        if (rowIndex[lightnum] > rowNumber) then
            buffer:set(lightnum, blue, green, red) 
        end
   end   
   ws2812.write(buffer)
  end
  if(topic == thingNumber.."lights")then
    print(data)
    lightValues = cjson.decode(data)
    buffer = ws2812.newBuffer(300, 3)
    red = lightValues["red"]
    green = lightValues["green"]
    blue = lightValues["blue"]
    buffer:fill(green, red, blue)
    print("------------")
    ws2812.write(buffer)
  end
  if(topic == thingNumber.."ten")then
    print(data)
    lightValues = cjson.decode(data)

    num = lightValues["number"]
    red = lightValues["red"]
    green = lightValues["green"]
    blue = lightValues["blue"]
        
    subbuffer = ws2812.newBuffer(30, 3)
    
    subbuffer:fill(green, red, blue)
    
    pos = ((num-1)*30)+1
    buffer:replace(subbuffer, pos)

    ws2812.write(buffer)
  end
  if(topic == thingNumber.."bullet")then
    print(data)
    lightValues = cjson.decode(data)

    red = lightValues["red"]
    green = lightValues["green"]
    blue = lightValues["blue"]
        
    buffer:set(1, green,red,blue)
    buffer:set(2, green,red,blue)
    buffer:set(3, green,red,blue)
  end
  if(topic == thingNumber.."thirtyToOne")then
    print(data)
    subbuffer = ws2812.newBuffer(30, 3)

    msg = cjson.decode(data)
    num = msg["number"]
    lightValues = msg["lightValues"]
    
    for lights = 0, 29 do 
        thisLight = lights*3
        subbuffer:set(lights+1, lightValues[thisLight+1],lightValues[thisLight+2],lightValues[thisLight+3])
    end
    
    pos = ((num-1)*30)+1
    buffer:replace(subbuffer, pos)
    ws2812.write(buffer)

  end
  if(topic == thingNumber.."turboRainbow")then
    dofile("TurboRainbow.lua")
  end
  if(topic == thingNumber.."whiteTrain")then
    dofile("whiteTrain.lua")
  end
  if(topic == thingNumber.."nyanCat")then
    dofile("doLights.lua")
  end
  if(topic == thingNumber.."tenRotate")then
    dofile("tenRotate.lua")
  end
  if(topic == thingNumber.."slideAway")then
    dofile("slideAway.lua")
  end  
  if(topic == thingNumber.."tuws2812.write(buffer)rnOffLights")then
    dofile("turnOffLights.lua")
  end
  if(topic == thingNumber.."turnOffLights")then
    dofile("turnOffLights.lua")
  end
  if(topic == thingNumber.."run")then
    dofile(data)
  end    
  if(topic == thingNumber.."update")then
    print("trying to update")
    print(data)
    updateDirections = cjson.decode(data)
    urlToGet = updateDirections["url"]
    fileNameToSaveTo = updateDirections["fileName"]
    http.get(urlToGet, nil, function(code, data)
        if (code < 0) then
          print("HTTP request failed")
        end
        if(code == 200) then
          file.open(fileNameToSaveTo, "w+")
          file.write(data)
          file.close()
          print("update complete")
          dofile(fileNameToSaveTo)
        end  
    end)
   end 
end)  
myMQTT:on("connect", function(client) print ("connected") end)
myMQTT:on("offline", function(client) print ("offline") end)
