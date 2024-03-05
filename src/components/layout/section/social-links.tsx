import React from "react";
import { Link } from "gatsby";

import Facebook from '@assets/images/facebook.svg';
import Instagram from '@assets/images/instagram.svg';
import Linkedin from '@assets/images/linkedin.svg';

interface SocialLinksProps {
    className?: string;
}

export const SocialLinks = (props: SocialLinksProps) => (
    <div className={`flex ${props.className}`}>
        <Link to="/" className="mr-6">
            <Facebook />
        </Link>
        <Link to="/" className="mr-6">
            <Instagram  />
        </Link>
        <Link to="/" className="mr-6">
            <Linkedin  />            
        </Link>
    </div>
);

