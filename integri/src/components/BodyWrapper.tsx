import React, { type ReactNode } from 'react';
type BodyWrapperProps = {
    className?: string;
};

const BodyWrapper = ({ className = '', children }: React.PropsWithChildren<BodyWrapperProps>) => {
    return (
        <div className={`font-montserrat  overflow-y-auto h-screen     ${className}`}>
            {children}
        </div>
    );
};

export default BodyWrapper;
