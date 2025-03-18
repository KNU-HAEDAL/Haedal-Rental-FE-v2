type Props = {
  className?: string;
  description: string;
  name?: string;
};

export const DescriptionSection = ({
  className,
  description,
  name,
  ...props
}: React.ComponentProps<'p'> & Props) => {
  return (
    <p className={className} {...props}>
      {name ? `${name} ${description}` : description}
    </p>
  );
};
