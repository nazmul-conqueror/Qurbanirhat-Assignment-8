
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { Toaster } from 'sonner';


const MainLayout = ({children}) => {
    return (
       <>
       <Navbar/>
     
       <main className='container mx-auto grow'>{children}</main>
       <Toaster/>
      <Footer/>
       </>
    );
};

export default MainLayout;
