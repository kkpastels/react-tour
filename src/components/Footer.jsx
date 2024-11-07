import React from 'react';
import PageLinks from './PageLinks';
import IconLinks from './IconLinks';

function Footer() {
    const date = new Date().getFullYear();
    return (
                <footer className='section footer'>
                    <PageLinks parentClass='footer-links' itemClass='footer-link' id='' />
                    I<IconLinks parentClass='footer-icons' itemClass='footer-icon'/>
                        <p className='copyright'>
                            Copyright & copy; Travel tours company
                            <span id='date'>{date}</span> all right reserved
                        </p>
                    </footer>    
    );
}
export default Footer;