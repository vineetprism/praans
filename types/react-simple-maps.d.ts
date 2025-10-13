declare module "react-simple-maps" {
  import * as React from "react";

  export interface ComposableMapProps
    extends React.SVGAttributes<SVGSVGElement> {
    projection?: string | ((...args: any[]) => any);
    projectionConfig?: Record<string, any>;
    width?: number;
    height?: number;
    preserveAspectRatio?: string;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;

  export interface GeographyProps {
    geography: any;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: Record<string, any>;
  }
  export const Geography: React.FC<GeographyProps>;

  export interface GeographiesProps {
    geography: string | object;
    children?: (params: { geographies: any[] }) => React.ReactNode;
  }
  export const Geographies: React.FC<GeographiesProps>;

  export interface MarkerProps {
    coordinates: [number, number];
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void;
  }
  export const Marker: React.FC<MarkerProps>;

  export interface AnnotationProps {
    subject: [number, number];
    dx?: number;
    dy?: number;
    connectorProps?: Record<string, any>;
    children?: React.ReactNode;
  }
  export const Annotation: React.FC<AnnotationProps>;
}


