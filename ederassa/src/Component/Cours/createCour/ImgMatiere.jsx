import pathArabe from "../../../assets/image/saudiAribia.png"
import pathDefault from "../../../assets/image/backbag.png"
import pathFran from "../../../assets/image/Francais.png"
import pathAng from "../../../assets/image/Anglais.png"
import pathTamzi from "../../../assets/image/Tamazight.png"
import pathSport from "../../../assets/image/Sport.png"
import pathInfos from "../../../assets/image/Infos.png"
import pathSenc from "../../../assets/image/Science.png"
import pathMath from "../../../assets/image/Math.png"
import pathIsl from "../../../assets/image/Islamique.png"
import pathPhisc from "../../../assets/image/physic.png"
import pathHistory from "../../../assets/image/History.png"
import pathEarth from "../../../assets/image/earth.png"
import pathTechno from "../../../assets/image/Technol.png"
import pathMec from "../../../assets/image/Mecanique.png"
import pathPhil from "../../../assets/image/philosophie.png"
import pathEsp from "../../../assets/image/Espain.png"
import pathItal from "../../../assets/image/italy.png"
import pathAml from "../../../assets/image/Almend.png"


const ImageDisplay = ({ imageName }) => {
    let imageSrc;
  
    switch (imageName) {
      case 'Arabe':
        imageSrc = pathArabe;
        break;
    case 'Français':
    imageSrc = pathFran;
    break;
    case 'Anglais':
    imageSrc = pathAng;
    break;
    case 'Tamazight':
      imageSrc = pathTamzi;
      break;
    case 'Education sportive':
      imageSrc = pathSport;
      break;
    case 'Mathématiques':
      imageSrc = pathMath;
      break;
    case 'Science':
      imageSrc = pathSenc;
      break;
    case 'Informatique':
        imageSrc = pathInfos;
        break;
    case 'Education islamique':
        imageSrc = pathIsl;
        break;
    case 'Physique chimie':
        imageSrc = pathPhisc;
        break;
    case 'Technologie':
        imageSrc = pathTechno;
      break;  
    case 'Science de la vie et de la terre':
        imageSrc = pathEarth;
      break;
    case 'Histoire et géographie':
      imageSrc = pathHistory;
      break;
    case "Mécanique":
      imageSrc = pathMec;
      break;
    case "Philosophie":
      imageSrc = pathPhil;
      break;
    case "Italien":
      imageSrc = pathItal;
      break;
    case "Espagnol":
      imageSrc = pathEsp;
      break;
    case "Allemand":
      imageSrc = pathAml;
      break;
      // Add more cases for other image names
      default:
        imageSrc = null;
        break;
    }
  
    return (
      <div>
        {imageSrc ? (
          <img className="h-20" src={imageSrc} alt={imageName} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
    );
  };
  
  export default ImageDisplay;