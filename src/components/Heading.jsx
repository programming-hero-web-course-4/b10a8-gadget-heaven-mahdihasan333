const Heading = ({ title, subtitle }) => {
  return (
    <div className="space-y-5 text-center">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="font-medium text-base text-white w-2/4 mx-auto">{subtitle}</p>
    </div>
  );
};

export default Heading;
