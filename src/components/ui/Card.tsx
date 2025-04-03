import React from "react";
import { Card as AntdCard } from "antd";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Card = ({ children, onClick }: CardProps) => {
  return (
    <AntdCard 
      hoverable 
      onClick={onClick}
      style={{ marginBottom: 16 }}
    >
      {children}
    </AntdCard>
  );
};

export default Card;