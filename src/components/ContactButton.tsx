import React from 'react';
import { Button, SvgIconProps } from '@mui/material';

interface ContactButtonProps {
    icon: React.ElementType<SvgIconProps>;
    href: string;
    useTarget: boolean;
    text: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
    icon: Icon,
    href,
    useTarget,
    text
}) => {
    return (
        <Button
            variant="outlined"
            startIcon={<Icon />}
            href={href}
            {...(useTarget ?
                { target: "_blank", rel: "noopener noreferrer" } :
                {}
            )}
        >
            {text}
        </Button>
    );
};

export default ContactButton;