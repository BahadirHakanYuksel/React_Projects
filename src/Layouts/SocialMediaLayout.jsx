import "../Css_Files/2-Social-Media.css";
import { Provider, useSelector } from "react-redux";
import { socialMediaStore } from "../Projects/2-Social-Media/socialMediaStore";
import SocialMediaApp from "../Projects/2-Social-Media/SocialMediaApp";

export default function SocialMediaLayout() {
  return (
    <Provider store={socialMediaStore}>
      <SocialMediaApp />
    </Provider>
  );
}
