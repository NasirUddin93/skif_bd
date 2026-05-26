import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col",
        centered ? "items-center text-center" : "items-start",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4 mb-2">
        {!centered && <div className="w-12 h-1 bg-crimson" />}
        <h2
          className={cn(
            "heading-section",
            light ? "text-white" : "text-navy"
          )}
        >
          {title}
        </h2>
        {!centered && <div className="hidden sm:block w-full max-w-[200px] h-[1px] bg-border-light/50 ml-4" />}
      </div>
      
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg max-w-2xl mt-2",
            light ? "text-white/70" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
      
      {centered && (
        <div className="w-16 h-1 bg-crimson mt-4 mx-auto" />
      )}
    </div>
  );
}
