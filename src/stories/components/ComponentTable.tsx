import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tableVariants = cva("w-full border-collapse", {
  variants: {
    variant: {
      default: "border border-gray-200",
      bordered: "border-2 border-gray-300",
      striped: "border border-gray-200 [&_tbody_tr:nth-child(even)]:bg-gray-50",
      hoverable: "border border-gray-200 [&_tbody_tr:hover]:bg-gray-100",
    },
    size: {
      default: "text-sm",
      sm: "text-xs",
      lg: "text-base",
      xl: "text-lg",
    },
    color: {
      default: "bg-white text-gray-900",
      primary: "bg-blue-50 text-blue-900",
      secondary: "bg-gray-50 text-gray-900",
      accent: "bg-purple-50 text-purple-900",
    },
    rounded: {
      true: "rounded-lg overflow-hidden",
      false: "",
    },
    headerColor: {
      default: "[&_thead]:bg-gray-100",
      yellow: "[&_thead]:bg-yellow-100",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "default",
    rounded: false,
    headerColor: "default",
  },
});

export interface ComponentTableProps
  extends VariantProps<typeof tableVariants> {
  className?: string;
  data?: string[][];
  headers?: string[];
}

const ComponentTable: React.FC<ComponentTableProps> = ({
  className,
  variant,
  size,
  color,
  rounded,
  headerColor,
  data,
  headers,
}) => {
  return (
    <table
      className={cn(
        tableVariants({ variant, size, color, rounded, headerColor, className })
      )}
    >
      {headers && (
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="p-2 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComponentTable;
