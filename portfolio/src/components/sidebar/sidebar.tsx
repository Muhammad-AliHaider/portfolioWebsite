// components/Sidebar.tsx
"use client";

import React, { useState } from 'react';

import Image from 'next/image';
import cn from "classnames";
import logo from './assets/logo.png';
import styles from './style.module.sass';

export interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({activeTab , setActiveTab}) => {
    // const [activeTab, setActiveTab] = useState('tab1');

    const tabs : SidebarTabsProps[] = [
        {name: 'Introduction', activeTab: 'tab1'},
        {name: 'Experience', activeTab: 'tab2'},
        {name: 'Projects', activeTab: 'tab3'},
        {name: 'Education', activeTab: 'tab4'}
    ]

    const handleClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.sidebar}>
            <div className= {styles.logoContainer}>
            <Image src={logo} alt="Logo"  className={cn(styles.logo)} />
            </div>
            
            <div className = {cn(styles.gradientDivider)}/>
            <ul className={styles.navList}>
                {
                    tabs.map((tab, index) => (
                        index != tabs.length-1 ? 
                            <>
                        <li key={index} className={activeTab === tab.activeTab ? styles.active : ''} onClick={() => handleClick(tab.activeTab)}>
                            {tab.name}
                        </li>
                        <div className = {cn(styles.divider)}/>
                        </>
                        : 
                        <li key={index} className={activeTab === tab.activeTab ? styles.active : ''} onClick={() => handleClick(tab.activeTab)}>
                            {tab.name}
                        </li>
                    ))
                }
            </ul>
            <div className = {cn(styles.gradientDivider)}/>

            <div className = {cn(styles.ContactBlock)}>
                <h1 className={cn(styles.ContentHeading)}>
                    Contact Information
                </h1>
                <p className={cn(styles.ContentSubHeading)}>
                    <b>Email:</b> muhammadalihaider0001@gmail.com<a href="mailto: muhammadalihaider0001@gmail.com"/>
                </p>
                <p className={cn(styles.ContentSubHeading)}>
                    <b>Phone:</b> +923101046849
                </p>

                <p className={cn(styles.Copyright)}>
                Copyright © 2024 Muhammad Ali Haider. All Rights Reserved.
                </p>
                
            </div>
            
        </div>
    );
}

export default Sidebar;
