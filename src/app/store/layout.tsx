export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex md:flex-row flex-col h-screen w-screen">
        {children}
    </div>
  );
}