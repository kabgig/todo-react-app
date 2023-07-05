import FirstComponent from './FirstComponent';
import FourthComponent from './FourthComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import {FifthComponent} from './FirstComponent';
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponents() {
    return (
      <div className="LearningComponents">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthComponent/>
        <LearningJavaScript/>
      </div>
    );
  }