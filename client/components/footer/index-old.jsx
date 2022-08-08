import React from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Footer.module.css';
import tw from 'twin.macro';

const Footer = () => {
    return (
        <>
            <div className={styles["footer_section"]} >
                <div className={styles.container}>
                    <div className={styles["footer_cta pt-5 pb-5"]}>
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className={styles.single_cta}>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className={styles.cta_text}>
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className={styles.single_cta}>
                                    <i className="fas fa-phone"></i>
                                    <div className={styles.cta_text}>
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className={styles.single_cta}>
                                    <i className="far fa-envelope-open"></i>
                                    <div className={styles.cta_text}>
                                        <h4>Mail us</h4>
                                        <span>mail@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["footer_content pt-5 pb-5"]}>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className={styles.footer_widget}>
                                    <div className={styles.footer_logo}>
                                        <a href="#"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className={styles.img_fluid} alt="logo" /></a>
                                    </div>
                                    <div className={styles.footer_text}>
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className={styles.footer_social_icon}>
                                        <span>Follow us</span>
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className={styles.footer_widget}>
                                    <div className={styles.footer_widget_heading}>
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul className='ul'>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className={styles.footer_widget}>
                                    <div className={styles.footer_widget_heading}>
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className={styles["footer_text mb-25"]}>
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className={styles.subscribe_form}>
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright_area}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className={styles.copyright_text}>
                                    <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className={styles.footer_menu}>
                                    <ul className='ul'>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer;