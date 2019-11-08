import React, { useState, useEffect } from "react";

import { Container, DropdownContainer } from "./styles";

export default function MenuDropdown({ initialToggle = false, children }) {
  const [toggle, setToggle] = useState(initialToggle);
  const menuRef = React.useRef(null);

  function handleChangeToggle() {
    setToggle(!toggle);
  }

  function onBlur(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggle(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", onBlur);

    return () => {
      document.removeEventListener("mousedown", onBlur);
    };
  });

  return (
    <Container onClick={handleChangeToggle} ref={menuRef}>
      <DropdownContainer isVisible={toggle}>{children}</DropdownContainer>
    </Container>
  );
}

MenuDropdown.displayName = "MenuDropdown";
