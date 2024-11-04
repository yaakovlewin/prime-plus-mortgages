import { cn } from "@/lib/utils";

const SectionContainer = ({
  children,
  className,
  containerClassName,
  bgColor,
}) => {
  return (
    <section className={cn("pt-6 sm:pt-8 md:pt-10", bgColor, className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
