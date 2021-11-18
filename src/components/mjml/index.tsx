import React from "react";
import {
  render,
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlImage
} from "mjml-react";

interface MjmlRendererProps {
  mode: "mobile" | "pc";
}

const MjmlRenderer: React.FC<MjmlRendererProps> = ({ mode = "mobile" }) => {
  const { html } = render(
    <Mjml>
      <MjmlBody>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText fontFamily="impact" align="center">
              On your left
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlText fontFamily="impact" align="center">
              On your right
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText fontFamily="impact">
              <p style={{ textAlign: "center" }}>A D V E N T U R E</p>
              <p>Views of Mt Fuji</p>
              <p>
                Escape the city and spend time in nature enjoying views of the
                iconic Mt Fuji.
              </p>
            </MjmlText>
            <MjmlText fontFamily="impact">
              <p style={{ textAlign: "center" }}>A D V E N T U R E</p>
              <p>Views of Mt Fuji</p>
              <p>
                Escape the city and spend time in nature enjoying views of the
                iconic Mt Fuji.
              </p>
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn>
            <MjmlImage src="https://xmh8v.mjt.lu/tplimg/xmh8v/b/0x23j/gs7nl.jpeg" />
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );

  const mobileProps = { width: 375, height: 812 };
  const pcProps = { width: "100%", height: 768 };

  return (
    <>
      <iframe
        title="mjml-demo"
        frameBorder="none"
        srcDoc={html}
        style={{
          border: "1px solid #eeeeee",
          borderRadius: "10px"
        }}
        {...(mode === "mobile" ? mobileProps : pcProps)}
      ></iframe>
    </>
  );
};

export default MjmlRenderer;
