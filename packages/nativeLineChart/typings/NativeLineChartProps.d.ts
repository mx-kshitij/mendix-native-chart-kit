/**
 * This file was generated from NativeLineChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface DataListType {
    data: ListValue;
    dataAttribute: ListAttributeValue<Big | Date>;
    indentifier: DynamicValue<string>;
    legend: DynamicValue<string>;
    color: DynamicValue<string>;
}

export interface DataListPreviewType {
    data: {} | { type: string } | null;
    dataAttribute: string;
    indentifier: string;
    legend: string;
    color: string;
}

export interface NativeLineChartProps<Style> {
    name: string;
    style: Style[];
    labelsData: ListValue;
    labelAttribute: ListAttributeValue<Big | string | Date>;
    dataList: DataListType[];
    showBGLines: boolean;
    bezier: boolean;
    alwaysShowZero: boolean;
    showDots: boolean;
    showYAxisInteger: boolean;
    showVerticalLabels: boolean;
    showHorizontalLabels: boolean;
    segmentCount: DynamicValue<string>;
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
    onSelectAction?: ActionValue;
    selectedDataset?: EditableValue<string>;
    selectedPointIndex?: EditableValue<Big>;
}

export interface NativeLineChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    labelsData: {} | { type: string } | null;
    labelAttribute: string;
    dataList: DataListPreviewType[];
    showBGLines: boolean;
    bezier: boolean;
    alwaysShowZero: boolean;
    showDots: boolean;
    showYAxisInteger: boolean;
    showVerticalLabels: boolean;
    showHorizontalLabels: boolean;
    segmentCount: string;
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
    onSelectAction: {} | null;
    selectedDataset: string;
    selectedPointIndex: string;
}
