/*!
 * 
 * 		SAP UI development toolkit for HTML5 (SAPUI5)
 * 		(c) Copyright 2009-2015 SAP SE. All rights reserved
 * 	
 */
jQuery.sap.declare("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.suite.ui.microchart.library");jQuery.sap.require("sap.m.library");sap.ui.getCore().initLibrary({name:"sap.suite.ui.commons",dependencies:["sap.ui.core","sap.suite.ui.microchart","sap.m"],types:["sap.suite.ui.commons.BulletChartMode","sap.suite.ui.commons.CommonBackground","sap.suite.ui.commons.ComparisonChartView","sap.suite.ui.commons.DeviationIndicator","sap.suite.ui.commons.FacetOverviewHeight","sap.suite.ui.commons.FrameType","sap.suite.ui.commons.HeaderContainerView","sap.suite.ui.commons.InfoTileSize","sap.suite.ui.commons.InfoTileTextColor","sap.suite.ui.commons.InfoTileValueColor","sap.suite.ui.commons.LoadState","sap.suite.ui.commons.MicroAreaChartView","sap.suite.ui.commons.ProcessFlowConnectionLabelState","sap.suite.ui.commons.ProcessFlowConnectionState","sap.suite.ui.commons.ProcessFlowConnectionType","sap.suite.ui.commons.ProcessFlowDisplayState","sap.suite.ui.commons.ProcessFlowLaneState","sap.suite.ui.commons.ProcessFlowNodeState","sap.suite.ui.commons.ProcessFlowNodeType","sap.suite.ui.commons.ProcessFlowZoomLevel","sap.suite.ui.commons.SelectionState","sap.suite.ui.commons.ThingGroupDesign","sap.suite.ui.commons.TimelineAlignment","sap.suite.ui.commons.TimelineAxisOrientation","sap.suite.ui.commons.TimelineItemPosition","sap.suite.ui.commons.ValueStatus"],interfaces:[],controls:["sap.suite.ui.commons.BulletChart","sap.suite.ui.commons.BusinessCard","sap.suite.ui.commons.ChartContainer","sap.suite.ui.commons.ChartContainerContent","sap.suite.ui.commons.ChartTile","sap.suite.ui.commons.ColumnMicroChart","sap.suite.ui.commons.ComparisonChart","sap.suite.ui.commons.DateRangeScroller","sap.suite.ui.commons.DateRangeSlider","sap.suite.ui.commons.DateRangeSliderInternal","sap.suite.ui.commons.DeltaMicroChart","sap.suite.ui.commons.DynamicContainer","sap.suite.ui.commons.FacetOverview","sap.suite.ui.commons.FeedItemHeader","sap.suite.ui.commons.FeedTile","sap.suite.ui.commons.GenericTile","sap.suite.ui.commons.GenericTile2X2","sap.suite.ui.commons.HarveyBallMicroChart","sap.suite.ui.commons.HeaderCell","sap.suite.ui.commons.HeaderContainer","sap.suite.ui.commons.InfoTile","sap.suite.ui.commons.JamContent","sap.suite.ui.commons.KpiTile","sap.suite.ui.commons.LaunchTile","sap.suite.ui.commons.LinkActionSheet","sap.suite.ui.commons.MicroAreaChart","sap.suite.ui.commons.MonitoringContent","sap.suite.ui.commons.MonitoringTile","sap.suite.ui.commons.NewsContent","sap.suite.ui.commons.NoteTaker","sap.suite.ui.commons.NoteTakerCard","sap.suite.ui.commons.NoteTakerFeeder","sap.suite.ui.commons.NumericContent","sap.suite.ui.commons.NumericTile","sap.suite.ui.commons.PictureZoomIn","sap.suite.ui.commons.ProcessFlow","sap.suite.ui.commons.ProcessFlowConnection","sap.suite.ui.commons.ProcessFlowConnectionLabel","sap.suite.ui.commons.ProcessFlowLaneHeader","sap.suite.ui.commons.ProcessFlowNode","sap.suite.ui.commons.RepeaterViewConfiguration","sap.suite.ui.commons.SplitButton","sap.suite.ui.commons.TargetFilter","sap.suite.ui.commons.ThingCollection","sap.suite.ui.commons.ThreePanelThingInspector","sap.suite.ui.commons.ThreePanelThingViewer","sap.suite.ui.commons.TileContent","sap.suite.ui.commons.TileContent2X2","sap.suite.ui.commons.Timeline","sap.suite.ui.commons.TimelineFilterListItem","sap.suite.ui.commons.TimelineItem","sap.suite.ui.commons.UnifiedThingGroup","sap.suite.ui.commons.UnifiedThingInspector","sap.suite.ui.commons.VerticalNavigationBar","sap.suite.ui.commons.ViewRepeater"],elements:["sap.suite.ui.commons.BulletChartData","sap.suite.ui.commons.ColumnData","sap.suite.ui.commons.ColumnMicroChartLabel","sap.suite.ui.commons.ComparisonData","sap.suite.ui.commons.CountingNavigationItem","sap.suite.ui.commons.FeedItem","sap.suite.ui.commons.HarveyBallMicroChartItem","sap.suite.ui.commons.HeaderCellItem","sap.suite.ui.commons.MicroAreaChartItem","sap.suite.ui.commons.MicroAreaChartLabel","sap.suite.ui.commons.MicroAreaChartPoint","sap.suite.ui.commons.TargetFilterColumn","sap.suite.ui.commons.TargetFilterMeasureColumn"],version:"1.36.5"});jQuery.sap.declare("sap.suite.ui.commons.BulletChartMode");sap.suite.ui.commons.BulletChartMode={Actual:"Actual",Delta:"Delta"};jQuery.sap.declare("sap.suite.ui.commons.CommonBackground");sap.suite.ui.commons.CommonBackground={Lightest:"Lightest",ExtraLight:"ExtraLight",Light:"Light",MediumLight:"MediumLight",Medium:"Medium",Dark:"Dark",ExtraDark:"ExtraDark",Darkest:"Darkest"};jQuery.sap.declare("sap.suite.ui.commons.ComparisonChartView");sap.suite.ui.commons.ComparisonChartView={Normal:"Normal",Wide:"Wide"};jQuery.sap.declare("sap.suite.ui.commons.DeviationIndicator");sap.suite.ui.commons.DeviationIndicator={Up:"Up",Down:"Down",None:"None"};jQuery.sap.declare("sap.suite.ui.commons.FacetOverviewHeight");sap.suite.ui.commons.FacetOverviewHeight={XS:"XS",S:"S",M:"M",L:"L",XL:"XL",XXL:"XXL",Auto:"Auto",None:"None"};jQuery.sap.declare("sap.suite.ui.commons.FrameType");sap.suite.ui.commons.FrameType={OneByOne:"OneByOne",TwoByOne:"TwoByOne",TwoThirds:"TwoThirds",Auto:"Auto"};jQuery.sap.declare("sap.suite.ui.commons.HeaderContainerView");sap.suite.ui.commons.HeaderContainerView={Horizontal:"Horizontal",Vertical:"Vertical"};jQuery.sap.declare("sap.suite.ui.commons.InfoTileSize");sap.suite.ui.commons.InfoTileSize={XS:"XS",S:"S",M:"M",L:"L",Auto:"Auto"};jQuery.sap.declare("sap.suite.ui.commons.InfoTileTextColor");sap.suite.ui.commons.InfoTileTextColor={Positive:"Positive",Critical:"Critical",Negative:"Negative"};jQuery.sap.declare("sap.suite.ui.commons.InfoTileValueColor");sap.suite.ui.commons.InfoTileValueColor={Neutral:"Neutral",Good:"Good",Critical:"Critical",Error:"Error"};jQuery.sap.declare("sap.suite.ui.commons.LoadState");sap.suite.ui.commons.LoadState={Loading:"Loading",Loaded:"Loaded",Failed:"Failed",Disabled:"Disabled"};jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChartView");sap.suite.ui.commons.MicroAreaChartView={Normal:"Normal",Wide:"Wide"};jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowConnectionLabelState");sap.suite.ui.commons.ProcessFlowConnectionLabelState={Neutral:"Neutral",Positive:"Positive",Critical:"Critical",Negative:"Negative"};jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowConnectionState");sap.suite.ui.commons.ProcessFlowConnectionState={Highlighted:"Highlighted",Dimmed:"Dimmed",Regular:"Regular",Selected:"Selected"};jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowConnectionType");sap.suite.ui.commons.ProcessFlowConnectionType={Planned:"Planned",Normal:"Normal"};jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowDisplayState");sap.suite.ui.commons.ProcessFlowDisplayState={Regular:"Regular",RegularFocused:"RegularFocused",Highlighted:"Highlighted",HighlightedFocused:"HighlightedFocused",Dimmed:"Dimmed",DimmedFocused:"DimmedFocused",Selected:"Selected",SelectedHighlighted:"SelectedHighlighted",SelectedHighlightedFocused:"SelectedHighlightedFocused",SelectedFocused:"SelectedFocused"};jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowLaneState");sap.suite.ui.commons.ProcessFlowLaneState={value:"value",state:"state"};jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowNodeState");sap.suite.ui.commons.ProcessFlowNodeState={Positive:"Positive",Negative:"Negative",Planned:"Planned",Neutral:"Neutral",PlannedNegative:"PlannedNegative"};jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowNodeType");sap.suite.ui.commons.ProcessFlowNodeType={Single:"Single",Aggregated:"Aggregated"};jQuery.sap.declare("sap.suite.ui.commons.ProcessFlowZoomLevel");sap.suite.ui.commons.ProcessFlowZoomLevel={One:"One",Two:"Two",Three:"Three",Four:"Four"};jQuery.sap.declare("sap.suite.ui.commons.SelectionState");sap.suite.ui.commons.SelectionState={Selected:"Selected",NotSelected:"NotSelected",Semantic:"Semantic"};jQuery.sap.declare("sap.suite.ui.commons.ThingGroupDesign");sap.suite.ui.commons.ThingGroupDesign={ZeroIndent:"ZeroIndent",TopIndent:"TopIndent"};jQuery.sap.declare("sap.suite.ui.commons.TimelineAlignment");sap.suite.ui.commons.TimelineAlignment={Right:"Right"};jQuery.sap.declare("sap.suite.ui.commons.TimelineAxisOrientation");sap.suite.ui.commons.TimelineAxisOrientation={Vertical:"Vertical",Horizontal:"Horizontal"};jQuery.sap.declare("sap.suite.ui.commons.TimelineItemPosition");sap.suite.ui.commons.TimelineItemPosition={Top:"Top",Bottom:"Bottom",Middle:"Middle"};jQuery.sap.declare("sap.suite.ui.commons.ValueStatus");sap.suite.ui.commons.ValueStatus={Good:"Good",Neutral:"Neutral",Critical:"Critical",Bad:"Bad"};