export function FloatingParticles() {
  return (
    <ul className="particles">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i} />
      ))}
    </ul>
  );
}
