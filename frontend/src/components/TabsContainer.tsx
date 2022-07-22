// material ui
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TabsContainerProps {
  tabsData: any;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

// ally props for tabs
const a11yProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const TabsContainer: React.FC<TabsContainerProps> = ({
  tabsData,
  value,
  setValue,
}) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Horizontal tabs example"
      sx={{
        width: "100%",
        borderRight: 3,
        borderColor: "divider",
        minWidth: "200px",
      }}
    >
      {tabsData?.map((tab: any) => (
        <Tab
          key={tab.index}
          sx={{ padding: "30px 0px" }}
          label={tab.label}
          {...a11yProps(tab.index)}
        />
      ))}
    </Tabs>
  );
};

export default TabsContainer;
