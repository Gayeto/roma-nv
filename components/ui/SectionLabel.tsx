interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`text-xs font-inter text-roma-gray tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}
