import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const loginCardVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-background border-border",
      outline: "bg-transparent border-2",
      ghost: "border-none shadow-none",
      elevated: "border-none shadow-lg",
    },
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface LoginCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loginCardVariants> {
  title?: string;
  description?: string;
}

const LoginCard = React.forwardRef<HTMLDivElement, LoginCardProps>(
  (
    { className, variant, size, title, description, children, ...props },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(loginCardVariants({ variant, size, className }))}
        {...props}
      >
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Login</Button>
        </CardFooter>
      </Card>
    );
  }
);
LoginCard.displayName = "LoginCard";

export { LoginCard, loginCardVariants };
