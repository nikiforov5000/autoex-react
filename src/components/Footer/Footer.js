import React from "react";
import footerData from '../../data/footer.json';

const Footer = () => {
    return (
        <div>
            {footerData.title}
            {footerData.phone}
            {footerData.email}
            {footerData.text}
        </div>
    );
};

export default Footer;