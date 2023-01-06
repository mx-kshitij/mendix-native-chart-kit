import { ReactElement, createElement, useState } from "react";
import { TextStyle, ViewStyle, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { ValueStatus } from "mendix";
import { mergeNativeStyles, Style } from "@mendix/pluggable-widgets-tools";
import { NativeBarChartProps } from "../typings/NativeBarChartProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function NativeBarChart({ 
    style,
    valueAttribute,
    labelAttribute,
    data,
    chartHeight,
    bgFrom,
    bgTo,
    bgFromOpacity,
    bgToOpacity,
    bgLineWidth,
    bgLineColor,
    strokeWidth,
    strokeColor,
    verticalLabelColor,
    verticalLabelFontSize,
    verticalLabelFontWeight,
    verticalLabelRotation,
    horizontalLabelColor,
    horizontalLabelFontSize,
    horizontalLabelFontWeight,
    horizontalLabelRotation,
    showBGLines,
    alwaysShowZero,
    showBarTops,
    showValuesOnTopOfBars,
    showVerticalLabels,
    showHorizontalLabels
 }: NativeBarChartProps<CustomStyle>): ReactElement {
    if (valueAttribute === undefined || labelAttribute === undefined || data === undefined || data.status != ValueStatus.Available) return <View />

    //Merge styles coming from mendix with local styles
    // @ts-ignore
    const mergedStyles = mergeNativeStyles(customStyle, style);
    //Variable to load widget or not
    var dataLoaded: boolean = true;

    //Calculated chart width
    const [chartWidth, setChartWidth] = useState<number>(100);

    //Function to get data labels
    const getLabels = () => {
        //Declare an empty array
        var labels: string[] = [];

        //Iterate over all items in the datasource "data"
        data.items?.map((item: any) => {
            //Store the value of labelAttribute in the variable "label"
            var label = labelAttribute.get(item).value;

            //If the value is not undefined, push the string value in the labels array
            if (label) labels.push(label.toString());
        })
        return labels;
    }

    const getValues = () => {
        var values: number[] = [];
        //Iterate over all items in the datasource "data"
        data.items?.map((item: any) => {
            var value = valueAttribute.get(item).value;
            if (value) values.push(value.toNumber());
        })
        return values;
    }

    //Function to return the data for chart
    const getData = () => {
        const data = {
            labels: getLabels(),
            datasets: [
                {
                    data: getValues()
                }
            ]
        };
        return data;
    }

    //Function to configure chart. More options here ->  https://github.com/indiespirit/react-native-chart-kit#chart-style-object
    const chartConfig = {
        backgroundGradientFrom: bgFrom.value? bgFrom.value.toString() : "#FFF",
        backgroundGradientTo: bgTo.value? bgTo.value.toString() : "#FFF",
        backgroundGradientFromOpacity: bgFromOpacity ? (bgFromOpacity.toNumber()/100) : 1,
        backgroundGradientToOpacity: bgToOpacity ? (bgToOpacity.toNumber()/100) : 1,
        color: () => strokeColor.value? strokeColor.value.toString() : "#000",
        labelColor: () => "#000",
        strokeWidth: strokeWidth? strokeWidth : 3,
        // useShadowColorFromDataset: true,
        propsForBackgroundLines:{
            strokeWidth: showBGLines ? (bgLineWidth ? bgLineWidth.value?.toString() : "1") : "0",
            stroke: bgLineColor ? bgLineColor.value : "#ccc"
        },
        propsForVerticalLabels:{
            fill: verticalLabelColor ? verticalLabelColor.value?.toString() : "#000",
            fontSize: verticalLabelFontSize ? verticalLabelFontSize.value?.toString() : "#000",
            fontWeight: verticalLabelFontWeight ? verticalLabelFontWeight.value?.toString() : "#000"
        },
        propsForHorizontalLabels:{
            fill: horizontalLabelColor ? horizontalLabelColor.value?.toString() : "#000",
            fontSize: horizontalLabelFontSize ? horizontalLabelFontSize.value?.toString() : "#000",
            fontWeight: horizontalLabelFontWeight ? horizontalLabelFontWeight.value?.toString() : "#000"    
        }
    };

    //Calculate width for widget on load
    const onOuterViewLayout = (event: any) => {
        var { width } = event.nativeEvent.layout;
        setChartWidth(width);
    }

    //Function to load the chart
    const loadChart = () => {
        //When all data sources are ready, load chart
        if (data.status != ValueStatus.Available) dataLoaded = false;

        if (dataLoaded) {
            return (
                //Return line char. More options here -> https://github.com/indiespirit/react-native-chart-kit#bar-chart
                <BarChart
                    data={getData()}
                    width={chartWidth}
                    height={chartHeight}
                    chartConfig={chartConfig}
                    style={mergedStyles.lineChart}
                    fromZero={alwaysShowZero}
                    showBarTops={showBarTops}
                    showValuesOnTopOfBars={showValuesOnTopOfBars}
                    horizontalLabelRotation={horizontalLabelRotation}
                    verticalLabelRotation={verticalLabelRotation}
                    withVerticalLabels={showVerticalLabels}
                    withHorizontalLabels={showHorizontalLabels}
                    yAxisLabel=""
                    yAxisSuffix=""
                />)
        }
        else {
            return (null)
        }

    }

    return (
        <View style={mergedStyles.container} onLayout={event => onOuterViewLayout(event)}>
            {loadChart()}
        </View>);
}

const customStyle = () =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        label: {

        },
        lineChart: {

        }
    });