(function(){var t=Object.prototype.toString;function c(i){return t.call(i)==='[object Array]'}function d(i){return t.call(i)==='[object Object]'}function _(a,b){for(var i in b){if(c(b[i])){a[i]=b[i].slice()}else if(d(b[i])){a[i]=a[i]||{};_(a[i],b[i])}else{a[i]=b[i]}}return a}function m(){var a={};for(var i=0;i<arguments.length;++i){_(a,arguments[i])}return a}var e="#AAAAAA";var f="#333333";var r={rangeSlider:{sliderStyle:{borderColor:"#4e4e4e",highlightBorderColor:"#ffffff"},tooltipStyle:{fontColor:"#ffffff",borderColor:"#4e4e4e",highlightBorderColor:"#009de0",backgroundColor:"#333333"},thumbStyle:{indicatorStartColor:"#555555",indicatorEndColor:"#0c0c0c",indicatorPressStartColor:"#555555",indicatorPressEndColor:"#0c0c0c",indicatorBorderStartColor:"#ffffff",indicatorBorderEndColor:"#ffffff",indicatorPressBorderStartColor:"#8b8b8b",indicatorPressBorderEndColor:"#8b8b8b",indicatorInternalLineColor:"#ffffff",subRectBorderColor:"#ffffff",subRectColor:"#ffffff",rectOpacity:0.3,rectColor:'#009de0',rectPressOpacity:0.3,rectPressColor:"#ffffff"}}};var g={title:{style:{color:'#D8D8D8'}}};var h={background:{color:"#1B1B1B",border:{top:{visible:false},bottom:{visible:false},left:{visible:false},right:{visible:false}},drawingEffect:"normal"}};var s={thumb:{fill:"#a6a6a6",hoverFill:"#888888"},track:{fill:'#333333'}};var l={legend:{drawingEffect:"normal",title:{visible:true,style:{color:"#D8D8D8"}},label:{style:{color:"#D8D8D8"}},hoverShadow:{color:"#606060"},mouseDownShadow:{color:"#cccccc"},scrollbar:s},sizeLegend:{drawingEffect:"normal",title:{visible:true,style:{color:"#D8D8D8"}},label:{style:{color:"#D8D8D8"}}}};var j={tooltip:{background:{color:"#000000",borderColor:"#ffffff"},drawingEffect:"normal",footerLabel:{color:"#ffffff"},separationLine:{color:"#ffffff"},bodyDimensionLabel:{color:"#c0c0c0"},bodyDimensionValue:{color:"#c0c0c0"},bodyMeasureLabel:{color:"#c0c0c0"},bodyMeasureValue:{color:"#ffffff"},closeButton:{backgroundColor:"#000000",borderColor:"#ffffff"}}};var p={plotArea:{drawingEffect:"normal",referenceLine:{defaultStyle:{color:"#ffffff",label:{background:"#1B1B1B",color:"#ffffff"}}}}};var k={plotArea:{dataLabel:{style:{color:"#D8D8D8"}}}};var z={zAxis:{title:{visible:true,style:{color:e}},label:{style:{color:e}},color:e}};var n={title:{visible:true,style:{color:e}},gridline:{color:f},hoverShadow:{color:"#606060"},mouseDownShadow:{color:"#cccccc"},label:{style:{color:e}},color:e};var o={axisline:{visible:true}};var q={axisLine:{visible:true}};var u={axisline:{visible:false}};var v={axisLine:{visible:false}};var w={gridline:{type:"line",color:f,showLastLine:true}};var x={title:{applyAxislineColor:true}};var y=m(g,h,l,j);var A={xAxis:m(n,u,w),yAxis:n,xAxis2:m(n,u)};var B=m(A,{xAxis:x,xAxis2:x});var C={yAxis:m(n,u,w),xAxis:n,yAxis2:m(n,u)};var D=m(C,{yAxis:x,yAxis2:x});var E=m(y,p,k,A);var F=m(y,p,z,A);var G=m(y,p,k,B);var H=m(y,p,k,r,C);var I=m(y,p,z,C);var J=m(y,p,k,D);var K=m(y,p,A);var L=m(y,p,B);var M=m(y,p,{yAxis:m(n,u,x),xAxis:n,yAxis2:m(n,u)});var N=m(y,p,D);var O=m(y,p,k,r,C);var P=m(y,p,k,D);var Q=m(y,p,k,A);var R=m(y,p,k,B);var S=m(y,p,k,r,C);var T=m(y,p,k,D);var U=m(y,p,k,A);var V=m(y,p,k,B);var W=m(y,p,k,{yAxis:m(n,u,w),xAxis:n});var X=m(g,l,p,k,j);var Y=X;var Z=m(l,j,p,{background:{visible:false},plotArea:{valueAxis:{title:{visible:true},gridline:{color:f}},dataline:{fill:{transparency:0}},polarGrid:{color:f}}});var $=m(y,p,{yAxis:m(n,u,{gridline:{type:"line"}}),xAxis:m(n,o),xAxis2:m(n,o)});var a1=m(y,p,{xAxis:m(n,u,{gridline:{type:"line"}}),yAxis:m(n,o),yAxis2:m(n,o)});var b1=m(l,h,j,p,{plotArea:{target:{valueColor:"#FFFFFF",shadowColor:"#333333"}},categoryAxis2:{label:{style:{color:"#FFFFFF"}}}});var c1=m(l,j);sap.viz.extapi.env.Template.register({id:"hcb",name:"hcb",version:"4.0.0",properties:{'viz/bar':E,'viz/3d_bar':F,'viz/image_bar':E,'viz/multi_bar':E,'viz/dual_bar':G,'viz/multi_dual_bar':G,'viz/column':H,'viz/3d_column':I,'viz/multi_column':H,'viz/dual_column':J,'viz/multi_dual_column':J,'viz/stacked_bar':K,'viz/multi_stacked_bar':K,'viz/dual_stacked_bar':L,'viz/multi_dual_stacked_bar':L,'viz/100_stacked_bar':K,'viz/multi_100_stacked_bar':K,'viz/100_dual_stacked_bar':L,'viz/multi_100_dual_stacked_bar':L,'viz/stacked_column':M,'viz/multi_stacked_column':M,'viz/dual_stacked_column':N,'viz/multi_dual_stacked_column':N,'viz/100_stacked_column':M,'viz/multi_100_stacked_column':M,'viz/100_dual_stacked_column':N,'viz/multi_100_dual_stacked_column':N,'riv/cbar':m(l,j,p,{background:{drawingEffect:"normal"},yAxis:n}),'viz/combination':S,'viz/horizontal_combination':U,'viz/dual_combination':T,'viz/dual_horizontal_combination':V,'viz/boxplot':m(y,p,{yAxis:m(n,u,w),xAxis:n}),'viz/horizontal_boxplot':m(y,p,{xAxis:m(n,u,w),yAxis:n}),'viz/waterfall':m(y,p,{yAxis:m(n,u,w),xAxis:n}),'viz/horizontal_waterfall':m(y,p,{xAxis:m(n,u,w),yAxis:n}),'viz/stacked_waterfall':M,'viz/horizontal_stacked_waterfall':K,'viz/line':O,'viz/multi_line':O,'viz/dual_line':P,'viz/multi_dual_line':P,'viz/horizontal_line':Q,'viz/multi_horizontal_line':Q,'viz/dual_horizontal_line':R,'viz/multi_dual_horizontal_line':R,'viz/area':O,'viz/multi_area':O,'viz/100_area':O,'viz/multi_100_area':O,'viz/horizontal_area':Q,'viz/multi_horizontal_area':Q,'viz/100_horizontal_area':Q,'viz/multi_100_horizontal_area':Q,'viz/pie':X,'viz/multi_pie':X,'viz/donut':X,'viz/multi_donut':X,'viz/pie_with_depth':Y,'viz/donut_with_depth':Y,'viz/multi_pie_with_depth':Y,'viz/multi_donut_with_depth':Y,'viz/bubble':W,'viz/multi_bubble':W,'viz/scatter':W,'viz/multi_scatter':W,'viz/scatter_matrix':W,'viz/radar':Z,'viz/multi_radar':Z,'viz/tagcloud':m(l,j),'viz/heatmap':m(l,j,{xAxis:n,yAxis:n}),'viz/treemap':c1,'viz/mekko':$,'viz/100_mekko':$,'viz/horizontal_mekko':a1,'viz/100_horizontal_mekko':a1,'viz/number':m(j,{plotArea:{valuePoint:{label:{fontColor:'#D8D8D8'}}}}),'info/column':f1(H),'info/bar':f1(E),'info/line':f1(O),'info/pie':f1(X),'info/donut':f1(X),'info/scatter':h1(W),'info/bubble':h1(W),'info/stacked_column':f1(M),'info/stacked_bar':f1(K),'info/combination':f1(S),'info/stacked_combination':f1(S),'info/dual_stacked_combination':g1(T),'info/dual_column':g1(J),'info/dual_bar':g1(G),'info/dual_line':g1(P),'info/100_stacked_column':f1(M),'info/100_stacked_bar':f1(K),'info/horizontal_line':f1(Q),'info/dual_horizontal_line':g1(R),'info/horizontal_combination':f1(U),'info/horizontal_stacked_combination':f1(U),'info/dual_horizontal_stacked_combination':g1(V),'info/treemap':i1(c1),'info/trellis_column':e1(f1(H)),'info/trellis_bar':e1(f1(E)),'info/trellis_line':e1(f1(O)),'info/trellis_pie':e1(f1(X)),'info/trellis_donut':e1(f1(X)),'info/trellis_scatter':e1(h1(W)),'info/trellis_bubble':e1(h1(W)),'info/trellis_stacked_column':e1(f1(M)),'info/trellis_stacked_bar':e1(f1(K)),'info/trellis_combination':e1(f1(S)),'info/trellis_dual_column':e1(g1(J)),'info/trellis_dual_bar':e1(g1(G)),'info/trellis_dual_line':e1(g1(P)),'info/trellis_100_stacked_column':e1(f1(M)),'info/trellis_100_stacked_bar':e1(f1(K)),'info/trellis_horizontal_line':e1(f1(Q)),'info/trellis_dual_horizontal_line':e1(g1(R)),'info/trellis_horizontal_combination':e1(f1(U)),'info/dual_stacked_bar':g1(L),'info/100_dual_stacked_bar':g1(L),'info/dual_stacked_column':g1(N),'info/100_dual_stacked_column':g1(N),'info/time_bubble':h1(W),'info/bullet':d1(b1),'info/vertical_bullet':d1(b1),'info/trellis_bullet':d1(b1),'info/trellis_vertical_bullet':d1(b1)},css:"\
  .v-m-title .v-title{fill:#D8D8D8;}\
  .v-subtitle{fill:#D8D8D8;}\
  .v-longtick{stroke:#5e5e5e;}\
  .v-title{fill:#D8D8D8;}\
  .v-hidden-title{fill:#737373;}\
  .v-label{fill:#D8D8D8;}\
  .v-background-body{fill:#1B1B1B;}\
  .v-pie .v-donut-title{fill:#D8D8D8;}\
  .v-polar-axis-label{fill:#D8D8D8;}\
  .v-datalabel{fill:#D8D8D8;}\
  .v-hoverline{stroke:#606060;}\
  .v-hovershadow{fill:#606060;}\
  .v-hovershadow-mousedown{fill:#cccccc;}\
  .v-m-tooltip .v-background{background-color:#000000; border-color:#ffffff; fill:#1B1B1B;stroke:#FFFFFF;}\
  .v-m-tooltip .v-footer-label{color:#ffffff; fill:#D8D8D8;}\
  .v-m-tooltip .v-body-dimension-label{color:#c0c0c0;}\
  .v-m-tooltip .v-body-dimension-value{color:#c0c0c0;}\
  .v-m-tooltip .v-body-measure-label{color:#c0c0c0;}\
  .v-m-tooltip .v-body-measure-value{color:#ffffff;}\
  .v-m-tooltip .v-separationline{border-bottom-color:#ffffff;}\
  .v-m-tooltip .v-closeButton{background-color:#000000;border-color:#ffffff;}\
  .v-datapoint-default{stroke:#000000}\
  .v-datapoint-hover{stroke:#999999}\
  .v-datapoint-selected{stroke:#999999}\
  .v-datapoint .v-boxplotmidline{stroke:#ffffff}\
  .v-scrollbarThumb{fill:#c0c0c0}\
  "});function d1(a){var b=f1(a);b.valueAxis.title.visible=false;b.categoryAxis.title.visible=false;b.plotArea.gridline.visible=true;b.title={};b.title.style={};b.title.style.color="#d8d8d8";return b}function e1(a){a.rowAxis={color:e,label:{style:{color:e}},hoverShadow:{color:"#606060"},mouseDownShadow:{color:"#cccccc"}};a.columnAxis={color:e,label:{style:{color:e}},hoverShadow:{color:"#606060"},mouseDownShadow:{color:"#cccccc"}};a.plotArea=a.plotArea||{};a.plotArea.gridline=m(a.plotArea.gridline||{},{zeroLine:{color:"#303030"}});a.plotArea.cellGrid={color:f};return a}function f1(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.valueAxis=m(n,v,w,{});b.categoryAxis=m(n,{hoverShadow:{color:"#606060"},mouseDownShadow:{color:"#cccccc"}});b.plotArea.scrollbar=s;b.plotArea.gridline=m(b.plotArea.gridline||{},{zeroLine:{unhighlightAxis:false}});j1(b);return b}function g1(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.valueAxis=m(n,v,w,x);delete b.valueAxis.color;b.categoryAxis=m(n,{hoverShadow:{color:"#606060"},mouseDownShadow:{color:"#cccccc"}});b.valueAxis2=m(n,v,x);delete b.valueAxis2.color;b.plotArea.scrollbar=s;j1(b);return b}function h1(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.valueAxis=m(n,w,q);b.valueAxis2=m(n,v);b.plotArea.scrollbar=s;j1(b);return b}function i1(a){var b={};for(var i in a){if(a.hasOwnProperty(i)){b[i]=a[i]}}b.plotArea={};b.plotArea.background={};b=m(h,b,g);j1(b);return b}function j1(a){a.plotArea=a.plotArea||{};a.plotArea.background=a.background;delete a.background;delete a.xAxis;delete a.xAxis2;delete a.yAxis;delete a.yAxis2;var b=a.general=a.general||{};b.background={color:"#1B1B1B"};if(!a.plotArea.gridline){a.plotArea.gridline={}}a.plotArea.gridline.color=f;a.legend=a.legend||{};a.legend.hoverShadow={color:"#606060"};a.legend.mouseDownShadow={color:"#cccccc"}}})();
