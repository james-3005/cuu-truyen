import React, { useEffect, useState } from "react";
import { Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.less";
import gitIcon from "@/assets/github.svg";
import { useAuth0 } from "@auth0/auth0-react";
// import { getData, storeData } from "@/utils/helper/token";
import logo from "@/assets/app-logo.svg";
import bg1 from "@/assets/bg-1.png";
import bg2 from "@/assets/bg-2.png";
import bg3 from "@/assets/bg-3.png";
// import { LOGIN_BANNERS } from "@/constants/common";
// import { LgText, LgTextBold } from "@/components/base/BaseText";
// import { FlexStart } from "@/components/base/BaseFlex";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = 'getData("token")';
  const { getAccessTokenSilently, user, loginWithRedirect, isLoading } =
    useAuth0();

  useEffect(() => {
    if (token) {
      navigate("/setting");
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      (async () => {
        const accessToken = await getAccessTokenSilently();
        // storeData("token", accessToken);
        // storeData("user", JSON.stringify(user));
        notification.success({ message: "login success" });
        navigate("/setting");
      })();
    }
  }, [user]);

  const handleLogin = async () => {
    setLoading(true);
    await loginWithRedirect();
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />
      <img src={bg1} alt="" className={styles.bg1} />
      <img src={bg2} alt="" className={styles.bg2} />
      <div className={styles.blurBg}>
        <div className={styles.blurContent} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.titleHeader}>
          <img className={styles.bg3} alt="" src={bg3} />
          <div className={styles.title}>
            <p className={styles.heading}>Let's build from here</p>
            <p>
              The Unified DevOps platform to deliver and monitor your software.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.feature}>
            {/* {LOGIN_BANNERS.map((item) => (
              <FlexStart
                gap={10}
                className={styles.singleFeature}
                key={item.title}
              >
                <div className={styles.featureIcon}>{item.icon}</div>
                <div>
                  <LgTextBold>{item.title}</LgTextBold>
                  <LgText>{item.content}</LgText>
                </div>
              </FlexStart>
            ))} */}
          </div>
          <div className={styles.cardContent}>
            <div className={styles.sign}>
              <Button
                loading={loading || isLoading}
                onClick={handleLogin}
                type="text"
              >
                <img src={gitIcon} alt="icon" />
                Sign in with Github
              </Button>
            </div>
            <p className={styles.signNote}>
              By clicking “Sign In”, you agree to the
              <span className={styles.privacy}> Privacy Policy </span>
              and Terms of Service
            </p>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Version 1.0 ©2022 Beehive.com . All Rights Reserved
      </p>
    </div>
  );
};

export default React.memo(Login);
