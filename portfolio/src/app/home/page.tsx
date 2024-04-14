import ContentFrame from "@/components/ContentFrame/contentFrame";
import PicFrame from "@/components/pictureFrame/picFrame";
import Sidebar from "@/components/sidebar/sidebar";
import cn from 'classnames';
import styles from './style.module.sass';

export default  function Homepage(){
    return (
        <div className={cn(styles.bgContainer)} > 
            <div className = {cn(styles.centerDiv)}>
            <Sidebar/>
            <PicFrame/>
            <ContentFrame/>
            </div>
        </div>
    );
}