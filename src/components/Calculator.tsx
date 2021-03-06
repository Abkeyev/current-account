import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccChip,
  BccCard,
  BccInput,
  BccSlider,
  BccButton,
  BccCheckbox,
} from "./BccComponents";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    calc: {
      boxSizing: "border-box",
      width: "100%",
      position: "relative",
      top: -40,
      padding: 20,
      backgroundColor: "#FFFFFF",
      borderRadius: 8,
      ["@media (max-width:600px)"]: {
        top: 'initial',
      },
    },
    chip: {
      marginBottom: 20,
      "& > div": {
        marginRight: 8,
      },
      "& > div:last-child": {
        marginRight: 0,
      },
    },
    calcTitle: {
      marginBottom: 20,
    },
    paymentWrap: {
      position: "relative",
      marginBottom: 40,
    },
    sliderWrap: {
      position: "relative",
      width: "100%",
    },
    sliderRange: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -20,
      color: "#b3b6ba",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
    },
    calcContent: {
      ["@media (max-width:600px)"]: {
        flexWrap: 'wrap'
      },
      "& > div:first-child": {
        width: "calc(65% - 12px)",
        ["@media (max-width:600px)"]: {
          width: "100%",
          marginBottom: 12
        },
      },
      "& > div:last-child": {
        width: "calc(35% - 12px)",
        backgroundColor: "#FAFAFA",
        padding: 20,
        borderRadius: 8,
        ["@media (max-width:600px)"]: {
          width: "100%",
        },
      },
    },
    input: {
      display: "block",
      width: "100%",
      "& > div": {
        width: "inherit",
      },
    },
    calcTitleCount: {
      marginBottom: 12,
    },
    cardsText: {
      "& > div": {
        marginBottom: 12,
        width: "100%",
        "& > span:last-child": {
          float: "right",
        },
        "& > span.total": {
          float: "none",
        },
        "& > span:first-child": {
          float: "none",
        },
      },
    },
    calcBtn: {
      marginBottom: 12,
    },
    checkboxText: {
      "& > div": {
        marginRight: 20,
      },
    },
  })
);

const Calulator = () => {
  const classes = useStyles({});
  const [sum, setSum] = React.useState<string>("2500000");
  const [period, setPeriod] = React.useState("30");
  const { t } = useTranslation();
  return (
    <div className={classes.calc}>
      <Grid
        container
        justify="space-between"
        wrap="nowrap"
        className={classes.calcContent}
        alignItems="center"
      >
        <Grid item>
          <div className={classes.paymentWrap}>
            <div className={classes.sliderWrap}>
              <BccInput
                label={t("lks.4sum")}
                key="sum"
                value={`${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${
                  sum !== "" ? " ₸" : ""
                }`}
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                onFocus={() => setSum("")}
                onChange={(e: any) => {
                  const s = +e.target.value.replace(
                    /[^a-zA-Z0-9]/g,
                    ""
                  );
                  if (s > 5000000) setSum("5000000");
                  else setSum(s.toString());
                }}
                className={classes.input}
              />
              <BccSlider
                style={{
                  left: 6,
                  right: 6,
                  width: "calc(100% - 12px)",
                  bottom: -1,
                  padding: 0,
                  position: "absolute",
                }}
                min={0}
                max={30000000}
                step={10000}
                value={+sum}
                valueLabelDisplay="off"
                defaultValue={+sum}
                onChange={(e: any, val: any) =>
                  setSum(val instanceof Array ? val[1] : val)
                }
              />
              <div className={classes.sliderRange}>
                <span>0</span>
                <span>30 000 000</span>
              </div>
            </div>
          </div>
          <div className={classes.paymentWrap}>
            <div className={classes.sliderWrap}>
              <BccInput
                label={t("lks.4period")}
                key="period"
                value={`${period}${
                  period !== "" ? " д." : ""
                }`}
                onFocus={() => setPeriod("")}
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e: any) => {
                  const s = e.target.value.replace(
                    /[^0-9]/g,
                    ""
                  );
                  if (s > 30) setPeriod('30');
                  else setPeriod(s);
                }}
                className={classes.input}
              />
              <BccSlider
                style={{
                  left: 6,
                  right: 6,
                  width: "calc(100% - 12px)",
                  bottom: -1,
                  padding: 0,
                  position: "absolute",
                }}
                min={0}
                max={30}
                step={1}
                value={period}
                valueLabelDisplay="off"
                defaultValue={period}
                onChange={(e: any, val: any) =>
                  setPeriod(val instanceof Array ? val[1] : val)
                }
              />
              <div className={classes.sliderRange}>
                <span>0</span>
                <span>30</span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" className={classes.cardsText}>
            <Grid item>
              <BccTypography type="p4">{t("lks.4percent")}</BccTypography>
              <BccTypography type="p4" weight="medium">
                22%
              </BccTypography>
            </Grid>
            <Grid item>
              <BccTypography type="p4">{t("lks.4comission")}</BccTypography>
              <BccTypography type="p4" weight="medium">
                0.5%
              </BccTypography>
            </Grid>
            <Grid item>
              <BccTypography type="p4">{t("lks.4total")}</BccTypography>
              <BccTypography
                block
                align="right"
                mt="6px"
                type="p3"
                weight="medium"
                className="total"
              >
                {Math.round(+sum + ((+sum * 0.22) / 365) * +period + +sum * 0.005)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸
              </BccTypography>
            </Grid>
            <Grid item>
              <BccTypography type="p4" block>
                {t("lks.4other")}
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Calulator;
