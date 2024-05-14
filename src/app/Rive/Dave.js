// import Rive from '@rive-app/react-canvas';

// export default function Dave(){
//     return <Rive
//       src="/public/jonny_-_version.riv"
//       stateMachines="waving"
//       autoplay={true}
//     />

// }
import { useRive, rive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
export default function Dave() {

  const layout = new Layout({
    fit: Fit.FitHeight,
    alignment: Alignment.BottomLeft,
  });

  const { RiveComponent } = useRive({
    src: '/jonny_-_version.riv',
    stateMachines: "waving",
    autoplay: true,
    layout: layout
  });

  return <RiveComponent />;
}