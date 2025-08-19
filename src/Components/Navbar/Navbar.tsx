import React from 'react'
import {Text} from '../Text/Text';
import styles from './Navbar.module.css'
import searchIcon from '../../assets/search.png'

type NavbarProps={

    showLinkForm?: () => void,
    setSearchTerm?:(term:string)=> void
 
}
export const Navbar: React.FC<NavbarProps> = ({showLinkForm,setSearchTerm}) => {

   
  return (
   <nav>
        
       
         
        

          
            <Text variant={'h2'} className={styles.logo}> Link Vault </Text>
       
        <div className={styles['search-bar']}>
             <Text variant={'span'} style={{color:'rgb(20,20,20)',padding:10}}>Search</Text>
             <input  type="text"
                     className={styles["search-input"]}
                     placeholder="Title, url, description, tag"
                      onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}/>

             <img src={searchIcon} alt='search icon' className={styles['search-icon']}/>
        </div> 
            <div className={styles.links}>
                <span className={styles.link} onClick={showLinkForm}>Add A Link</span>
             
            </div>

        
            
        

   </nav>
  )
}