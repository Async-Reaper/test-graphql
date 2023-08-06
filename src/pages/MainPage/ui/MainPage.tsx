import {NavigateLinks} from "@features/NavigateLinks";
import cls from "./MainPage.module.scss";

const MainPage = () => {

   return (
      <div className={cls.main_page__wrapper}>
         <NavigateLinks />
      </div>
   );
};

export default MainPage;
