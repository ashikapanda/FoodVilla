import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { fetchData } from "../utils/utility";
import { HELP_DATA_API } from "../common/constants";
import PanelData from "./PanelData";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`help-panel-${index}`}
      aria-labelledby={`help-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4, width: "60%" }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const HelpComponent = () => {
  const [value, setValue] = useState(0);
  const [helpTabs, setHelpTabs] = useState(null);
  const [tabData, setTabData] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    fetchData(`${HELP_DATA_API}?`).then((res) => {
      setHelpTabs(res);
    });
  }, []);

  useEffect(() => {
    if (helpTabs) {
      fetchData(
        `${HELP_DATA_API}/issues/${helpTabs?.data?.issueTypes?.data[value].type}`
      ).then((res) => {
        setTabData(res?.data?.issues?.data);
      });
    }
  }, [value, helpTabs]);

  console.log("tab", tabData);
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
        style={{ overflow: "visible" }}
      >
        {helpTabs?.data?.issueTypes?.data.map((item) => (
          <Tab label={item.title} id={item.type} key={item.type} />
        ))}
      </Tabs>
      {tabData &&
        helpTabs?.data?.issueTypes?.data.map((item, index) => (
          <TabPanel index={index} value={value} key={item.type}>
            <PanelData data={tabData} />
          </TabPanel>
        ))}
    </Box>
  );
};

export default HelpComponent;
