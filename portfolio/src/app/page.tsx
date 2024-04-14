'use client';

import React, {useState} from 'react';

import ContentFrame from "@/components/ContentFrame/contentFrame";
import PicFrame from "@/components/pictureFrame/picFrame";
import Sidebar from "@/components/sidebar/sidebar";
import cn from 'classnames';
import styles from './style.module.sass';

export default  function Homepage(){

    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className={cn(styles.bgContainer)} > 
            <div className = {cn(styles.centerDiv)}>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
            <PicFrame/>
            <ContentFrame  tabActive={activeTab} />
            </div>
            <div className= {cn(styles.enable404)}>
                <h1 className={cn(styles.contentHeading)}>
                    404
                </h1>
                <p className={cn(styles.contentText)}>
                    Sorry the page is not available for this screen size, kindly Zoom out 
                </p>
            </div>
        </div>
    );
}