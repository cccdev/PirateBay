import React from 'react';
import ReactDOM from 'react-dom/client';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Button>Default</Button>
    <Button disabled={true}>Disabled Button</Button>
    <Button size={ButtonSize.Small}>Small Button</Button>
    <Button size={ButtonSize.Large}>Large Button</Button>
    <Button btnType={ButtonType.Primary}>Primary</Button>
    <Button btnType={ButtonType.Danger}>Danger</Button>
    <Button btnType={ButtonType.Link} href="www.baidu.com">baidu</Button>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
