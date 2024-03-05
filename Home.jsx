import React from 'react';
import plantImage from './assets/plant.jpeg';

export default function Home() {
    return (
        <div style={styles.container} className="header">
            <div className="header" style={styles.header}>
                <h1>Welcome to Our Plant Nursery</h1>
                <p>Discover a wide variety of plants to beautify your home and garden!</p>
                <img src={plantImage} alt="Plant Nursery" style={styles.image} />
            </div>    
        </div> 
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        textAlign: 'center',
        marginBottom: '40px',
        
    },
    image: {
        innerHeight:'100%',
        width: '75%',
         
       
        
    },
  
};