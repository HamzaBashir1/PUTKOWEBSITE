import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from './context/AuthContext.js'
import { ToastContainer } from "./Nexttoast";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Putko",
  description: "Hotel and Apartment Booking Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <AuthContextProvider>
        
          {/* <Header/> */}
            {children}
            <ToastContainer
              theme="dark"
              position="top-right"
              autoClose={10000}
              closeOnClick
              pauseOnHover={false}
            />
          <Footer/>
          </AuthContextProvider>
      </body>
      
    </html>
  );
}
