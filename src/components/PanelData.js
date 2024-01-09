const PanelData = (props) => {
  console.log("props", props);
  return (
    <div className="panel-data">
      {props.data.map((panel) => (
        <div key={panel.id}>
          <p style={{ fontWeight: "bolder" }}>{panel?.title}</p>
          <a href={panel?.hyperLink}>{panel?.hyperLinkText}</a>
          <p>{panel?.description}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default PanelData;
