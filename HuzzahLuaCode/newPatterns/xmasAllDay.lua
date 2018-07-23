ws2812.init()
buffer = ws2812.newBuffer(300, 3)
buffer:fill(0,255,0)
for lights = 1, 300 do
    if(lights % 20 > 10)then
        buffer:set(lights, 255,0,0) --v
    end
end    
ws2812.write(buffer)

mytimer = tmr.create()
mytimer:register(84, tmr.ALARM_AUTO, function()
   buffer:shift(1, ws2812.SHIFT_CIRCULAR)
   ws2812.write(buffer)
end) 
mytimer:start()
