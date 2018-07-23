local TableConcat = function(t1,t2)
    for i=1,#t2 do
        t1[#t1+1] = t2[i]
    end
    return t1
end

wipeToAColor = function(data)
     lightValues = cjson.decode(data)
    
    red = lightValues["red"]
    green = lightValues["green"]
    blue = lightValues["blue"]
    rowNumber = 1
    
    ws2812.init()
    --Bbuffer = ws2812.newBuffer(300, 3)
    
    for lightnum=1, 300 do
        if (rowIndex[lightnum] <= rowNumber) then
            buffer:set(lightnum, green, red, blue) 
        end
    end
    ws2812.write(buffer)
    
    mytimer = tmr.create()
    mytimer:register(80, tmr.ALARM_AUTO, function()
        print("wipeToColorLoop")
        rowNumber = rowNumber + 1
        if(rowNumber > 90)then 
            mytimer:stop()
        end
        for lightnum=1, 300 do
            if (rowIndex[lightnum] <= rowNumber) then
                buffer:set(lightnum, green, red, blue) 
            end
       end     
       ws2812.write(buffer)
    end) 
    mytimer:start()
end

randomColorWipes = function()
    rowNumber = 1
    ws2812.init()
    --buffer = ws2812.newBuffer(300, 3)
    
    randomNumberUpToTen = math.random(10)
    
    if(randomNumberUpToTen % 10 == 0)then
        red = 51
        green = 0
        blue = 51
        --v
    end
    if(randomNumberUpToTen % 10 == 1)then
        green = 0
        red = 51
        blue = 153
        --i
    end
    if(randomNumberUpToTen % 10 == 2)then
        green = 0
        red = 00
        blue = 255
        --b
    end
    if(randomNumberUpToTen % 10 == 3)then
        green = 255
        red = 0
        blue = 0
         --g
    end
    if(randomNumberUpToTen % 10 == 4)then
        green = 255
        red = 255
        blue = 0
        --y
    end
    if(randomNumberUpToTen % 10 == 5)then
        green = 51
        red = 204
        blue = 0
        --o
    end
    if(randomNumberUpToTen % 10 == 6)then
        green = 0
        red = 255
        blue = 0
        --r
    end
    if(randomNumberUpToTen % 10 == 7)then
        green = 0
        red = 10
        blue = 10
        --r
    end
    if(randomNumberUpToTen % 10 == 8)then
        green = 69
        red = 142
        blue = 133
        --r
    end
    if(randomNumberUpToTen % 10 == 9)then
        green = 0
        red = 0
        blue = 128
        --r
    end
    
    
    for lightnum=1, 300 do
        if (rowIndex[lightnum] <= rowNumber) then
            buffer:set(lightnum, green, red, blue) 
        end
    end
    ws2812.write(buffer)
    
    mytimer = tmr.create()
    mytimer:register(80, tmr.ALARM_AUTO, function()
        print("wipeToColorLoop")
        rowNumber = rowNumber + 1
        for lightnum=1, 300 do
            if (rowIndex[lightnum] <= rowNumber) then
                buffer:set(lightnum, green, red, blue) 
            end
       end    
       if(rowNumber > 90)then 
            mytimer:stop()
            randomColorWipes()
        end 
       ws2812.write(buffer)
    end) 
    mytimer:start()
end

array1 = {1,1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,9,8,7,6,5,4,3,2,1,1,1,1,10,10}
array2 = {11,12,13,14,15,16,17,18,19,19,19,19,19,19,19,19,18,17,16,15,14,13,12,11,10}
array3 = {10,10,10,19,19,20,21,22,23,24,25,26,27,28,28,28,28,28,28,28,28,27,26,25,24}
array4 = {23,22,21,20,19,19,19,19,28,28,29,30,31,32,33,34,35,36,37,37,37,37,37,37,37}
array5 = {37,36,35,34,33,32,31,30,29,28,28,28,28,37,37,38,39,40,41,42,43,44,45,46,46}
array6 = {46,46,46,46,46,46,45,44,43,42,41,40,39,38,37,37,37,37,46,46,47,48,49,50,51}
array7 = {52,53,54,55,55,55,55,55,55,55,55,54,53,52,51,50,49,48,47,46,46,46,46,55,55}
array8 = {56,57,58,59,60,61,62,63,64,64,64,64,64,64,64,64,63,62,61,60,59,58,57,56,55}
array9 = {55,55,55,64,64,65,66,67,68,69,70,71,72,73,73,73,73,73,73,73,73,72,71,70,69}
array10 = {68,67,66,65,64,64,64,64,73,73,74,75,76,77,78,79,80,81,82,82,82,82,82,82,82}
array11 = {82,81,80,79,78,77,76,75,74,73,73,73,73,82,82,83,84,85,86,87,88,89,90,91,91}
array12 = {91,91,91,91,91,91,90,89,88,87,86,85,84,83,82,82,82,82}
 
rowIndex = {}
rowIndex = TableConcat(array1, array2);
array1 = nil
array2 = nil
rowIndex = TableConcat(rowIndex, array3);
array3 = nil
rowIndex = TableConcat(rowIndex, array4);
array4 = nil
rowIndex = TableConcat(rowIndex, array5);
array5 = nil
rowIndex = TableConcat(rowIndex, array6);
array6 = nil
rowIndex = TableConcat(rowIndex, array7);
array7 = nil
rowIndex = TableConcat(rowIndex, array8);
array8 = nil
rowIndex = TableConcat(rowIndex, array9); 
array9 = nil
rowIndex = TableConcat(rowIndex, array10);
array10 = nil
rowIndex = TableConcat(rowIndex, array11);
array11 = nil
rowIndex = TableConcat(rowIndex, array12);
array12 = nil
