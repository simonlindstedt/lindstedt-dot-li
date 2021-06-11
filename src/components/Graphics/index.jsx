import React from "react";
import Pixi from "./pixi";
import { StyledPixiContainer } from "./styles";

const Graphics = () => {
  const pixiContainerRef = React.useRef();
  React.useEffect(() => {
    const pixi = new Pixi(pixiContainerRef.current);
    pixi.start();
  }, []);
  return <StyledPixiContainer ref={pixiContainerRef} />;
};

export default Graphics;
