import React from 'react';

import { Container } from './styles';

interface TooltiProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltiProps> = ({
  children,
  className = '',
  title,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
