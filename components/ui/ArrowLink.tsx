interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`text-sm font-inter text-roma-dark hover:text-roma-forest transition-colors inline-flex items-center gap-1.5 group ${className}`}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
