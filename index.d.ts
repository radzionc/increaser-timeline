import * as React from "react"

export interface Theme {
  textColor: string;
  backgroundColor: string
}

export interface Set {
  start: number;
  end: number;
  color: string;
}

export interface Props {
  wrapper: React.Component;
  sets: Set[];
  offset?: number;
  minHours: number;
  theme: Theme
}

declare class TimeLine extends React.Component<Props, any> {}

export default TimeLine