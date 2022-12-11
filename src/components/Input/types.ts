import React from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: any;
    leftIcon?: React.ReactNode;
    errorMessage?: string;
}