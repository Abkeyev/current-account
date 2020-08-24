import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccToggleButton,
  BccToggleButtonGroup,
  BccLink,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
  BccTabs,
  BccTab,
} from "./BccComponents";
import { Calculator } from "./";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "100%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            width: "70%",
            margin: "0 auto",
          },
          "&  > video": {
            width: "70%",
            margin: "0 auto",
          },
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "& > button": {
            maxWidth: "100%",
            "& > span": {
              whiteSpace: "nowrap",
            },
          },
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        "& > div": {
          width: "100%",
        },
      },
      qr: {
        "& > img": {
          width: "50%",
        },
      },
      mobileLinks: {
        marginRight: 6,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            display: "block",
            width: 120,
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          width: "50%",
          borderRadius: "100px!important",
          border: "none",
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
      item3: {
        display: "flex",
        width: "100%",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        marginBottom: 50,
        "& > img": {
          marginBottom: 42,
          marginRight: 24,
          height: 60,
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#FAFAFA",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 140px",
      },
      title: {
        marginBottom: 46,
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
    },
  })
);

const Documents = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block className={classes.title}>
          Перечень документов для открытия текущего счета:
        </BccTypography>
        <Grid container justify="space-between" className={classes.docs}>
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
            <BccLink
              target="_blank"
              href="https://docs.google.com/document/d/1e1dV5eJsHGwK1g55nVI39Is51ONRJ3pd45GMk1KQLwQ/edit"
            >
              Для индивидуальных предпринимателей, лиц, занимающихся частной
              практикой
            </BccLink>
          </Grid>
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
            <BccLink
              target="_blank"
              href="https://docs.google.com/document/d/1e1dV5eJsHGwK1g55nVI39Is51ONRJ3pd45GMk1KQLwQ/edit"
            >
              Для юридических лиц
            </BccLink>
          </Grid>
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
            <BccLink
              target="_blank"
              href="https://docs.google.com/document/d/1e1dV5eJsHGwK1g55nVI39Is51ONRJ3pd45GMk1KQLwQ/edit"
            >
              Для филиалов и представительств юридических лиц-резидентов
            </BccLink>
          </Grid>
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
            <BccLink
              target="_blank"
              href="https://docs.google.com/document/d/1e1dV5eJsHGwK1g55nVI39Is51ONRJ3pd45GMk1KQLwQ/edit"
            >
              Для юридических лиц-нерезидентов
            </BccLink>
          </Grid>
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
            <BccLink
              target="_blank"
              href="https://docs.google.com/document/d/1e1dV5eJsHGwK1g55nVI39Is51ONRJ3pd45GMk1KQLwQ/edit"
            >
              Для филиалов и представительств юридических лиц-нерезидентов
            </BccLink>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Documents;
