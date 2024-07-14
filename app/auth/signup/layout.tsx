export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className=" bg-slate-300">

                  {children}
                  </div>
  
    );
  }
  