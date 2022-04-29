import Head from "next/head"
import { Props } from '../../types/types';
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { check_authenticated, load_user, refresh } from "../../hooks/auth";
import Alert from "../notifications/Alert";
import Navbar from "../navigation/navbar/Navbar";

import { motion } from 'framer-motion';
import SidebarUser from '../navigation/user/SidebarUser';
import { get_items } from "../../hooks/cart";
import Footer from "../navigation/footer/Footer";
import { routeAnimation } from "../../animate/animations";

const Layout: React.FC<Props> = ({ title, content, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_authenticated());
    dispatch(load_user());
    dispatch(refresh());
    dispatch(get_items());
  }, [dispatch]);

  const [userOpen, setUserOpen] = useState(false)


  function closeUser() {
    setUserOpen(false)
  }

  function openUser() {
    setUserOpen(!userOpen)
  }



  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Head>
      <motion.main variants={routeAnimation} initial="initial" animate="animate" exit="exit">
        <Navbar openUser={openUser} />

        <div className="bg-plo-100 min-h-screen">
          {children}
        </div>
      </motion.main>

      {
        userOpen ? (<motion.div ><SidebarUser closeUser={closeUser} /></motion.div>) : (<></>)
      }
      <Alert />
      <Footer />

    </>
  )
}


export default Layout