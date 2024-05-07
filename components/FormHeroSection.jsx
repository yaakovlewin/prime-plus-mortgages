const FormHeroSection = ({ children }) => {
  return (
    <div className={`bg-sky-100 py-8 heropattern-brickwall-sky-600/10`}>
      <div className="container mx-auto px-4 text-center">{children}</div>
    </div>
  );
};
export default FormHeroSection;
