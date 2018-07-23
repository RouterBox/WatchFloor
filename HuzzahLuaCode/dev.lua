mytimer:stop();

print("do lights")
ws2812.init()
buffer = ws2812.newBuffer(30, 3)
buffer:fill(5, 5, 5)


--GRB
buffer:set(1, 0,51,51) --v

buffer:set(2, 0, 51, 153) --i
buffer:set(3, 0,0,255) --b
buffer:set(4, 255,0,0) --g
buffer:set(5, 255,255,0) --y
buffer:set(6, 51,204,0) --o
buffer:set(7, 0,255,0) --r
--[[
buffer:set(8, 0,51,51) --v
buffer:set(9, 0, 51, 153) --i
buffer:set(10, 0,0,255) --b
buffer:set(11, 255,0,0) --g
buffer:set(12, 255,255,0) --y
buffer:set(13, 51,204,0) --o
buffer:set(14, 0,255,0) --r
--]]

ws2812.write(buffer)

mytimer = tmr.create()
mytimer:register(80, tmr.ALARM_AUTO, function()
   print("loop")
   buffer:shift(1, ws2812.SHIFT_CIRCULAR)
   ws2812.write(buffer)
end) 
mytimer:start()