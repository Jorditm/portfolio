import React from "react";
import styled from "@emotion/styled";

const MaintenanceContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  color: white;
  font-size: 25px;
`;
const IMG = styled.img`
  width: 150px;
`;

//version 2.0 -> instalo styled component para añadir la pagina de mantenimiento

const Maintenance = () => {
  return (
    <MaintenanceContainer>
      <IMG src="/images/image.png" alt="img" />
      <div>Web in maintenance</div>
    </MaintenanceContainer>
  );
};

export default Maintenance;
