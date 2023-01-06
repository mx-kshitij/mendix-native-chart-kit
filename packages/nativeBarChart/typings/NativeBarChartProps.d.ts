/**
 * This file was generated from NativeBarChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface NativeBarChartProps<Style> {
    name: string;
    style: Style[];
    data: ListValue;
    labelAttribute: ListAttributeValue<string>;
    valueAttribute: ListAttributeValue<Big>;
    showBGLines: boolean;
    alwaysShowZero: boolean;
    showVerticalLabels: boolean;
    showHorizontalLabels: boolean;
    showBarTops: boolean;
    showValuesOnTopOfBars: boolean;
    chartHeight: number;
    bgFrom: DynamicValue<string>;
    bgTo: DynamicValue<string>;
    bgFromOpacity: Big;
    bgToOpacity: Big;
    strokeWidth: number;
    strokeColor: DynamicValue<string>;
    verticalLabelColor: DynamicValue<string>;
    verticalLabelFontSize: DynamicValue<string>;
    verticalLabelFontWeight: DynamicValue<string>;
    verticalLabelRotation: number;
    horizontalLabelColor: DynamicValue<string>;
    horizontalLabelFontSize: DynamicValue<string>;
    horizontalLabelFontWeight: DynamicValue<string>;
    horizontalLabelRotation: number;
    bgLineColor: DynamicValue<string>;
    bgLineWidth: DynamicValue<string>;
}

export interface NativeBarChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    data: {} | { type: string } | null;
    labelAttribute: string;
    valueAttribute: string;
    showBGLines: boolean;
    alwaysShowZero: boolean;
    showVerticalLabels: boolean;
    showHorizontalLabels: boolean;
    showBarTops: boolean;
    showValuesOnTopOfBars: boolean;
    chartHeight: number | null;
    bgFrom: string;
    bgTo: string;
    bgFromOpacity: number | null;
    bgToOpacity: number | null;
    strokeWidth: number | null;
    strokeColor: string;
    verticalLabelColor: string;
    verticalLabelFontSize: string;
    verticalLabelFontWeight: string;
    verticalLabelRotation: number | null;
    horizontalLabelColor: string;
    horizontalLabelFontSize: string;
    horizontalLabelFontWeight: string;
    horizontalLabelRotation: number | null;
    bgLineColor: string;
    bgLineWidth: string;
}
