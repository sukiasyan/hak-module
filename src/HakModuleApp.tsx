import { JSX } from 'react/jsx-runtime';
import './index.css'
import {HakModule} from "./Views/HakModule.tsx";


export function HakModuleApp(props: JSX.IntrinsicAttributes) {
  return <HakModule {...props} />;
}