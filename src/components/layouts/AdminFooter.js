import React from "react";

export default function AdminFooter() {
  const footerStyles = {
    footer: {
      backgroundColor: "#2b2d42",
      color: "#edf2f4",
      padding: "20px 0",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "auto",
      padding: "0 20px",
    },
    section: {
      flex: 1,
      margin: "10px 20px",
    },
    logo: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#edf2f4",
    },
    logoHighlight: {
      color: "#ef233c",
    },
    about: {
      margin: "10px 0",
      fontSize: "14px",
      lineHeight: "1.6",
    },
    linksList: {
      listStyle: "none",
      padding: 0,
    },
    linkItem: {
      margin: "8px 0",
    },
    link: {
      color: "#edf2f4",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    linkHover: {
      color: "#ef233c",
    },
    contactList: {
      listStyle: "none",
      padding: 0,
    },
    socialIcons: {
      margin: "0 10px",
      color: "#edf2f4",
      fontSize: "20px",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    bottom: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "14px",
      borderTop: "1px solid #edf2f4",
      paddingTop: "10px",
    },
  };

  return (
    <>
      <footer style={footerStyles.footer}>
        <div style={footerStyles.container}>
          {/* Logo and About Section */}
          <div style={footerStyles.section}>
            <h2 style={footerStyles.logo}>
              Medi<span style={footerStyles.logoHighlight}>Care</span>
            </h2>
            <p style={footerStyles.about}>
              MediCare is committed to providing high-quality healthcare products and services.
              Our inventory management system ensures efficiency and transparency for all stakeholders.
            </p>
          </div>

          {/* Quick Links Section */}
          <div style={footerStyles.section}>
            <h3>Quick Links</h3>
            <ul style={footerStyles.linksList}>
              <li style={footerStyles.linkItem}>
                <a style={footerStyles.link} href="/about">About Us</a>
              </li>
              <li style={footerStyles.linkItem}>
                <a style={footerStyles.link} href="/services">Services</a>
              </li>
              <li style={footerStyles.linkItem}>
                <a style={footerStyles.link} href="/contact">Contact Us</a>
              </li>
              <li style={footerStyles.linkItem}>
                <a style={footerStyles.link} href="/privacy-policy">Privacy Policy</a>
              </li>
              <li style={footerStyles.linkItem}>
                <a style={footerStyles.link} href="/terms-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div style={footerStyles.section}>
            <h3>Contact Us</h3>
            <ul style={footerStyles.contactList}>
              <li><i className="la la-map-marker"></i> 123 Healthcare Street, MediCity</li>
              <li><i className="la la-phone"></i> +1 (800) 555-1234</li>
              <li><i className="la la-envelope"></i> support@medicare.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div style={footerStyles.section}>
            <h3>Follow Us</h3>
            <div>
              <a style={footerStyles.socialIcons} href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="la la-facebook"></i>
              </a>
              <a style={footerStyles.socialIcons} href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="la la-twitter"></i>
              </a>
              <a style={footerStyles.socialIcons} href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="la la-instagram"></i>
              </a>
              <a style={footerStyles.socialIcons} href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="la la-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div style={footerStyles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} MediCare. All Rights Reserved. Made with{" "}
            <i className="la la-heart text-danger"></i> by{" "}
            <a href="#">Relebohile Molapo</a>.
          </p>
        </div>
      </footer>
    </>
  );
}
