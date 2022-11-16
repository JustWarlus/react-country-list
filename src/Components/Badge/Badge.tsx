import React from "react";

interface IBadgeProps {
  badgeLabel: string;
  value: number;
  color: string;
}

export const Badge = ({ badgeLabel, value, color }: IBadgeProps) => {
  return (
    <span className={`badge text-bg-${color} col`}>
      {badgeLabel}: {value}
    </span>
  );
};
