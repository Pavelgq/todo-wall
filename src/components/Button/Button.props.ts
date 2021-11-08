import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearence: 'primary'| "ghost";
    arrow?: 'right' | 'down' | 'none';
}