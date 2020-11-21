import React from "react";
import I18n from "../translations/i18n";
import Livestream from "../constants/livestream";
import DigitalWallet from "../constants/digitalWallet";
import FF from "../api/featureFlag";
import { CommentInput } from "../components/Comments";
import { getGuestBook, postComment } from "../api/firebase/guestBookService";
import CommentList from "../components/CommentsList";

export default function Screen__LandingPage() {
  const styles = {
    main: `flex flex-col pt-10 items-center px-3 md:px-0`,
    mainHeadingIntro: `font-source-serif text-lg`,
    mainHeading: `font-source-serif font-bold text-xl lg:text-3xl`,
    sectionVideoContainer: `
      w-full p-4 h-1/2
      shadow-xl my-3 bg-white 
      md:w-2/3 md:p-5
      hover:opacity-75 hover:w-3/4 
      cursor-pointer transition ease-in-out duration-300
      justify-center items-center
max-w-4xl
    `,
    sectionGuestAction: `
      w-full md:w-2/3  max-w-4xl
      flex flex-col items-center md:flex-row md:justify-between md:items-start 
      border-t-2 border-gray-300 
      mt-4 pt-4 md:mt-5 md:pt-5 md:px-5 mb-10
    `,
    gopayContainer: `flex flex-col w-3/4 md:w-1/4 items-center justify-center mb-3 pr-3`,
    qrCodeText: `p-2 bg-gray-300 text-sm rounded-lg mt-2`,
    guestInputContainer: `flex flex-col w-3/4 p-3 border rounded`,
    textInputGuestName: `appearance-none border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none font-source-serif mb-2`,
    textInputComment: `appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none font-source-serif`,
    button: (isDisabled = true) => {
      const disabledStyle = `cursor-not-allowed bg-gray-300`;
      const enabledStyle = `cursor-pointer bg-primary-yellow`;

      return `
        hover:opacity-75 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4 font-source-serif 
        ${isDisabled ? disabledStyle : enabledStyle}
      `;
    },
  };

  // TODO: Change this value
  const isDisabledButton = true;

  const onSendComment = ({ guestName, comment }) => {
    postComment({ guestName, comment });
    fetchGuestBook();
  };

  const fetchGuestBook = async () => {
    getGuestBook().then((res) => {
      setGuestComment(res);
    });
  };

  const [guestComment, setGuestComment] = React.useState([]);

  React.useEffect(() => {
    const fetchGuestBook = async () => {
      getGuestBook().then((res) => {
        setGuestComment(res);
      });
    };

    fetchGuestBook();
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={styles.mainHeadingIntro}>{I18n["headingIntro"]}</h2>
      <h1 className={styles.mainHeading}>{I18n["heading"]}</h1>

      <section
        aria-label="video-container"
        className={styles.sectionVideoContainer}
      >
        <iframe
          height={"400"}
          src={Livestream.youtube}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-full"
        />
      </section>

      <section
        aria-label="section-guest-action"
        className={styles.sectionGuestAction}
      >
        {FF.hasGopay && (
          <div className={styles.gopayContainer}>
            <img
              aria-label="gopay-image"
              className="self-center w-3/4"
              src={require("../assets/gopay.jpeg")}
              alt="gopay"
            />
            <p className={styles.qrCodeText}>
              Scan QR Code ini jika kamu ingin memberi amplop digital 🙂
            </p>
          </div>
        )}
        {FF.hasCommentSection && (
          <div className="flex flex-col w-3/4">
            <CommentInput onSendComment={onSendComment} />

            <CommentList comments={guestComment} />
          </div>
        )}
      </section>
    </main>
  );
}
