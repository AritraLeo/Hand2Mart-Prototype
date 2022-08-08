import React from "react";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const SocialIcons = ({ Icons }) => {
    return (
        <div className="text-teal-500">
            {Icons.map((icon) => (
                <span
                    key={icon.name}
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
                >
                    {/* <ion-icon name={icon.name}></ion-icon> */}
                    {(icon.name === 'logo-facebook') &&
                        <BsFacebook onClick={() => window.open(`${icon.link}`, '_blank')} />
                    }
                    {(icon.name === "logo-youtube") &&
                        <BsYoutube onClick={() => window.open(`${icon.link}`, '_blank')} />
                    }
                    {(icon.name === "logo-twitter") &&
                        <BsTwitter onClick={() => window.open(`${icon.link}`, '_blank')} />
                    }
                    {(icon.name === "logo-instagram") &&
                        <BsInstagram onClick={() => window.open(`${icon.link}`, '_blank')} />
                    }
                    {(icon.name === "logo-linkedin") &&
                        <BsLinkedin onClick={() => window.open(`${icon.link}`, '_blank')} />
                    }
                </span>
            ))}
        </div>
    );
};

export default SocialIcons;