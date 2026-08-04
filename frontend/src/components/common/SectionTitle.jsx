function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-medium text-primary">{subtitle}</p>

      <h2 className="mt-2 text-4xl font-bold text-text">{title}</h2>
    </div>
  );
}

export default SectionTitle;
