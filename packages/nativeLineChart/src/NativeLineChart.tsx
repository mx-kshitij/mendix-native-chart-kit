import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HelloWorld } from "./components/HelloWorld";
import { NativeLineChartProps } from "../typings/NativeLineChartProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function NativeLineChart({ style, yourName }: NativeLineChartProps<CustomStyle>): ReactElement {
    return <HelloWorld name={yourName} style={style} />;
}
