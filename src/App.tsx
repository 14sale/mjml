import React, { useState } from "react";
import { Radio } from "antd";
import MjmlRenderer from "./components/mjml";
import "./styles.css";

export default function App() {
  const [mode, setMode] = useState<"pc" | "mobile">("pc");
  return (
    <div className="App">
      <h2>Mjml & React Demo</h2>
      <main>
        <section style={{ marginBottom: "15px" }}>
          <h3>Toggle client mode</h3>
          <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
            <Radio value="mobile">Mobile</Radio>
            <Radio value="pc">PC</Radio>
          </Radio.Group>
        </section>
        <section>
          <MjmlRenderer mode={mode} />
        </section>
      </main>
    </div>
  );
}
