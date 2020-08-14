import Tab from "@material-ui/core/Tab";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const BccTab = withStyles({
  root: {
    color: "#4D565F",
    textTransform: "none",
    letterSpacing: "0",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "left",
    minWidth: "auto",
    padding: 0,
    marginRight: 30,
    "&.MuiTab-textColorInherit.Mui-selected": {
      color: "#000D1A",
    },
    "&:last-child": {
      marginRight: 0,
    },
    "& a": {
      textDecoration: "inherit",
      color: "inherit",
    },
  },
})((props: any) => <Tab disableRipple disableFocusRipple {...props} />);

export default BccTab;
