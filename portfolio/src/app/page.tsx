"use client";

import Image from 'next/image'
import Sidebar from '@/components/sidebar/sidebar'
import { redirect } from 'next/dist/server/api-utils';
import styles from './page.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Home() {
   const router = useRouter();

   
    return router.push('/home');

  
}
