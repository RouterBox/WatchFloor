mytimer:stop()
ws2812.init()
buffer = ws2812.newBuffer(300, 3)
buffer:fill(0,20,150)
ws2812.write(buffer)

switch = 0
counter = 0

mytimer = tmr.create()
mytimer:register(350, tmr.ALARM_AUTO, function()
    
--[[
    if(switch == 1) then
        switch = 2;
    end
]]
    counter = counter + 1
    if(counter > 0 and counter < 80)then
        switch = 0
    end
    if(counter > 80)then
        switch = 2
    end

    if(counter > 160)then
        counter = 0
    end

    if(switch == 0) then
        buffer = ws2812.newBuffer(300, 3)
        buffer:fill(0, 125, 0)	
        --ws2812.write(buffer)
        switch = 1
    end
    if(switch == 2) then
        buffer = ws2812.newBuffer(300, 3)
        buffer:fill(0,0,125) 
        --ws2812.write(buffer)
        switch = 0
    end

    print("4th mash")
    for i=1, 30 do
        buffer:set(math.random(300), 0, 0, 125)
    end
    for i=21, 60 do
        buffer:set(math.random(300), 0,125,0) 
    end  
    for i=41, 90 do
        buffer:set(math.random(300), 125, 125, 125)    
    end  
    ws2812.write(buffer)

end) 
mytimer:start()
