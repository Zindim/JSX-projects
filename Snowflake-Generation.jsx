//projekto kurimas ir uzdarymo pageidavimai
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();

//pradiniai kompozicijos parametrai

var compW = null;
	var compH = null;
	var compA = 1;
	var compD= null;
	var compFPS = 25;

//ivestu kompozicijos parametru tikrinimas

while ((compW == null) || (isNaN(compW)) || (compW % 1 !==0) || (compW < 4) || (compW > 30000)){
	var compW = prompt("Enter composition width",1920);
	if ((compW == null) || (isNaN(compW)) || (compW % 1 !==0) || (compW < 4) || (compW > 30000)){
		alert("Please enter an INTEGER in range 4...30000");
	}
}
while ((compH == null) || (isNaN(compH)) || (compH % 1 !==0) || (compH < 4) || (compH > 30000)){
	var compH = prompt("Enter composition heigth",1080);
	if ((compH == null) || (isNaN(compH)) || (compH % 1 !==0) || (compH < 4) || (compH > 30000)){
		alert("Please enter an INTEGER in range 4...30000");
	}
}
while ((compD == null) || (isNaN(compD)) || (compD < 0.1) || (compD > 10800.00)){
	var compD = prompt("Enter composition duration",60);
	if ((compD == null) || (isNaN(compD)) || (compD < 0.1) || (compD > 10800.00)){
		alert("Please enter a number in range 0,1...10800,00");
	}
}
	var w = parseInt(compW);
	var h = parseInt(compH);
	var cD = parseFloat(compD);
	
var mainComp = app.project.items.addComp("Main Comp",w,h,compA,cD,compFPS);

//kuriami controlleriai
var myNull = mainComp.layers.addNull();
myNull.source.name = ("Controllers");

var slider = myNull.property("Effects").addProperty("ADBE Slider Control");
var sliderName = slider.name = ("AnimDuration");
myNull.effect(sliderName).property("Slider").expression = '''clamp(value,1,30);''';
myNull.effect(sliderName).property("Slider").setValue([15]);

var color1 = myNull.property("Effects").addProperty("ADBE Color Control");
var color1Name = color1.name = ("Snowflake fill color");
myNull.effect(color1Name).property("Color").setValue([36,0,255]/255);

var color2 = myNull.property("Effects").addProperty("ADBE Color Control");
var color2Name = color2.name = ("Snowflake stroke color");
myNull.effect(color2Name).property("Color").setValue([26,29,145]/255);

var mainSFComp = app.project.items.addComp("SF Comp",w,h,compA,cD,compFPS);

//shape path koordinates

var coords = new Array;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//real shape vector DATA from ADOBE illustrator. If inTangents/outTangents are zero values - they can be skipped
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//vector data
{
var coords1 = [[1920.5,1007.03857421875],[1897.57897949219,939.224609375],[1896.73999023438,835.919616699219],[1904.59692382812,744.194580078125],[1920.5,556.923583984375],[1936.40307617188,744.194580078125],[1944.26013183594,835.919616699219],[1943.42102050781,939.224609375]];

var coords2 = [[1992.44323730469,953.762023925781],[1976.54223632812,944.700073242188],[1956.17529296875,939.300048828125],[1982.41723632812,930.516052246094],[1984.48120117188,905.97705078125],[1994.94812011719,904.631042480469],[2027.71813964844,877.320068359375],[2034.05212402344,842.742065429688],[2023.93615722656,836.752075195312],[2047.66723632812,824.826049804688],[2047.84521484375,798.681030273438],[2024.98315429688,785.14404296875],[2013.75012207031,788.884033203125],[2011.59313964844,792.528076171875],[2005.17822265625,792.285034179688],[2003.02014160156,795.930053710938],[1999.783203125,794.013061523438],[1984.34814453125,803.468017578125],[1980.09924316406,800.952026367188],[1978.06823730469,790.9990234375],[1970.17724609375,786.327026367188],[1954.93627929688,794.530029296875],[1957.57421875,790.076049804688],[1962.28125,782.126037597656],[1962.12329101562,772.462036132812],[1983.50122070312,772.815063476562],[2006.72912597656,757.583068847656],[2017.84216308594,754.046020507812],[2019.69213867188,745.844055175781],[2016.71716308594,740.254028320312],[2022.14916992188,738.002075195312],[2030.42211914062,738.798034667969],[2037.908203125,743.231018066406],[2045.87316894531,739.470031738281],[2050.54833984375,724.191040039062],[2060.19116210938,717.595031738281],[2062.58935546875,713.546020507812],[2072.56323242188,715.623046875],[2088.02001953125,702.900024414062],[2089.22607421875,694.864013671875],[2102.39916992188,691.945068359375],[2105.05126953125,687.466064453125],[2106.8671875,693.216064453125],[2112.80517578125,688.757019042969],[2114.04711914062,671.344055175781],[2111.40234375,669.778015136719],[2113.572265625,666.113037109375],[2103.03125,666.746032714844],[2100.18212890625,665.059020996094],[2086.81518554688,668.14404296875],[2084.88623046875,671.401062011719],[2081.02001953125,669.113037109375],[2071.67724609375,673.754028320312],[2062.52124023438,668.333068847656],[2053.20922851562,678.493041992188],[2035.17712402344,688.990051269531],[2024.30419921875,688.326049804688],[2017.43322753906,699.931030273438],[2010.06323242188,702.167053222656],[2003.43322753906,713.365051269531],[2003.12414550781,701.358032226562],[1989.89916992188,693.528015136719],[1986.16223144531,699.839050292969],[1978.29614257812,707.556030273438],[1981.26513671875,716.463073730469],[1974.408203125,715.97802734375],[1963.62524414062,724.442016601562],[1968.50817871094,727.333068847656],[1959.27014160156,729.013061523438],[1956.85913085938,733.085021972656],[1956.48217773438,723.512023925781],[1961.30419921875,715.368041992188],[1960.61328125,687.242065429688],[1952.6171875,679.387023925781],[1964.19519042969,678.267028808594],[1969.06921386719,681.153015136719],[1978.17211914062,671.633056640625],[1982.43212890625,651.27001953125],[1986.08020019531,645.108032226562],[1984.953125,626.237060546875],[1979.60424804688,620.642028808594],[1990.02722167969,623.52001953125],[2013.90515136719,603.676025390625],[2006.62121582031,595.202026367188],[1992.51013183594,586.847045898438],[1981.55029296875,593.361083984375],[1965.578125,591.189086914062],[1960.52319335938,599.72705078125],[1948.74719238281,599.407043457031],[1940.04516601562,587.158081054688],[1939.68920898438,575.43505859375],[1952.26623535156,566.917114257812],[1935.05822753906,566.041015625],[1920.50012207031,540.779052734375],[1905.94116210938,566.041015625],[1888.73315429688,566.917114257812],[1901.31127929688,575.43505859375],[1900.95520019531,587.158081054688],[1892.25317382812,599.407043457031],[1880.47729492188,599.72705078125],[1875.42211914062,591.189086914062],[1859.4501953125,593.361083984375],[1848.4892578125,586.847045898438],[1834.37915039062,595.202026367188],[1827.09521484375,603.676025390625],[1850.97216796875,623.52001953125],[1861.39624023438,620.642028808594],[1856.04614257812,626.237060546875],[1854.91918945312,645.108032226562],[1858.56823730469,651.27001953125],[1862.828125,671.633056640625],[1871.93017578125,681.153015136719],[1876.80517578125,678.267028808594],[1888.38330078125,679.387023925781],[1880.38720703125,687.242065429688],[1879.69519042969,715.368041992188],[1884.51721191406,723.512023925781],[1884.14013671875,733.085021972656],[1881.72924804688,729.013061523438],[1872.4912109375,727.333068847656],[1877.37426757812,724.442016601562],[1866.59228515625,715.97802734375],[1859.73522949219,716.463073730469],[1862.70422363281,707.556030273438],[1854.83813476562,699.839050292969],[1851.10119628906,693.528015136719],[1837.87622070312,701.358032226562],[1837.56616210938,713.365051269531],[1830.93627929688,702.167053222656],[1823.56713867188,699.931030273438],[1816.69519042969,688.326049804688],[1805.822265625,688.990051269531],[1787.79125976562,678.493041992188],[1778.47827148438,668.333068847656],[1769.3232421875,673.754028320312],[1759.97924804688,669.113037109375],[1756.11328125,671.401062011719],[1754.18530273438,668.14404296875],[1740.81713867188,665.059020996094],[1737.96923828125,666.746032714844],[1727.42724609375,666.113037109375],[1729.59716796875,669.778015136719],[1726.9521484375,671.344055175781],[1728.1953125,688.757019042969],[1734.13220214844,693.216064453125],[1735.9482421875,687.466064453125],[1738.60119628906,691.945068359375],[1751.77319335938,694.864013671875],[1752.97924804688,702.900024414062],[1768.43725585938,715.623046875],[1778.4111328125,713.546020507812],[1780.80822753906,717.595031738281],[1790.4521484375,724.191040039062],[1795.12719726562,739.470031738281],[1803.09228515625,743.231018066406],[1810.578125,738.798034667969],[1818.85021972656,738.002075195312],[1824.283203125,740.254028320312],[1821.30822753906,745.844055175781],[1823.158203125,754.046020507812],[1834.27014160156,757.583068847656],[1857.49829101562,772.815063476562],[1878.87719726562,772.462036132812],[1878.71923828125,782.126037597656],[1883.42626953125,790.076049804688],[1886.06323242188,794.530029296875],[1870.822265625,786.327026367188],[1862.93212890625,790.9990234375],[1860.90112304688,800.952026367188],[1856.65222167969,803.468017578125],[1841.21618652344,794.013061523438],[1837.97924804688,795.930053710938],[1835.82116699219,792.285034179688],[1829.4072265625,792.528076171875],[1827.24926757812,788.884033203125],[1816.01721191406,785.14404296875],[1793.154296875,798.681030273438],[1793.33325195312,824.826049804688],[1817.06323242188,836.752075195312],[1806.947265625,842.742065429688],[1813.28125,877.320068359375],[1846.05126953125,904.631042480469],[1856.51818847656,905.97705078125],[1858.58325195312,930.516052246094],[1884.8251953125,939.300048828125],[1862.94421386719,945.337036132812],[1847.14624023438,954.576049804688]];

var coords3 = [[1946.33935546875,670.837585449219],[1955.05725097656,669.020629882812],[1969.26831054688,664.281616210938],[1973.52221679688,649.888610839844],[1964.26928710938,640.747619628906],[1977.50024414062,635.239624023438],[1969.03625488281,617.005615234375],[2000.70825195312,603.260620117188],[1971.51025390625,601.502624511719],[1942.39123535156,614.601623535156],[1951.61828613281,622.423583984375],[1941.08520507812,633.045593261719],[1950.46728515625,642.347595214844],[1940.49731445312,652.403625488281]];

var coords4 = [[1973.54296875,738.1845703125],[1980.41198730469,723.767578125],[1991.5859375,734.237609863281],[1997.96997070312,721.367614746094],[2026.49401855469,712.736572265625],[2040.40100097656,697.117614746094],[2073.34594726562,686.112609863281],[2057.77392578125,705.555603027344],[2031.99694824219,718.650573730469],[2030.13195800781,729.854614257812],[2010.17602539062,731.441589355469],[2004.51794433594,745.280578613281],[1981.65600585938,755.1826171875],[1955.23291015625,743.456604003906]];

var coords5 = [[2011.51062011719,863.7353515625],[1992.15161132812,842.144470214844],[2003.91052246094,815.348449707031],[1969.5634765625,811.379455566406],[1952.79943847656,837.269470214844],[1978.39855957031,862.502380371094],[1958.1474609375,894.889404296875],[1978.064453125,901.326354980469],[1974.02648925781,885.377380371094]];

var coords6 = [[1894.66064453125,670.837585449219],[1885.94262695312,669.020629882812],[1871.73168945312,664.281616210938],[1867.47766113281,649.888610839844],[1876.73071289062,640.747619628906],[1863.49975585938,635.239624023438],[1871.96362304688,617.005615234375],[1840.29174804688,603.260620117188],[1869.48974609375,601.502624511719],[1898.60864257812,614.601623535156],[1889.38159179688,622.423583984375],[1899.91467285156,633.045593261719],[1890.53271484375,642.347595214844],[1900.50268554688,652.403625488281]];


var coords7 = [[1867.45703125,738.1845703125],[1860.587890625,723.767578125],[1849.41394042969,734.237609863281],[1843.03002929688,721.367614746094],[1814.505859375,712.736572265625],[1800.59887695312,697.117614746094],[1767.65393066406,686.112609863281],[1783.22595214844,705.555603027344],[1809.0029296875,718.650573730469],[1810.86791992188,729.854614257812],[1830.82397460938,731.441589355469],[1836.48193359375,745.280578613281],[1859.34399414062,755.1826171875],[1885.76696777344,743.456604003906]];


var coords8 = [[1829.48937988281,863.7353515625],[1848.84838867188,842.144470214844],[1837.08935546875,815.348449707031],[1871.43627929688,811.379455566406],[1888.19934082031,837.269470214844],[1862.60131835938,862.502380371094],[1882.85229492188,894.889404296875],[1862.93530273438,901.326354980469],[1866.97338867188,885.377380371094]];

}		

function drawShapePathes(coords){
//
{
var temp_i = 0; // check how many elements ran (i)
var temp_j = 0; // check how many elements ran (j)

var elementCount = coords.length; 

	for(i=0; i<elementCount; i++)
	{
	  temp_i +=1;
		for(j=0; j<2; j++)
		{
			if(j==0)
			{
				coords[i][j] += -1920; // X transformation
			}
			else
			{
				coords[i][j] +=-1080; // Y transformation
			}
			temp_j +=1;
		}
	}

}

var myShapePath= myShapeGroup.property("Contents").addProperty("ADBE Vector Shape - Group");
var myShapeMask = myShapePath.property("Path");
var myShapeM = myShapeMask.value;
		myShapeM.vertices =coords;

		myShapeM.closed = true;
		myShapeMask.setValue(myShapeM);

}

var myShape = mainSFComp.layers.addShape();
myShape.threeDLayer = true;
myShape.name = ("Bl SF 3 EX RND 2");
myShape.property("Transform").property("Scale").setValue([30,30,30]);
var myShapeContent = myShape.property("Contents").addProperty("ADBE Vector Group");
var myShapeGroup = myShape.property("Contents").property("Group 1");
drawShapePathes(coords1);
drawShapePathes(coords2);
drawShapePathes(coords3);
drawShapePathes(coords4);
drawShapePathes(coords5);
drawShapePathes(coords6);
drawShapePathes(coords7);
drawShapePathes(coords8);

//snaiges saku generavimas su repeater

var myShapeRepeater= myShapeGroup.property("Contents").addProperty("ADBE Vector Filter - Repeater");
myShapeRepeater.property("Copies").setValue([6]);
myShapeRepeater.property("Transform").property("Rotation").expression='''360/content("Group 1").content("Repeater 1").copies''';

//fill ir stroke su EXPC kontroliavimu

var myShapeFill= myShape.property("Contents").addProperty("ADBE Vector Graphic - Fill");
myShapeFill.property("Fill Rule").setValue(2);
myShapeFill.property("Opacity").setValue([50]);
myShapeFill.property("Color").expression='''comp("Main Comp").layer("Controllers").effect("Snowflake fill color")("Color")''';

var myShapeStroke= myShape.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
myShapeStroke.property("Stroke Width").setValue([5]);
myShapeStroke.property("Color").expression='''comp("Main Comp").layer("Controllers").effect("Snowflake stroke color")("Color")''';

//FX snaigei

var myShapeGlow = myShape.property("Effects").addProperty("Glow");
myShapeGlow.property("Glow Radius").setValue([15]);
myShapeGlow.property("Glow Threshold").expression='''50''';
myShapeGlow.property("Glow Intensity").setValue([13]);
myShapeGlow.property("Composite Original").setValue(1);

var myShapeMB = myShape.property("Effects").addProperty("CC Force Motion Blur");
myShapeMB.property("Motion Blur Samples").setValue([3]);
myShapeMB.property("Shutter Phase").setValue([-60]);
myShapeMB.property("Compositing Options").property("Effect Opacity").setValue([80]);


mainComp.openInViewer();

// funkcijos generuoti random reiksmes pradinei ir galinei snaigiu pozicijai/rotacijai/orientacijai

function getRandomStartPosition(){
	var StartRandomPosX = -100 + Math.random() * (w+100);
	var StartRandomPosY = -2 * h + Math.random() * (2 * h - 350);
	var StartRandomPosZ = Math.random() * 1000 - 500; 
return [StartRandomPosX, StartRandomPosY, StartRandomPosZ];
}

function getRandomEndPosition() {
	var EndRandomPosX = (-300 + Math.random() * (w + 400)) - 800; 
    var EndRandomPosY = 1200 + Math.random() * 2500;            // nuo 1200 iki 3700
    var EndRandomPosZ = -500 + Math.random() * 500;            // nuo -500 iki 500
    return [EndRandomPosX, EndRandomPosY, EndRandomPosZ];
}

function getRandomStartOrientation(){
	var StartRandomOriX = Math.random()*180;
	var StartRandomOriY = Math.random()*180;
	var StartRandomOriZ = Math.random()*180;
	return[StartRandomOriX,StartRandomOriY,StartRandomOriZ];
}

function getRandomEndRotationX(){
	var EndRandomRotX = 90 + Math.random() * 510;
	return EndRandomRotX;
}
function getRandomEndRotationY(){
	var EndRandomRotY = 90 + Math.random() * 510;
	return EndRandomRotY;
}
function getRandomEndRotationZ(){
	var EndRandomRotZ = 90 + Math.random() * 510;
	return EndRandomRotZ;
}

//parent null layer sukurimas, 3D ijungimas

var parentNull = mainComp.layers.addNull();
parentNull.threeDLayer=true;
parentNull.source.name=("Parent");

//snaigiu generavimas, random parametru pritaikymas sugeneruotom snaigem

var snowflakeCount = 17;

for (var i = 1; i <= snowflakeCount; i++) {
    var snowFlakeLayer = mainComp.layers.add(mainSFComp);
	snowFlakeLayer.collapseTransformation=true;
	snowFlakeLayer.selected=true;
	app.executeCommand(2541);
	app.executeCommand(2004);
    snowFlakeLayer.property("Transform").property("Position").setValue(getRandomStartPosition());
	var EndPos=getRandomEndPosition();
	var EndRotX=Math.round(getRandomEndRotationX());
	var EndRotY=Math.round(getRandomEndRotationY());
	var EndRotZ=Math.round(getRandomEndRotationZ());
	snowFlakeLayer.property("Transform").property("Position").expression= '''var t=time; var tMax=thisComp.layer("Controllers").effect("AnimDuration")("Slider"); var tMin=0; easeIn(t,tMin,tMax,value,['''+EndPos.join(",")+''']);'''

	snowFlakeLayer.property("Transform").property("X Rotation").expression= '''var t=time; var tMax=thisComp.layer("Controllers").effect("AnimDuration")("Slider"); var tMin=0; easeIn(t,tMin,tMax,value,'''+EndRotX+''');'''

	snowFlakeLayer.property("Transform").property("Y Rotation").expression= '''var t=time; var tMax=thisComp.layer("Controllers").effect("AnimDuration")("Slider"); var tMin=0; easeIn(t,tMin,tMax,value,'''+EndRotY+''');'''

	snowFlakeLayer.property("Transform").property("Z Rotation").expression= '''var t=time; var tMax=thisComp.layer("Controllers").effect("AnimDuration")("Slider"); var tMin=0; easeIn(t,tMin,tMax,value,'''+EndRotZ+''');'''

		snowFlakeLayer.property("Transform").property("Orientation").setValue(getRandomStartOrientation());
		snowFlakeLayer.parent=parentNull;

}

//kamera ir priskiriamas parent
var myCamera = mainComp.layers.addCamera("Camera",[960,540]);
myCamera.parent=parentNull;

myNull.moveToBeginning();
app.executeCommand(2004);
myNull.selected=true;
app.executeCommand(2163);
mainComp.openInViewer();
//mainSFComp.openInViewer();


