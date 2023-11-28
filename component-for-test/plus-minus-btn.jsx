import { Button, Row, Typography } from "antd";
import { useState } from "react";

import "../public/style.css";

export const PlusMinusButton = () => {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  return (
    <Row className="space-btw">
      <Button type="primary" onClick={incrementCount}>
        +
      </Button>
      <Typography>{count}</Typography>
      <Button type="primary" onClick={decrementCount}>
        -
      </Button>
    </Row>
  );
};
