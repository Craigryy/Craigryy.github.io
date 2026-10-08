import { faGithub, faLinkedin, faXTwitter, faMedium, faInstagram, faSpotify, faYoutube, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// The "network" chosen in the admin picks the icon.
const icons = { github: faGithub, linkedin: faLinkedin, x: faXTwitter, twitter: faXTwitter, medium: faMedium, instagram: faInstagram, spotify: faSpotify, youtube: faYoutube, tiktok: faTiktok, facebook: faFacebook };
export const socialIcon = (network) => icons[network] || faGlobe;
