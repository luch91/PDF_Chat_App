import { ClerkProvider} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className ='min-h-screen overflow-hdden flex
        flex-col'>
          {children}
          </body>
      </html>  
    </ClerkProvider>
  );
}
