export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex items-center justify-center mt-8 p-5">
      {children}
    </section>
  );
}
