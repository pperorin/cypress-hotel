import { Button, Row, Typography } from "antd";
import { useState } from "react";

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
    <Row style={{ justifyContent: "space-around", marginTop: "200px" }}>
      <Button type="primary" onClick={incrementCount} id="plus">
        +
      </Button>
      <Typography id="count">{count}</Typography>
      <Button type="primary" onClick={decrementCount} id="minus">
        -
      </Button>
    </Row>
  );
};
