import React from "react";
import { Grid, MenuItem, Snackbar } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccRadio,
  BccRadioGroup,
  BccButton,
  BccFormControl,
  BccFormControlLabel,
  BccLink,
} from "./BccComponents";
import api from "../api/Api";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import InputMask from "react-input-mask";
import BlockUi from "react-block-ui";
import { Alert as MuiAlert } from "@material-ui/lab";
import { useTranslation } from "react-i18next";
import { GrowingBusinessBaseModel } from "../api/Model";
const webConfigEnv = (window as any).env;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px",
      },
      title: {
        marginBottom: 40,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },

      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "100%",
        marginBottom: 30,
      },

      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "100%",
        textAlign: "left",
        background: "#FFFFFF",
        border: "1px solid #B9B9B9",
        borderRadius: 8,
      },
      innerOrderForm: {
        padding: "30px 20px",
      },
      titleForm: {
        marginBottom: 20,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "19px",
        color: "#141414",
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
      },
      checkboxText: {
        alignItems: "flex-start",
        marginBottom: 20,
        marginTop: 15,
      },
      btnWrap: {
        width: "100%",
        "& > button": { width: "100%", marginBottom: 15 },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left", marginBottom: 16 },
    },
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 100px",
      },
      title: {
        marginBottom: 40,
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "50%",
        maxWidth: "50%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 20,
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
      },
      checkboxText: {
        marginBottom: 20,
        marginTop: 15,
        "& > div:last-child": {
          marginLeft: 20,
          textAlign: "left",
        },
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left" },
      radio: {
        marginBottom: 30,
      },
    },
    timer: {
      fontSize: 16,
      color: "#4D565F",
    },
    sumInput: {
      "& > div": {
        borderColor: "#f44336!important",
      },
      "& > p": {
        position: "absolute",
        bottom: -40,
        color: "#f44336",
      },
    },
    linkReSendSms: {
      color: "#3F0259",
      fontSize: 16,
      height: "auto",
      padding: 0,
      lineHeight: "initial",
      cursor: "pointer",
      textTransform: "none",
      "&:hover, &:active": {
        textDecoration: "underline",
        opacity: 0.8,
      },
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
    code: {
      margin: 0,
      "& input": {
        height: 62,
        boxSizing: "border-box",
      },
    },
    paymentWrap: {
      position: "relative",
      marginBottom: 40,
    },
    sliderWrap: {
      position: "relative",
      width: "100%",
    },
    input: {
      display: "block",
      width: "100%",
      "& > div": {
        width: "inherit",
      },
    },
    okBtn: {
      minWidth: 160,
    },
  })
);


const cityList = [
  "Нур-Султан",
  "Алматы",
  "Шымкент",
  "Актау",
  "Актобе",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Костанай",
  "Кызылорда",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Уральск",
  "Усть-Каменогорск",
];
const cityListKz = [
  "Нұр-Сұлтан",
  "Алматы",
  "Шымкент",
  "Ақтау",
  "Ақтөбе",
  "Атырау",
  "Жезқазған",
  "Қарағанды",
  "Көкшетау",
  "Қостанай",
  "Қызылорда",
  "Павлодар",
  "Петропавл",
  "Семей",
  "Талдықорған",
  "Тараз",
  "Орал",
  "Өскемен",
];

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}
const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(999) 999 99 99"
      placeholder={"+7(707) 707 77 77"}
    />
  );
};

const Order = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();
  const [fio, setFio] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [iin, setIin] = React.useState("");
  const [city, setCity] = React.useState("");
  const [type, setType] = React.useState("0");
  const [isLoading, setLoading] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [fioError, setFioError] = React.useState<boolean>(false);
  const [iinError, setIinError] = React.useState<boolean>(false);
  const [openError, setOpenError] = React.useState(false);
  const [agree, setAgree] = React.useState<boolean>(true);
  const [account, setAccount] = React.useState<boolean>(false);
  const [code, setCode] = React.useState("");
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  const formatPhoneNumber = () => {
    let res = phone;
    if (phone.slice(0, 1) === "8") res = "+7" + phone.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const isValid = () => {
    if (step === 0) {
      return (
        fio !== "" &&
        city !== "" &&
        city !== "" &&
        iin.replace(/ /g, "").length === 12 &&
        phone.replace("_", "").length === 17 &&
        agree
      );
    } else if (step === 1) return code.length === 6;
    else return true;
  };

  const handleClose = () => {
    setOpenError(false);
  };

  function getUrlParameter(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const startProcess = () => {
    api.camunda
      .start({
        env: {
          production: webConfigEnv.PRODUCTION === "1",
        },
        ...new GrowingBusinessBaseModel(),
        requestInfo: {
          type,
          fio: fio,
          iin: iin,
          phone: formatPhoneNumber(),
          lang: i18n.language,
          city: city,
          utm_source: getUrlParameter("utm_source"),
          utm_medium: getUrlParameter("utm_medium"),
          utm_campaign: getUrlParameter("utm_campaign"),
          utm_term: getUrlParameter("utm_term"),
          utm_content: getUrlParameter("utm_content"),
          utm_keyword: getUrlParameter("utm_keyword"),
        },
      })
      .then((userContext) => {
        setStep(2);
        props.scrollToOrder(false);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const validate = () => {
    let temp = false;

    if (fio.length < 5) {
      setFioError(true);
      temp = true;
    } else setFioError(false);

    if (iin.length === 12) {
      setIinError(false);
    } else {
      temp = true;
      setIinError(true);
    }

    if (phone.length !== 17 || phone.substr(3, 1) !== "7") {
      setPhoneError(true);
      temp = true;
    } else setPhoneError(false);

    return temp ? false : true;
  };

  const getOtp = () => {
    if (!validate()) return;
    setLoading(true);
    setTimer(90);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        localStorage.removeItem("userContext");
        setStep(1);
        props.scrollToOrder(false);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        props.scrollToOrder(false);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onSubmitOtp = () => {
    setLoading(true);
    api.authOtp
      .confirmOtp({
        iin: iin,
        phone: formatPhoneNumber(),
        otp: code,
      })
      .then((userContext) => {
        props.scrollToOrder(false);
        localStorage.setItem("userContext", JSON.stringify(userContext));
        startProcess();
      })
      .catch((e: any) => {
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onReSend = () => {
    setLoading(true);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        props.scrollToOrder(false);
        setTimer(90);
        setCode("");
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        props.scrollToOrder(false);
        setOpenError(true);
        setLoading(false);
      });
  };

  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={openError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            {t('order.errorAlert')}
          </Alert>
        </Snackbar>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <BlockUi tag="div" blocking={isLoading}>
              {step === 0 ? (
                <>
                  <Grid item>
                    <BccTypography
                      type="h2"
                      weight="medium"
                      block
                      className={classes.titleForm}
                    >
                      {t('order.title')}
                    </BccTypography>
                    <BccTypography
                      type="p1"
                      weight="medium"
                      block
                      className={classes.subTitleForm}
                    >
                    {t('order.subtitle')}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccFormControl className={classes.radio}>
                      <BccRadioGroup
                        value={type}
                        row
                        onChange={(e: any) => {
                          setType(e.target.value);
                        }}
                      >
                        <BccFormControlLabel
                          value="0"
                          control={<BccRadio disableRipple />}
                          label={t("order.ip")}
                          labelPlacement="end"
                        />
                        <BccFormControlLabel
                          value="1"
                          control={<BccRadio disableRipple />}
                          label={t("order.ul")}
                          labelPlacement="end"
                        />
                      </BccRadioGroup>
                    </BccFormControl>
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label={
                        type === "1"
                          ? `${t("order.fioUl")}*`
                          : `${t("order.fioIp")}*`
                      }
                      variant="filled"
                      id="fio"
                      name="fio"
                      helperText={fioError ? t("order.error") : ""}
                      error={fioError ? true : false}
                      value={fio}
                      onChange={(e: any) => {
                        setFio(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      variant="filled"
                      fullWidth
                      label={t("order.phone") + "*"}
                      onChange={(e: any) => {
                        setPhone(e.target.value);
                        phoneError && validate();
                      }}
                      className={classes.inputStyle}
                      id="phone"
                      name="phone"
                      value={phone}
                      helperText={phoneError ? t("order.phone_error") : ""}
                      error={phoneError ? true : false}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedInput as any,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={
                        type === "1"
                          ? `${t("order.bin")}*`
                          : `${t("order.iin")}*`
                      }
                      id="iin"
                      name="iin"
                      helperText={
                        iinError && type === "1"
                          ? `${t("order.error1")} ${t("order.bin")}`
                          : iinError
                          ? `${t("order.error1")} ${t("order.iin")}`
                          : ""
                      }
                      error={iinError ? true : false}
                      value={iin}
                      onChange={(e: any) => {
                        setIin(e.target.value.replace(/\D/g, "").substr(0, 12));
                      }}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={t("order.city") + "*"}
                      id="city"
                      name="city"
                      value={city}
                      onChange={(e: any) => setCity(e.target.value)}
                      variant="outlined"
                      select
                    >
                      
                      {props.lang === "ru"
                        ? cityList.map((b: any, index: number) => {
                            return (
                              <MenuItem key={index} value={b}>
                                {b}
                              </MenuItem>
                            );
                          })
                        : cityListKz.map((b: any, index: number) => {
                            return (
                              <MenuItem key={index} value={b}>
                                {b}
                              </MenuItem>
                            );
                          })}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="flex-start"
                      wrap="nowrap"
                      className={classes.checkboxText}
                    >
                      <Grid item>
                        <BccCheckbox
                          value="remember"
                          color="primary"
                          checked={account}
                          onChange={() => setAccount(!account)}
                        />
                      </Grid>
                      <Grid item>
                        <BccTypography type="p3">
                        {t('order.account')}
                        </BccTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="flex-start"
                      wrap="nowrap"
                      className={classes.checkboxText}
                    >
                      <Grid item>
                        <BccCheckbox
                          value="remember"
                          color="primary"
                          checked={agree}
                          onChange={() => setAgree(!agree)}
                        />
                      </Grid>
                      <Grid item>
                        <BccTypography type="p3">
                          {t("order.agree")}{" "}
                          <BccLink
                            href={`http://bcc.kz/consent_${
                              props.lang === "ru"
                                ? "rus"
                                : props.lang === "kz"
                                ? "kaz"
                                : "eng"
                            }.pdf`}
                            target="_blank"
                          >
                            {t("order.agree1")}
                          </BccLink>
                          {t("order.agree2")}
                        </BccTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between">
                      <Grid item className={classes.btnWrap}>
                        <Grid container spacing={2}>
                          <Grid item>
                            <img
                              src={process.env.PUBLIC_URL + "/safety.svg"}
                              className={classes.icon}
                              alt="order_security"
                            />
                          </Grid>
                          <Grid
                            item
                            xl={true}
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                          >
                            <BccTypography type="p3" className={classes.garant}>
                              {t("order.safety")}
                            </BccTypography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.btnWrap}>
                        <BccButton
                          variant="contained"
                          disabled={!isValid()}
                          onClick={() => getOtp()}
                          color="primary"
                        >
                          {t("order.send")}
                        </BccButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : step === 1 ? (
                <>
                  <Grid item>
                    <BccTypography
                      type="h2"
                      weight="medium"
                      block
                      className={classes.titleForm}
                    >
                      {t('order.title')}
                    </BccTypography>
                    <BccTypography
                      type="p1"
                      weight="medium"
                      block
                      className={classes.subTitleForm}
                    >
                      {t('order.subtitle2')}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      style={{ marginTop: "15px", alignItems: "center" }}
                      spacing={4}
                    >
                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <BccInput
                          variant="outlined"
                          className={classes.code}
                          margin="normal"
                          fullWidth
                          id="code"
                          name="code"
                          value={code}
                          onChange={(e: any) =>
                            setCode(
                              e.target.value.replace(/\D/g, "").substr(0, 6)
                            )
                          }
                          label={t("order.code")}
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <BccButton
                          onClick={() => onSubmitOtp()}
                          variant="contained"
                          className={classes.submit}
                          disabled={!isValid()}
                        >
                          {t('order.send1')}
                        </BccButton>
                      </Grid>
                      {timer !== 0 ? (
                        <Grid item>
                          <BccTypography type="p3" className={classes.timer}>
                            {t("order.sendAfter")} ({timer})
                          </BccTypography>
                        </Grid>
                      ) : (
                        <Grid item>
                          <BccButton
                            variant="text"
                            className={classes.linkReSendSms}
                            onClick={() => onReSend()}
                          >
                            {t("order.sendAgain")}
                          </BccButton>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Grid item>
                  <div className={classes.successForm}>
                    <img src={process.env.PUBLIC_URL + "success.svg"} alt="" />
                    <BccTypography block mb="16px" type="h5">
                      {t("order.succesTitle")}
                    </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        {t("order.succesText")}
                      </BccTypography>
                  </div>
                </Grid>
              )}
            </BlockUi>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
