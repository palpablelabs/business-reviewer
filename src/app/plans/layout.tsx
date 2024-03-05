export default function PlansLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex items-center justify-center mt-5 p-5">
      {children}
    </section>
  );
}
