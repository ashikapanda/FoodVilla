import { useEffect, useState } from "react";

const Section = ({ title, description, visible, setVisible }) => {
  return (
    <div className=" border border-black p-2 m-2">
      <p className="font-bold">{title}</p>

      {
        <button
          onClick={() => {
            setVisible(!visible);
          }}
          className="font-semibold text-orange-400 underline"
        >
          {visible ? "hide" : "show"}
        </button>
      }
      {visible && <p>{description}</p>}
    </div>
  );
};
const LazyComponent = () => {
  const [visibleSection, setvisibleSection] = useState("");
  console.log("visible sectiom", visibleSection);
  return (
    <div
      style={{
        backgroundColor: "#eee7dd",
        padding: "5px",
        margin: "10px",
      }}
    >
      <p>
        We should dynamically import heavy components whenever needed so that
        heavy applications are bundled logically and loads only when required{" "}
      </p>
      <p>
        When we are dynamically bundling the components, it takes some time and
        React tries to render it asap and react suspends the rendering process
      </p>
      <Section
        title="ABOUT"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        visible={visibleSection === "ABOUT"}
        setVisible={(val) => {
          setvisibleSection(val ? "ABOUT" : "");
        }}
      />
      <Section
        title="TEAM"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        visible={visibleSection === "TEAM"}
        setVisible={(val) => {
          setvisibleSection(val ? "TEAM" : "");
        }}
      />
      <Section
        title="CAREER"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        visible={visibleSection === "CAREER"}
        setVisible={(val) => setvisibleSection(val ? "CAREER" : "")}
      />
    </div>
  );
};

export default LazyComponent;
