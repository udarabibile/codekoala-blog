import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

var styles = {
  icon : { height: 30, marginRight: '10px' },
  icon_mobile : { height: 20 },

  logo : (fill) =>{ return { color: fill, fontFamily: 'NOVA', fontSize: '40px' } } ,
  logo_mobile : (fill) =>{ return { color: fill, fontFamily: 'NOVA', fontSize: '20px' } } ,
};

const Logo = ({ fill = "#fff" }) => {
  return (
    <LogoContainer>
      <p style={{ color: fill, fontFamily: 'NOVA', fontSize: '40px' }}>
        <img src="koala.png" className="Logo__Desktop" style={styles.icon}></img>
        <img src="koala.png" className="Logo__Mobile" style={styles.icon_mobile}></img>
        <span className="Logo__Desktop" style={styles.logo(fill)}>CODE KOALA</span>
        <span className="Logo__Mobile" style={styles.logo_mobile(fill)}>CODE KOALA</span>
      </p>
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;