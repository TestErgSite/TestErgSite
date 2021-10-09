import "./Methodology.scss";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { hidePopupAsync, hidePopupDemoAsync } from "../redux/actions";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Annotation } from "../annotation/Annotation";
import { PopupDemo } from "../PopupDemo/PopupDemo";
import { Popup } from "../Popup/Popup";

export const Methodology = () => {
  const { t } = useTranslation();

  const DefaultMethodology = useMediaQuery({ query: "(min-width: 429px)" });
  const MobileMethodology = useMediaQuery({ query: "(max-width: 428px)" });

  const isActive = useSelector((state) => state.isActive);
  const dispatch = useDispatch();
  const demo = useSelector((state) => state.demo);

  const clickHandler = (e) => {
    console.log(e.target);
  };

  const [activeColor, setActiveColor]= useState({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
  })

  return (
    <>
      <Header />
      {MobileMethodology && (
        <div className="methodology-mobile">
          <div
            className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupAsync())}
          ></div>
          {isActive === "visible" || "animate" ? <Popup /> : null}

          <div
            className={`opacity ${demo !== "none" ? "overlay" : ""}`}
            onClick={() => dispatch(hidePopupDemoAsync())}
          ></div>
          {demo === "visible" || "animate" ? <PopupDemo /> : null}

          <div className="methodology-block-1-mobile">
            <div className="principles-mobile">{t("principles")}</div>
            <div className="uniq-mobile">{t("uniq")}</div>
            <div className="platform-foundation-text-mobile">
              <div className="platform-foundation-1">
                {t("platform-foundation-1")}
              </div>
              <div className="platform-foundation-2">
                {t("platform-foundation-2")}
              </div>
              <div className="platform-foundation-3">
                {t("platform-foundation-3")}
              </div>
              <div className="platform-foundation-4">
                {t("platform-foundation-4")}
              </div>
            </div>
            <div className="platform-foundation-img-mobile"></div>
            <div className="focus">
              <Annotation direction="left" text={t("focus")}></Annotation>
            </div>
          </div>

          <div className="methodology-block-2-mobile">
            <div className="layout">
              <div className="methodology-block-2-wrapper">
                <div className="first-time-mobile">{t("first-time")}</div>
                <div className="first-time-text-mobile">
                  <div className="first-time-text-1">
                    {t("first-time-text-1")}
                  </div>
                  <div className="first-time-text-2">
                    {t("first-time-text-2")}
                  </div>
                  <div className="first-time-text-3">
                    {t("first-time-text-3")}
                  </div>
                  <div className="first-time-text-4">
                    {t("first-time-text-4")}
                  </div>
                  <div className="first-time-text-5">
                    {t("first-time-text-5")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="methodology-block-3-mobile">
            <Annotation
              direction="left"
              text={t("methodology-block-3-text")}
            ></Annotation>
          </div>

          <div className="methodology-block-4-mobile">
            <div className="result-mobile">{t("result")}</div>
            <div className="result-text-mobile">{t("result-text")}</div>
          </div>
        </div>
      )}

      {DefaultMethodology && (
        <>
          <div className="methodology">
            <div
              className={`opacity ${isActive !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupAsync())}
            ></div>
            {isActive === "visible" || "animate" ? <Popup /> : null}

            <div
              className={`opacity ${demo !== "none" ? "overlay" : ""}`}
              onClick={() => dispatch(hidePopupDemoAsync())}
            ></div>
            {demo === "visible" || "animate" ? <PopupDemo /> : null}

            <div className="methodology-block-1">
              <div className="principles">{t("principles")}</div>
              <div className="uniq">{t("uniq")}</div>
              <div className="platform-foundation-wrapper">
                <div className="platform-foundation-text">
                  <div className="platform-foundation-1">
                    {t("platform-foundation-1")}
                  </div>
                  <div className="platform-foundation-2">
                    {t("platform-foundation-2")}
                  </div>
                  <div className="platform-foundation-3">
                    {t("platform-foundation-3")}
                  </div>
                  <div className="platform-foundation-4">
                    {t("platform-foundation-4")}
                  </div>
                </div>
                <div className="platform-foundation-img"></div>
              </div>
              <div className="focus">
                <Annotation direction="left" text={t("focus")}></Annotation>
              </div>
            </div>

            <div className="methodology-block-2">
              <div className="layout">
                <div className="methodology-block-2-wrapper">
                  <div className="first-time">{t("first-time")}</div>
                  <div className="first-time-text">
                    <div className="first-time-text-1">
                      {t("first-time-text-1")}
                    </div>
                    <div className="first-time-text-2">
                      {t("first-time-text-2")}
                    </div>
                    <div className="first-time-text-3">
                      {t("first-time-text-3")}
                    </div>
                    <div className="first-time-text-4">
                      {t("first-time-text-4")}
                    </div>
                    <div className="first-time-text-5">
                      {t("first-time-text-5")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="methodology-block-3">
              <Annotation
                direction="left"
                text={t("methodology-block-3-text")}
              ></Annotation>
            </div>

            <div className="methodology-block-4">
              <div className="result">{t("result")}</div>
              <div className="result-text">{t("result-text")}</div>
            </div>

            <div className="methodology-block-5">
              <svg
                onClick={(e) => clickHandler(e)}
                className="methodology-block-5-enn"
                width="351"
                height="359"
                viewBox="0 0 351 359"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.9795 84.4301L52.221 97.8325C68.7682 69.3643 94.8976 47.1948 126.235 35.6981L117.036 10.4395C79.7952 24.1702 48.7008 50.5761 28.9795 84.4301Z"
                  fill="#DB2B1E"
                />
                <path
                  d="M28.4786 85.2957C14.1773 110.182 6 139.039 6 169.814C6 179.618 6.82987 189.227 8.42321 198.575L35.0644 193.858C33.707 185.94 33 177.797 33 169.484C33 143.696 39.8047 119.537 51.7214 98.6988L28.4786 85.2957Z"
                  fill="#6694D1"
                />
                <path
                  d="M65.8739 299.262C36.4038 274.211 15.6043 239.271 8.59424 199.56L35.237 194.843C41.1901 228.16 58.6729 257.417 83.4305 278.356L65.8739 299.262Z"
                  fill="#6F619A"
                />
                <path
                  d="M66.6377 299.907C95.9596 324.537 133.736 339.432 175 339.626V312.125C158.589 312.033 142.838 309.168 128.193 303.973C111.978 298.293 97.1144 289.771 84.1963 278.999L66.6377 299.907Z"
                  fill="#1C5F93"
                />
                <path
                  d="M176 312.127V339.627C217.336 339.583 255.203 324.786 284.621 300.216L266.936 279.156C242.298 299.707 210.601 312.083 176 312.127Z"
                  fill="#0BA45D"
                />
                <path
                  d="M267.701 278.513L285.387 299.572C315.024 274.523 335.956 239.499 343.014 199.668L315.931 194.873C310.014 228.213 292.499 257.532 267.701 278.513Z"
                  fill="#667D35"
                />
                <path
                  d="M316.102 193.887L343.186 198.683C344.791 189.301 345.627 179.655 345.627 169.814C345.627 138.927 337.39 109.971 322.992 85.0237L299.255 98.7121C303.503 106.142 307.101 113.994 309.972 122.191C315.253 137.079 318.127 153.109 318.127 169.814C318.127 178.02 317.434 186.063 316.102 193.887Z"
                  fill="#B7CF32"
                />
                <path className="kek"
                  d="M322.49 84.1591L298.755 97.8458C282.213 69.3793 256.091 47.2091 224.76 35.7078L234.038 10.2361C271.424 23.8721 302.663 50.2675 322.49 84.1591Z"
                  fill="#F1A018"
                />
                <path
                  d="M117.975 10.0962L127.175 35.3568C142.251 29.9464 158.515 27 175.484 27C192.463 27 208.737 29.9499 223.821 35.3665L233.097 9.89617C215.203 3.48952 195.917 0 175.814 0C155.502 0 136.025 3.56218 117.975 10.0962Z"
                  fill="#9B4933"
                />
                <path
                  d="M173 44L64.5 239H286.5L173 44Z"
                  stroke="#E2E2E2"
                  stroke-width="0.904167"
                />
                <path
                  d="M133 292.5L45 147.5L253.5 67L213.5 292.5L299.5 147.5L92 67L133 292.5Z"
                  stroke="#E2E2E2"
                  stroke-width="0.904167"
                />
                <path
                  d="M174.36 21.264C178.992 21.264 181.416 17.616 181.416 13.008C181.416 8.544 179.52 4.728 174.816 4.728C171.24 4.728 168.912 7.152 168.912 10.104C168.912 13.512 171.408 15.288 174.288 15.288C176.16 15.288 177.84 14.112 178.584 13.032C178.584 13.2 178.584 13.344 178.584 13.512C178.584 16.128 177.264 18.768 174.36 18.768C172.848 18.768 171.912 18.24 171.072 17.376L169.776 19.488C170.856 20.568 172.392 21.264 174.36 21.264ZM175.032 12.864C173.304 12.864 171.768 11.976 171.768 10.008C171.768 8.736 172.872 7.224 174.96 7.224C177.432 7.224 178.392 9.264 178.536 10.992C177.744 12.144 176.4 12.864 175.032 12.864Z"
                  fill="white"
                />
                <path
                  d="M271.147 55.9528L280.918 43.2729L278.979 41.7787L272.487 42.654L272.74 44.9999L276.467 44.4485L268.923 54.2388L271.147 55.9528Z"
                  fill="white"
                />
                <path
                  d="M322.35 148.819L324.775 148.339L323.396 141.37C327.408 144.956 330.524 147.104 333.42 146.531C336.551 145.911 337.744 142.911 337.143 139.873C336.71 137.684 335.424 135.639 333.478 134.58L331.982 136.54C333.307 137.305 334.34 138.569 334.704 140.405C334.988 141.841 334.514 143.403 332.866 143.729C330.606 144.176 328.087 142.204 322.266 137.019L320.1 137.447L322.35 148.819Z"
                  fill="white"
                />
                <path
                  d="M302.241 245.875C300.643 249.207 301.39 252.147 303.835 253.319C306.064 254.388 308.145 252.99 308.949 251.646C308.493 253.264 308.83 255.448 310.756 256.371C313.18 257.533 315.658 256.14 317.152 253.023C318.304 250.621 318.17 248.401 317.401 246.675L315.199 247.216C315.739 248.753 315.721 250.234 315.016 251.706C314.237 253.329 312.922 254.296 311.581 253.652C310.26 253.02 310.288 251.463 311.097 249.775C311.367 249.212 311.772 248.368 311.918 248.118L309.646 247.029C309.564 247.256 309.159 248.1 308.868 248.706C307.883 250.762 306.727 251.618 305.299 250.934C303.957 250.29 303.62 248.772 304.533 246.867C305.27 245.331 306.677 244.116 308.206 243.704L307.193 241.542C305.428 241.893 303.476 243.299 302.241 245.875Z"
                  fill="white"
                />
                <path
                  d="M224.238 309.564L225.557 312.94L223.567 313.717L224.467 316.02L226.457 315.242L230.064 324.474L233.663 323.068L236.102 311.241L235.281 309.14L228.172 311.918L226.853 308.542L224.238 309.564ZM229.072 314.22L233.61 312.447L231.763 321.105L229.072 314.22Z"
                  fill="white"
                />
                <path
                  d="M122.258 308.048C118.925 306.752 115.82 307.785 114.611 310.894C113.428 313.936 115 316.581 117.505 317.556C118.937 318.112 120.393 318.009 121.387 317.572L119.708 321.889L112.551 319.105L111.655 321.409L121.43 325.21L124.674 316.867L123.026 315.608C121.739 316.138 120.531 316.132 119.256 315.636C117.422 314.922 116.667 313.419 117.294 311.808C117.859 310.354 119.497 309.652 121.376 310.383C123.053 311.035 124.152 312.183 124.715 313.716L126.91 312.509C126.258 310.608 124.83 309.048 122.258 308.048Z"
                  fill="white"
                />
                <path
                  d="M48.9247 243.8C47.2086 240.662 43.9858 239.772 41.3749 241.2C38.3849 242.835 38.0342 245.845 39.4162 248.372C40.3261 250.035 42.143 250.956 43.436 251.069C43.3212 251.16 43.1949 251.229 43.0475 251.309C40.584 252.657 37.6666 252.475 36.3881 250.137C35.651 248.79 35.6766 247.736 36.0526 246.573L33.5451 246.44C33.137 247.894 33.2424 249.587 34.1983 251.335C36.4212 255.399 40.7849 255.775 44.8487 253.552C48.7441 251.421 51.1821 247.927 48.9247 243.8ZM46.804 245.124C47.9902 247.293 46.6707 249.081 45.2353 250.058C43.8331 249.895 42.5469 249.094 41.8904 247.894C41.0496 246.357 41.0916 244.583 42.8182 243.638C43.9552 243.016 45.7904 243.271 46.804 245.124Z"
                  fill="white"
                />
                <path
                  d="M30.713 143.834L17.9827 135.21L16.0698 134.863L14.0115 146.222L16.4439 146.663L17.9245 138.492L30.1653 146.857L30.713 143.834Z"
                  fill="white"
                />
                <path
                  d="M82.1996 56.2948C84.7479 54.2553 86.0179 51.2714 84.2332 49.0417C82.9585 47.449 80.7508 47.3408 78.8281 48.0496C79.8735 46.4752 80.3566 44.5822 79.0819 42.9895C77.2373 40.6848 74.059 41.6301 71.8667 43.3847C69.637 45.1693 68.0559 48.0333 69.9005 50.338C71.1752 51.9307 73.1093 51.889 74.8745 51.214C73.7617 52.9346 73.3836 55.1124 74.6584 56.7051C76.458 58.9536 79.6326 58.3494 82.1996 56.2948ZM76.1709 48.7624C75.2976 49.2461 73.3263 50.0861 72.3815 48.9057C71.5417 47.8564 72.0586 46.4282 73.4264 45.3334C74.7568 44.2686 76.2822 44.0621 77.1221 45.1114C78.0669 46.2919 76.8341 48.0163 76.1709 48.7624ZM80.6399 54.3461C79.2159 55.4859 77.5143 55.7412 76.6444 54.6544C75.6097 53.3615 76.9436 51.3409 77.6555 50.6174C78.4988 50.0962 80.7625 49.2374 81.7973 50.5303C82.6671 51.617 82.0265 53.2364 80.6399 54.3461Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};
