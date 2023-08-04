import { useState, ReactNode } from 'react';
import Button from 'react-bootstrap/Button';

interface GrowButtonProps {
    children: ReactNode | ReactNode[];
    variant: string;
    type?: 'button' | 'submit' | 'reset';
    start?: string;
    end?: string;
    length?: string;
}

function GrowButton({ children, variant, type, start = '150px', end = '200px', length = '0.4' }: GrowButtonProps) {
    const [hovered, setHovered] = useState(false)

    const style = {
        transition: `${length}s`,
        width: !hovered ? start : end,
    }

    return (
        <Button style={style} variant={variant} type={type} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
            {children}
        </Button>
    )
}

export default GrowButton